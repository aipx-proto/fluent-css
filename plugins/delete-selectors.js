/**
 * PostCSS plugin to delete specific CSS selectors from the output
 * Useful for removing utility classes that were only needed during processing
 */

module.exports = (opts = {}) => {
  // Plugin options with defaults
  const options = {
    selectors: [], // Array of selectors to delete
    ...opts
  };

  return {
    postcssPlugin: 'delete-selectors',
    
    // AIDEV-NOTE: Run once to remove specified selectors from the CSS
    Once(root) {
      if (options.selectors.length === 0) {
        return;
      }

      let deletedCount = 0;

      // Walk through all rules and remove matching selectors
      root.walkRules(rule => {
        if (options.selectors.includes(rule.selector)) {
          rule.remove();
          deletedCount++;
        }
      });

      if (deletedCount > 0) {
        console.log(`🗑️  Deleted ${deletedCount} CSS selector(s): ${options.selectors.join(', ')}`);
      }
    }
  };
};

// AIDEV-NOTE: Required flag for PostCSS to recognize this as a plugin
module.exports.postcss = true; 