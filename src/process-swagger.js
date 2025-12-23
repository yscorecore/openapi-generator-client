const fs = require('fs');
const https = require('https');
const path = require('path');

const defaultConfig = {
    swagger: {
        url: './swagger.json',
        originalPath: '__swagger-download.json',
        processedPath: '__swagger-processed.json'
    },
    filter: {
        includePaths: [],
        extractCodeResult: true,
        codeFieldName: 'code',
        messageFieldName: 'message',
        dataFieldName: 'data',
    },
    openapiGenerator: {
        generator: "typescript-axios",
        useDocker: false,
        apiPackage: 'api',
        modelPackage: 'models',
        additionalProperties: 'withSeparateModelsAndApi=true,skipFormModel=true',
        ignoreList: [
            "docs/",
            "git_push.sh",
            "index.ts",
            "api.ts",
            "common.ts",
            "configuration.ts",
            ".gitignore",
            ".npmignore"
        ]
    }
};

// 下载swagger文件或读取本地文件
async function downloadSwagger(url, outputPath, configDir) {
    return new Promise((resolve, reject) => {
        try {
            if (isHttpsOrHttp(url)) {
                // 远程URL，使用https.get下载
                downloadFromRemote();
            } else {
                // 本地文件，直接读取
                const localFilePath = path.resolve(configDir, url);
                const data = fs.readFileSync(localFilePath, 'utf8');
                resolve(JSON.parse(data));
            }
        } catch (error) {
            reject(error);
        }

        function downloadFromRemote() {
            https.get(url, (response) => {
                let data = '';

                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    fs.writeFileSync(outputPath, data, 'utf8');
                    console.log(`Swagger文件已下载到: ${outputPath}`);
                    resolve(JSON.parse(data));
                });

                response.on('error', (error) => {
                    reject(error);
                });
            }).on('error', (error) => {
                reject(error);
            });
        }
    });
    function isHttpsOrHttp(url) {
        return url.startsWith('https://') || url.startsWith('http://');
    }
}

// 过滤路径函数
function filterPaths(paths, includePaths) {
    if (!includePaths || includePaths.length === 0) {
        return paths;
    }

    const filteredPaths = {};

    // 将通配符路径转换为正则表达式
    const pathPatterns = includePaths.map(pattern => {
        // 将 * 转换为正则表达式的 .* 并转义其他特殊字符
        const regexPattern = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
        return new RegExp(`^${regexPattern}$`);
    });

    Object.keys(paths).forEach(path => {
        // 检查路径是否匹配任何一个模式
        if (pathPatterns.some(pattern => pattern.test(path))) {
            filteredPaths[path] = paths[path];
        }
    });

    return filteredPaths;
}

// 收集引用的Schema
function collectReferencedSchemas(swaggerData) {
    const referencedSchemas = new Set();

    // 内部辅助函数：处理Schema引用
    function processSchemaRef(ref) {
        const schemaName = ref.split('/').pop();
        if (schemaName) {
            referencedSchemas.add(schemaName);
            // 如果这个schema还没有被处理过，继续处理它的属性
            const schema = swaggerData.components?.schemas?.[schemaName];
            if (schema) {
                processSchema(schema);
            }
        }
    }

    // 内部辅助函数：递归处理Schema
    function processSchema(schema) {
        if (!schema) return;

        if (schema.$ref) {
            processSchemaRef(schema.$ref);
        } else if (schema.type === 'array' && schema.items) {
            processSchema(schema.items);
        } else if (schema.type === 'object' && schema.properties) {
            Object.values(schema.properties).forEach(processSchema);
        } else if (schema.anyOf) {
            schema.anyOf.forEach(processSchema);
        } else if (schema.oneOf) {
            schema.oneOf.forEach(processSchema);
        } else if (schema.allOf) {
            schema.allOf.forEach(processSchema);
        } else if (schema.type === 'object' && schema.additionalProperties) {
            processSchema(schema.additionalProperties);
        } else if (schema.type === 'object' && schema.patternProperties) {
            Object.values(schema.patternProperties).forEach(processSchema);
        }
    }

    // 遍历所有路径项
    Object.values(swaggerData.paths).forEach(pathItem => {
        // 遍历路径项的所有操作
        Object.values(pathItem).forEach(operation => {
            // 处理参数
            (operation.parameters || []).forEach(param => {
                if (param.schema) {
                    processSchema(param.schema);
                } else if (param.content) {
                    Object.values(param.content).forEach(mediaType => {
                        if (mediaType.schema) {
                            processSchema(mediaType.schema);
                        }
                    });
                }
            });

            // 处理请求体
            if (operation.requestBody?.content) {
                Object.values(operation.requestBody.content).forEach(mediaType => {
                    if (mediaType.schema) {
                        processSchema(mediaType.schema);
                    }
                });
            }

            // 处理响应
            if (operation.responses) {
                Object.values(operation.responses).forEach(response => {
                    if (response.content) {
                        Object.values(response.content).forEach(mediaType => {
                            if (mediaType.schema) {
                                processSchema(mediaType.schema);
                            }
                        });
                    }
                });
            }
        });
    });

    return referencedSchemas;
}

