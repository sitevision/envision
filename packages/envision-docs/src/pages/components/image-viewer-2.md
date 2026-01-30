---
title: Image viewer
description: The Image Viewer component displays slideshows and lightbox galleries with navigation controls.
---

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

- Buttons for displaying the previous and next slides.
- Button for stopping and restarting rotation.
- Keyboard navigation support.
- Aria-live announcement for image changes.
- Optional automatic rotation, always disabled for users who prefers reduced motion.
- Optional download button in lightbox.
- Optional placement of slideshow buttons.

## Lightbox

Use attribute `data-zoom` on one or more links inside the element being initialized from script. The lightbox opens
with navigation arrows to switch between images. The link href:s should point to a large version of the image being
shown.

```html
<div
   id="example-image-viewer-2-lightbox-only"
   class="example-imageviewer2-images"
>
   <ul
      class="env-list env-cardholder-grid"
      style="--env-cardholder-grid-column-width: 10em;"
   >
      <li>
         <button
            type="button"
            aria-label="Zoom image: Dry grass in sunlight"
            data-href="/placeholders/originals/03.webp"
            data-zoom
         >
            <img
               loading="lazy"
               src="/placeholders/225x100/03.webp"
               data-figcaption="A strand of grass catching the warm glow of the sun"
               alt="Dry grass in sunlight"
            />
         </button>
         <p class="env-text-caption-01">Dry grass in sunlight</p>
      </li>
      <li>
         <button
            type="button"
            aria-label="Zoom image: Bright green fern leaves"
            data-href="/placeholders/originals/04.webp"
            data-zoom
         >
            <img
               loading="lazy"
               src="/placeholders/225x100/04.webp"
               alt="Bright green fern leaves"
               data-figcaption="Bright green fern fronds filling the frame in soft light"
            />
         </button>
         <p class="env-text-caption-01">Bright green fern leaves</p>
      </li>
      <li>
         <button
            type="button"
            aria-label="Zoom image: Two little snails on a green leaf"
            data-href="/placeholders/originals/08.webp"
            data-zoom
         >
            <img
               loading="lazy"
               src="/placeholders/225x100/08.webp"
               data-figcaption="Two little snails hanging out on a green leaf in the shade"
               alt="Two little snails on a green leaf"
            />
         </button>
         <p class="env-text-caption-01">Two little snails on a green leaf</p>
      </li>
      <li>
         <button
            type="button"
            aria-label="Zoom image: A close-up of a dandelion"
            data-href="/placeholders/originals/09.webp"
            data-zoom
         >
            <img
               loading="lazy"
               src="/placeholders/225x100/09.webp"
               data-figcaption="A close-up of a dandelion ready to spread its seeds on a sunny day"
               alt="A close-up of a dandelion"
            />
         </button>
         <p class="env-text-caption-01">A close-up of a dandelion</p>
      </li>
   </ul>
</div>
```

```javascript
envision.imageViewer2(
   document.querySelector('#example-image-viewer-2-lightbox-only')
);
```

## Slideshow

```html
<section
   id="example-image-viewer-2"
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
envision.imageViewer2(document.querySelector('#example-image-viewer-2'), {
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

- All immediate child elements of the container will be included in slideshow.
- The container used for initialization should have an `aria-label` attribute.

```html noexample
<section aria-label="Slideshow label">
   <img src="example-1.webp" alt="Image description" />
   <img src="example-2.webp" alt="Image description" />
</section>
```

#### Zoom

Add attribute `data-zoom` to activate zoom/lightbox. Add URL to larger images in `data-href`.

```html noexample
<section aria-label="Slideshow label">
   <img
      src="example-1.webp"
      alt="Image description"
      data-href="example-1-large.webp"
      data-zoom
   />
   <img
      src="example-2.webp"
      alt="Image description"
      data-href="example-2-large.webp"
      data-zoom
   />
</section>
```

Optionally wrap the image in a link pointing to the larger image. The `href` attribute will be used for zoom
and `data-zoom` should be added to the link, not the image.

```html noexample
<section aria-label="Slideshow label">
   <a href="example-1-large.webp" data-zoom>
      <img src="example-1.webp" alt="Image description" />
   </a>
   <a href="example-2-large.webp" data-zoom>
      <img src="example-2.webp" alt="Image description" />
   </a>
