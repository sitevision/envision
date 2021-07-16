---
title: Range slider
---

Capture a range

```html
<div id="my-slider" class="env-range-slider example-range-slider">
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
// Since Sitevision 9.1
envision.rangeSlider('#my-slider', object);

// Deprecated Sitevision 9.1
$('#my-slider').envRangeSlider({ values: [20, 70] });
```

## Options

### values

-  **Type:** Array
-  **Default:** [0, 0]

Values to initialize the slider with.

```javascript
// Since Sitevision 9.1
envision.rangeSlider('#my-slider', {
   values: [20, 70],
});

// Deprecated Sitevision 9.1
$('#my-slider').envRangeSlider({
   values: [20, 70],
});
```

### min

-  **Type:** Number
-  **Default:** 0

The minimum value of the slider.

```javascript
// Since Sitevision 9.1
envision.rangeSlider('#my-slider', {
   min: 100,
});

// Deprecated Sitevision 9.1
$('#my-slider').envRangeSlider({
   min: 100,
});
```

### max

-  **Type:** Number
-  **Default:** 100

The maximum value of the slider.

```javascript
// Since Sitevision 9.1
envision.rangeSlider('#my-slider', {
   max: 200,
});

// Deprecated Sitevision 9.1
$('#my-slider').envRangeSlider({
   max: 200,
});
```

### step

-  **Type:** Number
-  **Default:** 1

The size of every step between min and max. The value range (max - min) should be evenly divisible by the step.

```javascript
// Since Sitevision 9.1
envision.rangeSlider('#my-slider', {
   step: 5,
});

// Deprecated Sitevision 9.1
$('#my-slider').envRangeSlider({
   step: 5,
});
```

### visibleValues

-  **Type:** Boolean
-  **Default:** true

If values should be visible below the handles.

```javascript
// Since Sitevision 9.1
envision.rangeSlider('#my-slider', {
   visibleValues: false,
});

// Deprecated Sitevision 9.1
$('.my-slider').envRangeSlider({ visibleValues: false });
```

## Events

### slide

Triggered for every move during slide.

```javascript
$('#my-slider').on('slide', function (e, data) {
   // Do something...
});

$('#my-slider').envRangeSlider({
   slide: function (e, data) {
      // Do something...
   },
});
```

### slidestop

Triggered when slide is completed

```javascript
$('#my-slider').on('slidestop', function (e, data) {
   // Do something...
});

$('#my-slider').envRangeSlider({
   slidestop: function (e, data) {
      // Do something...
   },
});
```

## Methods

### values(values)

Parameters

-  **values:** An array of values to set

Set the values for the range.

```javascript
// Since Sitevision 9.1
envision.rangeSlider('#my-slider').then(function (sliders) {
   sliders[0].values([50, 90]);
});

// Deprecated Sitevision 9.1
$('#my-slider').envRangeSlider('values', [50, 90]);
```
