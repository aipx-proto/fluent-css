# Fluent Web Components Examples

## Basic Components

### Button
A versatile button component that supports multiple appearances (default, primary, outline, subtle, transparent), icon placement, and icon-only variants for various UI contexts.

```html
<fluent-button>Default</fluent-button>
<fluent-button icon-only>
  <svg class="icon" aria-hidden="true">
    <use href="#icon-calendar"></use>
  </svg>
</fluent-button>
<fluent-button appearance="primary">
  <svg class="icon" slot="start" aria-hidden="true">
    <use href="#icon-calendar"></use>
  </svg>
  Primary
</fluent-button>
<fluent-button appearance="outline">
  Outline
  <svg class="icon" slot="end" aria-hidden="true">
    <use href="#icon-calendar"></use>
  </svg>
</fluent-button>
<fluent-button appearance="subtle">Subtle</fluent-button>
<fluent-button appearance="transparent">Transparent</fluent-button>
```

### Menu
A dropdown menu component that supports both standard and split button variants, with nested items, icons, and keyboard navigation support.

```html
<fluent-menu>
  <fluent-menu-button aria-label="Toggle Menu" appearance="primary" slot="trigger">
    Toggle Menu
  </fluent-menu-button>
  <fluent-menu-list>
    <fluent-menu-item>Menu item 1</fluent-menu-item>
    <fluent-menu-item>Menu item 2</fluent-menu-item>
    <fluent-menu-item>Menu item 3</fluent-menu-item>
    <fluent-menu-item>Menu item 4</fluent-menu-item>
  </fluent-menu-list>
</fluent-menu>
<fluent-menu split>
  <fluent-button slot="primary-action">Primary Action</fluent-button>
  <fluent-menu-button slot="trigger" aria-label="Open menu" icon-only>
    <svg width="14" height="14"><use href="#icon-chevron-down"></use></svg>
    <span slot="end" style="display: none"></span>
  </fluent-menu-button>
  <fluent-menu-list>
    <fluent-menu-item>Menu item 1</fluent-menu-item>
    <fluent-menu-item>Menu item 2</fluent-menu-item>
    <fluent-menu-item>Menu item 3</fluent-menu-item>
    <fluent-menu-item>Menu item 4</fluent-menu-item>
  </fluent-menu-list>
</fluent-menu>
```

### Badge
A compact component that displays status indicators, labels, or counts with various appearances (filled, ghost, outline, tint) and semantic colors (brand, danger, important, etc.).

```html
<fluent-badge appearance="filled">filled</fluent-badge>
<fluent-badge appearance="ghost">ghost</fluent-badge>
<fluent-badge appearance="outline">outline</fluent-badge>
<fluent-badge appearance="tint">tint</fluent-badge>
<br />
<fluent-badge color="brand">brand</fluent-badge>
<fluent-badge color="danger">danger</fluent-badge>
<fluent-badge color="important">important</fluent-badge>
<fluent-badge color="informative">informative</fluent-badge>
<fluent-badge color="severe">severe</fluent-badge>
<fluent-badge color="subtle">subtle</fluent-badge>
<fluent-badge color="success">success</fluent-badge>
<fluent-badge color="warning">warning</fluent-badge>
<br />
<fluent-counter-badge count="5" shape="circular"></fluent-counter-badge>
<fluent-counter-badge count="5" shape="rounded"></fluent-counter-badge>
```

### Avatar
A circular component that displays user profile images or initials, with optional badge support for online status or notifications.

```html
<fluent-avatar name="Lydia Bauer">
  <fluent-badge slot="badge" size="extra-small"></fluent-badge>
</fluent-avatar>
```

### Divider
A horizontal line component that creates visual separation between content sections, helping to organize and structure the layout.

```html
<fluent-divider></fluent-divider>
```

## Form Components

### Text Input
A single-line text input component that supports placeholder text, validation states, and keyboard input for user text entry.

```html
<fluent-text-input appearance="filled-darker" placeholder="This is a placeholder"></fluent-text-input>
```

### Textarea
A multi-line text input component that supports resizing, placeholder text, and longer content entry with automatic scrolling.

```html
<fluent-textarea appearance="filled-darker" placeholder="This is a placeholder" resize="vertical"></fluent-textarea>
```

### Field
A form field wrapper component that combines labels, inputs, and supporting messages with flexible positioning options for form layout.

```html
<fluent-field label-position="above">
  <label slot="label" for="field-21">Example</label>
  <fluent-text-input appearance="filled-darker" slot="input" id="field-21"></fluent-text-input>
  <fluent-text slot="message" size="200">This is a supporting message</fluent-text>
</fluent-field>
```

### Checkbox
A binary selection component that allows users to select multiple options independently, with support for checked, unchecked, and disabled states.

