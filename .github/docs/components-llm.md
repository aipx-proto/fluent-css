# Fluent Web Components Reference

## `<fluent-accordion>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| expand-mode | enum | single, multi | Controls the expand mode of the Accordion, either allowing single or multiple item expansion. |

### Slots

| Name | Description |
|------|-------------|
| default | The default slot for the accordion items |

## `<fluent-accordion-item>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| size | enum | small, medium, large, extra-large | Defines accordion header font size. |
| marker-position | enum | start, end | Sets expand and collapsed icon position. |
| block | boolean |  | Sets the width of the focus state. |
| heading-level | enum | 1, 2, 3, 4, 5, 6 | Configures the https://www.w3.org/TR/wai-aria-1.1/#aria-level | level of the heading element. |
| id | string |  | The item ID |

### Slots

| Name | Description |
|------|-------------|
| start | Content positioned before heading in the collapsed state |
| heading | Content which serves as the accordion item heading and text of the expand button |
| default | The default slot for accordion item content |
| marker-expanded | The expanded icon |
| marker-collapsed | The collapsed icon |

### CSS Parts

| Name | Description |
|------|-------------|
| heading | Wraps the button |
| button | The button which serves to invoke the item |
| content | The wrapper for the accordion item content |

## `<fluent-badge>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | enum | filled, ghost, outline, tint | The appearance the badge should have. |
| color | enum | brand, danger, important, informative, severe, subtle, success, warning | The color the badge should have. |
| shape | enum | circular, rounded, square | The shape the badge should have. |
| size | enum | tiny, extra-small, small, medium, large, extra-large | The size the badge should have. |

## `<fluent-button>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | enum | primary, outline, subtle, transparent | Indicates the styled appearance of the button. |
| shape | enum | circular, rounded, square | The shape of the button. |
| size | enum | small, medium, large | The size of the button. |
| icon-only | boolean |  | Indicates that the button should only display as an icon with no text content. |
| autofocus | boolean |  | Indicates the button should be focused when the page is loaded. |
| disabled-focusable | boolean |  | Indicates that the button is focusable while disabled. |
| tabindex | number |  | Sets that the button tabindex attribute |
| formaction | string |  | The URL that processes the form submission. |
| form | string |  | The id of a form to associate the element to. |
| formenctype | string |  | The encoding type for the form submission. |
| formmethod | string |  | The HTTP method that the browser uses to submit the form. |
| formnovalidate | boolean |  | Indicates that the form will not be validated when submitted. |
| formtarget | enum | _blank, _self, _parent, _top | The target frame or window to open the form submission in. |
| name | string |  | The name of the element. This element's value will be surfaced during form submission under the provided name. |
| type | enum | submit, reset, button | The button type. |
| value | string |  | The value attribute. |

### Slots

| Name | Description |
|------|-------------|
| start | Content which can be provided before the button content |
| end | Content which can be provided after the button content |
| default | The default slot for button content |

### CSS Parts

| Name | Description |
|------|-------------|
| content | The button content container |

## `<fluent-checkbox>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| shape | enum | circular, square | Indicates the shape of the checkbox. |
| size | enum | medium, large | Indicates the size of the control. |
| autofocus | boolean |  | Indicates that the element should get focus after the page finishes loading. |
| disabled | boolean |  | The initial disabled state of the control. |
| form | string |  | The id of a form to associate the element to. |
| checked | boolean |  | The initial checked state of the element. |
| value | string |  | The initial value of the input. |
| name | string |  | The name of the element. This element's value will be surfaced during form submission under the provided name. |

### Slots

| Name | Description |
|------|-------------|
| checked-indicator | The checked indicator |
| indeterminate-indicator | The indeterminate indicator |

