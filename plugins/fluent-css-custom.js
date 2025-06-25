/**
 * Minimal custom PostCSS plugin for fluent-css project
 * This plugin demonstrates basic PostCSS plugin structure and functionality
 */

module.exports = (opts = {}) => {
  // Plugin creator to check options or prepare shared state
  const options = {
    addHeader: true,
    headerText: "Processed by fluent-css custom plugin",
    ...opts,
  };

  return {
    postcssPlugin: "fluent-css-custom",

    // AIDEV-NOTE: This runs once per CSS file processed
    Once(root, { result }) {
      // Add header comment if enabled
      if (options.addHeader) {
        const headerComment = `/* ${options.headerText} */`;
        root.prepend({ type: "comment", text: ` ${options.headerText} ` });
      }
    },

    // AIDEV-NOTE: This runs for each CSS declaration (property: value pairs)
    Declaration(decl) {
      // Example: Convert any 'brand-primary' custom property references
      if (decl.value.includes("var(--brand-primary)")) {
        console.log(`Found brand-primary usage in ${decl.prop}: ${decl.value}`);
        // Could transform or validate here
      }

      // Example: Add a flag to declarations using CSS custom properties
      if (decl.prop.startsWith("--") && decl.prop.includes("fluent")) {
        // Add a data attribute comment for debugging
        decl.raws.after = decl.raws.after || "";
        if (!decl.raws.after.includes("/* fluent-var */")) {
          decl.raws.after += " /* fluent-var */";
        }
      }
    },

    // AIDEV-NOTE: This runs for CSS rules (selectors)
    Rule(rule) {
      // Example: Log usage of specific selectors for debugging
      if (rule.selector.includes(".fluent-")) {
        console.log(`Found fluent class: ${rule.selector}`);
      }
    },
  };
};

// AIDEV-NOTE: This flag is required for PostCSS to recognize this as a plugin
module.exports.postcss = true;
