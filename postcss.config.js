module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url')({ url: 'rebase' }),
    require('@tailwindcss/postcss'),
    // Add more plugins here if needed
  ]
}; 