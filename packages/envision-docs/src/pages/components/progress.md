---
title: Progress indicator
---

## Types

```html
<div class="example-progress">
   <div class="env-progress">
      <div
         class="env-progress__bar"
         role="progressbar"
         aria-valuenow="0"
         aria-valuemin="0"
         aria-valuemax="100"
      ></div>
   </div>
   <div class="env-progress">
      <div
         class="env-progress__bar"
         role="progressbar"
         style="width: 50%"
         aria-valuenow="50"
         aria-valuemin="0"
         aria-valuemax="100"
      ></div>
   </div>
   <div class="env-progress">
      <div
         class="env-progress__bar"
         role="progressbar"
         style="width: 100%"
         aria-valuenow="100"
         aria-valuemin="0"
         aria-valuemax="100"
      ></div>
   </div>
</div>
```

## Styling

### Labels

```html
<div class="example-progress">
   <div class="env-progress">
      <div
         class="env-progress__bar"
         role="progressbar"
         style="width: 25%"
         aria-valuenow="25"
         aria-valuemin="0"
         aria-valuemax="100"
      >
         25%
      </div>
   </div>
   <div class="env-progress">
      <div
         class="env-progress__bar"
         role="progressbar"
         style="width: 50%"
         aria-valuenow="50"
         aria-valuemin="0"
         aria-valuemax="100"
      >
         50%
      </div>
   </div>
   <div class="env-progress">
      <div
         class="env-progress__bar"
         role="progressbar"
         style="width: 75%"
         aria-valuenow="75"
         aria-valuemin="0"
         aria-valuemax="100"
      >
         75%
      </div>
   </div>
</div>
```

### Colors

Use modifiers `--success`, `--warning` or `--danger` to change background color of `env-progress__bar`

```html
<div class="example-progress">
   <div class="env-progress">
      <div
         class="env-progress__bar env-progress__bar--success"
         role="progressbar"
         style="width: 50%"
         aria-valuenow="50"
         aria-valuemin="0"
         aria-valuemax="100"
      ></div>
   </div>
   <div class="env-progress">
      <div
         class="env-progress__bar env-progress__bar--warning"
         role="progressbar"
         style="width: 50%"
         aria-valuenow="50"
         aria-valuemin="0"
         aria-valuemax="100"
      ></div>
   </div>
   <div class="env-progress">
      <div
         class="env-progress__bar env-progress__bar--danger"
         role="progressbar"
         style="width: 50%"
         aria-valuenow="50"
         aria-valuemin="0"
         aria-valuemax="100"
      ></div>
   </div>
</div>
```

### Stripes

Apply modifier `--striped` to enhance the progress bar with stripes

```html
<div class="example-progress">
   <div class="env-progress">
      <div
         class="env-progress__bar env-progress__bar--striped"
         role="progressbar"
         style="width: 50%"
         aria-valuenow="50"
         aria-valuemin="0"
         aria-valuemax="100"
      ></div>
   </div>

   <div class="env-progress">
      <div
         class="env-progress__bar env-progress__bar--success env-progress__bar--striped"
         role="progressbar"
         style="width: 50%"
         aria-valuenow="50"
         aria-valuemin="0"
         aria-valuemax="100"
      ></div>
   </div>
</div>
```

Apply `--striped--flip` to flip stripes alignment

```html
<div class="example-progress">
   <div class="env-progress">
      <div
         class="env-progress__bar env-progress__bar--striped env-progress__bar--striped--flip"
         role="progressbar"
         style="width: 50%"
         aria-valuenow="50"
         aria-valuemin="0"
         aria-valuemax="100"
      ></div>
   </div>
</div>
```

### Animated stripes

Add `--striped--animated` to animate the stripes

```html
<div class="example-progress">
   <div class="env-progress">
      <div
         class="env-progress__bar env-progress__bar--striped env-progress__bar--striped--animated"
         role="progressbar"
         style="width: 75%"
         aria-valuenow="75"
         aria-valuemin="0"
         aria-valuemax="100"
      ></div>
   </div>
</div>
```

## Poll

<span class="env-badge env-badge--info">Added in 9.2</span>

```html
<div class="example-progress">
   <p class="env-text env-m-bottom--large">
      Lorem ipsum lectus molestie vivamus?
   </p>
   <div class="env-progress-poll" title="Number of votes: 5">
      <div
         class="env-progress-poll__bar"
         role="progressbar"
         aria-valuemin="0"
         aria-valuemax="100"
         aria-valuenow="10"
         style="width: 10%;"
      ></div>
      <div class="env-progress-poll__label">Pellentesque rutrum duis</div>
      <div class="env-progress-poll__value">10 %</div>
   </div>
   <div
      class="env-progress-poll env-progress-poll--highlighted"
      title="Number of votes: 29"
   >
      <div
         class="env-progress-poll__bar"
         role="progressbar"
         aria-valuemin="0"
         aria-valuemax="100"
         aria-valuenow="58"
         style="width: 58%;"
      ></div>
      <div class="env-progress-poll__label">
         Diam bibendum
         <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="env-progress-poll__icon"
         >
            <use
               xlink:href="/sitevision/envision-icons.svg#icon-check-done"
            ></use>
         </svg>
      </div>
      <div class="env-progress-poll__value">60 %</div>
   </div>
   <div class="env-progress-poll" title="Number of votes: 16">
      <div
         class="env-progress-poll__bar"
         role="progressbar"
         aria-valuemin="0"
         aria-valuemax="100"
         aria-valuenow="32"
         style="width: 32%;"
      ></div>
      <div class="env-progress-poll__label">
         Nibh urna eu vitae sem donec in sem tellus ipsum
      </div>
      <div class="env-progress-poll__value">30 %</div>
   </div>
</div>
```
