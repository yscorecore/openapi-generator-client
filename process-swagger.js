const fs = require('fs');
const https = require('https');
const path = require('path');

 const defaultConfig = {
            swagger: {
                url:'./swagger.json',
                originalPath: './swagger-original.json',
                processedPath: './swagger-processed.json'
            },
            filter: {
                includePaths: []
            },
            openapiGenerator: {
                generator: "typescript-axios",
                useDocker: true
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

// 处理swagger文件
function processSwagger(swaggerData, includePaths) {
    // 过滤路径
    const filteredPaths = filterPaths(swaggerData.paths, includePaths);
    
    // 更新swagger数据中的路径
    swaggerData.paths = filteredPaths;
    
    // 处理CodeResult相关类型
    if (swaggerData.components && swaggerData.components.schemas) {
        const schemas = swaggerData.components.schemas;
        
        // 1. 遍历所有路径，将响应中的CodeResult类型替换为实际的数据类型
        Object.keys(swaggerData.paths).forEach(path => {
            const methods = swaggerData.paths[path];
            Object.keys(methods).forEach(method => {
                const operation = methods[method];
                if (operation.responses) {
                    Object.keys(operation.responses).forEach(status => {
                        const response = operation.responses[status];
                        if (response.content) {
                            Object.keys(response.content).forEach(mediaType => {
                                const content = response.content[mediaType];
                                if (content.schema && content.schema.$ref) {
                                    const ref = content.schema.$ref;
                                    // 提取schema名称
                                    const schemaName = ref.split('/').pop();
                                    
                                    // 检查是否是CodeResult类型且不是基础的CodeResult
                if (schemaName !== 'CodeResult' && /CodeResult(\d+)?$/.test(schemaName)) {
                                        const codeResultSchema = schemas[schemaName];
                                        if (codeResultSchema && codeResultSchema.properties && codeResultSchema.properties.data) {
                                            // 将响应直接指向data属性的类型
                                            content.schema = codeResultSchema.properties.data;
                                        }
                                    }
                                }
                            });
                        }
                    });
                }
            });
        });
        
        // 2. 删除所有带有data属性的CodeResult相关的schema定义（保留基础的CodeResult）
        Object.keys(schemas).forEach(schemaName => {
            if (schemaName !== 'CodeResult' && /CodeResult(\d+)?$/.test(schemaName)) {
                const schema = schemas[schemaName];
                if (schema && schema.properties && schema.properties.data) {
                    delete schemas[schemaName];
                }
            }
        });
    }
    
    return swaggerData;
}

// 主函数
async function main() {
    try {
        const workDir = path.resolve(process.cwd(), process.argv[2]);
        // 读取配置文件路径（从命令行参数获取，默认值为./src/client/config.json）
        const configPath =  path.resolve(workDir, './config.json');  
        const configData = fs.readFileSync(configPath, 'utf8');
        const config = JSON.parse(configData);
        
        // 默认配置
        const dockerRootDir = '/local';
        // 直接构造Linux格式的Docker工作目录路径
        const dockerWorkerDir = `${dockerRootDir}/${process.argv[2].replace('./', '')}`;
         const  defaultOpenapiGenerator= {
                dockerVolumes: `${process.cwd()}:${dockerRootDir}`,
                generatorImage: 'openapitools/openapi-generator-cli',
                outputDir: dockerWorkerDir,
                templatesDir: '/local/templates',
                additionalProperties: 'withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api,skipFormModel=true'
            };
        
        // 合并配置，实际配置覆盖默认配置
        const mergedConfig = {
            swagger: { ...defaultConfig.swagger, ...config.swagger },
            filter: { ...defaultConfig.filter, ...config.filter },
            openapiGenerator: { ...defaultConfig.openapiGenerator, ...config.openapiGenerator,...defaultOpenapiGenerator }
        };
        
        const { swagger, filter, openapiGenerator } = mergedConfig;
        
        // 获取config.json所在的目录
        const configDir = path.dirname(configPath);
        
        // 解析swagger文件的路径（相对于config.json所在目录）
        const originalSwaggerPath = path.resolve(configDir, swagger.originalPath);
        const processedSwaggerPath = path.resolve(configDir, swagger.processedPath);
        
        // 下载原始swagger文件或读取本地文件
        const swaggerData = await downloadSwagger(swagger.url, originalSwaggerPath, configDir);
        
        // 处理swagger文件（包含路径过滤）
        const processedData = processSwagger(swaggerData, filter.includePaths);
        
        // 保存处理后的swagger文件
        fs.writeFileSync(processedSwaggerPath, JSON.stringify(processedData, null, 2), 'utf8');
        console.log(`处理后的swagger文件已保存到: ${processedSwaggerPath}`);
        
        // 根据useDocker选项选择执行方式
        let command, args;
        
        if (openapiGenerator.useDocker) {
            // 使用Docker模式
            // 更新Docker输入文件路径，指向正确的位置
            const dockerInputPath = `${dockerWorkerDir}/${swagger.processedPath.replace('./', '')}`;
            
            command = 'docker';
            args = [
                'run', '--rm', '-v', openapiGenerator.dockerVolumes,
                openapiGenerator.generatorImage, 'generate',
                '-i', dockerInputPath,
                '-g', openapiGenerator.generator,
                '-o', openapiGenerator.outputDir,
                '-t', openapiGenerator.templatesDir,
                '-p', openapiGenerator.additionalProperties
            ];
        } else {
            // 不使用Docker模式，直接调用openapi-generator-cli
            command = 'openapi-generator-cli';
            args = [
                'generate',
                '-i', processedSwaggerPath,
                '-g', openapiGenerator.generator,
                '-o', workDir,
                '-t', path.resolve(process.cwd(), 'templates'),
                '-p', openapiGenerator.additionalProperties
            ];
        }
        
        // 调用生成命令
        console.log('\n开始生成客户端代码...');
        console.log(`执行命令: ${command} ${args.join(' ')}`);
        const { spawn } = require('child_process');
        const generateProcess = spawn(command, args, {
            shell: true,
            stdio: 'inherit'
        });
        
        generateProcess.on('close', (code) => {
            if (code === 0) {
                console.log('\n客户端代码生成成功!');
                
                // 删除临时swagger文件
                try {
                    fs.unlinkSync(originalSwaggerPath);
                    fs.unlinkSync(processedSwaggerPath);
                    console.log('临时swagger文件已删除');
                } catch (error) {
                    console.error('删除临时文件时出错:', error);
                }
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

// 执行主函数
main();
