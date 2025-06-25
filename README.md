# Fluent.css

**An attempt at an LLM-first design system**

Fluent.css pre-styles native html elements into Microsoft Fluent Design Language, and provides several utilities to apply theming and additional class-based components. The usage API is designed to be as minimal as possible so that the full docs can be included in am llm prompt and empowers an llm to write properly styled UI. This allows a portable design system whose artifacts are an LLMs.txt docs file and an imported .css file.

Fluent.css is based on Tailwind syntax and integrates as a Tailwind component library into the `theme`, `components` and `utilities` `@layers`. Several class based utilizes are also provided by default.  

**Why Tailwind syntax?** There is something special about tailwind that helps LLMs produce much better UI output. (See [mirai-css-prompts](https://github.com/aipx-proto/mirai-css-prompts) for an experimental comparison.) All AI based app generators use tailwind (bolt, Lovable, Stitch, V0, OnLook), possibly for this reason. This library skews to what the model writes best rather than what a dev writes best.

**However, *Tailwind is not a required dependency*. This component library can be used standalone with zero dependencies.**

[Components Demo](https://aipx-proto.github.io/fluent-css/) / [LLMs.txt](./llms.txt)

## Usage

Import the css build from: `https://esm.sh/gh/aipx-proto/fluent-css@main/build/fluent.css?raw`

(Or try to use the un-compiled tailwind css in [`./build/fluent.tailwind.css`](./build/fluent.tailwind.css))

### Please read [LLMs.txt](./llms.txt) for more complete documentation

## Development & Build

Run `npm i` then `npm run dev` to start the build in watch mode. Then open the `index.html` file in a browser, or use something like `live-server` to host it locally.

This library uses PostCSS and Tailwind to build `styles/index.css` into a `build/fluent.css` file. There are a few quirks to this process:
- No default scanning: Tailwind is included in `index.css` with the `source(none)` directive, so only explicitly included sources will show up in the build.
- Tricking Tailwind into including all `@theme` variables: 
  - There is a custom PostCSS script, `extract-custom-properties`, that parses the entire `styles/` folder, pulls out all `--custom-properties`, and adds them to the PostCSS buffer under a CSS rule. 
  - That rule is later removed by `css-byebye`.
- The `styles/utilities/` files override some default Tailwind utility classes so Tailwind won't include a bunch of unnecessary `--tw-vars` as boilerplate.

There is also a second PostCSS script that generates an un-compiled version of the Tailwind CSS library in `build/fluent.tailwind.css`. This can be included in a Tailwind build for a more optimized output.

---

## TODOs

### Bugs & Improvements

- use padding and absolute positions for the marker in `details summary` instead of flex? Or use `float:right;`?
- firefox & safari support? (for input pseudo elements)
- intent - info, brand, success, warning, danger
- icons for input types - search, date, numeric
- icon support

### Icons?

- icons with svg use external
- with [fluent icons font and css file](https://github.com/microsoft/fluentui-system-icons/blob/cd860cfdb9c60f6b731f6164b21e04909b23178e/fonts/FluentSystemIcons-Resizable.css)?
- Icons in input: wrapper element that z-indexes input at the back and a before and after element for icons and buttons
- with web-component

### Components

- Naming conventions from tailwind component libraries
  - tailwind v3 components (which i can find no record of)
  - [Daisy UI](https://daisyui.com/)
  - Fluent: [React](https://react.fluentui.dev/), [General](https://fluent2.microsoft.design/), [Web Component](https://web-components.fluentui.dev/), [Theme](https://react.fluentui.dev/iframe.html?viewMode=docs&id=theme-theme-designer--docs)
- Format - .component .component-variant .utility-variant
  - .size-sm, .size-md, .size-lg (.size-xl, .size-xs)
  - .type-primary, .type-outline, .type-subtle, .type-transparent (.type-ghost)
  - .intent-info, .intent-brand, .intent-success, .intent-warning, .intent-danger
  - .selected, .disabled, .icon-only
  - .tab, .tabs, .tabs-vertical
  - .btn, button, .btn-group, a.btn, select.btn, button.link (split-button, menu-button?)
  - .input, input
  - checkbox
  - radio
  - input range - (aka slider)
  - .switch - input[type="checkbox"] (aka toggle)
  - .spinner - progress[indeterminate] (aka progress bar)
  - .dialog - dialog - .dialog-dismiss-btn (aka modal)
  - .select - select select.btn select.input (aka dropdown)
  - details, summary (aka accordion) .marker-end
  - [popover] (.tooltip) .popover-position
  - .menu-group (.menu)
  - table .table-interactive, tr.table-row-interactive, th.table-cell-interactive tr.selected (aka data grid)
  - a .link (aka link) a.intent-info
  - .icon, .icon-emoji
  - NEXT
    - .field
    - .badge
    - .breadcrumbs .divider
    - .avatar?
    - .message (aka message bar, notice)
    - .skeleton
    - .dialog-drawer
    - table interactive


