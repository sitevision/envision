---
layout: docs
title: Image slider
description: Imageslider description
group: components
---
## Imageslider ##

### Slides only ###

{% example html %}

<div id="exampleSlider0" data-image-slider="cycle" data-buttons="false" class="env-image-slider env-image-slider--slide">
   <div class="env-image-slider__inner">
      <div class="env-image-slider__item env-image-slider__item--active">
         <img src="https://unsplash.it/g/800/400/?blur" class="env-embedded__img" alt="First slide">
      </div>
      <div class="env-image-slider__item">
         <img src="https://unsplash.it/g/800/400/" class="env-embedded__img" alt="Second slide">
      </div>
      <div class="env-image-slider__item">
         <img src="https://unsplash.it/g/800/400/?blur" class="env-embedded__img" alt="Third slide">
      </div>
   </div>
</div>

{% endexample %}

### Slides with controls ###

{% example html %}

<div id="exampleSlider1" data-image-slider class="env-image-slider env-image-slider--slide">
   <div class="env-image-slider__inner">
      <div class="env-image-slider__item env-image-slider__item--active">
         <img src="https://unsplash.it/g/800/400/?blur" class="env-embedded__img" alt="First slide">
      </div>
      <div class="env-image-slider__item">
         <img src="https://unsplash.it/g/800/400" class="env-embedded__img" alt="First slide">
      </div>
      <div class="env-image-slider__item">
         <img src="https://unsplash.it/g/800/400/?blur" class="env-embedded__img" alt="First slide">
      </div>
   </div>
</div>

{% endexample %}

### With indicators ###

{% example html %}

<div id="exampleSlider2" data-image-slider="cycle" class="env-image-slider--slide env-image-slider">

   <div class="env-image-slider__inner">
      <div class="env-image-slider__item env-image-slider__item--active">
         <img src="https://unsplash.it/800/400/?blur" class="env-embedded__img" alt="First slide">
      </div>
      <div class="env-image-slider__item">
         <img src="https://unsplash.it/800/400" class="env-embedded__img" alt="Second slide">
      </div>
      <div class="env-image-slider__item">
         <img src="https://unsplash.it/800/400/?blur" class="env-embedded__img" alt="Third slide">
      </div>
   </div>
      <ol class="env-image-slider__indicators">
      <li data-target="#exampleSlider2" data-move-to="0">
         <span class="env-icon--dot-big-fill env-icon--large"></span>
      </li>
      <li data-target="#exampleSlider2" data-move-to="1">
         <span class="env-icon--dot-big env-icon--large"></span>
      </li>
      <li data-target="#exampleSlider2" data-move-to="2">
         <span class="env-icon--dot-big env-icon--large"></span>
      </li>
   </ol>
</div>


{% endexample %}

### With captions ###

{% example html %}

<div id="exampleSlider3" data-image-slider class="env-image-slider--slide env-image-slider">
   <div class="env-image-slider__inner">
      <div class="env-image-slider__item env-image-slider__item--active">
         <img src="https://unsplash.it/800/400/?blur" class="env-embedded__img" alt="First slide">
         <div class="env-image-slider__caption">
            <h3>Lorem ipsum</h3>
            <p>dolor sit amet, consectetur</p>
         </div>
      </div>
      <div class="env-image-slider__item">
         <img src="https://unsplash.it/800/400" class="env-embedded__img" alt="Second slide">
         <div class="env-image-slider__caption">
            <h3>Lorem ipsum</h3>
            <p>dolor sit amet, consectetur</p>
         </div>
      </div>
      <div class="env-image-slider__item">
         <img src="https://unsplash.it/800/400/?blur" class="env-embedded__img" alt="Third slide">
         <div class="env-image-slider__caption">
            <h3>Lorem ipsum</h3>
            <p>dolor sit amet, consectetur</p>
         </div>
      </div>
   </div>
</div>

{% endexample %}

### Slider with thumbnails ###

{% example html %}

<div id="exampleSlider4" data-image-slider="cycle" class="env-image-slider--slide env-image-slider">
   <div class="env-image-slider__inner">
      <div class="env-image-slider__item env-image-slider__item--active">
         <img src="https://unsplash.it/g/800/400/?blur" class="env-embedded__img" alt="First slide">
      </div>
      <div class="env-image-slider__item">
         <img src="https://unsplash.it/g/800/400" class="env-embedded__img" alt="Second slide">
      </div>
      <div class="env-image-slider__item">
         <img src="https://unsplash.it/g/800/400/?blur" class="env-embedded__img" alt="Third slide">
      </div>
   </div>
   <ol class="env-image-slider__thumbnails">
      <li data-target="#exampleSlider4">
         <img data-target="#exampleSlider4" src="https://unsplash.it/g/800/400/?blur" class="env-image-slider__thumbnail env-image-slider__item--active"
            data-move-to="0" alt="First thumbnail">
      </li>
      <li data-target="#exampleSlider4">
         <img data-target="#exampleSlider4" src="https://unsplash.it/g/800/400" class="env-image-slider__thumbnail"
            data-move-to="1" alt="Second thumbnail">
      </li>
      <li data-target="#exampleSlider4">
         <img data-target="#exampleSlider4" src="https://unsplash.it/g/800/400/?blur" class="env-image-slider__thumbnail"
            data-move-to="2" alt="Third thumbnail">
      </li>
   </ol>
</div>

{% endexample %}

## Usage

Attribute `data-image-slider` is required to instantiate a image slider and if there is more then one image, buttons will be generated to move the image slider to the next or previous item. Automatic genereted buttons can be prevented by using attribute `data-buttons="false"`. 

The `data-image-slider="cycle"` attribute is used to start the imageslider animation at page load. `data-image-slider` attribute will instantiate a image slider with no automatic. 



### Via data attributes

Use data attributes to control the imageslider. `data-move` accepts the values `prev` or `next`, which alters the imageslide position relative to its current position. You can use `data-move-to` to pass a slide index to the imageslider `data-move-to="1"`, which shifts the position to a particular index beginning with `0`. 

### Via JavaScript

To make image slider cycle through items you can call:
```javascript
   $('#myImageSlider').envImageslider({ imageSlider : 'cycle' })
```


## Options ###

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-interval=""`.

`interval = 5000` The amount of delay between automatically cycling through slides.

`keyboard = false` Whether the imageslider should react to keyboard events.

`pause = 'hover'` If set to `hover`, pauses the cycling of the imageslider on `mouseenter` and resumes on `mouseleave`. If set to `null`, hovering wont pause the imageslider.

`wrap = true` Whether the imageslider should cycle continuously or have hard stops.

`buttons = true` Will generate `slide` buttons even if there is only one image in the image slider.

`swipe = false` Will disable swipe functionallity on mobile devices.
## Methods ###

Initialize the imageslider with an optional `object` and starts cycling through slides.
```javascript
   $('#myImageSlider').envImageslider({
      interval: 2000
   });
```

`.envImageslider('cycle')`
Cycles through the imageslider

`.envImageslider('pause')`
Pauses the imageslider

`.envImageslider('next')`
Cycles to the next item

`.envImageslider('prev')`
Cycles to the previous item

`.envImageslider('number')`
Cycles the imageslider to a particular slide.


## Events ###

Slid - Fires when slider transition is finished.

Slide - Fires before slider transition starts.

```javascript
   $('#myImageslider').on('slid.env.image-slider', () => {
      // do something...
   });

   $('#myImageslider').on('slide.env.image-slider', () => {
      // do something...
   });
```
