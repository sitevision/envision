---
title: Range slider
---

Capture a range

<span class="env-badge env-badge--danger">Changed in 2023.09.1</span>

Changes have been made to event callback parameters, please see [Event documentation](#events).

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

-  **Type:** Array
-  **Default:** [0, 0]

Values to initialize the slider with.

```javascript
envision.rangeSlider('#my-slider', {
   values: [20, 70],
});
```

### min

-  **Type:** Number
-  **Default:** 0

The minimum value of the slider.

```javascript
envision.rangeSlider('#my-slider', {
   min: 100,
});
```

### max

-  **Type:** Number
-  **Default:** 100

The maximum value of the slider.

```javascript
envision.rangeSlider('#my-slider', {
   max: 200,
});
```

### step

-  **Type:** Number
-  **Default:** 1

The size of every step between min and max. The value range (max - min) should be evenly divisible by the step.

```javascript
envision.rangeSlider('#my-slider', {
   step: 5,
});
```

### visibleValues

-  **Type:** Boolean
-  **Default:** true

If values should be visible below the handles.

```javascript
envision.rangeSlider('#my-slider', {
   visibleValues: false,
});
```

<span id="events" class="offset-anchor"></span>

## Events <span class="env-badge env-badge--danger">Changed 2023.09.1</span>

Since 2023.09.1, events will be triggered using native CustomEvent. Event listeners
added using jquery will continue to work, but the Range slider data is no longer
available as a second `data` parameter. Data is now a property of the event object
`e` and can be read from `e.detail`.

Available events: `slide` and `slidestop`.

```javascript
document.querySelector('#my-slider').addEventListener('slide', (e) => {
   // Triggered for every move during slide.
   console.log('slide', e.detail);
});

document.querySelector('#my-slider').addEventListener('slidestop', (e) => {
   // Triggered when slide is completed
   console.log('slidestop', e.detail);
});

envision.rangeSlider({
   slide: (e) => {
      // Do something...
      console.log('slide', e.detail);
   },
   slidestop: (e) => {
      // Do something...
      console.log('slidestop', e.detail);
   },
});
```

## Methods

### values(values)

Parameters

-  **values:** An array of values to set

Set the values for the range.

```javascript
envision.rangeSlider('#my-slider').then(function (sliders) {
   sliders[0].values([50, 90]);
});
```
