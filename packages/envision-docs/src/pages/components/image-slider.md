---
title: Image slider
---

## Image Slider

### Slides only

```html
<div
   id="exampleSlider0"
   data-image-slider="cycle"
   data-interval="2000"
   data-buttons="false"
   class="env-image-slider env-image-slider--slide"
>
   <div class="env-image-slider__inner">
      <div class="env-image-slider__item env-image-slider__item--active">
         <img
            src="https://envisionui.io/placeholders/900x400/10.jpeg"
            class="env-embedded__img"
            alt="First slide"
         />
      </div>
      <div class="env-image-slider__item">
         <img
            src="https://envisionui.io/placeholders/900x400/05.jpeg"
            class="env-embedded__img"
            alt="Second slide"
         />
      </div>
      <div class="env-image-slider__item">
         <img
            src="https://envisionui.io/placeholders/900x400/02.jpeg"
            class="env-embedded__img"
            alt="Third slide"
         />
      </div>
   </div>
</div>
```

### Slides with controls

```html
<div
   id="exampleSlider1"
   data-image-slider
   class="env-image-slider env-image-slider--slide"
>
   <div class="env-image-slider__inner">
      <div class="env-image-slider__item env-image-slider__item--active">
         <img
            src="https://envisionui.io/placeholders/900x400/01.jpeg"
            class="env-embedded__img"
            alt="First slide"
         />
      </div>
      <div class="env-image-slider__item">
         <img
            src="https://envisionui.io/placeholders/900x400/07.jpeg"
            class="env-embedded__img"
            alt="First slide"
         />
      </div>
      <div class="env-image-slider__item">
         <img
            src="https://envisionui.io/placeholders/900x400/06.jpeg"
            class="env-embedded__img"
            alt="First slide"
         />
      </div>
   </div>
</div>
```

### With indicators

```html
<div
   id="exampleSlider2"
   data-image-slider="cycle"
   class="env-image-slider env-image-slider--slide"
>
   <div class="env-image-slider__inner">
      <div class="env-image-slider__item env-image-slider__item--active">
         <img
            src="https://envisionui.io/placeholders/900x400/04.jpeg"
            class="env-embedded__img"
            alt="First slide"
         />
      </div>
      <div class="env-image-slider__item">
         <img
            src="https://envisionui.io/placeholders/900x400/08.jpeg"
            class="env-embedded__img"
            alt="Second slide"
         />
      </div>
      <div class="env-image-slider__item">
         <img
            src="https://envisionui.io/placeholders/900x400/09.jpeg"
            class="env-embedded__img"
            alt="Third slide"
         />
      </div>
   </div>
   <div class="env-image-slider__indicators">
      <button
         type="button"
         title="Move to image 1"
         data-target="#exampleSlider2"
         data-move-to="0"
      ></button>
      <button
         type="button"
         title="Move to image 2"
         data-target="#exampleSlider2"
         data-move-to="1"
      ></button>
      <button
         type="button"
         title="Move to image 3"
         data-target="#exampleSlider2"
         data-move-to="2"
      ></button>
   </div>
</div>
```

### With captions

```html
<div
   id="exampleSlider3"
   data-image-slider
   class="env-image-slider env-image-slider--slide"
>
   <div class="env-image-slider__inner">
      <div class="env-image-slider__item env-image-slider__item--active">
         <img
            src="https://envisionui.io/placeholders/900x400/02.jpeg"
            class="env-embedded__img"
            alt="First slide"
         />
         <div class="env-image-slider__caption">
            <h3 class="doc-heading-3">Lorem ipsum</h3>
            <p>dolor sit amet, consectetur</p>
         </div>
      </div>
      <div class="env-image-slider__item">
         <img
            src="https://envisionui.io/placeholders/900x400/10.jpeg"
            class="env-embedded__img"
            alt="Second slide"
         />
         <div class="env-image-slider__caption">
            <h3 class="doc-heading-3">Lorem ipsum</h3>
            <p>dolor sit amet, consectetur</p>
         </div>
      </div>
      <div class="env-image-slider__item">
         <img
            src="https://envisionui.io/placeholders/900x400/05.jpeg"
            class="env-embedded__img"
            alt="Third slide"
         />
         <div class="env-image-slider__caption">
            <h3 class="doc-heading-3">Lorem ipsum</h3>
            <p>dolor sit amet, consectetur</p>
         </div>
      </div>
   </div>
</div>
```

### Slider with thumbnails