</section>
```

#### Caption

Wrap images in a `figure` element and include a `figcaption` with the class `env-image-viewer-2__viewer__caption` to provide descriptive text.

Captions can be combined with zoom functionality in two ways:

- By adding `data-href` and `data-zoom` attributes directly on the <figure> element.
- By using an `<a>` element with `href` and `data-zoom`, wrapping the image and caption.

```html noexample
<section aria-label="Slideshow label">
   <figure data-href="example-1-large.webp" data-zoom>
      <img src="example-1.webp" alt="" />
      <figcaption class="env-image-viewer-2__viewer__caption">
         Image 1 caption
      </figcaption>
   </figure>
   <a href="example-2-large.webp" data-zoom>
      <img src="example-2.webp" alt="" />
      <div class="env-image-viewer-2__viewer__caption">Image 2 caption</div>
   </a>
</section>
```

#### Zoom and caption <span class="doc-badge doc-badge--info">2025.09.2</span>

A `<figcaption>` placed inside a `data-zoom` link or `<figure>` will automatically be displayed in the lightbox.

Alternatively, use the `data-figcaption` attribute on an `<img>` to show caption text in the lightbox without
rendering it in the slideshow.

```html noexample
<section aria-label="Slideshow label">
   <figure data-href="example-1-large.webp" data-zoom>
      <img src="example-1.webp" alt="" />
      <figcaption class="env-image-viewer-2__viewer__caption">
         Image 1 caption
      </figcaption>
   </figure>
   <a href="example-2-large.webp" data-zoom>
      <img src="example-2.webp" alt="" data-figcaption="Image 2 caption" />
   </a>
</section>
```

## Options

```js noexpand
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

- `buttons` _{ download, showText }_
   - Lightbox button options. Show/hide download button. Visible text in close/download buttons.
   - Default values: `{ download: true, showText: false }`

- `i18n` _'sv'_ | _'en'_ | _'no'_ | _{ language keys }_
   - Translation of buttons aria-label and aria-roledescription.
     Use predefined strings (Swedish, English, or Norwegian) or write your own translation. Default is 'sv'.
   - Available language keys: _roledescription, prev, next, pause, play, slideshow, zoom, largeImage, close, download,
     image, of_

- `slides` _boolean_ | _{ [options object](#slides-options-object) }_
   - Initialize a slideshow with default or custom options
   - Default value: `false`

<span id="slides-options-object" class="offset-anchor"></span>

### Slides options object

- `auto` _number_
   - Auto rotation possible, play button visible. Number is interval in _ms_.
   - Default value: `0` (auto rotation not available)

- `speed` _number_
   - Slide speed in _ms_.
   - Default value: `300`

- `draggable` _boolean_
   - Slides listen to mouse drag events in addition to touch events.
   - Default value: `true`

- `playing` _boolean_
   - If `auto` is set to > 0, this will start auto rotation automatically.
   - Default value: `false`

- `overlay` _boolean_
   - Control buttons and caption should overlay the slides.
   - Default value: `true`

- `buttons` _{ size, type, ghost }_
   - Control button appearance.
   - Allowed value for `type`: Any Element color name in lowercase.
   - Allowed value for `size`: Any Button size name in lowercase.
   - Allowed value for `ghost`: true/false

## API functions

Instances of Image viewer 2 may be controlled by the methods described below.

```javascript
envision.imageViewer2('#image-viewer').then(function (imageViewers) {
   imageViewers[0].slider.pause();
   imageViewers[0].lightbox.show(1);
});
```

### Slider

- `slider.pause()`
   - Pause slider automatic rotation.

- `slider.play()`
   - Start slider automatic rotation if available.

- `slider.next()`
   - Show next image.

- `slider.prev()`
   - Show previous image.

- `slider.goTo(index, speed)`
   - Set slider to image at position _index_. Use _speed_ to control how fast image is shown.

- `slider.getPos()`
   - Get index for current image.

### Lightbox

- `lightbox.show(index)`
   - Show lightbox starting at _index_. Defaults to index 0.

- `lightbox.close()`
   - Close the lightbox.

## Legacy documentation

Image Viewer 2 is a replacement for the following deprecated components:

- [Image slider](/deprecated/image-slider/)
- [Image viewer](/deprecated/image-viewer/)
