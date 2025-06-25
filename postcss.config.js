module.exports = {
  plugins: [
    require('postcss-import'),
    require('./plugins/fluent-css-custom')({
      addHeader: true,
      headerText: 'Processed by fluent-css custom plugin'
    }),
    // require('@tailwindcss/postcss'),
    // require('postcss-url')({ url: 'rebase' }),
  ]
}; 