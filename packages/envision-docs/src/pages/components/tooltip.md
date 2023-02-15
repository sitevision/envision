---
title: Tooltip
---

<span class="env-badge env-badge--info">Added in 2023.02.1</span>

```html
<span class="env-tooltip">
   <a class="env-link" href="javascript:void(0)">Hover or focus</a>
   <span role="tooltip">A Tooltip</span>
</span>
```

## Initialization

All elements with classname `env-tooltip` and one child element with `role="tooltip"`
will be automatically initialized on `DOMContentLoaded`.

Elements with other classnames and elements added to the DOM after document was loaded must be initialized from script.
A child element with `role="tooltip"` is required.

```javascript
// Initialize elements added after DOMContentLoaded
envision.tooltip();
```

**Note:** HTML is not allowed inside the tooltip. For advanced content, please use [Popover Tooltip](/components/popover/#tooltip).

## Configuration

Use data-attributes or option parameters in JavaScript for settings.

See [available options below](#options).

### Example using data-attributes

```html
<div class="example-input-fields">
   <div class="env-form-element">
      <label for="password-example" class="env-form-element__label">
         Password - show tooltip after one second
      </label>
      <div
         class="env-tooltip env-form-element__control"
         data-placement="bottom-start"
         data-delay="1000"
      >
         <input
            type="password"
            class="env-form-input"
            aria-describedby="password-example-tooltip"
            id="password-example"
         />
         <span role="tooltip" id="password-example-tooltip">
            Minimum of 8 characters
         </span>
      </div>
   </div>
</div>
```

### Example using JavaScript

```html
<span class="example-custom-init-tooltip">
   <button class="env-button">Show tooltip to the right</button>
   <span role="tooltip">Description of the button</span>
</span>
```

#### Initialization of JavaScript example

```javascript
const tooltipEl = document.querySelectorAll('.example-custom-init-tooltip');
if (tooltipEl) {
   envision.tooltip(tooltipEl, {
      placement: 'right',
      delay: 300,
   });
}
```

## Options <span id="options" class="offset-anchor"></span>

`envision.tooltip` takes two parameters:

```javascript
envision.tooltip(element, options);
```

-  `element` - You may pass any selector as a string, a DOM node or node list. Leave empty to initialize all new elements with class `env-tooltip`.

-  `options` - _{ placement, delay }_

   -  `placement` _string_

      -  Prefered initial placement.
      -  Default value: `top`
      -  Possible values: `top`, `right`, `bottom`, `left`, `auto`,
      -  Possible value modifiers <span class="env-badge env-badge--info">2023.02.2</span>: `{value}-start`, `{value}-end`

   -  `delay` _number_

      -  Milliseconds for delaying the popover opening and closing.
      -  Default value: `200`