```html
<div
   id="exampleSlider4"
   data-image-slider="cycle"
   class="env-image-slider env-image-slider--slide"
>
   <div class="env-image-slider__inner">
      <div class="env-image-slider__item env-image-slider__item--active">
         <img
            src="https://envisionui.io/placeholders/900x400/11.jpeg"
            class="env-embedded__img"
            alt="First slide"
         />
      </div>
      <div class="env-image-slider__item">
         <img
            src="https://envisionui.io/placeholders/900x400/03.jpeg"
            class="env-embedded__img"
            alt="Second slide"
         />
      </div>
      <div class="env-image-slider__item">
         <img
            src="https://envisionui.io/placeholders/900x400/12.jpeg"
            class="env-embedded__img"
            alt="Third slide"
         />
      </div>
   </div>
   <ol class="env-image-slider__thumbnails">
      <li data-target="#exampleSlider4">
         <img
            data-target="#exampleSlider4"
            src="https://envisionui.io/placeholders/900x400/11.jpeg"
            class="env-image-slider__thumbnail env-image-slider__item--active"
            data-move-to="0"
            alt="First thumbnail"
         />
      </li>
      <li data-target="#exampleSlider4">
         <img
            data-target="#exampleSlider4"
            src="https://envisionui.io/placeholders/900x400/03.jpeg"
            class="env-image-slider__thumbnail"
            data-move-to="1"
            alt="Second thumbnail"
         />
      </li>
      <li data-target="#exampleSlider4">
         <img
            data-target="#exampleSlider4"
            src="https://envisionui.io/placeholders/900x400/12.jpeg"
            class="env-image-slider__thumbnail"
            data-move-to="2"
            alt="Third thumbnail"
         />
      </li>
   </ol>
</div>
```

## Usage

Attribute `data-image-slider` is required to initiate a image
slider and if there is more then one image, buttons will be generated to move
the image slider to the next or previous item. Automatic genereted buttons can
be prevented by using attribute `data-buttons="false"`.

The `data-image-slider="cycle"` attribute is used to start the imageSlider animation
at page load. `data-image-slider` attribute will initiate a image slider with
no automatic.

### Via data attributes

Use data attributes to control the imageSlider. `data-move` accepts the values `prev` or `next`, which alters the
imageslide position relative to its current position. You can use `data-move-to`
to pass a slide index to the imageSlider `data-move-to="1"`, which shifts the
position to a particular index beginning with `0`.

### Via JavaScript

To make image slider cycle through items you can call:

```javascript
envision.imageSlider('#myImageSlider', { imageSlider: 'cycle' });

// Deprecated
$('#myImageSlider').envImageslider({ imageSlider: 'cycle' });
```

## Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-interval=""`.

`interval = 5000` The amount of delay between automatically cycling through slides.

`keyboard = false` Whether the imageSlider should react to keyboard events.

`pause = 'hover'` If set to `hover`, pauses the cycling of the imageSlider on `mouseenter` and resumes on `mouseleave`. If set to `null`, hovering wont pause the imageSlider.

`wrap = true` Whether the imageSlider should cycle continuously or have hard stops.

`buttons = true` Will generate `slide` buttons even if there is only one image in the image slider.

`swipe = false` Will disable swipe functionallity on mobile devices.

## Methods

**Notice:** `envision.imageSlider()` only returns `sliders` the first time it is called. If you want to pause/cycle the slider after it has been initialized, you have to store the slider as a variable during initialization.

Initialize the imageSlider with an optional `object` and starts cycling through slides.

```javascript
// Since Sitevision 9.1
envision.imageSlider('#myImageSlider', {
   interval: 2000,
   imageSlider: 'cycle',
   buttons: false,
});

// Deprecated Sitevision 9.1
$('#myImageSlider').envImageslider({
   interval: 2000,
   imageSlider: 'cycle',
   buttons: false,
});
```

Cycles through the imageSlider

```javascript
// Since Sitevision 9.1
envision.imageSlider('#myImageSlider').then(function (sliders) {
   sliders[0].cycle();
});

// Deprecated Sitevision 9.1
$('#myImageSlider').envImageslider('cycle');
```

Pauses the imageslider

```javascript
// Since Sitevision 9.1
envision.imageSlider('#myImageSlider').then(function (sliders) {
   sliders[0].pause();
});

// Deprecated Sitevision 9.1
$('#myImageSlider').envImageslider('pause');
```

Cycles to the next item

```javascript
// Since Sitevision 9.1
envision.imageSlider('#myImageSlider').then(function (sliders) {
   sliders[0].next();
});

// Deprecated Sitevision 9.1
$('#myImageSlider').envImageslider('next');
```

Cycles to the previous item

```javascript
// Since Sitevision 9.1
envision.imageSlider('#myImageSlider').then(function (sliders) {
   sliders[0].prev();
});

// Deprecated Sitevision 9.1
$('#myImageSlider').envImageslider('prev');
```

Cycles the imageSlider to a particular slide.

```javascript
// Since Sitevision 9.1
envision.imageSlider('#myImageSlider').then(function (sliders) {
   sliders[0].goTo(2);
});

// Deprecated Sitevision 9.1
$('#myImageSlider').envImageslider(2);
```

## Events

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
