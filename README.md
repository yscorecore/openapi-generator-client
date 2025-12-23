# OpenAPI TypeScript Generator

A powerful CLI tool to generate TypeScript API client code from OpenAPI/Swagger specifications, built on top of [openapi-generator-cli](https://www.npmjs.com/package/@openapitools/openapi-generator-cli).

## Features

- 🚀 **Fast generation**: Uses openapi-generator-cli under the hood for reliable and efficient code generation
- 📦 **TypeScript first**: Generates fully typed TypeScript API clients
- 🎨 **Custom templates**: Supports custom Mustache templates for API and model generation
- 📝 **OpenAPI/Swagger support**: Works with both OpenAPI 2.0 (Swagger) and OpenAPI 3.0 specifications
- 🔧 **Easy to use**: Simple CLI interface for quick generation

## Installation

### Global installation

```bash
npm install -g openapi-generator-ts
```

### Local installation

```bash
npm install --save-dev openapi-generator-ts
```

## Usage

### Basic usage

```bash
openapi-generator-ts <directory-path>
```

### Example

```bash
# Process OpenAPI in the current directory
openapi-generator-ts .

# Process OpenAPI in a specific directory
openapi-generator-ts ./src/api
```

### Help

```bash
openapi-generator-ts --help
```

## Configuration

The tool expects the following structure in the target directory:

```
<target-directory>/
├── swagger.json        # Your OpenAPI/Swagger specification file
└── openapiconfig.json  # Configuration file for the generator
```

### openapiconfig.json example

```json
{
  "swagger": {
    "url": "./swagger.json",
    "originalPath": "__swagger-download.json",
    "processedPath": "__swagger-processed.json"
  },
  "filter": {
    "includePaths": [],
    "extractCodeResult": true,
    "codeFieldName": "code",
    "messageFieldName": "message",
    "dataFieldName": "data"
  },
  "openapiGenerator": {
    "generator": "typescript-axios",
    "useDocker": false,
    "apiPackage": "api",
    "modelPackage": "models",
    "additionalProperties": "withSeparateModelsAndApi=true,skipFormModel=true",
    "ignoreList": [
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
}
```

## Project Structure

```
openapi-generator-ts/
├── src/
│   ├── cli.js          # CLI entry point
│   └── generate.js     # Core generation logic
├── templates/          # Custom Mustache templates
│   ├── apiInner.mustache
│   ├── baseApi.mustache
│   └── model.mustache
├── package.json
└── README.md
```

## Customization

### Templates

The tool includes custom Mustache templates in the `templates/` directory. You can modify these templates to customize the generated code:

- `apiInner.mustache`: Template for API endpoint methods
- `baseApi.mustache`: Template for the base API class
- `model.mustache`: Template for data models

### Adding custom templates

You can specify a custom template directory in your `openapiconfig.json`:

```json
{
  "templateDir": "./your-custom-templates"
}
```

## Requirements

- Node.js 14.x or higher
- npm or yarn
- Docker (required by openapi-generator-cli)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Changelog

### v0.0.1
- Initial release
- Basic OpenAPI client generation
- Custom template support
- CLI interface
