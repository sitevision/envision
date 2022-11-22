---
title: Popover
---

```html
<div class="env-popover" data-popper-placement="bottom">
   <div class="env-popover__arrow"></div>
   <div class="env-popover__header">
      <h4 class="env-ui-text-overline">Popover</h4>
   </div>
   <div class="env-popover__content">
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum
         nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum
         cursus eros, vitae mattis leo laoreet eget. Cras luctus semper
         facilisis. Aliquam diam risus, tincidunt vitae erat sed, lobortis
         pretium magna. Donec sollicitudin lorem eget imperdiet auctor.
      </p>
   </div>
</div>
```

## Configuration and initialization

Initialize from script. Use data-attributes or option parameters in JavaScript for settings.

See [available options below](#options).

### Example using data-attributes

```html
<button
   class="env-button env-button--primary example-popover-data"
   data-placement="top"
   data-trigger="hover focus"
   data-title="Lorem ipsum"
   data-delay="200"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Hover or focus me!
</button>
```

#### Initialization of data-attributes example

```javascript
envision.popover('.example-popover-data');
```

### Example using JavaScript

Content is read from hidden DOM element and displayed in the popover.

```html
<div id="example-popover-content" class="env-d--none">
   <div class="env-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>In fermentum <a href="#">nunc bibendum laoreet</a> malesuada.</p>
      <p>
         Proin eget augue tortor. <b>Sed bibendum cursus eros</b>, vitae mattis
         leo laoreet eget.
      </p>
   </div>
</div>
<button class="env-button env-button--primary example-popover-js">
   Click me!
</button>
```

#### Initialization of JavaScript options example

```javascript
const popoverContentEl = document.querySelector('#example-popover-content');
if (popoverContentEl) {
   envision.popover('.example-popover-js', {
      placement: 'bottom',
      title: 'Lorem ipsum',
      content: popoverContentEl.innerHTML,
      escapeContent: false,
      clickOutside: true,
   });
}
```

## Popover menu <span class="env-badge env-badge--info">9.0</span>

```html
<div class="env-popover" data-popper-placement="top">
   <div class="env-popover__arrow"></div>
   <div class="env-popover__header">
      <h4 class="env-ui-text-overline" id="popover-heading">Popover menu</h4>
   </div>
   <ul class="env-popover__menu" aria-labelledby="popover-heading">
      <li>
         <button type="button" class="env-popover__item">
            <svg class="env-icon">
               <use xlink:href="/sitevision/envision-icons.svg#icon-file"></use>
            </svg>
            Action
         </button>
      </li>
      <li>
         <button type="button" class="env-popover__item">
            <svg class="env-icon">
               <use xlink:href="/sitevision/envision-icons.svg#icon-bell"></use>
            </svg>
            Properties
         </button>
      </li>
      <li class="env-popover--divider" role="separator"></li>
      <li>
         <button type="button" class="env-popover__item">
            <svg class="env-icon">
               <use
                  xlink:href="/sitevision/envision-icons.svg#icon-check-done"
               ></use>
            </svg>
            Settings
         </button>
      </li>
   </ul>
</div>
```

## Options <span id="options" class="offset-anchor"></span>

-  `placement` _string_

   -  Prefered initial placement.
   -  Default value: `top`

-  `title` _string_

   -  Popover title.
   -  Default value: `''`

-  `content` _string_

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
