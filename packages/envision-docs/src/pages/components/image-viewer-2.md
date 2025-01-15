---
title: Image viewer
description: The Image Viewer component displays slideshows and lightbox galleries with navigation controls.
---

<h2 class="doc-heading-2 doc-heading-2--main"><span class="env-badge env-badge--info">Since 2023.07.1</span></h2>

Image viewer 2 is an accessible, configurable component providing options for showing an image slideshow
and/or a lightbox viewer with navigation between images.

<section id="demoImageViewer2"
class="env-m-vertical--large"
         aria-label="Photos from Örebro">
   <figure data-href="/placeholders/originals/10.webp" data-zoom>
      <img src="/placeholders/900x400/10.webp" alt="">
      <figcaption class="env-image-viewer-2__viewer__caption">Örebro Castle</figcaption>
   </figure>
   <figure data-href="/placeholders/originals/05.webp" data-zoom>
      <img src="/placeholders/900x400/05.webp" alt="">
      <figcaption class="env-image-viewer-2__viewer__caption">
         Karlslund Manor House
      </figcaption>
   </figure>
   <figure data-href="/placeholders/originals/02.webp" data-zoom>
      <img src="/placeholders/900x400/02.webp" alt="">
      <figcaption class="env-image-viewer-2__viewer__caption">
         Highland cattle at Oset outside Örebro
      </figcaption>
   </figure>
</section>

## Features include

-  Buttons for displaying the previous and next slides.
-  Button for stopping and restarting rotation.
-  Keyboard navigation support.
-  Aria-live announcement for image changes.
-  Optional automatic rotation, always disabled for users who prefers reduced motion.
-  Optional download button in lightbox.
-  Optional placement of slideshow buttons.

## Lightbox

Use attribute `data-zoom` on one or more links inside the element being initialized from script. The lightbox opens
with navigation arrows to switch between images. The link href:s should point to a large version of the image being
shown.

```html
<div
   id="example-imageviewer2-1"
   class="example-imageviewer2-images env-text env-flex env-flex--justify-content-around"
>
   <a href="/placeholders/originals/03.webp" data-zoom>
      <img loading="lazy" src="/placeholders/225x100/03.webp" alt="Grass" />
   </a>
   <a href="/placeholders/originals/04.webp" data-zoom>
      <img loading="lazy" src="/placeholders/225x100/04.webp" alt="Fern" />
   </a>
   <a href="/placeholders/originals/08.webp" data-zoom>
      <img loading="lazy" src="/placeholders/225x100/08.webp" alt="Snail" />
   </a>
   <a href="/placeholders/originals/09.webp" data-zoom>
      <img loading="lazy" src="/placeholders/225x100/09.webp" alt="Dandelion" />
   </a>
</div>
```

```javascript
envision.imageViewer2(document.querySelector('#example-imageviewer2-1'));
```

## Slideshow

```html
<section
   id="example-imageviewer2-2"
   class="env-p-around--medium"
   aria-label="Photos from Örebro"
>
   <figure data-href="/placeholders/originals/10.webp" data-zoom>
      <img src="/placeholders/900x400/10.webp" alt="" />
      <figcaption class="env-image-viewer-2__viewer__caption">
         Örebro Castle
      </figcaption>
   </figure>
   <figure data-href="/placeholders/originals/05.webp" data-zoom>
      <img src="/placeholders/900x400/05.webp" alt="" />
      <figcaption class="env-image-viewer-2__viewer__caption">
         Karlslund Manor House
      </figcaption>
   </figure>
   <figure data-href="/placeholders/originals/02.webp" data-zoom>
      <img src="/placeholders/900x400/02.webp" alt="" />
      <figcaption class="env-image-viewer-2__viewer__caption">
         Highland cattle at Oset outside Örebro
      </figcaption>
   </figure>
</section>
```

```javascript
envision.imageViewer2(document.querySelector('#example-imageviewer2-2'), {
   slides: {
      auto: 3000,
      playing: false,
      overlay: false,
      buttons: {
         type: 'secondary',
         size: 'slim',
      },
   },
});
```

### Slideshow markup

-  All immediate child elements of the container will be included in slideshow.
-  The container used for initialization should have an `aria-label` attribute.

```html-no-example
<section aria-label="Slideshow label">
   <img src="example-1.webp" alt="Image description">
   <img src="example-2.webp" alt="Image description">
</section>
```

#### Zoom

Add attribute `data-zoom` to activate zoom/lightbox. Add URL to larger images in `data-href`.

```html-no-example
<section aria-label="Slideshow label">
   <img src="example-1.webp" alt="Image description" data-href="example-1-large.webp" data-zoom>
   <img src="example-2.webp" alt="Image description" data-href="example-2-large.webp" data-zoom>
</section>
```

