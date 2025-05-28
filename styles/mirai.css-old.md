# Mirai CSS – Usage Guide

## Code Authoring Guidelines

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


## Public Variables

**Only use the variables listed below.**
Variables not listed here are internal and should not be used.

### Font

- `--mri-font-size-1` to `--mri-font-size-7`: Font sizes (e.g., 40px, 28px, 20px, 16px, 14px, 12px, 10px)- 1 is largest, 7 is smallest
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
- `--mri-color-background-1` to `--mri-color-background-4`: Background colors for different surfaces
  - 1 is the background for primary panels
  - 2 is the background for inputs and controls inside a primary panel
  - 3 is the darker page background
  - 4 is the darkest, not often used
- `--mri-color-border-1`, `--mri-color-border-2`: Border colors - 1 is a divider, 2 is the same as background 3
- `--mri-color-text-1` to `--mri-color-text-4`: Text colors for different emphasis - 1 is most intense, 4 is least intense

### Shadows

- `--mri-shadow-2`, `--mri-shadow-4`, `--mri-shadow-8`, `--mri-shadow-16`, `--mri-shadow-28`, `--mri-shadow-64`: Predefined box shadow styles. 2 is least, 64 is most

## Utility Class Names
**Note:**  
All mirai.css utility classes follow the naming convention `.mir-<class-name>`. 
  
### Theme Classes
- `.mri-theme-dark`: (default) Applies dark color scheme variables for backgrounds, borders, and text.
- `.mri-theme-light`: Applies light color scheme variables for backgrounds, borders, and text.

### Sizing Classes
- `.mri-size-small`: Applies small height, font size, padding, and icon size.
- `.mri-size-medium`: Applies medium height, font size, padding, and icon size. (Default)
- `.mri-size-large`: Applies large height, font size, padding, and icon size.

### Shape Classes
- `.mri-shape-square`: Applies a small border radius for square corners.
- `.mri-shape-rounded`: Applies a medium border radius for rounded corners.
- `.mri-shape-circular`: Applies a very large border radius for fully circular shapes.

### Appearance

- `button.mri-appearance-primary` for primary buttons
- `button.mri-appearance-transparent` for primary buttons without an outline or background
- `input.mri-appearance-outline` for inputs with a border


