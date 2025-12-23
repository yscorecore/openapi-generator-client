#!/usr/bin/env node

// Main entry point for openapitest CLI tool
const path = require('path');
const fs = require('fs');

// Import the main processing function
const generate = require('./generate');

// Parse command line arguments
const args = process.argv.slice(2);

// Check for help option
if (args.includes('--help') || args.includes('-h')) {
    console.log('openapitest CLI Tool');
    console.log('===================');
    console.log('Generates API client code from Swagger/OpenAPI specifications');
    console.log('');
    console.log('Usage:');
    console.log('  openapitest <directory-path>  Process OpenAPI in the specified directory');
    console.log('  openapitest --help            Show this help message');
    console.log('  openapitest -h                Show this help message');
    console.log('');
    console.log('Example:');
    console.log('  openapitest ./examples/global2');
    process.exit(0);
}

// Check if we have the required argument (directory path)
if (args.length < 1) {
    console.error('Error: Missing required argument');
    console.error('Usage: openapitest <directory-path>');
    console.error('Run "openapitest --help" for more information.');
    process.exit(1);
}

// Call the main function with the provided directory
generate.run(args[0]);