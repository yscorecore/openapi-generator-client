const fs = require('fs');
const path = require('path');
const axios = require('axios');

// 创建templates目录
const templatesDir = path.join(__dirname, 'original-templates');
if (!fs.existsSync(templatesDir)) {
    fs.mkdirSync(templatesDir, { recursive: true });
}

// 下载TypeScript-Axios模板文件
const templateFiles = [
    'apiInner.mustache',
    'model.mustache',
    'modelGeneric.mustache',
    'modelEnum.mustache'
];

const baseUrl = 'https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/modules/openapi-generator/src/main/resources/typescript-axios';

templateFiles.forEach(async (file) => {
    try {
        const response = await axios.get(`${baseUrl}/${file}`);
        fs.writeFileSync(path.join(templatesDir, file), response.data);
        console.log(`Downloaded ${file}`);
    } catch (error) {
        console.error(`Error downloading ${file}: ${error.message}`);
    }
});