```html
<fluent-field label-position="after">
  <label slot="label" for="checkbox-12">This</label>
  <fluent-checkbox id="checkbox-12" slot="input" checked></fluent-checkbox>
</fluent-field>
<br />
<fluent-field label-position="after">
  <label slot="label" for="checkbox-13">That</label>
  <fluent-checkbox id="checkbox-13" slot="input"></fluent-checkbox>
</fluent-field>
<br />
<fluent-field label-position="after">
  <fluent-label slot="label" for="checkbox-14">The Other</fluent-label>
  <fluent-checkbox id="checkbox-14" slot="input"></fluent-checkbox>
</fluent-field>
```

### Radio
A single-selection component that allows users to choose one option from a mutually exclusive set, with support for vertical and horizontal layouts.

```html
<fluent-field label-position="above">
  <label slot="label">Favorite Fruit</label>
  <fluent-radio-group
    slot="input"
    aria-labelledby="radio-group-vertical--label"
    orientation="vertical"
    name="favorite-fruit"
  >
    <fluent-field label-position="after">
      <label slot="label">Apple</label>
      <fluent-radio slot="input" name="favorite-fruit" value="apple"></fluent-radio>
    </fluent-field>
    <fluent-field label-position="after">
      <label slot="label">Pear</label>
      <fluent-radio slot="input" name="favorite-fruit" value="pear"></fluent-radio>
    </fluent-field>
    <fluent-field label-position="after">
      <label slot="label">Banana</label>
      <fluent-radio slot="input" name="favorite-fruit" value="banana"></fluent-radio>
    </fluent-field>
    <fluent-field label-position="after">
      <label slot="label">Orange</label>
      <fluent-radio slot="input" name="favorite-fruit" value="orange"></fluent-radio>
    </fluent-field>
    <fluent-field label-position="after" disabled>
      <label slot="label">Passionfruit</label>
      <fluent-radio slot="input" name="favorite-fruit" value="passionfruit" disabled></fluent-radio>
    </fluent-field>
  </fluent-radio-group>
</fluent-field>
```

### Switch
A toggle component that provides a simple on/off state with a sliding animation, ideal for enabling or disabling features or settings.

```html
<fluent-field label-position="after">
  <label slot="label">Switch</label>
  <fluent-switch slot="input"></fluent-switch>
</fluent-field>
```

### Slider
A range input component that allows users to select a value by dragging a handle along a track, with support for min/max values and step increments.

```html
<fluent-field label-position="before">
  <label slot="label" for="slider-in-field">Slider</label>
  <fluent-slider slot="input" id="slider-in-field"></fluent-slider>
</fluent-field>
```

### Dropdown
A select component that displays a list of options in a dropdown menu, supporting keyboard navigation, search, and multiple selection modes.

```html
<fluent-field>
  <label slot="label">Select a fruit</label>
  <fluent-dropdown appearance="filled-darker" placeholder="Select a fruit" slot="input">
    <fluent-listbox>
      <fluent-option value="apple">Apple</fluent-option>
      <fluent-option value="banana">Banana</fluent-option>
      <fluent-option value="orange">Orange</fluent-option>
      <fluent-option value="mango">Mango</fluent-option>
      <fluent-option value="kiwi">Kiwi</fluent-option>
      <fluent-option value="cherry">Cherry</fluent-option>
      <fluent-option value="grapefruit">Grapefruit</fluent-option>
      <fluent-option value="papaya">Papaya</fluent-option>
      <fluent-option value="lychee">Lychee</fluent-option>
    </fluent-listbox>
  </fluent-dropdown>
</fluent-field>
```

## Feedback Components

### Message Bar
A notification component that displays important messages with different intents (info, warning, success, error), supporting icons, actions, and dismiss buttons.

```html
<fluent-message-bar layout="multiline">
  <span slot="icon">
    <svg class="icon" aria-hidden="true">
      <use href="#icon-info"></use>
    </svg>
  </span>
  The content of this message bar is multiline. That means it can span multiple lines. This is useful for longer messages. Hopefully this message is long enough to wrap to the next few lines.
  <fluent-button slot="actions" size="small">Action</fluent-button>
  <fluent-button slot="dismiss" size="small" appearance="transparent" icon-only>
    <svg class="icon" aria-hidden="true">
      <use href="#icon-close"></use>
    </svg>
  </fluent-button>
</fluent-message-bar>
<fluent-message-bar intent="warning">
  <span slot="icon" style="color: #da3b01">
    <svg class="icon" aria-hidden="true">
      <use href="#icon-warning"></use>
    </svg>
  </span>
  warning
  <fluent-button size="small" slot="actions">Action</fluent-button>
</fluent-message-bar>
<fluent-message-bar intent="success">
  <span slot="icon" style="color: #0e700e">
    <svg class="icon" aria-hidden="true">
      <use href="#icon-success"></use>
    </svg>
  </span>
  success
  <fluent-button size="small" slot="actions">Action</fluent-button>
</fluent-message-bar>
<fluent-message-bar intent="error">
  <span slot="icon" style="color: #b10e1c">
    <svg class="icon" aria-hidden="true">
      <use href="#icon-error"></use>
    </svg>
  </span>
  error
  <fluent-button size="small" slot="actions">Action</fluent-button>
</fluent-message-bar>
```

