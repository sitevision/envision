---
title: Range slider
description: The Range Slider component lets users select a value or range with customizable intervals and limits.
---

Capture a range

```html
<div
   id="my-slider"
   class="env-range-slider example-range-slider env-m-bottom--xxx-large"
>
   <div class="env-range-slider__range"></div>
   <div class="env-range-slider__handle" tabindex="0"></div>
   <div class="env-range-slider__handle" tabindex="0"></div>

   <div class="env-range-slider__values">
      <span
         class="env-range-slider__values__value env-range-slider__values__value--from env-text"
      ></span>
      <span class="env-range-slider__values__separator env-text">-</span>
      <span class="env-range-slider__values__value env-text"></span>
   </div>
</div>
```

```javascript
envision.rangeSlider('#my-slider', object);
```

## Options

### values

- **Type:** Array
- **Default:** [0, 0]

Values to initialize the slider with.

```javascript
envision.rangeSlider('#my-slider', {
   values: [20, 70],
});
```

### min

- **Type:** Number
- **Default:** 0

The minimum value of the slider.

```javascript
envision.rangeSlider('#my-slider', {
   min: 100,
});
```

### max

- **Type:** Number
- **Default:** 100

The maximum value of the slider.

```javascript
envision.rangeSlider('#my-slider', {
   max: 200,
});
```

### step

- **Type:** Number
- **Default:** 1

The size of every step between min and max. The value range (max - min) should be evenly divisible by the step.

```javascript
envision.rangeSlider('#my-slider', {
   step: 5,
});
```

### visibleValues

- **Type:** Boolean
- **Default:** true

If values should be visible below the handles.

```javascript
envision.rangeSlider('#my-slider', {
   visibleValues: false,
});
```

<span id="events" class="offset-anchor"></span>

## Events

### input

Triggered for every move during slide.

```javascript
document.querySelector('#my-slider').addEventListener('input', (e) => {
   console.log('input', e.detail);
});
```

### change

Triggered when slide is completed.

```javascript
document.querySelector('#my-slider').addEventListener('change', (e) => {
   // Triggered when slide is completed
   console.log('change', e.detail);
});
```

### slide <span class="doc-badge doc-badge--danger">Deprecated</span>

Triggered for every move during slide. Event `slide` is deprecated, please use `input` event.

### slidestop <span class="doc-badge doc-badge--danger">Deprecated</span>

Triggered when slide is completed. Event `slidestop` is deprecated, please use `change` event.

## Methods

### values(values)

Parameters

- **values:** An array of values to set

Set the values for the range.

```javascript
envision.rangeSlider('#my-slider').then(function (sliders) {
   sliders[0].values([50, 90]);
});
```