Optionally wrap the image in a link pointing to the larger image. The `href` attribute will be used for zoom
and `data-zoom` should be added to the link, not the image.

```html-no-example
<section aria-label="Slideshow label">
   <a href="example-1-large.webp" data-zoom>
      <img src="example-1.webp" alt="Image description">
   </a>
   <a href="example-2-large.webp" data-zoom>
      <img src="example-2.webp" alt="Image description">
   </a>
</section>
```

#### Caption

Wrap the images in a `figure` tag and add a `figcaption` with class `env-image-viewer-2__viewer__caption`.

```html-no-example
<section aria-label="Slideshow label">
   <figure>
      <img src="example-1.webp" alt="">
      <figcaption class="env-image-viewer-2__viewer__caption">Image 1 caption</figcaption>
   </figure>
   <figure>
      <img src="example-2.webp" alt="">
      <figcaption class="env-image-viewer-2__viewer__caption">Image 2 caption</figcaption>
   </figure>
</section>
```

#### Zoom and caption

Combine zoom and captions using data attributes or links:

```html-no-example
<section aria-label="Slideshow label">
   <figure data-href="example-1-large.webp" data-zoom>
      <img src="example-1.webp" alt="">
      <figcaption class="env-image-viewer-2__viewer__caption">Image 1 caption</figcaption>
   </figure>
   <a href="example-2-large.webp" data-zoom>
      <img src="example-2.webp" alt="">
      <div class="env-image-viewer-2__viewer__caption">Image 2 caption</div>
   </a>
</section>
```

## Options

```js-no-expand
// Default options
{
   slides: false,
   buttons: {
      download: true,
      showText: false,
   },
   i18n: 'sv',
}

// Default slides options if set to true
{
   auto: 0,
   speed: 300,
   draggable: true,
   playing: false,
   overlay: true,
   buttons: {
      type: null,
      ghost: false,
      size: null,
   },
},
```

-  `buttons` _{ download, showText }_

   -  Lightbox button options. Show/hide download button. Visible text in close/download buttons.
   -  Default values: `{ download: true, showText: false }`

-  `i18n` _'sv'_ | _'en'_ | _'no'_ | _{ language keys }_

   -  Translation of buttons aria-label and aria-roledescription.
      Use predefined strings (swedish, english or norwegian) or write your own translation. Default is 'sv'.
   -  Available language keys: _roledescription, prev, next, pause, play, slideshow, zoom, largeImage, close, download,
      image, of_

-  `slides` _boolean_ | _{ [options object](#slides-options-object) }_

   -  Initialize a slideshow with default or custom options
   -  Default value: `false`

<span id="slides-options-object" class="offset-anchor"></span>

### Slides options object

-  `auto` _number_

   -  Auto rotation possible, play button visible. Number is interval in _ms_.
   -  Default value: `0` (auto rotation not available)

-  `speed` _number_

   -  Slide speed in _ms_.
   -  Default value: `300`

-  `draggable` _boolean_

   -  Slides listen to mouse drag events in addition to touch events.
   -  Default value: `true`

-  `playing` _boolean_

   -  If `auto` is set to > 0, this will start auto rotation automatically.
   -  Default value: `false`

-  `overlay` _boolean_

   -  Control buttons and caption should overlay the slides.
   -  Default value: `true`

-  `buttons` _{ size, type, ghost }_

   -  Control button appearance.
   -  Allowed value for `type`: Any Element color name in lowercase.
   -  Allowed value for `size`: Any Button size name in lowercase.
   -  Allowed value for `ghost`: true/false

## API functions

Instances of Image viewer 2 may be controlled by the methods described below.

```javascript
envision.imageViewer2('#image-viewer').then(function (imageViewers) {
   imageViewers[0].slider.pause();
   imageViewers[0].lightbox.show(1);
});
```

### Slider

-  `slider.pause()`

   -  Pause slider automatic rotation.

-  `slider.play()`

   -  Start slider automatic rotation if available.

-  `slider.next()`

   -  Show next image.

-  `slider.prev()`

   -  Show previous image.

-  `slider.goTo(index, speed)`

   -  Set slider to image at position _index_. Use _speed_ to control how fast image is shown.

-  `slider.getPos()`

   -  Get index for current image.

### Lightbox

-  `lightbox.show(index)`

   -  Show lightbox starting at _index_. Defaults to index 0.

-  `lightbox.close()`

   -  Close the lightbox.

## Legacy documentation

Image Viewer 2 is a replacement for the following, which are deprecated since 2023.07.1:

-  [Image slider](/deprecated/image-slider/)
-  [Image viewer](/deprecated/image-viewer/)
