---
layout: docs
title: Imageslider
description: Imageslider description
group: components
---
## Image slider ##

### Slides only ###
{% example html %}

<div data-image-slider class="{{ site.css_prefix }}-image-slider {{ site.css_prefix }}-image-slider--slide">
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

<div id="exampleSlider1" data-image-slider class="{{ site.css_prefix }}-image-slider {{ site.css_prefix }}-image-slider--slide">
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
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200/" class="{{ site.css_prefix }}-embedded__img" alt="Second slide">
      </div>
      <div class="{{ site.css_prefix }}-image-slider__item">
         <img src="https://unsplash.it/400/200/?blur" class="{{ site.css_prefix }}-embedded__img" alt="Third slide">
      </div>
   </div>
   <a class="{{ site.css_prefix }}-image-slider--prev" role="button" data-slide="prev" href="#exampleSlider1">
      <span class="{{ site.css_prefix }}-image-slider__prev-icon sv-icon--phone sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Previous</span>
   </a>
   <a class="{{ site.css_prefix }}-image-slider--next" role="button" data-slide="next" href="#exampleSlider1">
      <span class="{{ site.css_prefix }}-image-slider__next-icon sv-icon--phone-fill sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Next</span>
   </a>
</div>


{% endexample %}

### With indicators ###
{% example html %}

<div id="exampleSlider2" data-image-slider data-image-cycle class="{{ site.css_prefix }}-image-slider--slide {{ site.css_prefix }}-image-slider">
   <ol class="{{ site.css_prefix }}-image-slider__indicators">
      <li data-target="#exampleSlider2" data-slide-to="0" class="{{ site.css_prefix }}-image-slider__item--active"></li>
      <li data-target="#exampleSlider2" data-slide-to="1"></li>
      <li data-target="#exampleSlider2" data-slide-to="2"></li>
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
      <span class="{{ site.css_prefix }}-image-slider__prev-icon sv-icon--phone sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Previous</span>
   </a>
   <a class="{{ site.css_prefix }}-image-slider--next" role="button" data-slide="next" href="#exampleSlider2">
      <span class="{{ site.css_prefix }}-image-slider__next-icon sv-icon--phone-fill sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Next</span>
   </a>
</div>


{% endexample %}

### With captions ###

{% example html %}

<div id="exampleSlider3" data-image-slider class="{{ site.css_prefix }}-image-slider--slide {{ site.css_prefix }}-image-slider">
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
      <span class="{{ site.css_prefix }}-image-slider__prev-icon sv-icon--phone sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Previous</span>
   </a>
   <a class="{{ site.css_prefix }}-image-slider--next" role="button" data-slide="next" href="#exampleSlider3">
      <span class="{{ site.css_prefix }}-image-slider__next-icon sv-icon--phone-fill sv-icon--large" aria-hidden="true"></span>
      <span class="{{ site.css_prefix }}-assistive-text">Next</span>
   </a>
</div>

{% endexample %}

### Slider with thumbnails ###

{% example html %}

<div id="exampleSlider4" data-image-slider data-image-cycle class="{{ site.css_prefix }}-image-slider--slide {{ site.css_prefix }}-image-slider">
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
         <span class="{{ site.css_prefix }}-image-slider__prev-icon sv-icon--phone sv-icon--large" aria-hidden="true"></span>
         <span class="{{ site.css_prefix }}-assistive-text">Previous</span>
      </a>
      <a class="{{ site.css_prefix }}-image-slider--next" role="button" data-slide="next" href="#exampleSlider4">
         <span class="{{ site.css_prefix }}-image-slider__next-icon sv-icon--phone-fill sv-icon--large" aria-hidden="true"></span>
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

## Options ##


## Methods ##
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


## Events ##

Slid - When slider is finished with transition

Slide - Before slider starts with transition

```javascript
   $('#myImageslider').on('slid.sv.image-slider', () => {
      // do something...
   });

   $('#myImageslider').on('slide.sv.image-slider', () => {
      // do something...
   });
```
