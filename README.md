# Fluent.css

**An attempt at an LLM-first design system**

[Demo](https://aipx-proto.github.io/fluent-css/) / [LLMs.txt](./llms.txt)

## Usage

Fluent.css is based on the tailwind syntax, and integrates as a tailwind component library into the `theme` and `utilites` layers. However, *Tailwind is not a required dependency*. This component library can be used as a standalone with zero dependencies.

### To see more complete usage documentation, please read the [LLMs.txt](./llms.txt)

## Development & Build

Run `npm i` then `npm run dev` to start the build in watch mode. The open the index.html file in a browser or use something like `live-server` to host it locally.

This library tailwind to build styles/index.css a build/fluent.css file. There are a few quirks to this.
- No default scanning: Tailwind is included in 'index.css' with the `source(none)` directive so only explicit included sources will show up in the build
- Tricking Tailwind into including all `@theme` variables: There is a `npm run pre-tailwind` script that: parses the entire 'styles/' folder, pulls out all `--custom-properties` and saves them to a `custom-properties.css` file. This file is referenced as a `@source` in 'index.css' so the tailwind compiler will think these are all used and won't exclude them from the build.
- The styles/utilizes/ files override some default tailwind utility classes so tailwind won't include a bunch of unnecessary --tw-vars as boilerplate.

---

## TODOs

- Write LLMs.txt
  - test
  - remove reference to .btn-group and other uncommon use cases or it will be overused?

### Bugs & Improvements

- Build 
  - use postcss with custom scripts for more streamline build (no generate-custom-properties concurrently)
  - re-evaluate the overriding utilities to integrate with tailwind properly
  - output a fluent.tailwind.css to import with  `<style type="text/tailwindcss">@import url(".../build/fluent.tailwind.css");</style>`
- use padding and absolute positions for the marker in `details summary` instead of flex? Or use `float:right;`?
- firefox & safari support? (for input pseudo elements)
- intent - info, brand, success, warning, danger
- icons for input types - search, date, numeric
- create docs page with tailwind
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


