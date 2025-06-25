module.exports = {
  plugins: [
    // require('postcss-import'),
    require('./plugins/extract-custom-properties')({
      scanDir: './styles',
      className: 'ensure-tailwind-import'
    }),
    require('@tailwindcss/postcss'),
    require('./plugins/delete-selectors')({
      selectors: ['.ensure-tailwind-import']
    }),
    // require('postcss-url')({ url: 'rebase' }),
  ]
}; 