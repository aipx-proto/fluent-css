# Fluent.css

**An attempt at an LLM-first design system**

...

## Usage

...

## Development

...

---

# TODOs

## Transition to Fluent

- add default flex size to radio checkbox spinner icon and other things that are a fixed size
- default inline-flex for more things like `label:has(input[type=checkbox], input[type=radio])`
- create docs page

## Tailwind config
- proper `@sources`
- proper `@layers`

## Naming `@component` classes & `@utilities`

- Naming conventions from tailwind component libraries
  - tailwind v3 components (which i can find no record of)
  - [Daisy UI](https://daisyui.com/)
  - Fluent: [React](https://react.fluentui.dev/), [General](https://fluent2.microsoft.design/), [Web Component](https://web-components.fluentui.dev/), [Theme](https://react.fluentui.dev/iframe.html?viewMode=docs&id=theme-theme-designer--docs)
- Format - .component .component-variant .utility-variant
  - .size-sm, .size-md, .size-lg (.size-xl, .size-xs)
  - .appearance-primary, .appearance-outline, .appearance-subtle, .appearance-transparent (.appearance-ghost)
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

## Bugs & Improvements


- fix label > disabled in disabled.css
- use padding and absolute positions for the marker in `details summary` instead of flex? Or use `float:right;`?
- firefox & safari support? (for input pseudo elements)
- transparent backgrounds? Maybe they would be better as they'd work in more random scenarios?
- intent - info, brand, success, warning, danger
- icons for input types - search, date, numeric

## Icons?

- icons with svg use external
- with [fluent icons font and css file](https://github.com/microsoft/fluentui-system-icons/blob/cd860cfdb9c60f6b731f6164b21e04909b23178e/fonts/FluentSystemIcons-Resizable.css)?
- Icons in input: wrapper element that z-indexes input at the back and a before and after element for icons and buttons
