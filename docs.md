# Mirai.css

## Core

### Typography

#### Font Sizes
- `--font-size-1` to `--font-size-7`: Font sizes (e.g., 40px, 28px, 20px, 16px, 14px, 12px, 10px)- 1 is largest, 7 is smallest

```html
<span style="font-size: var(--font-size-1);">Font Size 1 - 40px</span>
<span style="font-size: var(--font-size-2);">Font Size 2 - 28px</span>
<span style="font-size: var(--font-size-3);">Font Size 3 - 20px</span>
<span style="font-size: var(--font-size-4);">Font Size 4 - 16px</span>
<span style="font-size: var(--font-size-5);">Font Size 5 - 14px</span>
<span style="font-size: var(--font-size-6);">Font Size 6 - 12px</span>
<span style="font-size: var(--font-size-7);">Font Size 7 - 10px</span>
```

#### Font Families
```html
<span style="font-family: var(--font-family-sans);">Font Family Sans</span>
<span style="font-family: var(--font-family-mono);">Font Family Mono</span>
```

#### Font Weights
```html
<span style="font-weight: var(--font-weight-regular);">Font Weight Regular</span>
<span style="font-weight: var(--font-weight-bold);">Font Weight Bold</span>
```

### Color

#### Text Colors
- `--color-text-1` to `--color-text-4`: Text colors for different emphasis - 1 is most intense, 4 is least intense

```html
<p style="color: var(--color-text-1);">Text 1</p>
<p style="color: var(--color-text-2);">Text 2</p>
<p style="color: var(--color-text-3);">Text 3</p>
<p style="color: var(--color-text-4);">Text 4</p>
```

#### Background Colors
- `--color-background-1` to `--color-background-4`: Background colors for different surfaces
  - 1 is the background for primary panels
  - 2 is the background for inputs and controls inside a primary panel
  - 3 is the darker page background
  - 4 is the darkest, not often used

```html
<div style="background-color: var(--color-background-1);">Background 1</div>
<div style="background-color: var(--color-background-2);">Background 2</div>
<div style="background-color: var(--color-background-3);">Background 3</div>
<div style="background-color: var(--color-background-4);">Background 4</div>
```

#### Border Colors
- `--color-border-1`, `--color-border-2`: Border colors - border-1 is a divider, border-2 is the same as background-3

```html
<div style="border: 1px solid var(--color-border-1);">Border 1</div>
<div style="border: 1px solid var(--color-border-2);">Border 2</div>
```

### Layout

#### Border Radius
```html
<div style="border-radius: 0">Radius None - 0px</div>
<div style="border-radius: var(--border-radius-small);">Radius Small - 4px</div>
<div style="border-radius: var(--border-radius-medium);">Radius Medium - 8px</div>
<div style="border-radius: var(--border-radius-large);">Radius Large - 12px</div>
<div style="border-radius: var(--border-radius-xlarge);">Radius XLarge - 16px</div>
<div style="border-radius: var(--border-radius-circular);">Radius Circular - 999px</div>
```

#### Shadows
- `--shadow-2` is the lowest visual z-index, and `--shadow-64` is the highest visual z-index

```html
<div style="box-shadow: var(--shadow-2);">Shadow 2</div>
<div style="box-shadow: var(--shadow-4);">Shadow 4</div>
<div style="box-shadow: var(--shadow-8);">Shadow 8</div>
<div style="box-shadow: var(--shadow-16);">Shadow 16</div>
<div style="box-shadow: var(--shadow-28);">Shadow 28</div>
<div style="box-shadow: var(--shadow-64);">Shadow 64</div>
```

## Forms

### Button

#### Appearances
```html
<button class="appearance-primary">Primary</button>
<button class="appearance-outline">Outline</button>
<button class="appearance-subtle">Subtle</button>
<button class="appearance-transparent">Transparent</button>
```

#### Sizes
```html
<button class="size-small">Small</button>
<button class="size-medium">Medium</button>
<button class="size-large">Large</button>
```

#### Shapes
```html
<button class="shape-square">Square</button>
<button class="shape-rounded">Rounded</button>
<button class="shape-circular">Circular</button>
```