// 过滤swagger路径
function filterSwaggerPaths(swaggerData, includePaths) {
    // 过滤路径
    const filteredPaths = filterPaths(swaggerData.paths, includePaths);

    // 更新swagger数据中的路径
    swaggerData.paths = filteredPaths;

    // 如果没有设置includePaths或者includePaths为空，不需要过滤Schema
    if (!includePaths || includePaths.length === 0) {
        return swaggerData;
    }

    // 如果没有components或schemas，直接返回
    if (!swaggerData.components?.schemas) {
        return swaggerData;
    }

    // 保存原始schemas
    const originalSchemas = { ...swaggerData.components.schemas };

    // 收集引用的Schema
    const referencedSchemas = collectReferencedSchemas(swaggerData);

    // 过滤components.schemas，仅保留引用的Schema
    swaggerData.components.schemas = Object.fromEntries(
        Object.entries(originalSchemas).filter(([name]) =>
            referencedSchemas.has(name)
        )
    );

    return swaggerData;
}

// 处理CodeResult相关类型
function processCodeResult(swaggerData, filterConfig) {
    if (!filterConfig.extractCodeResult) {
        return swaggerData;
    }
    if (!swaggerData.components?.schemas || !swaggerData.paths) {
        return swaggerData;
    }

    const schemas = swaggerData.components.schemas;

    // 内部辅助函数：检查是否是需要处理的CodeResult类型
    function isProcessableCodeResult(schemaName) {
        const schema = schemas[schemaName];
        if (!schema || !schema.properties) return false;

        // 检查schema是否包含配置中指定的code和message字段
        return (schema.properties[filterConfig.codeFieldName] &&
            schema.properties[filterConfig.messageFieldName]);
    }

    // 内部辅助函数：处理单个响应内容的schema引用
    function processResponseContent(content) {
        if (!content.schema || !content.schema.$ref) return;

        const schemaName = content.schema.$ref.split('/').pop();

        if (isProcessableCodeResult(schemaName)) {
            const codeResultSchema = schemas[schemaName];
            if (codeResultSchema?.properties?.data) {
                content.schema = codeResultSchema.properties.data;
            } else {
                delete content.schema;
            }
        }
    }

    // 内部辅助函数：处理单个响应的所有媒体类型
    function processResponse(response) {
        if (!response.content) return;

        Object.values(response.content).forEach(content => {
            processResponseContent(content);
        });
    }

    // 内部辅助函数：处理单个操作的所有响应
    function processOperation(operation) {
        if (!operation.responses) return;

        Object.values(operation.responses).forEach(response => {
            processResponse(response);
        });
    }

    // 内部辅助函数：处理单个路径的所有方法
    function processPath(path) {
        Object.values(path).forEach(operation => {
            processOperation(operation);
        });
    }

    // 内部辅助函数：删除不需要的CodeResult schema定义
    function cleanupCodeResultSchemas() {
        Object.keys(schemas).forEach(schemaName => {
            if (isProcessableCodeResult(schemaName)) {
                const schema = schemas[schemaName];
                if (schema?.properties?.data) {
                    delete schemas[schemaName];
                }
            }
        });
    }

    // 1. 遍历所有路径，将响应中的CodeResult类型替换为实际的数据类型
    Object.values(swaggerData.paths).forEach(path => {
        processPath(path);
    });

    // 2. 删除所有带有data属性的CodeResult相关的schema定义（保留基础的CodeResult）
    cleanupCodeResultSchemas();

    return swaggerData;
}

