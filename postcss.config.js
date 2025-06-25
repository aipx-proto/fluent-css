const ensureTailwindImport = ".ensure-tailwind-import";

module.exports = {
  plugins: [
    require('./plugins/extract-custom-properties')({
      scanDir: './styles',
      ruleName: ensureTailwindImport
    }),
    require('@tailwindcss/postcss'),
    require('css-byebye')({
      rulesToRemove: [ensureTailwindImport]
    }),
    require('postcss-merge-at-rules'),
  ]
}; 