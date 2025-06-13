const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const chokidar = require('chokidar');

// Get command line arguments
const args = process.argv.slice(2);
const showHelp = args.includes('--help') || args.includes('-h');
const watchMode = args.includes('--watch') || args.includes('-w');

const SEARCH_PATTERN = args[0] || '**/*.css';
const OUTPUT_FILE = args[1] || 'custom-properties.css';
const IGNORE_PATTERN = args[2] || '**/*fluent*.css';
const EXCLUDE_PATTERN = `!${OUTPUT_FILE}`;

if (showHelp) {
    console.log(`Usage: node extract-custom-properties.js [glob_pattern] [output_file] [ignore_pattern] [--watch]\n` +
        `  glob_pattern: Glob pattern for files to search (default: '**/*.css')\n` +
        `  output_file:  Output CSS file (default: 'custom-properties.css')\n` +
        `  ignore_pattern: Glob pattern for files to ignore (default: '**/*fluent*.css')\n` +
        `  --watch: Enable watch mode to re-run on file changes\n` +
        `Example: node extract-custom-properties.js 'styles/**/*.css' my-vars.css '**/ignore*.css' --watch`);
    process.exit(0);
}

// Function to extract custom properties from CSS content
function extractCustomProperties(content) {
    const customPropertyRegex = /--[a-zA-Z0-9-]+/g;
    const matches = content.match(customPropertyRegex) || [];
    return [...new Set(matches)]; // Remove duplicates
}

// Function to process files and generate output
async function processFiles() {
    try {
        // Get all CSS files except the output file and ignored files
        const files = await glob(SEARCH_PATTERN, { ignore: [EXCLUDE_PATTERN, IGNORE_PATTERN] });

        // Collect all custom properties
        const customProperties = new Set();
        
        for (const file of files) {
            const content = fs.readFileSync(file, 'utf8');
            const properties = extractCustomProperties(content);
            properties.forEach(prop => customProperties.add(prop));
        }

        // Create the CSS content with reflexive structure
        const cssContent = `.ensure-tailwind-import {\n${Array.from(customProperties)
            .map(prop => `  ${prop}: var(${prop});`)
            .join('\n')}\n}`;

        // Write to output file
        fs.writeFileSync(OUTPUT_FILE, cssContent);
        console.log(`Successfully extracted ${customProperties.size} custom properties to ${OUTPUT_FILE}`);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

// Main function
async function main() {
    await processFiles();

    if (watchMode) {
        console.log(`Watching for changes in ${SEARCH_PATTERN}...`);
        const watchPattern = SEARCH_PATTERN.replace(/\*\*/g, '*');
        const watcher = chokidar.watch(watchPattern, { ignored: [EXCLUDE_PATTERN, IGNORE_PATTERN] });
        watcher.on('change', async () => {
            console.log('File change detected, re-running extraction...');
            await processFiles();
        });
    }
}

main(); 