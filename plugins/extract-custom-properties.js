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
        files.push(fullPath);
      }
    }
    
    return files;
  };

  // AIDEV-NOTE: Main function to process files and inject CSS into PostCSS buffer
  const processFilesAndInject = (root, { Comment, Rule, Declaration }) => {
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

      if (customProperties.size > 0) {
        // Create comment node
        const comment = new Comment({
          text: ` Built by extract-custom-properties PostCSS plugin.\n   This ensures Tailwind CSS recognizes all custom properties in the codebase. `
        });

        // Create the CSS rule with custom properties
        const rule = new Rule({
          selector: `.${options.className}`,
        });

        // Add declarations for each custom property
        Array.from(customProperties)
          .sort() // Sort for consistent output
          .forEach(prop => {
            const decl = new Declaration({
              prop: prop,
              value: `var(${prop})`
            });
            rule.append(decl);
          });

        // Append to the beginning of the CSS
        root.prepend(comment);
        root.prepend(rule);
        
        console.log(`📁 Injected ${customProperties.size} custom properties into PostCSS buffer`);
      }
      
    } catch (error) {
      console.error(`✗ extract-custom-properties plugin error: ${error.message}`);
    }
  };

  return {
    postcssPlugin: 'extract-custom-properties',
    
    // AIDEV-NOTE: Run once at the beginning to inject custom properties before other plugins
    Once(root, { result, Comment, Rule, Declaration }) {
      processFilesAndInject(root, { Comment, Rule, Declaration });
      
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