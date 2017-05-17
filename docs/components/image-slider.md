---
layout: docs
title: Image slider
description: Imageslider description
group: components
---
## Imageslider ##

### Slides only ###

{% example html %}

<div data-image-slider="cycle" class="{{ site.css_prefix }}-image-slider {{ site.css_prefix }}-image-slider--slide">
   <div class="{{ site.css_prefix }}-image-slider__inner">
      <div class="{{ site.css_prefix }}-image-slider__item {{ site.css_prefix }}-image-slider__item--active">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="First slide">
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200/" class="{{ site.css_prefix }}-embedded__img" alt="Second slide">
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="Third slide">
      </div>
   </div>
</div>

{% endexample %}

### Slides with controls ###

{% example html %}

<div id="exampleSlider1" class="{{ site.css_prefix }}-image-slider {{ site.css_prefix }}-image-slider--slide">
   <div class="{{ site.css_prefix }}-image-slider__inner">
      <div class="{{ site.css_prefix }}-image-slider__item {{ site.css_prefix }}-image-slider__item--active">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="First slide">
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200/" class="{{ site.css_prefix }}-embedded__img" alt="Second slide">
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="Third slide">
      </div>
   </div>
   <a class="{{ site.css_prefix }}-image-slider--prev" role="button" data-slide="prev" href="#exampleSlider1">
      <span class="{{ site.css_prefix }}-image-slider__prev-icon sv-icon--arrow-left sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Previous</span>
   </a>
   <a class="{{ site.css_prefix }}-image-slider--next" role="button" data-slide="next" href="#exampleSlider1">
      <span class="{{ site.css_prefix }}-image-slider__next-icon sv-icon--arrow-right sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Next</span>
   </a>
</div>

{% endexample %}

### With indicators ###

{% example html %}

<div id="exampleSlider2" data-image-slider="cycle" class="{{ site.css_prefix }}-image-slider--slide {{ site.css_prefix }}-image-slider">
   <ol class="{{ site.css_prefix }}-image-slider__indicators">
      <li data-target="#exampleSlider2" data-slide-to="0">
         <span class="{{ site.css_prefix }}-icon--dot-big-selected {{ site.css_prefix }}-icon--large"></span>
      </li>
      <li data-target="#exampleSlider2" data-slide-to="1">
         <span class="{{ site.css_prefix }}-icon--dot-big {{ site.css_prefix }}-icon--large"></span>
      </li>
      <li data-target="#exampleSlider2" data-slide-to="2">
         <span class="{{ site.css_prefix }}-icon--dot-big {{ site.css_prefix }}-icon--large"></span>
      </li>
   </ol>
   <div class="{{ site.css_prefix }}-image-slider__inner">
      <div class="{{ site.css_prefix }}-image-slider__item {{ site.css_prefix }}-image-slider__item--active">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="First slide">
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200" class="{{ site.css_prefix }}-embedded__img" alt="Second slide">
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="Third slide">
      </div>
   </div>
   <a class="{{ site.css_prefix }}-image-slider--prev" role="button" data-slide="prev" href="#exampleSlider2">
      <span class="{{ site.css_prefix }}-image-slider__prev-icon sv-icon--arrow-left sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Previous</span>
   </a>
   <a class="{{ site.css_prefix }}-image-slider--next" role="button" data-slide="next" href="#exampleSlider2">
      <span class="{{ site.css_prefix }}-image-slider__next-icon sv-icon--arrow-right sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Next</span>
   </a>
</div>


{% endexample %}

### With captions ###

{% example html %}

<div id="exampleSlider3" class="{{ site.css_prefix }}-image-slider--slide {{ site.css_prefix }}-image-slider">
   <div class="{{ site.css_prefix }}-image-slider__inner">
      <div class="{{ site.css_prefix }}-image-slider__item {{ site.css_prefix }}-image-slider__item--active">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="First slide">
         <div class="{{ site.css_prefix }}-image-slider__caption">
            <h3>Lorem ipsum</h3>
            <p>dolor sit amet, consectetur</p>
         </div>
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200" class="{{ site.css_prefix }}-embedded__img" alt="Second slide">
         <div class="{{ site.css_prefix }}-image-slider__caption">
            <h3>Lorem ipsum</h3>
            <p>dolor sit amet, consectetur</p>
         </div>
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="Third slide">
         <div class="{{ site.css_prefix }}-image-slider__caption">
            <h3>Lorem ipsum</h3>
            <p>dolor sit amet, consectetur</p>
         </div>
      </div>
   </div>
   <a class="{{ site.css_prefix }}-image-slider--prev" role="button" data-slide="prev" href="#exampleSlider3">
      <span class="{{ site.css_prefix }}-image-slider__prev-icon sv-icon--arrow-left sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Previous</span>
   </a>
   <a class="{{ site.css_prefix }}-image-slider--next" role="button" data-slide="next" href="#exampleSlider3">
      <span class="{{ site.css_prefix }}-image-slider__next-icon sv-icon--arrow-right sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Next</span>
   </a>