## `<fluent-anchor-button>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | enum | primary, outline, subtle, transparent | The appearance the anchor button should have. |
| shape | enum | circular, rounded, square | The shape the anchor button should have. |
| size | enum | small, medium, large | The size the anchor button should have. |
| icon-only | boolean |  | The anchor button has an icon only, no text content |
| download | string |  | Prompts the user to save the linked URL. |
| href | string |  | The URL the hyperlink references. |
| hreflang | string |  | Hints at the language of the referenced resource. |
| ping | string |  | The ping attribute. |
| referrerpolicy | string |  | The referrerpolicy attribute. See The https://developer.mozilla.org/docs/Web/HTML/Element/a#referrerpolicy | `referrerpolicy` attribute |
| rel | string |  | The rel attribute. See The https://developer.mozilla.org/docs/Web/HTML/Element/a#rel | `rel` attribute |
| target | enum | _self, _blank, _parent, _top | The target attribute. |
| type | string |  | The type attribute. |

### Slots

| Name | Description |
|------|-------------|
| start | Content which can be provided before the anchor content |
| end | Content which can be provided after the anchor content |
| default | The default slot for anchor content |

### CSS Parts

| Name | Description |
|------|-------------|
| control | The anchor element |
| content | The element wrapping anchor content |

## `<fluent-avatar>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| shape | enum | circular, square | The avatar can have a circular or square shape. |
| appearance | enum | ring, shadow, ring-shadow | The appearance when `active="active"` |
| size | enum | 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128 | Size of the avatar in pixels.  Size is restricted to a limited set of supported values recommended for most uses (see `AvatarSizeValue`) and based on design guidelines for the Avatar control.  If a non-supported size is neeeded, set `size` to the next-smaller supported size, and set `width` and `height` to override the rendered size. |
| color | enum | neutral, brand, colorful | The color when displaying either an icon or initials. * neutral (default): gray * brand: color from the brand palette * colorful: picks a color from a set of pre-defined colors, based on a hash of the name (or colorId if provided) * [AvatarNamedColor]: a specific color from the theme |
| color-id | enum | dark-red, cranberry, red, pumpkin, peach, marigold, gold, brass, brown, forest, seafoam, dark-green, light-teal, teal, steel, blue, royal-blue, cornflower, navy, lavender, purple, grape, lilac, pink, magenta, plum, beige, mink, platinum, anchor | Specify a string to be used instead of the name, to determine which color to use when color="colorful". Use this when a name is not available, but there is another unique identifier that can be used instead. |
| name | string |  | The name of the person or entity represented by this Avatar. This should always be provided if it is available. |
| initials | string |  | Provide custom initials rather than one generated via the name |
| active | enum | active, inactive | Optional activity indicator * active: the avatar will be decorated according to activeAppearance * inactive: the avatar will be reduced in size and partially transparent * undefined: normal display |

## `<fluent-compound-button>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | enum | primary, outline, subtle, transparent | Indicates the styled appearance of the button. |
| shape | enum | circular, rounded, square | The shape of the button. |
| size | enum | small, medium, large | The size of the button. |
| icon-only | boolean |  | Indicates that the button should only display as an icon with no text content. |
| autofocus | boolean |  | Indicates the button should be focused when the page is loaded. |
| disabled-focusable | boolean |  | Indicates that the button is focusable while disabled. |
| tabindex | number |  | Sets that the button tabindex attribute |
| formaction | string |  | The URL that processes the form submission. |
| form | string |  | The id of a form to associate the element to. |
| formenctype | string |  | The encoding type for the form submission. |
| formmethod | string |  | The HTTP method that the browser uses to submit the form. |
| formnovalidate | boolean |  | Indicates that the form will not be validated when submitted. |
| formtarget | enum | _blank, _self, _parent, _top | The target frame or window to open the form submission in. |
| name | string |  | The name of the element. This element's value will be surfaced during form submission under the provided name. |
| type | enum | submit, reset, button | The button type. |
| value | string |  | The value attribute. |

### Slots

