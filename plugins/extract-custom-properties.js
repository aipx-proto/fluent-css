/**
 * PostCSS plugin to extract custom properties from CSS files
 * and generate a reflexive CSS file for Tailwind CSS compatibility
 */

const fs = require('fs');
const path = require('path');

module.exports = (opts = {}) => {
  // Plugin options with defaults
  const options = {
    scanDir: './styles',
    output: './build/custom-properties.css',
    className: 'ensure-tailwind-import',
    ...opts
  };

  // AIDEV-NOTE: Helper function to extract custom properties from CSS content
  const extractCustomProperties = (content) => {
    const customPropertyRegex = /--[a-zA-Z0-9-]+/g;
    const matches = content.match(customPropertyRegex) || [];
    return [...new Set(matches)]; // Remove duplicates
  };

  // AIDEV-NOTE: Helper function to recursively find CSS files
  const findCSSFiles = (dir, files = []) => {
    if (!fs.existsSync(dir)) {
      return files;
    }

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        findCSSFiles(fullPath, files);
      } else if (item.endsWith('.css')) {
        // Exclude the output file itself
        const outputFileName = path.basename(options.output);
        if (item !== outputFileName) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  };

  // AIDEV-NOTE: Main function to process files and generate output
  const processFiles = () => {
    try {
      // Find all CSS files in scan directory
      const files = findCSSFiles(path.resolve(options.scanDir));

      // Collect all custom properties
      const customProperties = new Set();
      
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const properties = extractCustomProperties(content);
        properties.forEach(prop => customProperties.add(prop));
      }

      // Ensure output directory exists
      const outputDir = path.dirname(path.resolve(options.output));
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const comment = `/* Built by extract-custom-properties PostCSS plugin - don't edit this file manually.\n   This file is used to ensure Tailwind CSS recognizes all custom properties in the codebase. */`;
      
      // Create the CSS content with reflexive structure
      const cssContent = `${comment}\n\n.${options.className} {\n${Array.from(customProperties)
        .sort() // Sort for consistent output
        .map(prop => `  ${prop}: var(${prop});`)
        .join('\n')}\n}`;

      // Write to output file
      fs.writeFileSync(path.resolve(options.output), cssContent);
      console.log(`📁 Extracted ${customProperties.size} custom properties to ${options.output}`);
      
    } catch (error) {
      console.error(`✗ extract-custom-properties plugin error: ${error.message}`);
    }
  };

  return {
    postcssPlugin: 'extract-custom-properties',
    
    // AIDEV-NOTE: Run once at the end of processing to extract all custom properties
    OnceExit(root, { result }) {
      processFiles();
      
      // Add dependency message for build systems
      result.messages.push({
        type: 'dir-dependency',
        plugin: 'extract-custom-properties',
        dir: path.resolve(options.scanDir),
        parent: result.opts.from
      });
    }
  };
};

// AIDEV-NOTE: Required flag for PostCSS to recognize this as a plugin
module.exports.postcss = true; 