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
- **Do not use or reference internal variables** not listed in the "Public Variables" section.
- **Compose layouts using semantic containers** (e.g., `<div>`, `<section>`, `<nav>`) and use the provided CSS variables to style layout-level elements (such as spacing, sizing, and shape).
- **No visual overrides**: Do not use inline styles or custom CSS to change the appearance of core interactive native html elements. Only use the public variables for layout and theming.

**Summary:**  
Write clean, semantic HTML. Use the public CSS variables for layout and theming of container elements. Never restyle links, inputs, buttons, or dialogs beyond layout/placement (unless explicitly asked to).


## Public Variables

**Only use the variables listed below.**
Variables not listed here are internal and should not be used.

### Font

- `--fontSize1` to `--fontSize7`: Font sizes (e.g., 40px, 28px, 20px, 16px, 14px, 12px, 10px)- 1 is largest, 7 is smallest
- `--fontFamilySans`: Main sans-serif font stack
- `--fontFamilyMono`: Monospace font stack
- `--fontWeightRegular`: Regular font weight (e.g., 400)
- `--fontWeightBold`: Bold font weight (e.g., 700)

### Border Radius

- `--borderRadiusNone`: 0
- `--borderRadiusSmall`: 4px
- `--borderRadiusMedium`: 8px
- `--borderRadiusLarge`: 12px
- `--borderRadiusXLarge`: 16px
- `--borderRadiusCircular`: 10000px (for fully rounded elements)

### Colors

- `--colorBrandBase`: Primary brand color (e.g., #0091ff)
- `--colorBackground1` to `--colorBackground4`: Background colors for different surfaces
  - 1 is the background for primary panels
  - 2 is the background for inputs and controls inside a primary panel
  - 3 is the darker page background
  - 4 is the darkest, not often used
- `--colorBorder1`, `--colorBorder2`: Border colors - 1 is a divider, 2 is the same as background 3
- `--colorText1` to `--colorText4`: Text colors for different emphasis - 1 is most intense, 4 is least intense

### Shadows

- `--shadow2`, `--shadow4`, `--shadow8`, `--shadow16`, `--shadow28`, `--shadow64`: Predefined box shadow styles. 2 is least, 64 is most

## Utility Class Names

### Theme Classes
- `.theme-dark`: (default) Applies dark color scheme variables for backgrounds, borders, and text.
- `.theme-light`: Applies light color scheme variables for backgrounds, borders, and text.

### Sizing Classes
- `.size-small`: Applies small height, font size, padding, and icon size.
- `.size-medium`: Applies medium height, font size, padding, and icon size. (Default)
- `.size-large`: Applies large height, font size, padding, and icon size.

### Shape Classes
- `.shape-square`: Applies a small border radius for square corners.
- `.shape-rounded`: Applies a medium border radius for rounded corners.
- `.shape-circular`: Applies a very large border radius for fully circular shapes.

### Appearance

- `button.appearance-primary` for primary buttons
- `button.appearance-transparent` for primary buttons without an outline or background
- `input.appearance-outline` for inputs with a border