function getConfig(workDir) {
    const configPath = path.resolve(workDir, './openapiconfig.json');
    let config = {};
    if (fs.existsSync(configPath)) {
        const configData = fs.readFileSync(configPath, 'utf8');
        config = JSON.parse(configData);
    }

    const mergedConfig = {
        swagger: { ...defaultConfig.swagger, ...config.swagger },
        filter: { ...defaultConfig.filter, ...config.filter },
        openapiGenerator: { ...defaultConfig.openapiGenerator, ...config.openapiGenerator }
    };

    // 确保base.ts总是被添加到ignoreList中
    if (!mergedConfig.openapiGenerator.ignoreList) {
        mergedConfig.openapiGenerator.ignoreList = [];
    }
    if (fs.existsSync(path.resolve(workDir, 'base.ts'))) {
        mergedConfig.openapiGenerator.ignoreList.push('base.ts');
    }
    return mergedConfig;
}




function tryDeleteFile(filePath) {
    try {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            fs.unlinkSync(filePath);
            console.log(`成功删除文件: ${filePath}`);
        }
    } catch (err) {
        console.error(`删除文件 ${filePath} 时出错: ${err.message}`);
    }
}
function tryDeleteFolder(folder) {
    try {
        if (fs.existsSync(folder) && fs.statSync(folder).isDirectory()) {
            fs.rmSync(folder, { recursive: true, force: true });
            console.log(`成功删除目录: ${folder}`);
        }
    } catch (err) {
        console.error(`删除目录 ${folder} 时出错: ${err.message}`);
    }
}

// 清空目录函数
function cleanDirectory(directoryPath) {
    try {
        if (fs.existsSync(directoryPath)) {
            // 递归删除目录及其内容
            fs.rmSync(directoryPath, { recursive: true, force: true });
            console.log(`成功清空目录: ${directoryPath}`);
        }
        // 重新创建空目录
        fs.mkdirSync(directoryPath, { recursive: true });
    } catch (err) {
        console.error(`清空目录 ${directoryPath} 时出错: ${err.message}`);
    }
}

