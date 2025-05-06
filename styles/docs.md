# Mirai Build CSS – Usage Guide

This guide describes the public CSS variables you can use with `mirai.build.css`.
**Only use the variables listed below.**
Variables not listed here are internal and should not be used.

## Public Variables

### Font

- `--fontSize1` to `--fontSize7`: Font sizes (e.g., 40px, 28px, 20px, 16px, 14px, 12px, 10px)
- `--fontFamilySans`: Main sans-serif font stack
- `--fontFamilyMono`: Monospace font stack
- `--fontWeightRegular`: Regular font weight (e.g., 400)
- `--fontWeightBold`: Bold font weight (e.g., 600)

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
- `--colorBorder1`, `--colorBorder2`: Border colors
- `--colorText1` to `--colorText4`: Text colors for different emphasis

### Shadows

- `--shadow2`, `--shadow4`, `--shadow8`, `--shadow16`, `--shadow28`, `--shadow64`: Predefined box shadow styles

### Opacity

- `--opacityDisabled`: Opacity for disabled elements (e.g., 0.5)

## Utility Class Names

The following utility class names are available for use. These classes apply common sizing, shape, and theme variables to elements:

### Sizing Classes
- `.size-small`: Applies small height, font size, padding, and icon size.
- `.size-medium`: Applies medium height, font size, padding, and icon size. (Default)
- `.size-large`: Applies large height, font size, padding, and icon size.

### Shape Classes
- `.shape-square`: Applies a small border radius for square corners.
- `.shape-rounded`: Applies a medium border radius for rounded corners.
- `.shape-circular`: Applies a very large border radius for fully circular shapes.

### Theme Classes
- `.theme-dark`: Applies dark color scheme variables for backgrounds, borders, and text.
- `.theme-light`: Applies light color scheme variables for backgrounds, borders, and text.

**Note:** These classes are designed to be used on container elements or components to quickly apply consistent sizing, shape, or theme styles using the defined CSS variables.

