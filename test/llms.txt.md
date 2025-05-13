<goal>Use the mirai css framework to build UI according to user's needs</goal>

<requirements>

- Output a single HTML page
- Install the framework with a stylesheet: `<link rel="stylesheet" href="https://esm.sh/gh/aipx-proto/mirai-css/styles/mirai.build.css?raw" />`
- Avoid additional javascript and css libraries and frameworks
- Write as little CSS as possible. 

How to write CSS:
- Prefer using semantic HTML element as is, and if needed additional customization
- If you have to write new CSS, co-locate the `<style>` next to the element they apply to. Do NOT combine all the styles into a single stylesheet. Localize them to the elements they affect
- Only use css only for basic *Layout* properties. Please add spacing between elements and padding around content blocks where appropriate. Elements should never touch each other or borders. Please create responsive layouts that will resize to fit the screen by: minimizing the use of explicit size values for height, width, flex-basis.
- **Layout** refers to css layout modes and their related properties. This includes block layout, inline layout, flex, layout, grid layout, and positioned layout. This also includes properties that control the box model sizing including height, width, margin, padding and gap. (Please do not style table layout properties like border-collapse or border-spacing)
- Please **do not** write css to style the *Appearance* of elements. The framework already styles visual appearance of semantic HTML elements.
- **Appearance** refers to css that styles the any color or text property - this includes color, background, box-shadow, or anything with font.
- Use css variables to override semantic HTML elements, and additional customization if needed

When writing HTML and CSS with Mirai CSS, follow these guidelines:

- **Use semantic HTML**: Always use the most appropriate HTML elements for your content (e.g., `<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`, `<ul>`, `<li>`, `<form>`, `<label>`, `<input>`, `<button>`, `<dialog>`, etc.).
- **Do not apply custom styles directly to interactive elements**:  
  - **Links (`<a>`)**, **inputs (`<input>`, `<textarea>`, etc.)**, **buttons (`<button>`)**, and **dialogs (`<dialog>`)** should not have custom styles applied to them, except for layout purposes (such as spacing, alignment, or flex/grid placement).
  - Do not override their colors, borders, padding, or other appearance properties.  
- **Use the provided CSS variables** for:
  - Text color
  - Border radius
  - Font size and family
  - Shadows
  - Background and border colors
  - Sizing (height, padding, etc.)
- **Do not use or reference internal variables** all public variables follow the naming convention `--mri-<variable-name>`. Do not use any 'private' variables prefixed with an underscore like `--_<variable-name>`.
- **Compose layouts using semantic containers** (e.g., `<div>`, `<section>`, `<nav>`) and use the provided CSS variables to style layout-level elements (such as spacing, sizing, and shape).
- **No visual overrides**: Do not use inline styles or custom CSS to change the appearance of core interactive native html elements. Only use the public variables for layout and theming.

**Summary:**  
Write clean, semantic HTML. Use the public CSS variables for layout and theming of container elements. Never restyle links, inputs, buttons, or dialogs beyond layout/placement (unless explicitly asked to).

</requirements>

<documentation>

## CSS Variables

**Note:**  
All mirai.css variables follow the naming convention `.--mir-<variable-name>`. 

### Font

- Font Sizes - numbers roughly corrospond to default h tag sizes - ex: `h1` defaults to `--mri-font-size-1`;
  - `--mri-font-size-1`: (e.g., 40px) – largest.  
  - `--mri-font-size-2`: (e.g., 28px)  
  - `--mri-font-size-3`: (e.g., 20px)  
  - `--mri-font-size-4`: (e.g., 16px)  
  - `--mri-font-size-5`: (e.g., 14px)  *(default)*
  - `--mri-font-size-6`: (e.g., 12px)  
  - `--mri-font-size-7`: (e.g., 10px) – smallest.  
- `--mri-font-family-sans`: Main sans-serif font stack
- `--mri-font-family-mono`: Monospace font stack
- `--mri-font-weight-regular`: Regular font weight (e.g., 400)
- `--mri-font-weight-bold`: Bold font weight (e.g., 700)

### Border Radius

- `--mri-border-radius-none`: 0
- `--mri-border-radius-small`: 4px
- `--mri-border-radius-medium`: 8px
- `--mri-border-radius-large`: 12px
- `--mri-border-radius-xlarge`: 16px
- `--mri-border-radius-circular`: 10000px (for fully rounded elements)

### Colors

