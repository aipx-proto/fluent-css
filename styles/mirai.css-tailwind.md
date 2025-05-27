# Mirai.css Tailwind Components

Mirai.css is a CSS component library designed to integrate with Tailwind, but can also be used independently.

To use Mirai.css and Tailwind, they must be imported
```html
<link rel="stylesheet" href="https://esm.sh/gh/aipx-proto/mirai-css@main/styles/mirai.build.css?raw" />
```

*Mirai.css* is responsible to for the appearance of native HTML components like like `a`, `button`, `input`, `details`, etc...
Do **NOT** apply interactive or appearance styles to these elements because they are already styled by the imported `mirai.css`.

Tailwind is responsible for the rest of the styles for typography and layout.

Class Name Rules
- Write only in sematic HTML without any CSS or styles. 
- Do **NOT** write any CSS.
- Do **NOT** include any `style` attributes.
- Use tailwind classes **mostly** for layout, flexbox, grid, spacing, and typography.
- Do **NOT** apply tailwind classes on any table element: `table`, `thead`, `tr`, `td`, etc...
- Avoid using 

Color Rules
- Write all layouts in dark theme (unless explicitly asked not to).
- Primarily use `neutral` colors.
- For background, primarily use `neutral-700`, but you may also use `neutral-900`, `neutral-800`, and `black`.
- For border, only use `neutral-900` or `neutral-600`.
- For text, only use `white`, `neutral-200` or `neutral-400`.

Typography
- For weights, use only `font-semibold` and `font-normal`. Use semibold in place of bold.

For all icons, use emoji wrapped in a span: `<span class="mri-emojicon">❤️</span>`.

Additional classes and component patterns:

```html

<!-- a more intense, brand-colored primary button -->
<button class="mri-appearance-primary">Primary</button>

<!-- *(default)* - a button with an outline -->
<button>Outline</button>

<!-- a button with a dark background, and no outline -->
<button class="mri-appearance-subtle">Subtle</button>

<!-- a button with no background  -->
<button class="mri-appearance-transparent">Transparent</button>

<!-- displays a icon button with 1:1 aspect ratio -->
<button class="mri-icon-only">X</button>

<!-- All the following elements will appear as buttons -->
<input type="reset" value="Input Reset" />
<input type="submit" value="Input Submit" />
<a href="#" class="mri-button">Anchor Button</a>
<select class="mri-button">
  <option value="">Select Button</option>
</select>

<!-- *(default)* - an input with a dark background, and no outline -->
<input type="text" placeholder="Subtle" />

<!-- *(default)* - an input with an outline -->
<input type="text" placeholder="Outline" class="mri-appearance-outline" />

<!-- 
 An `.mri-input` element will appear as visually input (with the child input unstyled). 
 This pattern should be used to include buttons, icons or other content inside of an input 
 Please use this pattern instead of tailwind layout where applicable
 -->
<div class="mri-input">
  <i class="mri-emojicon">🔍</i>
  <input type="text" placeholder="Search" />
  <button class="mri-size-small">Submit</button>
</div>

<!-- For the "switch" variant of a standalone checkbox, add the `.mri-switch` class -->
<label><input type="checkbox" class="mri-switch" checked />Checked</label>

<!-- slider input range element -->
<input type="range" min="0" max="100" value="50" />

<!-- the default progress bar -->
<progress value="33" max="100"></progress>

<!-- a pulsing progress bar -->
<progress indeterminate></progress>

<!-- The `.mri-spinner` variation displays a circular spinning loader instead of a progress bar -->
<progress class="mri-spinner" indeterminate></progress>

<!-- The "accordion" element is the native `details` and `summary` html elements -->
<details>
  <summary>Accordion Item</summary>
  <p>Content for the accordion item.</p>
</details>

<!-- 
 `.mri-tab` can be either button or link elements. 
 `.mri-tab-list` display horizontally by default, or vertically with `mri-vertical`
 PLEASE USE THIS PATTERN FOR TABS, DO NOT RECREATE TABS
-->

<nav class="mri-tab-list">
  <button class="mri-tab mri-active">Tab 1</button>
  <button class="mri-tab">Tab 1</button>
  <button class="mri-tab">Tab 1</button>
</nav>

<nav class="mri-tab-list mri-vertical">
  <a href="#" class="mri-tab mri-active">Tab 1</a>
  <a href="#" class="mri-tab">Tab 1</a>
  <a href="#" class="mri-tab">Tab 1</a>
</nav>

```