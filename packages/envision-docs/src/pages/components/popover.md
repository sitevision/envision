---
title: Popover
---

```html
<div class="env-popover">
   <div class="env-popover__arrow env-popover__arrow--top"></div>
   <div class="env-popover__header">
      <h4 class="env-text env-popover__header__title">Popover</h4>
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

```html
<div class="env-popover">
   <div class="env-popover__arrow env-popover__arrow--bottom"></div>
   <div class="env-popover__header">
      <h4 class="env-text env-popover__header__title">Popover</h4>
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

```html
<div class="env-popover">
   <div class="env-popover__arrow env-popover__arrow--left"></div>
   <div class="env-popover__header">
      <h4 class="env-text env-popover__header__title">Popover</h4>
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

```html
<div class="env-popover">
   <div class="env-popover__arrow env-popover__arrow--right"></div>
   <div class="env-popover__header">
      <h4 class="env-text env-popover__header__title">Popover</h4>
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

```html
<button
   class="env-button env-button--primary example-popover"
   data-placement="top"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Try me!
</button>
```

```html
<button
   class="env-button env-button--primary example-popover"
   data-placement="top"
   data-click-outside="true"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Close when clicking outside!
</button>
```

```html
<button
   class="env-button example-popover"
   data-placement="top"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Top
</button>

<button
   class="env-button example-popover"
   data-placement="right"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Right
</button>

<button
   class="env-button example-popover"
   data-placement="bottom"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Bottom
</button>

<button
   class="env-button example-popover"
   data-placement="left"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Left
</button>
```

```html
<button
   class="env-button env-button--primary example-popover"
   data-placement="top"
   data-trigger="focus"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Focus me!
</button>
```

```html
<button
   class="env-button env-button--primary example-popover"
   data-placement="top"
   data-trigger="hover"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Hover me!
</button>
```

```html
<button
   class="env-button env-button--primary example-popover"
   data-placement="top"
   data-trigger="hover focus"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Hover OR focus me!
</button>
```

To keep the popover alive when being hovered it requires a delay to function properly. Use `data-delay="{delay}"`.

```html
<button
   class="env-button env-button--primary example-popover"
   data-placement="top"
   data-trigger="hover"
   data-title="Lorem ipsum"
   data-delay="500"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget."
>
   Hover with delay!
</button>
```

## Popover menu <span class="env-badge env-badge--info">9.0</span>

```html
<div class="env-popover">
   <div class="env-popover__arrow env-popover__arrow--top"></div>
   <div class="env-popover__header">
      <h4 class="env-text env-popover__header__title">Popover menu</h4>
   </div>
   <ul class="env-popover__menu">
      <li role="presentation">
         <button type="button" role="menuitem" class="env-popover__item">
            <svg class="env-icon env-icon--x-small env-m-right--xx-small">
               <use
                  xlink:href="/sitevision/envision-icons.svg#icon-grid-small"
               ></use>
            </svg>
            Action
         </button>
      </li>
      <li role="presentation">
         <button type="button" role="menuitem" class="env-popover__item">
            <svg class="env-icon env-icon--x-small env-m-right--xx-small">
               <use
                  xlink:href="/sitevision/envision-icons.svg#icon-grid-big"
               ></use>
            </svg>
            Properties
         </button>
      </li>
      <li class="env-popover--divider" role="separator"></li>
      <li role="presentation">
         <button type="button" role="menuitem" class="env-popover__item">
            <svg class="env-icon env-icon--x-small env-m-right--xx-small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-list"></use>
            </svg>
            Settings
         </button>
      </li>
   </ul>
</div>
```

## Initiation

```javascript
// Since Sitevision 9.1
envision.popover('.example-popover');

// Deprecated since Sitevision 9.1
$('.example-popover').envPopover();
```