</div>

{% endexample %}

### Slider with thumbnails ###

{% example html %}

<div id="exampleSlider4" data-image-slider="cycle" class="{{ site.css_prefix }}-image-slider--slide {{ site.css_prefix }}-image-slider">
   <div class="{{ site.css_prefix }}-image-slider__inner">
      <div class="{{ site.css_prefix }}-image-slider__item {{ site.css_prefix }}-image-slider__item--active">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="First slide">
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200" class="{{ site.css_prefix }}-embedded__img" alt="Second slide">
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="Third slide">
      </div>
      <a class="{{ site.css_prefix }}-image-slider--prev" role="button" data-slide="prev" href="#exampleSlider4">
         <span class="{{ site.css_prefix }}-image-slider__prev-icon sv-icon--arrow-left sv-icon--large" aria-hidden="true"></span>
         <span class="{{ site.css_prefix }}-assistive-text">Previous</span>
      </a>
      <a class="{{ site.css_prefix }}-image-slider--next" role="button" data-slide="next" href="#exampleSlider4">
         <span class="{{ site.css_prefix }}-image-slider__next-icon sv-icon--arrow-right sv-icon--large" aria-hidden="true"></span>
         <span class="{{ site.css_prefix }}-assistive-text">Next</span>
      </a>
   </div>
   <ol class="{{ site.css_prefix }}-image-slider__thumbnails">
      <li data-target="#exampleSlider4">
         <img data-target="#exampleSlider4" src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-image-slider__thumbnail {{ site.css_prefix }}-image-slider__item--active"
            data-slide-to="0" alt="First thumbnail">
      </li>
      <li data-target="#exampleSlider4">
         <img data-target="#exampleSlider4" src="https://unsplash.it/400/200" class="{{ site.css_prefix }}-image-slider__thumbnail"
            data-slide-to="1" alt="Second thumbnail">
      </li>
      <li data-target="#exampleSlider4">
         <img data-target="#exampleSlider4" src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-image-slider__thumbnail"
            data-slide-to="2" alt="Third thumbnail">
      </li>
   </ol>
</div>

{% endexample %}

## Usage

### Via data attributes

Use data attributes to control the imageslider. `data-slide` accepts the values `prev` or `next`, which alters the imageslide position relative to its current position. You can use `data-slide-to` to pass a slide index to the imageslider `data-slide-to="1"`, which shifts the position to a particular index beginning with `0`. 

The `data-image-slider="cycle"` attribute is used to start the imageslider animation at page load. 

### Via JavaScript

Call imageslider with 
```javascript
   $('#myImageSlider').imageslider({ imageSlider : 'cycle' })
```
to make the imageslider cycle automatically.

## Options ###

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-interval=""`.

`interval = 5000` The amount of delay between automatically cycling through slides.

`keyboard = false` Whether the imageslider should react to keyboard events.

`pause = 'hover'` If set to `hover`, pauses the cycling of the imageslider on `mouseenter` and resumes on `mouseleave`. If set to `null`, hovering wont pause the imageslider.

`wrap = true` Whether the imageslider should cycle continuously or have hard stops.

## Methods ###

Initialize the imageslider with an optional `object` and starts cycling through slides.
```javascript
   $('#myImageSlider').imageslider({
      interval: 2000
   });
```

`.imageslider('cycle')`
Cycles through the imageslider

`.imageslider('pause')`
Pauses the imageslider

`.imageslider('next')`
Cycles to the next item

`.imageslider('prev')`
Cycles to the previous item

`.imageslider('number')`
Cycles the imageslider to a particular slide.


## Events ###

Slid - Fires when slider transition is finished.

Slide - Fires before slider transition starts.

```javascript
   $('#myImageslider').on('slid.sv.image-slider', () => {
      // do something...
   });

   $('#myImageslider').on('slide.sv.image-slider', () => {
      // do something...
   });
```
