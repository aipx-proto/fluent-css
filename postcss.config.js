const ensureTailwindImport = ".ensure-tailwind-import";

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-discard-comments'),
    // require('postcss-url')({ url: 'rebase' }),
    // require('./plugins/extract-custom-properties')({
    //   scanDir: './styles',
    //   ruleName: ensureTailwindImport
    // }),
    // require('@tailwindcss/postcss'),
    // require('css-byebye')({
    //   rulesToRemove: [ensureTailwindImport]
    // }),
  ]
}; 