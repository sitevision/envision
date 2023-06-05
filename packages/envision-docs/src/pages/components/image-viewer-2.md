---
title: Image viewer 2
---

<span class="env-badge env-badge--info">Since 2023.07.1</span>

Image viewer 2 is an accessible, configurable component providing options for showing an image slideshow
and/or a lightbox viewer with navigation between images.

<section id="demoImageViewer2"
class="env-m-vertical--large"
         aria-label="Photos from Örebro">
      <div>
          <span data-href="/placeholders/originals/10.jpeg" data-zoom>
            <img src="/placeholders/900x400/10.jpeg" alt="Örebro Castle">
          </span>
        <div class="env-image-viewer-2__viewer__caption">
         Örebro Castle
        </div>
      </div>
      <div>
          <span data-href="/placeholders/originals/05.jpeg" data-zoom>
            <img src="/placeholders/900x400/05.jpeg" alt="Karlslund Manor House">
          </span>
        <div class="env-image-viewer-2__viewer__caption">
              Karlslund Manor House
        </div>
      </div>
      <div>
            <img data-href="/placeholders/originals/02.jpeg" data-zoom src="/placeholders/900x400/02.jpeg" alt="Highland cattle at Oset">
        <div class="env-image-viewer-2__viewer__caption">
              Highland cattle at Oset
        </div>
      </div>
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
with navigation arrows to switch between images. The link href:s should point to a large version of the image being shown.

```html
<div
   id="example-imageviewer2-1"
   class="example-imageviewer2-images env-text env-flex env-flex--justify-content-around"
>
   <a href="/placeholders/originals/03.jpeg" data-zoom>
      <img loading="lazy" src="/placeholders/225x100/03.jpeg" alt="Grass" />
   </a>
   <a href="/placeholders/originals/04.jpeg" data-zoom>
      <img loading="lazy" src="/placeholders/225x100/04.jpeg" alt="Fern" />
   </a>
   <a href="/placeholders/originals/08.jpeg" data-zoom>
      <img loading="lazy" src="/placeholders/225x100/08.jpeg" alt="Snail" />
   </a>
   <a href="/placeholders/originals/09.jpeg" data-zoom>
      <img loading="lazy" src="/placeholders/225x100/09.jpeg" alt="Dandelion" />
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
   <div>
      <span data-href="/placeholders/originals/10.jpeg" data-zoom>
         <img src="/placeholders/900x400/10.jpeg" alt="Örebro Castle" />
      </span>
      <div class="env-image-viewer-2__viewer__caption">Örebro Castle</div>
   </div>
   <div>
      <span data-href="/placeholders/originals/05.jpeg" data-zoom>
         <img src="/placeholders/900x400/05.jpeg" alt="Karlslund Manor House" />
      </span>
      <div class="env-image-viewer-2__viewer__caption">
         Karlslund Manor House
      </div>
   </div>
   <div>
      <img
         data-href="/placeholders/originals/02.jpeg"
         data-zoom
         src="/placeholders/900x400/02.jpeg"
         alt="Highland cattle at Oset"
      />
      <div class="env-image-viewer-2__viewer__caption">
         Highland cattle at Oset
      </div>
   </div>
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

## Options

```javascript
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

-  `i18n` _'sv'_ | _'en'_ | _{ language keys }_

   -  Translation of buttons aria-label and aria-roledescription.
      Use predefined strings for swedish or english or write your own translation. Default is 'sv' or 'en' depending on HTML lang attribute.
   -  Available language keys: _roledescription, prev, next, pause, play, slideshow, zoom, largeImage, close, download, image, of_

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
