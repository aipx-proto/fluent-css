# Mirai.css Tailwind Components

Mirai.css is a CSS component library designed to integrate with Tailwind, but can also be used independently.

**Mirai.css** is responsible to for the appearance of native HTML components like like `a`, `button`, `input`, `details`, etc...
Do **NOT** apply interactive or appearance styles to these elements because they are already styled by the imported `mirai.css`.

**Tailwind** is responsible for the rest of the styles for typography and layout.

**Class Name Rules**
- When writing HTML or jsx, do not write any CSS or styles. 
- Do **NOT** write any CSS: No `.class-names` or other selectors. No `<style>` blocks.
- Do **NOT** include any `style` attributes.
- Use tailwind classes **mostly** for layout, flexbox, grid, spacing, and typography.
- Do **NOT** apply tailwind classes on any table element: `table`, `thead`, `tr`, `td`, etc...
- Avoid using 

**Color Rules**
- Write all layouts in dark theme (unless explicitly asked not to).
- Primarily use `neutral` colors.
- For background, primarily use `neutral-700`, but you may also use `neutral-900`, `neutral-800`, and `black`.
- For border, only use `neutral-900` or `neutral-600`.
- For text, only use `white`, `neutral-200` or `neutral-400`.

**Typography**
- For weights, use only `font-semibold` and `font-normal`.
- Use `font-semibold` in place of bold.

For all icons, use emoji wrapped in a span: `<span class="emojicon">❤️</span>`.

**Additional classes and component patterns:**

```html

<!-- a more intense, brand-colored primary button -->
<button class="appearance-primary">Primary</button>

<!-- *(default)* - a button with an outline -->
<button>Outline</button>

<!-- a button with a dark background, and no outline -->
<button class="appearance-subtle">Subtle</button>

<!-- a button with no background  -->
<button class="appearance-transparent">Transparent</button>

<!-- displays a icon button with 1:1 aspect ratio -->
<button class="icon-only"><span class="emojicon">✖️</span></button>

<!-- All the following elements will appear as buttons -->
<input type="reset" value="Input Reset" />
<input type="submit" value="Input Submit" />
<a href="#" class="button">Anchor Button</a>
<select class="button">
  <option value="">Select Button</option>
</select>

<!-- *(default)* - an input with a dark background, and no outline -->
<input type="text" placeholder="Subtle" />

<!-- *(default)* - an input with an outline -->
<input type="text" placeholder="Outline" class="appearance-outline" />

<!-- 
 An `.input` element will appear as visually input (with the child input unstyled). 
 This pattern should be used to include buttons, icons or other content inside of an input 
 Please use this pattern instead of tailwind layout where applicable
 -->
<div class="input">
  <i class="emojicon">🔍</i>
  <input type="text" placeholder="Search" />
  <button class="size-small">Submit</button>
</div>

<!-- Radio -->
<div>
  <label><input type="radio" name="options" value="1" checked />Option 1</label>
  <label><input type="radio" name="options" value="2" />Option 2</label>
</div>

<!-- Checkbox -->
<label><input type="checkbox" value="A" checked />Option A</label>
<label><input type="checkbox" value="B" />Option B</label>
<label><input type="checkbox" value="C" />Option C</label>

<!-- For the "switch" variant of a standalone checkbox, add the `.switch` class -->
<label><input type="checkbox" class="switch" checked />Switch</label>

<!-- slider input range element -->
<input type="range" min="0" max="100" value="50" />

<!-- textarea -->
<textarea>Long Text Content<textarea>

<!-- the default progress bar -->
<progress value="33" max="100"></progress>

<!-- a pulsing progress bar -->
<progress indeterminate></progress>

<!-- The `.spinner` variation displays a circular spinning loader instead of a progress bar -->
<progress class="spinner" indeterminate></progress>

<!-- The "accordion" element is the native `details` and `summary` html elements -->
<details>
  <summary>Accordion Item</summary>
  <p>Content for the accordion item.</p>
</details>

<!-- 
 `.tab` can be either button or link elements. 
 `.tab-list` display horizontally by default, or vertically with `vertical`
 PLEASE USE THIS PATTERN FOR TABS, DO NOT RECREATE TABS
-->

<nav class="tab-list">
  <button class="tab active">Tab 1</button>
  <button class="tab">Tab 1</button>
  <button class="tab">Tab 1</button>
</nav>

<nav class="tab-list vertical">
  <a href="#" class="tab active">Tab 1</a>
  <a href="#" class="tab">Tab 1</a>
  <a href="#" class="tab">Tab 1</a>
</nav>

<!-- 
 Sizes The `.size-large` or `.size-small` class can be applied to **ANY** of the above components to size them up or down. 
 Some examples: 
-->
<button class="size-large">Large Button</button>
<input class="size-small" value="Small Input" />
<span><progress class="spinner size-large" indeterminate></progress>Large Loading Spinner</span>
<label><input type="checkbox" class="switch size-large" checked />Small Switch</label>

<!-- Dialog -->
<button onclick="document.getElementById('dialog-example').showModal()">Open Dialog</button>
<dialog id="dialog-example" closedby="any">
  <h3>Dialog Title</h3>
  <p>This is a sample dialog window using the dialog element</p>
  <button class="appearance-primary">Confirm</button>
  <!-- `.dialog-close` button will be position:absolute to the top right -->
  <button class="dialog-close appearance-transparent icon-only">X</button>
</dialog>

<!-- Popover -->
<button popovertarget="popover-example">Click for popover</button>
<div id="popover-example" popover>
  <h3>Popover Title</h3>
  <p>This is a Popover using the new popover API</p>
</div>

```