#### States
```html
<button>Default</button>
<button disabled>Disabled</button>
<button class="active">Active</button>
<button class="icon-only">X</button>
```

#### Elements
```html
<input type="reset" value="Input Reset" />
<input type="submit" value="Input Submit" />
<a href="#" class="button">Anchor Button</a>
<select class="button">
  <option value="">Select Button</option>
</select>
```

### Control Group
An element with the `control-group` class renders multiple `button`s and `input`s as one unit. 
A modifier class (like `size-large`) placed on the control group will apply to all its children.

```html
<div class="control-group">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

#### Example with size, shape, active, and icon-only
```html
<div class="control-group size-small shape-square">
  <button>Size Small</button>
  <button>Shape Square</button>
  <button class="active">Selected</button>
  <button class="icon-only">•••</button>
</div>
```

#### Standalone Form
```html
<form class="control-group shape-rounded">
  <input type="email" placeholder="Your email" />
  <button>Subscribe</button>
</form>
```

### Input

```html
<input type="text" placeholder="Default" />
<input type="text" placeholder="Disabled" disabled />
<input type="text" placeholder="Outline" class="appearance-outline" />
```

#### Sizes
```html
<input type="text" placeholder="Small" class="size-small" />
<input type="text" placeholder="Medium" class="size-medium" />
<input type="text" placeholder="Large" class="size-large" />
```

#### Shapes
```html
<input type="text" placeholder="Square" class="shape-square" />
<input type="text" placeholder="Rounded" class="shape-rounded" />
<input type="text" placeholder="Circular" class="shape-circular" />
```

#### Non-Text Types
```html
<input type="number" placeholder="000" />
<input type="color" />
<input type="date" />
```

### Select
```html
<select>
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```

### Textarea
```html
<textarea placeholder="Textarea"></textarea>
```

### Radio

#### States
```html
<label>
  <input type="radio" name="radio" value="1" checked />
  Checked
</label>
<label>
  <input type="radio" name="radio" value="2" />
  Unchecked
</label>
```

#### Sizes
```html
<label class="size-large">
  <input type="radio" name="radio2" value="1" />
  Large
</label>
<label class="size-medium">
  <input type="radio" name="radio2" value="2" />
  Medium
</label>
<label class="size-small">
  <input type="radio" name="radio2" value="3" />
  Small
</label>
```

### Checkbox

#### States
```html
<label>
  <input type="checkbox" name="checkbox1" checked />
  Checked
</label>
<label>
  <input type="checkbox" name="checkbox3" />
  Unchecked
</label>
```

#### Sizes
```html
<label class="size-large">
  <input type="checkbox" name="checkbox-large" />
  Large
</label>
<label class="size-medium">
  <input type="checkbox" name="checkbox-medium" />
  Medium
</label>
<label class="size-small">
  <input type="checkbox" name="checkbox-small" />
  Small
</label>
```

### Switch
For the "switch" variant of a standalone checkbox, add the `switch` class

#### States
```html
<label>
  <input type="checkbox" class="switch" checked />
  Checked
</label>
<label>
  <input type="checkbox" class="switch" />
  Unchecked
</label>
```

#### Sizes
```html
<label>
  <input type="checkbox" class="switch size-small" />
  Small
</label>
<label>
  <input type="checkbox" class="switch size-medium" />
  Medium
</label>
<label>
  <input type="checkbox" class="switch size-large" />
  Large
</label>
```

### Slider
```html
<input type="range" min="0" max="100" value="50" />
```

### Progress
```html
<progress value="33" max="100"></progress>
<progress indeterminate></progress>
```

#### Spinner
The `spinner` variation displays a round spinning loader instead of a loading par
```html
<progress class="spinner" indeterminate></progress>
```

## Overlay

### Dialog
The native `dialog` element will style child `header`, `main`, and `footer` elements with layout properties

A button with `dialog-close` button will appear in the top right of the dialog

```html
<button onclick="document.getElementById('sample-dialog').showModal()">Open Dialog</button>

