/**
 * Minimal custom PostCSS plugin for fluent-css project
 * This plugin demonstrates basic PostCSS plugin structure and functionality
 */

const fs = require('fs');
const path = require('path');

module.exports = (opts = {}) => {
  // Plugin creator to check options or prepare shared state
  const options = {
    addHeader: true,
    headerText: "Processed by fluent-css custom plugin",
    saveToFile: false,
    outputDir: './temp',
    fileName: 'postcss-analysis.json',
    saveCheckpoints: false,
    checkpointName: 'fluent-css-custom',
    saveBefore: true,
    saveAfter: true,
    ...opts,
  };

  // AIDEV-NOTE: Track plugin analysis data
  const analysisData = {
    timestamp: new Date().toISOString(),
    totalRules: 0,
    totalDeclarations: 0,
    fluentClasses: [],
    customProperties: [],
    brandPrimaryUsage: []
  };

    // AIDEV-NOTE: Helper function to save CSS checkpoint
  const saveCheckpoint = (root, stage) => {
    if (!options.saveCheckpoints) return;
    
    try {
      // Ensure output directory exists
      const outputPath = path.resolve(options.outputDir);
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
      }

      // Generate checkpoint filename with timestamp
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const checkpointFileName = `checkpoint-${options.checkpointName}-${stage}-${timestamp}.css`;
      const filePath = path.join(outputPath, checkpointFileName);
      
      // Convert PostCSS AST back to CSS string
      const cssContent = root.toString();
      
      // Write CSS checkpoint to file
      fs.writeFileSync(filePath, cssContent);
      console.log(`📁 CSS checkpoint saved: ${stage} -> ${checkpointFileName}`);
      
    } catch (error) {
      console.error(`✗ Failed to save CSS checkpoint (${stage}): ${error.message}`);
    }
  };

  return {
    postcssPlugin: "fluent-css-custom",

    // AIDEV-NOTE: This runs once per CSS file processed
    Once(root, { result }) {
      // Save "before" checkpoint if enabled
      if (options.saveBefore) {
        saveCheckpoint(root, 'before');
      }

      // Add header comment if enabled
      if (options.addHeader) {
        const headerComment = `/* ${options.headerText} */`;
        root.prepend({ type: "comment", text: ` ${options.headerText} ` });
      }
    },

    // AIDEV-NOTE: This runs for each CSS declaration (property: value pairs)
    Declaration(decl) {
      analysisData.totalDeclarations++;

      // Example: Convert any 'brand-primary' custom property references
      if (decl.value.includes("var(--brand-primary)")) {
        console.log(`Found brand-primary usage in ${decl.prop}: ${decl.value}`);
        analysisData.brandPrimaryUsage.push({
          property: decl.prop,
          value: decl.value,
          selector: decl.parent.selector
        });
      }

      // Example: Add a flag to declarations using CSS custom properties
      if (decl.prop.startsWith("--") && decl.prop.includes("fluent")) {
        // Add a data attribute comment for debugging
        decl.raws.after = decl.raws.after || "";
        if (!decl.raws.after.includes("/* fluent-var */")) {
          decl.raws.after += " /* fluent-var */";
        }
        
        // Track fluent custom properties
        analysisData.customProperties.push({
          property: decl.prop,
          value: decl.value,
          selector: decl.parent.selector
        });
      }
    },

    // AIDEV-NOTE: This runs for CSS rules (selectors)
    Rule(rule) {
      analysisData.totalRules++;

      // Example: Log usage of specific selectors for debugging
      if (rule.selector.includes(".fluent-")) {
        console.log(`Found fluent class: ${rule.selector}`);
        analysisData.fluentClasses.push({
          selector: rule.selector,
          declarationCount: rule.nodes.length
        });
      }
    },

    // AIDEV-NOTE: This runs after all processing is complete
    OnceExit(root, { result }) {
      // Save "after" checkpoint if enabled
      if (options.saveAfter) {
        saveCheckpoint(root, 'after');
      }

      // Save analysis data to file if enabled
      if (options.saveToFile) {
        try {
          // Ensure output directory exists
          const outputPath = path.resolve(options.outputDir);
          if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath, { recursive: true });
          }

          // Generate file path
          const filePath = path.join(outputPath, options.fileName);
          
          // Add summary to analysis data
          analysisData.summary = {
            totalRules: analysisData.totalRules,
            totalDeclarations: analysisData.totalDeclarations,
            fluentClassCount: analysisData.fluentClasses.length,
            customPropertyCount: analysisData.customProperties.length,
            brandPrimaryUsageCount: analysisData.brandPrimaryUsage.length
          };

          // Write analysis data to file
          fs.writeFileSync(filePath, JSON.stringify(analysisData, null, 2));
          console.log(`✓ PostCSS analysis saved to: ${filePath}`);
          
        } catch (error) {
          console.error(`✗ Failed to save PostCSS analysis: ${error.message}`);
        }
      }
    },
  };
};

// AIDEV-NOTE: This flag is required for PostCSS to recognize this as a plugin
module.exports.postcss = true;