| Name | Description |
|------|-------------|
| start | Content which can be provided before the button content |
| end | Content which can be provided after the button content |
| default | The default slot for button content |

### CSS Parts

| Name | Description |
|------|-------------|
| content | The button content container |

## `<fluent-counter-badge>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | enum | filled, ghost | The appearance the badge should have. |
| color | enum | brand, danger, important, informative, severe, subtle, success, warning | The color the badge should have. |
| shape | enum | circular, rounded | The shape the badge should have. |
| size | enum | tiny, extra-small, small, medium, large, extra-large | The size the badge should have. |
| count | number |  | The count the badge should have. |
| overflow-count | number |  | Max number to be displayed |
| show-zero | boolean |  | If the badge should be shown when count is 0 |
| dot | boolean |  | If a dot should be displayed without the count |

## `<fluent-divider>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| align-content | enum | center, start, end |  |
| appearance | enum | strong, brand, subtle |  |
| inset | boolean |  |  |
| role | enum | separator, presentation | The role of the element. |
| orientation | enum |  | The orientation of the divider. |

## `<fluent-dialog>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| aria-describedby | string |  |  |
| aria-labelledby | string |  |  |
| type | enum | modal, non-modal, alert |  |

## `<fluent-drawer-body>`

### Slots

| Name | Description |
|------|-------------|
| title | The title slot |
| close | The close button slot |
| default | The default content slot |
| footer | The footer slot |

### CSS Parts

| Name | Description |
|------|-------------|
| header | The header part of the drawer |
| content | The content part of the drawer |
| footer | The footer part of the drawer |

## `<fluent-dropdown>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | enum | filled-darker, filled-lighter, outline, transparent | The appearance of the dropdown. |
| size | enum | small, medium, large | The size of the dropdown. |
| aria-labelledby | string |  | The `aria-labelledby` attribute value of the dropdown. |
| disabled | boolean |  | The disabled state of the dropdown. |
| id | string |  | Sets the listbox ID to a unique value if one is not provided. |
| value | string |  | The value of the selected option. |
| name | string |  | The name of the dropdown. |
| placeholder | string |  | The placeholder text of the dropdown. |
| type | enum | combobox, dropdown, select | The dropdown type. |

### Slots

| Name | Description |
|------|-------------|
| default | The default slot. Accepts a {@link (Listbox:class)} element. |
| indicator | The indicator slot. |
| control | The control slot. This slot is automatically populated and should not be manually manipulated. |

## `<fluent-dialog-body>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| no-title-action | boolean |  |  |

## `<fluent-drawer>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| type | enum | non-modal, modal, inline |  |
| position | enum | start, end | "" |
| size | enum | small, medium, large, full |  |
| ariaDescribedby | string |  | The ID of the element that describes the drawer. |
| ariaLabelledby | string |  | The ID of the element that labels the drawer. |
| aria-labelledby | string |  |  |
| aria-describedby | string |  |  |

### Slots

| Name | Description |
|------|-------------|
| default | Default slot for the content of the drawer. |

### CSS Parts

| Name | Description |
|------|-------------|
| dialog | The dialog element of the drawer. |

## `<fluent-field>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| label-position | enum | above, after, before | The position of the label relative to the input. |

### Slots

| Name | Description |
|------|-------------|
| label | The label element for the form input |
| input | The input element for the form input |
| label | an optional message to be displayed under the input |

## `<fluent-image>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| block | boolean |  | Image layout |
| bordered | boolean |  | Image border |
| shadow | boolean |  | Image shadow |
| fit | enum | none, center, contain, cover | Image fit |
| shape | enum | circular, rounded, square | Image shape |

## `<fluent-label>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| size | enum | small, medium, large | Specifies font size of a label |
| weight | enum | regular, semibold | Specifies font weight of a label |
| disabled | boolean |  | Specifies styles for label when associated input is disabled |
| required | boolean |  | Specifies styles for label when associated input is a required field |

