---
title: Popover
---

<div class="code-example">
<div class="example-static-popover env-popover" data-popper-placement="bottom">
   <div class="env-popover__arrow"></div>
   <div class="env-popover__header">
      <h4 class="env-ui-text-overline">Popover</h4>
   </div>
   <div class="env-popover__content">
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum
         nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum
         cursus eros, vitae mattis leo laoreet eget.
      </p>
   </div>
</div>
</div>

## Configuration and initialization

Initialize from script. Use data-attributes on the opener element or option parameters in JavaScript for settings.

See [available options below](#options).

### Example using data-attributes

```html
<button
   id="example-popover-data"
   class="env-button env-button--primary"
   data-placement="top"
   data-trigger="hover focus"
   data-title="Lorem ipsum"
   data-delay="200"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Hover or focus me!
</button>
```

```javascript
envision.popover('#example-popover-data');
```

### Example using JavaScript

The content will be fetched from a template element and displayed in the popover.

```html
<template id="example-popover-content">
   <div class="env-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>In fermentum <a href="#">nunc bibendum laoreet</a> malesuada.</p>
      <p>
         Proin eget augue tortor. <b>Sed bibendum cursus eros</b>, vitae mattis
         leo laoreet eget.
      </p>
   </div>
</template>
<button id="example-popover-button" class="env-button env-button--primary">
   Click me!
</button>
```

```javascript
const popoverContentEl = document.querySelector('#example-popover-content');
if (popoverContentEl) {
   envision.popover('#example-popover-button', {
      placement: 'bottom',
      title: 'Lorem ipsum',
      content: popoverContentEl,
      escapeContent: false,
      clickOutside: true,
   });
}
```

## Popover menu

Add `type: 'menu'` in JS or `data-type="menu"` in HTML
for a menu-styled popover. Use class `env-popover__item` for the menu items.

<div class="env-m-vertical--large">
<div class="example-static-popover env-popover" data-popper-placement="bottom">
   <div class="env-popover__arrow"></div>
   <div class="env-popover__header">
      <h4 class="env-ui-text-overline">Popover menu</h4>
   </div>
   <div class="env-popover__menu">
<ul>
      <li>
         <button type="button" class="env-popover__item">
            <svg class="env-icon">
               <use href="/sitevision/envision-icons.svg#icon-file"></use>
            </svg>
            Action
         </button>
      </li>
</ul>
   </div>
</div>
</div>

```html
<template id="example-popover-menu-content">
   <ul>
      <li>
         <button type="button" class="env-popover__item">
            <svg class="env-icon">
               <use href="/sitevision/envision-icons.svg#icon-file"></use>
            </svg>
            Action
         </button>
      </li>
      <li>
         <button type="button" class="env-popover__item">
            <svg class="env-icon">
               <use href="/sitevision/envision-icons.svg#icon-bell"></use>
            </svg>
            Properties
         </button>
      </li>
      <li class="env-popover--divider" role="separator"></li>
      <li>
         <button type="button" class="env-popover__item">
            <svg class="env-icon">
               <use href="/sitevision/envision-icons.svg#icon-check-done"></use>
            </svg>
            Settings
         </button>
      </li>
   </ul>
</template>
<button id="example-popover-menu-button" class="env-button env-button--primary">
   Show popover menu
</button>
```

```javascript
const popoverMenuContentEl = document.querySelector(
   '#example-popover-menu-content'
);
if (popoverMenuContentEl) {
   envision.popover('#example-popover-menu-button', {
      placement: 'top',
      title: 'Popover menu',
      content: popoverMenuContentEl,
      escapeContent: false,
      clickOutside: true,
      type: 'menu',
   });
}
```

<span id="tooltip" class="offset-anchor"></span>

## Popover Tooltip <span class="doc-badge doc-badge--info">2023.05.1</span>

Add `type: 'tooltip'` in JS or `data-type="tooltip"` in HTML
for a Tooltip-styled popover. Common text components will adjust color automatically.

<div class="env-m-vertical--large">
<div class="example-static-popover env-popover env-popover--tooltip" data-popper-placement="bottom">
<div class="env-popover__arrow"></div>
   <div class="env-popover__header">
      <h4 class="env-ui-text-overline">Popover Tooltip</h4>
   </div>
   <div class="env-popover__content">
      <p class="env-text">
         Lorem ipsum dolor sit amet
      </p>
   </div>
</div>
</div>

```html
<template id="example-popover-tooltip-content">
   <p class="env-text">
      Lorem ipsum dolor sit amet,
      <a href="javascript:void(0)">consectetur adipiscing elit</a>. In fermentum
      nunc bibendum laoreet malesuada.
   </p>
   <p class="env-ui-text-caption">Aliquam diam risus tincidunt.</p>
</template>
<button
   id="example-popover-tooltip-button"
   class="env-button env-button--primary"
>
   Show popover tooltip
</button>
```

```javascript
const popoverTooltipContentEl = document.querySelector(
   '#example-popover-tooltip-content'
);
if (popoverTooltipContentEl) {
   envision.popover('#example-popover-tooltip-button', {
      placement: 'top',
      title: 'Popover tooltip',
      content: popoverTooltipContentEl,
      escapeContent: false,
      clickOutside: true,
      type: 'tooltip',
   });
}
```

## Options <span id="options" class="offset-anchor"></span>

-  `placement` _string_

   -  Prefered initial placement.
   -  Default value: `top`
   -  Possible values: `top`, `right`, `bottom`, `left`

-  `title` _string_

   -  Popover title.
   -  Default value: `''`

-  `content` _string_ | _HTMLElement_ <span class="doc-badge doc-badge--info">2023.05.1</span>

   -  Popover content.
   -  Default value: `''`

-  `escapeContent` _boolean_

   -  Treat option `content` as text or HTML. If popover content is HTML, this needs to be set to `false`.
   -  Default value: `true`

-  `trigger` _string_

   -  Single event or mulitple space separated events for opening the popover.
   -  Default value: `click`

-  `delay` _number_

   -  Milliseconds for delaying the popover closing. When opening on hover, a value of at least `200` is recommended.
   -  Default value: `0`

-  `clickOutside` _boolean_

   -  Close popover on click outside.
   -  Default value: `false`

-  `type` _string_ <span class="doc-badge doc-badge--info">2023.05.1</span>

   -  Popover styling
   -  Default value: null
   -  Possible values: `menu`, `tooltip`
