---
layout: docs
title: Range slider
description: Range slider description
group: components
---

Capture a range
{% example html %}
<div class="env-range-slider example-range-slider">
   <div class="env-range-slider__range"></div>
   <div class="env-range-slider__handle" tabindex="0"></div>
   <div class="env-range-slider__handle" tabindex="0"></div>
   <span class="env-range-slider__value env-text"></span>
   <span class="env-range-slider__value env-text"></span>
</div>
{% endexample %}

```javascript
$('.example-range-slider').envRangeSlider({
   values: [20, 70]
});
```

## Options ##

### values ###
* __Type:__ Array
* __Default:__ [0, 0]

Values to initialize the slider with.

```javascript
$('#my-slider').envRangeSlider({
   values: [20, 70]
});
```

### min ###
* __Type:__ Number
* __Default:__ 0

The minimum value of the slider.

```javascript
$('#my-slider').envRangeSlider({
   min: 100
});
```

### max ###
* __Type:__ Number
* __Default:__ 100

The maximum value of the slider.

```javascript
$('#my-slider').envRangeSlider({
   max: 200
});
```

### step ###
* __Type:__ Number
* __Default:__ 1

The size of every step between min and max. The value range (max - min) should be evenly divisible by the step. 

```javascript
$('#my-slider').envRangeSlider({
   step: 5
});
```

### visibleValues ###
* __Type:__ Boolean
* __Default:__ true

If values should be visible below the handles.

```javascript
$('.my-slider').envRangeSlider({
   visibleValues: false
});
```

## Events ##
### slide ###
Triggered for every move during slide.
```javascript
$('#my-slider').on('slide', function(e, data) { 
   // Do something... 
});

$('#my-slider').envRangeSlider({
   slide: function(e, data) {
      // Do something...
   }
});
```
### slidestop ###
Triggered when slide is completed
```javascript
$('#my-slider').on('slidestop', function(e, data) { 
   // Do something... 
});

$('#my-slider').envRangeSlider({
   slidestop: function(e, data) {
      // Do something...
   }
});
```

## Methods ##
### values(values) ###
Parameters
* __values:__ An array of values to set

Set the values for the range.
```javascript
$('#my-slider').envRangeSlider('values', [50, 90]);
```