## `<fluent-link>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | subtle |  | The appearance the link should have. |
| inline | boolean |  | The link is inline with text In chromium browsers, if the link is contained within a semantic text element (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`) or `fluent-text`, `:host-context()` ensures inline links are styled appropriately. |
| download | string |  | Prompts the user to save the linked URL. |
| href | string |  | The URL the hyperlink references. |
| hreflang | string |  | Hints at the language of the referenced resource. |
| ping | string |  | The ping attribute. |
| referrerpolicy | string |  | The referrerpolicy attribute. See The https://developer.mozilla.org/docs/Web/HTML/Element/a#referrerpolicy | `referrerpolicy` attribute |
| rel | string |  | The rel attribute. See The https://developer.mozilla.org/docs/Web/HTML/Element/a#rel | `rel` attribute |
| target | enum | _self, _blank, _parent, _top | The target attribute. |
| type | string |  | The type attribute. |

### Slots

| Name | Description |
|------|-------------|
| start | Content which can be provided before the link content |
| end | Content which can be provided after the link content |
| default | The default slot for link content |

### CSS Parts

| Name | Description |
|------|-------------|
| control | The anchor element |
| content | The element wrapping anchor content |

## `<fluent-listbox>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| id | string |  | Sets the listbox ID to a unique value if one is not provided. |

### Slots

| Name | Description |
|------|-------------|
| default | The default slot for the options. |

## `<fluent-menu>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| open-on-hover | boolean |  | Determines if the menu should open on hover. |
| open-on-context | boolean |  | Determines if the menu should open on right click. |
| close-on-scroll | boolean |  | Determines if the menu should close on scroll. |
| persist-on-item-click | boolean |  | Determines if the menu open state should persis on click of menu item |
| split | boolean |  | Determines if the menu is in split state. |

### Slots

| Name | Description |
|------|-------------|
| primary-action | Slot for the primary action elements. Used when in `split` state. |
| trigger | Slot for the trigger elements. |
| default | Default slot for the menu list. |

## `<fluent-menu-button>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | enum | primary, outline, subtle, transparent | Indicates the styled appearance of the button. |
| shape | enum | circular, rounded, square | The shape of the button. |
| size | enum | small, medium, large | The size of the button. |
| icon-only | boolean |  | Indicates that the button should only display as an icon with no text content. |
| autofocus | boolean |  | Indicates the button should be focused when the page is loaded. |
| disabled-focusable | boolean |  | Indicates that the button is focusable while disabled. |
| tabindex | number |  | Sets that the button tabindex attribute |
| formaction | string |  | The URL that processes the form submission. |
| form | string |  | The id of a form to associate the element to. |
| formenctype | string |  | The encoding type for the form submission. |
| formmethod | string |  | The HTTP method that the browser uses to submit the form. |
| formnovalidate | boolean |  | Indicates that the form will not be validated when submitted. |
| formtarget | enum | _blank, _self, _parent, _top | The target frame or window to open the form submission in. |
| name | string |  | The name of the element. This element's value will be surfaced during form submission under the provided name. |
| type | enum | submit, reset, button | The button type. |
| value | string |  | The value attribute. |

### Slots

| Name | Description |
|------|-------------|
| start | Content which can be provided before the button content |
| end | Content which can be provided after the button content |
| default | The default slot for button content |

### CSS Parts

| Name | Description |
|------|-------------|
| content | The button content container |

## `<fluent-menu-item>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| disabled | boolean |  | The disabled state of the element. |
| role | enum | menuitem, menuitemcheckbox, menuitemradio | The role of the element. |
| checked | boolean |  | The checked value of the element. |
| hidden | boolean |  | The hidden attribute. |

### Slots

| Name | Description |
|------|-------------|
| indicator | The checkbox or radio indicator |
| start | Content which can be provided before the menu item content |
| default | The default slot for menu item content |
| end | Content which can be provided after the menu item content |
| submenu-glyph | The submenu expand/collapse indicator |
| submenu | Used to nest menu's within menu items |

### CSS Parts

| Name | Description |
|------|-------------|
| content | The element wrapping the menu item content |

## `<fluent-menu-list>`

### Slots

| Name | Description |
|------|-------------|
| default | The default slot for the menu items |

## `<fluent-message-bar>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| shape | enum | rounded, square | Sets the shape of the Message Bar. |
| layout | enum | multiline, singleline | Sets the layout of the control. |
| intent | enum | success, warning, error, info | Sets the intent of the control. |

### Slots

| Name | Description |
|------|-------------|
| actions | Content that can be provided for the actions |
| dismiss | Content that can be provided for the dismiss button |
| default | The default slot for the content |

## `<fluent-dropdown-option>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| selected | boolean |  | The initial selected state of the option. |
| disabled | boolean |  | The initial disabled state of the option. |
| form | string |  | The id of a form to associate the element to. |
| freeform | boolean |  | Indicates that the option value should sync with the value of the dropdown's control. |
| id | string |  | The id of the option. If not provided, a unique id will be assigned. |
| value | string |  | The initial value of the option. |
| name | string |  | The name of the option. This option's value will be surfaced during form submission under the provided name. |
| text | string |  | The text to display in the dropdown control when the option is selected. |

### Slots

| Name | Description |
|------|-------------|
| default | The default slot for the option's content. |
| checked-indicator | The checked indicator. |
| description | Optional description content. |

## `<fluent-progress-bar>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| thickness | enum | medium, large | The thickness of the progress bar |
| shape | enum | rounded, square | The shape of the progress bar |
| validation-state | enum | success, warning, error | The validation state of the progress bar |

## `<fluent-radio>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| autofocus | boolean |  | Indicates that the element should get focus after the page finishes loading. |
| disabled | boolean |  | The initial disabled state of the control. |
| form | string |  | The id of a form to associate the element to. |
| checked | boolean |  | The initial checked state of the element. |
| value | string |  | The initial value of the input. |
| name | string |  | The name of the element. This element's value will be surfaced during form submission under the provided name. |

### Slots

| Name | Description |
|------|-------------|
| checked-indicator | The checked indicator slot |

## `<fluent-radio-group>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| disabled | boolean |  | Disables the radio group and child radios. |
| value | string |  | The value of the checked radio. |
| name | string |  | The name of the radio group. |
| orientation | enum |  | The orientation of the group. |
| required | boolean |  | Indicates whether the radio group is required. |

### Slots

| Name | Description |
|------|-------------|
| default | The default slot for the radio group |

## `<fluent-rating-display>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| color | enum | neutral, brand, marigold | The color of the rating display icons. |
| size | enum | small, medium, large | The size of the component. |
| compact | number |  | Renders a single filled icon with a label next to it. |
| icon-view-box | string |  | The `viewBox` attribute of the icon <svg> element. |

### Slots

| Name | Description |
|------|-------------|
| icon | SVG element used as the rating icon |

## `<fluent-form-associated-slider>`

## `<fluent-slider>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| size | enum | small, medium | The size of the slider |
| value | string |  | The initial value of the input. |
| disabled | boolean |  | The element's disabled state. |
| min | string |  | The minimum allowed value. |
| max | string |  | The maximum allowed value. |
| step | string |  | Value to increment or decrement via arrow keys, mouse click or drag. |
| orientation | Orientation |  | The orientation of the slider. |
| mode | single-value |  | The selection mode. |

### Slots

| Name | Description |
|------|-------------|
| thumb | The slot for a custom thumb element. |

### CSS Parts

| Name | Description |
|------|-------------|
| thumb-container | The container element of the thumb. |
| track-container | The container element of the track. |

## `<fluent-spinner>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| size | enum | tiny, extra-small, small, medium, large, extra-large, huge | The size of the spinner |
| appearance | enum | primary, inverted | The appearance of the spinner |

## `<fluent-form-associated-switch>`

## `<fluent-switch>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| autofocus | boolean |  | Indicates that the element should get focus after the page finishes loading. |
| disabled | boolean |  | The initial disabled state of the control. |
| form | string |  | The id of a form to associate the element to. |
| checked | boolean |  | The initial checked state of the element. |
| value | string |  | The initial value of the input. |
| name | string |  | The name of the element. This element's value will be surfaced during form submission under the provided name. |

## `<fluent-tab>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| disabled | boolean |  | When true, the control will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled | disabled HTML attribute for more information. |

## `<fluent-tab-panel>`

## `<fluent-tablist>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | enum | subtle, transparent | appearance There are two modes of appearance: transparent and subtle. |
| size | enum | small, medium, large | size defaults to medium. Used to set the size of all the tab controls, which effects text size and margins. Three sizes: small, medium and large. |
| disabled | boolean |  | Used for disabling all click and keyboard events for the tabs, child tab elements. |
| orientation | enum |  | The orientation |
| activeid | string |  | The id of the active tab |

## `<fluent-text>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| nowrap | boolean |  | The text will not wrap NOTE: In Fluent UI React v9 this is "wrap" Boolean attributes which default to true in HTML can't be switched off in the DOM |
| truncate | boolean |  | The text truncates |
| italic | boolean |  | The text style is italic |
| underline | boolean |  | The text style is underline |
| strikethrough | boolean |  | The text style is strikethrough |
| block | boolean |  | An text can take up the width of its container. |
| size | enum | 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 | THe Text size |
| font | enum | base, numeric, monospace | THe Text font |
| weight | enum | medium, regular, semibold, bold | The Text weight |
| align | enum | start, end, center, justify | THe Text align |

## `<fluent-text-input>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | enum | outline, underline, filled-lighter, filled-darker | Indicates the styled appearance of the element. |
| control-size | enum | small, medium, large | Sets the size of the control. |
| autocomplete | string |  | Indicates the element's autocomplete state. |
| autofocus | boolean |  | Indicates that the element should get focus after the page finishes loading. |
| current-value | string |  | The current value of the input. |
| dirname | string |  | Sets the directionality of the element to be submitted with form data. |
| form | string |  | The id of a form to associate the element to. |
| value | string |  | The initial value of the input. |
| list | string |  | Allows associating a `<datalist>` to the element by ID. |
| name | string |  | The name of the element. This element's value will be surfaced during form submission under the provided name. |
| pattern | string |  | A regular expression that the value must match to pass validation. |
| placeholder | string |  | Sets the placeholder value of the element, generally used to provide a hint to the user. |
| readonly | boolean |  | When true, the control will be immutable by user interaction. |
| type | enum | email, password, tel, text, url | Allows setting a type or mode of text. |

### Slots

| Name | Description |
|------|-------------|
| start | Content which can be provided before the input |
| end | Content which can be provided after the input |
| default | The default slot for button content |

### CSS Parts

| Name | Description |
|------|-------------|
| label | The internal `<label>` element |
| root | the root container for the internal control |
| control | The internal `<input>` control |

## `<fluent-tabs>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | enum | subtle, transparent | appearance There are two modes of appearance: transparent and subtle. |
| disabled | boolean |  | disabled Used for disabling all click and keyboard events for the tabs, child tab elements and tab panel elements. UI styling of content and tabs will appear as "grayed out." |
| size | enum | small, medium, large | size defaults to medium. Used to set the size of all the tab controls, which effects text size and margins. Three sizes: small, medium and large. |
| orientation | enum |  | The orientation |
| activeid | string |  | The id of the active tab |

## `<fluent-text-area>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| appearance | boolean |  | Indicates the visual appearance of the element. |
| size | enum | small, medium, large | Sets the size of the control. |
| autocomplete | enum | on, off | Indicates the element's autocomplete state. |
| auto-resize | boolean |  | Indicates whether the element’s block size (height) should be automatically changed based on the content. Note: When this property’s value is set to be `true`, the element should not have a fixed block-size defined in CSS. Instead, use `min-height` or `min-block-size`. |
| dirname | string |  | Sets the name of the value directionality to be submitted with form data. |
| display-shadow | boolean |  | Indicates whether the element displays a box shadow. This only has effect when `appearance` is set to be `filled-darker` or `filled-lighter`. |
| form | string |  | The id of a form to associate the element to. |
| maxlength | number |  | The maximum number of characters a user can enter. |
| minlength | number |  | The minimum number of characters a user can enter. |
| name | string |  | The name of the element. This element's value will be surfaced during form submission under the provided name. |
| placeholder | string |  | Sets the placeholder value of the element, generally used to provide a hint to the user. |
| readonly | boolean |  | When true, the control will be immutable by user interaction. |

### Slots

| Name | Description |
|------|-------------|
| default | The default content/value of the component. |
| label | The content for the `<label>`, it should be a `<fluent-label>` element. |

### CSS Parts

| Name | Description |
|------|-------------|
| label | The `<label>` element. |
| root | The container element of the `<textarea>` element. |
| control | The internal `<textarea>` element. |

## `<fluent-toggle-button>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| pressed | boolean |  | Indicates the pressed state of the control. |
| appearance | enum | primary, outline, subtle, transparent | Indicates the styled appearance of the button. |
| shape | enum | circular, rounded, square | The shape of the button. |
| size | enum | small, medium, large | The size of the button. |
| icon-only | boolean |  | Indicates that the button should only display as an icon with no text content. |
| disabled-focusable | boolean |  | Indicates that the button is focusable while disabled. |
| tabindex | number |  | Sets that the button tabindex attribute |
| formaction | string |  | The URL that processes the form submission. |
| form | string |  | The id of a form to associate the element to. |
| formenctype | string |  | The encoding type for the form submission. |
| formmethod | string |  | The HTTP method that the browser uses to submit the form. |
| formnovalidate | boolean |  | Indicates that the form will not be validated when submitted. |
| formtarget | enum | _blank, _self, _parent, _top | The target frame or window to open the form submission in. |
| name | string |  | The name of the element. This element's value will be surfaced during form submission under the provided name. |
| type | enum | submit, reset, button | The button type. |
| value | string |  | The value attribute. |

### Slots

| Name | Description |
|------|-------------|
| start | Content which can be provided before the button content |
| end | Content which can be provided after the button content |
| default | The default slot for button content |

### CSS Parts

| Name | Description |
|------|-------------|
| content | The button content container |

## `<fluent-tree>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| size | enum | small, medium | The size of the tree item element |
| appearance | enum | subtle, subtle-alpha, transparent | The appearance variants of the tree item element |

## `<fluent-tooltip>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| id | string |  | The item ID |
| delay | number |  | Set the delay for the tooltip |
| positioning | enum | block-startspan-inline-end, block-start, block-startspan-inline-start, block-endspan-inline-end, block-end, block-endspan-inline-start, inline-startspan-block-end, inline-start, inline-startspan-block-start, inline-endspan-block-end, inline-end, inline-endspan-block-start | Set the positioning of the tooltip |
| anchor | string |  | The id of the anchor element for the tooltip |

## `<fluent-tree-item>`

### Attributes

| Name | Type | Possible Values | Description |
|------|------|----------------|-------------|
| size | enum | small, medium | The size of the tree item element |
| appearance | enum | subtle, subtle-alpha, transparent | The size of the tree item element |
| expanded | boolean |  | When true, the control will be appear expanded by user interaction. |
| data-indent | number |  | The indent of the tree item element. This is not needed once css attr() is supported (--indent: attr(data-indent type(<number>))); |

