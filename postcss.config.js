module.exports = {
  plugins: [
    // require('postcss-import'),
    require('./plugins/extract-custom-properties')({
      scanDir: './styles',
      output: './build/custom-properties.css',
      className: 'ensure-tailwind-import'
    }),
    require('@tailwindcss/postcss'),
    // require('postcss-url')({ url: 'rebase' }),
  ]
}; 