<dialog id="sample-dialog" closedby="any">
  <header>
    <h3>Dialog Title</h3>
    <span>An example dialog</span>
  </header>
  <main>
    <p>This is a sample dialog window with some content.</p>
  </main>
  <footer>
    <!-- the dialog-close button will appear in the top right  -->
    <button class="dialog-close appearance-transparent icon-only">X</button>
    <button class="appearance-subtle">Cancel</button>
    <button class="appearance-primary">Primary</button>
  </footer>
</dialog>
```

### Popover
Use the native html `popover` attribute and API to create a popover

```html
<button popovertarget="popover-example">Click for popover</button>
<div id="popover-example" popover>
  <h3>Popover Title</h3>
  <p>This is a Popover using the new popover API</p>
</div>
```

### Menu & Split Button
The `menu` displays a vertically stacked menu of buttons. This should be used in a `popover`, and is commonly used with a "split button": a Control group that combines a main button with a icon-only overflow button that opens a popover menu

```html
<div class="control-group">
  <button class="appearance-primary shape-rounded">Split Button</button>
  <button class="appearance-primary icon-only shape-rounded" popovertarget="menu-example">•••</button>
</div>
<div class="menu" id="menu-example" popover>
  <button>Add</button>
  <button>Edit</button>
  <button>Duplicate</button>
  <hr />
  <button class="intent-primary">Delete</button>
</div>
```

## Other

### Accordion
The "accordion" element is the native `details` and `summary` html elements

```html
<details>
  <summary>Accordion Item 1</summary>
  <p>Content for item 1</p>
</details>
<details>
  <summary>Accordion Item 2</summary>
  <p>Content for item 2</p>
</details>
<details open>
  <summary>Accordion Item Open</summary>
  <p>Content for open item</p>
</details>
```

### Tabs
The mirai tabs component consists of 2 parts: tab styles, and a css `:checked` hack to create tab functionality

#### Tabs style


#### Tabs Functionality
*How it works:*
An `input` `type="radio"` with `id="tab-N"` sits inside its `label` with `for="tab-N"` and `aria-controls="panel-N"`. When that `input` is `checked`, the corresponding element with `id="panel=N` ***anywhere in the dom*** will be displayed. 

The css-only tabs navigation uses `input[type="radio"]:checked` selector to  corresponding tab panel.

There are 20 available tab/panel ids hard-coded into the css file in the format `tab-<number>` and `panel-<number>` like: `tab-1`, `tab-2`, ... `tab-20` and `panel-1`, `panel-2`, ... `panel-20`



The `label` must have the `aria-controls`
The input is visually hidden with `display:none;`, but the `label` still interacts with this `input`.
When an `input` is `checked`

```html
<nav role="tablist">
  <label role="tab" aria-controls="panel-1" for="tab-1">
    <input type="radio" name="tab-group-1" id="tab-1" checked />
    Tab 1
  </label>
  <label role="tab" aria-controls="panel-2" for="tab-2">
    <input type="radio" name="tab-group-1" id="tab-2" />
    Tab 2
  </label>
  <label role="tab" aria-controls="panel-3" for="tab-3">
    <input type="radio" name="tab-group-1" id="tab-3" />
    Tab 3
  </label>
</nav>
<section id="panel-1" role="tabpanel" aria-labelledby="tab-1">
  <h3>First Tab Content</h3>
</section>
<section id="panel-2" role="tabpanel" aria-labelledby="tab-2">
  <h3>Second Tab Content</h3>
</section>
<section id="panel-3" role="tabpanel" aria-labelledby="tab-3">
  <h3>Third Tab Content</h3>
</section>
```

### Table
```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 2, Cell 3</td>
    </tr>
    <tr>
      <td>Row 3, Cell 1</td>
      <td>Row 3, Cell 2</td>
      <td>Row 3, Cell 3</td>
    </tr>
  </tbody>
</table>
```

### HTML Elements
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>. Here's some <mark>highlighted text</mark> and <del>deleted text</del>.</p>
<blockquote>This is a blockquote.</blockquote>
<p>Here's some <code>inline code</code> and a <kbd>keyboard input</kbd> example.</p>
<pre><code>// This is a code block
function example() {
    console.log("Hello, World!");
}</code></pre>
<hr />
<p>Here's a <a href="#">link</a> and an <abbr title="World Health Organization">WHO</abbr> abbreviation.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
</ol>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

