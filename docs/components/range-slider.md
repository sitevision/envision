---
layout: docs
title: Range slider
description: Range slider description
group: components
---

Capture a range
{% example html %}
   <div class="{{ site.css_prefix }}-range-slider example-range-slider">
      <div class="{{ site.css_prefix }}-range-slider__range"></div>
      <div class="{{ site.css_prefix }}-range-slider__handle" tabindex="0"></div>
      <div class="{{ site.css_prefix }}-range-slider__handle" tabindex="0"></div>
      <span class="{{ site.css_prefix }}-range-slider__value {{ site.css_prefix }}-text {{ site.css_prefix }}-text-size--small"></span>
      <span class="{{ site.css_prefix }}-range-slider__value {{ site.css_prefix }}-text {{ site.css_prefix }}-text-size--small"></span>
   </div>   
{% endexample %}
```javascript
   $('.example-range-slider').rangeSlider({
      values: [20, 70]
   });
```

## Options ##

### values ###
* __Type:__ Array
* __Default:__ [0, 0]

Values to initialize the slider with.

```javascript
   $('#my-slider').rangeSlider({
      values: [20, 70]
   });
```

### min ###
* __Type:__ Number
* __Default:__ 0

The minimum value of the slider.

```javascript
   $('#my-slider').rangeSlider({
      min: 100
   });
```

### max ###
* __Type:__ Number
* __Default:__ 100

The maximum value of the slider.

```javascript
   $('#my-slider').rangeSlider({
      max: 200
   });
```

### step ###
* __Type:__ Number
* __Default:__ 1

The size of every step between min and max. The value range (max - min) should be evenly divisible by the step. 

```javascript
   $('#my-slider').rangeSlider({
      step: 5
   });
```

### visibleValues ###
* __Type:__ Boolean
* __Default:__ true

If values should be visible below the handles.

```javascript
   $('.my-slider').rangeSlider({
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

   $('#my-slider').rangeSlider({
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

   $('#my-slider').rangeSlider({
      slidestop: function(e, data) {
         // Do something...
      }
   });
```
