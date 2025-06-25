const ensureTailwindImport = ".ensure-tailwind-import";

module.exports = {
  plugins: [
    // Tricking Tailwind into including all `@theme` variables: scan 'styles/' folder, pull out all `--custom-properties`
    // ...and add them to the postcss buffer under a css rule. That rule is later removed by `css-byebye`
    require("./plugins/extract-custom-properties")({
      scanDir: "./styles",
      ruleName: ensureTailwindImport,
    }),

    require("@tailwindcss/postcss"),

    // remove the css rule added to trick tailwind
    require("css-byebye")({
      rulesToRemove: [ensureTailwindImport],
    }),

    // merge all the `@layer` rules into one
    require("postcss-merge-at-rules"),
  ],
};