- `--mri-color-brand-base`: Primary brand color (e.g., #0091ff)
- Background colors for different surfaces
  - `--mri-color-background-1` is lightest - the background for most panels
  - `--mri-color-background-2` is the background for inputs and controls inside a primary panel
  - `--mri-color-background-3` is the darker page background (the default html element background)
  - `--mri-color-background-4` is the darkest, not often used
- Border colors
 - `--mri-color-border-1` - wraps free-standing cards, or used as a divider - lighter than the background-1
 - `--mri-color-border-2` - divides panels - darker than background-1 (same color as background-3)
- Text Color
  - `--mri-color-text-1` - Most intense - for headings and important text
  - `--mri-color-text-2` - *(default)* Normal body text
  - `--mri-color-text-3` - Muted text color, used for subdued information
  - `--mri-color-text-3` - Very faint, used for disabled or placeholder text

### Shadows
Values for `box-shadow`. 
- `--mri-shadow-2`: Lowest, smallest, least intense
- `--mri-shadow-4`: 
- `--mri-shadow-8`: 
- `--mri-shadow-16`:
- `--mri-shadow-28`:
- `--mri-shadow-64`: Highest, largest, most intense

## Utility Class Names

**Note:**  
All mirai.css utility classes follow the naming convention `.mir-<class-name>`. 
  
### Theme Classes
Apply theme to the html element. Dark theme is default 
- `.mri-theme-dark`: *(default)* Applies dark color scheme variables for backgrounds, borders, and text.
- `.mri-theme-light`: Applies light color scheme variables for backgrounds, borders, and text.

### Sizing Classes
- `.mri-size-small`: Applies small height, font size, padding, and icon size.
- `.mri-size-medium`: *(default)* Applies medium height, font size, padding, and icon size. (Default)
- `.mri-size-large`: Applies large height, font size, padding, and icon size.

### Shape Classes
can be applied to `button` and `input`
- `.mri-shape-square`: Applies a small border radius for square corners.
- `.mri-shape-rounded`: *(default)* Applies a medium border radius for rounded corners.
- `.mri-shape-circular`: Applies a very large border radius for fully circular shapes.

### Appearance
- `button`
  - `.mri-appearance-primary` - a more intense, brand-colored primary button
  - `.mri-appearance-outline` *(default)* - a button with an outline
  - `.mir-appearance-subtle` - a button with a dark background, and no outline
  - `.mri-appearance-transparent` - a button with no background 
- `input`
  - `.mri-appearance-outline` - 
  - `.mir-appearance-subtle` *(default)* - 

### Icons
- Use emoji for icons

### Component Composition
- In instances where a button or icon exists inside an input, Use a .mri-control-group instead.

## Layout guidelines
... forthcoming


## Components

### Button

#### Appearances
```html
<button class="mri-appearance-primary">Primary</button>
<button class="mri-appearance-outline">Outline</button>
<button class="mri-appearance-subtle">Subtle</button>
<button class="mri-appearance-transparent">Transparent</button>
```

#### States
```html
<button>Default</button>
<button disabled>Disabled</button>
<button class="mri-active">Active</button>
<button class="mri-icon-only">X</button>
```

#### Elements
All the following elements will appear as buttons. Using the `.mir-button` class will display an `a` anchor or `select` element as a button instead of its default
```html
<input type="reset" value="Input Reset" />
<input type="submit" value="Input Submit" />
<a href="#" class="mri-button">Anchor Button</a>
<select class="mri-button">
  <option value="">Select Button</option>
</select>
```

### Control Group
An element with the `mri-control-group` class renders multiple `button`s and `input`s as one unit. 
A modifier class (like `mri-size-large`) placed on the control group will apply to all its children.

```html
<div class="mri-control-group">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

Example with size, shape, active, and icon-only
```html
<div class="mri-control-group mri-size-small mri-shape-square">
  <button>Size Small</button>
  <button>Shape Square</button>
  <button class="mri-active">Selected</button>
  <button class="mri-icon-only">•••</button>
</div>
```

Standalone Form
```html
<form class="mri-control-group mri-shape-rounded">
  <input type="email" placeholder="Your email" />
  <button>Subscribe</button>
</form>
```

### Input

```html
<input type="text" placeholder="Default" />
<input type="text" placeholder="Disabled" disabled />
<input type="text" placeholder="Outline" class="mri-appearance-outline" />
```

Non-Text Types
```html
<input type="number" placeholder="000" />
<input type="color" />
<input type="date" />
```

### Select
By default, this element has a very similar appearance to an `input`
```html
<select>
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```

However, it can be styled to appear like a button by using the `mri-button` class
```html
<select class="mri-button">
  <option value="">Pick a value</option>
  <option value="1">Value 1</option>
  <option value="2">Value 2</option>
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

### Switch
For the "switch" variant of a standalone checkbox, add the `mri-switch` class

#### States
```html
<label>
  <input type="checkbox" class="mri-switch" checked />
  Checked
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
The `.mri-spinner` variation displays a round spinning loader instead of a progress bar
```html
<progress class="mri-spinner" indeterminate></progress>
```

## Overlay

### Dialog
The native `dialog` element will style child `header`, `main`, and `footer` elements with layout properties

A button with `mri-dialog-close` button will appear in the top right of the dialog

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
    <!-- the mri-dialog-close button will appear in the top right  -->
    <button class="mri-dialog-close mri-appearance-transparent mri-icon-only">X</button>
    <button class="mri-appearance-subtle">Cancel</button>
    <button class="mri-appearance-primary">Primary</button>
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
The `mri-menu` displays a vertically stacked menu of buttons. This should be used in a `popover`, and is commonly used with a "split button": a Control group that combines a main button with a icon-only overflow button that opens a popover menu

```html
<div class="mri-control-group">
  <button class="mri-appearance-primary mri-shape-rounded">Split Button</button>
  <button class="mri-appearance-primary mri-icon-only mri-shape-rounded" popovertarget="menu-example">•••</button>
</div>
<div class="mri-menu" id="menu-example" popover>
  <button>Add</button>
  <button>Edit</button>
  <button>Duplicate</button>
  <hr />
  <button class="mri-intent-primary">Delete</button>
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
...

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


</documentation>