### Progress Bar
A progress indicator component that shows completion status with optional value display, supporting both determinate and indeterminate states.

```html
<fluent-progress-bar></fluent-progress-bar>
<fluent-progress-bar id="progress-bar-valued" value="10"></fluent-progress-bar>
```

### Spinner
A loading indicator component that shows an animated spinner with optional text, indicating that content is being loaded or processed.

```html
<fluent-spinner>Spinner</fluent-spinner>
```

## Navigation Components

### Tabs
A tabbed interface component that organizes content into separate panels, with automatic panel switching and keyboard navigation support.

```html
<fluent-tabs>
  <fluent-tab id="first-tab">First Tab</fluent-tab>
  <fluent-tab id="second-tab">Second Tab</fluent-tab>
  <fluent-tab id="third-tab">Third Tab</fluent-tab>
  <fluent-tab id="fourth-tab">Fourth Tab</fluent-tab>
  <fluent-tab-panel id="first-tab-panel">Tab One Content</fluent-tab-panel>
  <fluent-tab-panel id="second-tab-panel">Tab Two Content</fluent-tab-panel>
  <fluent-tab-panel id="third-tab-panel">Tab Three Content</fluent-tab-panel>
  <fluent-tab-panel id="fourth-tab-panel">Tab Four Content</fluent-tab-panel>
</fluent-tabs>
```

### Tree View
A hierarchical navigation component that displays nested items with expand/collapse functionality, supporting icons and multiple levels of nesting.

```html
<fluent-tree size="medium" appearance="subtle">
  <fluent-tree-item>
    Item 1
    <fluent-tree-item>
      <svg class="icon" slot="start" aria-hidden="true">
        <use href="#icon-calendar"></use>
      </svg>
      Item 1-1
    </fluent-tree-item>
    <fluent-tree-item> Item 1-2 </fluent-tree-item>
    <fluent-tree-item> Item 1-3 </fluent-tree-item>
  </fluent-tree-item>
  <fluent-tree-item expanded>
    Item 2
    <fluent-tree-item>
      Item 2-1
      <fluent-tree-item>
        Item 2-1-1
        <fluent-tree-item>Item 2-1-1-1</fluent-tree-item>
        <fluent-tree-item>Item 2-1-1-1</fluent-tree-item>
      </fluent-tree-item>
      <fluent-tree-item>Item 2-1-2</fluent-tree-item>
    </fluent-tree-item>
    <fluent-tree-item>Item 2-2</fluent-tree-item>
    <fluent-tree-item>Item 2-3</fluent-tree-item>
  </fluent-tree-item>
</fluent-tree>
```

## Overlay Components

### Dialog
A modal dialog component that displays content in an overlay window, blocking interaction with the background content until dismissed.

```html
<fluent-button onclick="document.getElementById('dialog-default').show()">Open Dialog</fluent-button>
<fluent-dialog id="dialog-default">
  <fluent-dialog-body>
    <div slot="title">Default Dialog</div>
    <p>
      The dialog component is a window overlaid on either the primary window or another dialog window. Windows
      under a modal dialog are inert.
    </p>
    <p>That is, users cannot interact with content outside an active dialog window.</p>
    <fluent-button slot="action"> Cancel </fluent-button>
    <fluent-button slot="action" appearance="primary"> Confirm </fluent-button>
  </fluent-dialog-body>
</fluent-dialog>
```

### Drawer
A sliding panel component that appears from the side of the screen, supporting different positions, sizes, and optional overlay for modal behavior.

```html
<fluent-button appearance="primary" onclick="document.getElementById('drawer-default').show()">
  Toggle Drawer
</fluent-button>
<fluent-drawer
  id="drawer-default"
  position="start"
  size="medium"
  type="modal"
  style="--dialog-backdrop: var(--colorBackgroundOverlay)"
>
  <fluent-drawer-body>
    <span slot="title">Drawer Header</span>
    <fluent-button
      slot="close"
      appearance="transparent"
      icon-only
      aria-label="close"
      onclick="document.getElementById('drawer-default').hide()"
    >
      <svg class="icon" aria-hidden="true">
        <use href="#icon-close"></use>
      </svg>
    </fluent-button>
    <div>
      <p>
        The drawer gives users a quick entry point to configuration and information. It should be used when
        retaining context is beneficial to users. An overlay is optional depending on whether or not interacting
        with the background content is beneficial to the user's context/scenario. An overlay makes the drawer
        blocking and signifies that the users full attention is required when making configurations.
      </p>
    </div>
    <div slot="footer">
      <fluent-button appearance="primary">Confirm</fluent-button>
      <fluent-button>Cancel</fluent-button>
    </div>
  </fluent-drawer-body>
</fluent-drawer>
```

### Tooltip
A floating label component that displays additional information when hovering over an element, with automatic positioning and arrow indicators.

```html
<strong id="tooltip-target">Hover me</strong>
<fluent-tooltip anchor="tooltip-target">
  Really long tooltip content goes here. Lorem ipsum dolor sit amet.
</fluent-tooltip>
``` 