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