// 主函数
async function main(relativeInputDir) {
    // 生成命令：Docker模式
    function generateWithDocker(config, inputDir) {
        const openapiGenerator = config.openapiGenerator;
        const rootDir = "/local";
        const dockerWorkDir = path.posix.join(rootDir, inputDir);

        const templateFolder =  path.resolve(__dirname, '../templates');
        // 动态生成additionalProperties，包含api和model输出目录
        const additionalProperties = `${openapiGenerator.additionalProperties},modelPackage=${openapiGenerator.modelPackage},apiPackage=${openapiGenerator.apiPackage}`;
        console.info("当前目录:"+ process.cwd() );
        const args = [
            'run', '--rm', '-v', `${process.cwd()}:${rootDir}`,
            '-v', `${templateFolder}:/templates`,
            'openapitools/openapi-generator-cli', 'generate',
            '--input-spec', path.posix.join(dockerWorkDir, config.swagger.processedPath),
            '-g', openapiGenerator.generator,
            '-o', dockerWorkDir,
            '-t', '/templates',
            '-p', `"${additionalProperties}"`
        ];

        // 添加ignoreList参数
        if (openapiGenerator.ignoreList && openapiGenerator.ignoreList.length > 0) {
            openapiGenerator.ignoreList.forEach(item => {
                args.push('--openapi-generator-ignore-list', item);
            });
        }

        return {
            command: 'docker',
            args: args
        };
    }

    // 生成命令：本地模式
    function generateLocal(config, processedSwaggerPath, workDir) {
        const openapiGenerator = config.openapiGenerator;

        // 动态生成additionalProperties，包含api和model输出目录
        const additionalProperties = `${openapiGenerator.additionalProperties},modelPackage=${openapiGenerator.modelPackage},apiPackage=${openapiGenerator.apiPackage}`;

        // 使用 __dirname 确保模板目录路径始终相对于当前脚本文件
        const templatesDir = path.resolve(__dirname, '../templates');
        const openapiToolsJson = path.resolve(__dirname, '../openapitools.json');
        const args = [
            'generate',
            '--input-spec', processedSwaggerPath,
            '-g', config.openapiGenerator.generator,
            '-o', workDir,
            '-t', templatesDir,
            '-p', `"${additionalProperties}"`,
            '--openapitools',openapiToolsJson
        ];

        // 添加ignoreList参数
        if (openapiGenerator.ignoreList && openapiGenerator.ignoreList.length > 0) {
            openapiGenerator.ignoreList.forEach(item => {
                args.push('--openapi-generator-ignore-list', item);
            });
        }

        return {
            command: 'openapi-generator-cli',
            args: args
        };
    }

    try {
        const rootDir = path.resolve(process.cwd());
        // 如果没有传入参数，则尝试从命令行获取
        if (!relativeInputDir) {
            relativeInputDir = process.argv[2];
        }
        const workDir = path.resolve(rootDir, relativeInputDir);
        // 合并配置，实际配置覆盖默认配置
        const config = getConfig(workDir);

        // 解析swagger文件的路径（相对于config.json所在目录）
        const originalSwaggerPath = path.resolve(workDir, config.swagger.originalPath);
        const processedSwaggerPath = path.resolve(workDir, config.swagger.processedPath);

        // 下载原始swagger文件或读取本地文件
        let swaggerData = await downloadSwagger(config.swagger.url, originalSwaggerPath, workDir);
        // 过滤swagger路径
        swaggerData = filterSwaggerPaths(swaggerData, config.filter.includePaths);
        //处理CodeResult
        swaggerData = processCodeResult(swaggerData, config.filter);

        // 保存处理后的swagger文件
        fs.writeFileSync(processedSwaggerPath, JSON.stringify(swaggerData, null, 2), 'utf8');
        console.log(`处理后的swagger文件已保存到: ${processedSwaggerPath}`);

        // 清空api和model目录
        const apiDir = path.resolve(workDir, config.openapiGenerator.apiPackage);
        const modelDir = path.resolve(workDir, config.openapiGenerator.modelPackage);
        cleanDirectory(apiDir);
        cleanDirectory(modelDir);

        const { command, args } = config.openapiGenerator.useDocker ?
            generateWithDocker(config, relativeInputDir) :
            generateLocal(config, processedSwaggerPath, workDir);

        // 保存执行命令时的当前工作目录
        const commandCwd = process.cwd();
        // 调用生成命令
        console.log('\n开始生成客户端代码...');
        console.log(`执行命令: ${command} ${args.join(' ')}`);
        console.log(`当前工作目录: ${commandCwd}`);
        console.log(`处理后的swagger路径: ${processedSwaggerPath}`);
        console.log(`输出目录: ${workDir}`);
        const { spawn } = require('child_process');
        const generateProcess = spawn(command, args, {
            shell: true,
            stdio: 'inherit'
        });

        generateProcess.on('close', (code) => {
            // 删除.openapi-generator目录
            tryDeleteFolder(path.resolve(workDir, '.openapi-generator'))
            // 删除.openapi-generator-ignore文件
            tryDeleteFile(path.resolve(workDir, '.openapi-generator-ignore'));
            // 删除openapitools.json文件（可能生成在命令执行的工作目录或输出目录）
            tryDeleteFile(processedSwaggerPath);
            tryDeleteFile(originalSwaggerPath);
            if (code === 0) {
                console.log('\n客户端代码生成成功!');
            } else {
                console.error(`\n客户端代码生成失败，退出码: ${code}`);
                process.exit(1);
            }
        });
    } catch (error) {
        console.error('错误:', error);
        process.exit(1);
    }
}

// 导出main函数供其他模块使用
module.exports = {
    main
};

// 如果直接运行该文件，则执行主函数
if (require.main === module) {
    main();
}
