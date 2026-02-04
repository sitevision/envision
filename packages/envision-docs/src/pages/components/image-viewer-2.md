---
title: Image viewer
description: Accessible image slideshows and lightbox galleries with flexible layout and predictable motion.
---

<section id="demo-image-viewer"
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

The component supports mouse, touch, keyboard, and assistive technologies out of the box,
with predictable navigation and motion-safe defaults.

Typical use cases:

- **Lightbox**  
  A gallery of images that opens in a modal viewer when activated.

- **Slideshow**  
  A carousel that displays one image at a time, with navigation controls.

- **Slideshow with lightbox**  
  A slideshow where images also can be opened in a lightbox for a larger view.

## Accessibility

Image Viewer 2 is built with accessibility in mind.

- Full keyboard navigation
- Screen reader support using `aria-live`
- Reduced motion support via `prefers-reduced-motion`
- Explicit labeling of slideshow containers using `aria-label`

Automatic rotation and animated transitions are disabled or simplified
when the user prefers reduced motion.

## Lightbox

To enable the lightbox, add the `data-zoom` attribute to one or more links or buttons
inside a container element. Initialize the container using JavaScript.

Activating any data-zoom element opens the lightbox and enables navigation
between all data-zoom elements in that container.

Use `href` on links or `data-href` on buttons to specify the large version of the image.

```html
<div
   id="example-image-viewer-lightbox-only"
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
   document.querySelector('#example-image-viewer-lightbox-only')
);
```

## Slideshow

Initializing the Image Viewer with the `slides` option turns the container
into a slideshow (carousel).

All immediate child elements of the container are treated as individual slides.
The container element should have an `aria-label` attribute.

```html
<section
   id="example-image-viewer"
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
envision.imageViewer2(document.querySelector('#example-image-viewer'), {
   slides: {
      auto: 3000,
      buttons: {
         placement: 'top',
         type: 'secondary',
         size: 'slim',
      },
   },
});
```

### Slideshow markup

- Each immediate child element of the container becomes a slide.
- The container should include an `aria-label` describing the slideshow content.
-

```html noexample
<section aria-label="Slideshow label">
   <img src="example-1.webp" alt="Image description 1" />
   <img src="example-2.webp" alt="Image description 2" />
</section>
```

### Slideshow with lightbox

Add the `data-zoom` attribute to enable the lightbox.
Provide a larger image using `data-href` or `href`.

- Use `data-href` when the slide element is a button or figure
- Use `href` when the slide element is a link

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
and `data-zoom` must be added to the link, not the image.

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

### Slideshow captions

To display captions in the slideshow, wrap images in a `figure` element and include
a `figcaption` with the class `env-image-viewer-2__viewer__caption`.

Using `figure` is recommended, but captions can also be added to links.

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

### Lightbox captions <span class="doc-badge doc-badge--info">2025.09.2</span>

A `figcaption` placed inside a `data-zoom` element is automatically displayed
in the lightbox.

Alternatively, use the `data-figcaption` attribute on an `<img>` to provide
a caption that is only shown in the lightbox.

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

## Configuration

### Top-level options

```js
{
  slides: false,
  buttons: {
    download: true,
    showText: false
  },
  i18n: 'sv'
}
```

| Option             | Type             | Description                      | Default value |
| ------------------ | ---------------- | -------------------------------- | ------------- |
| `slides`           | bool \| object   | Enable slideshow behavior        | `false`       |
| `buttons.download` | bool             | Show download button in lightbox | `true`        |
| `buttons.showText` | bool             | Show visible button labels       | `false`       |
| `i18n`             | string \| object | Language or custom translations  | `"sv"`        |

### Slides options

```js noexpand
{
   slides: {
     auto: 0,
     transition: 'slide',
     draggable: true,
     playing: false,
     autoHeight: false,
     buttons: {
         placement: 'overlay-top',
         type: null,
         ghost: false,
         size: null,
     }
   }
}
```

| Option                  | Type    | Description                                                    | Default value |
| ----------------------- | ------- | -------------------------------------------------------------- | ------------- |
| `auto`                  | number  | Auto-rotation interval (ms), `0` disables                      | `0`           |
| `transition`_\*_        | string  | `slide`, `slideSlow`, `fade`, `none`                           | `"slide"`     |
| `draggable`             | boolean | Enable mouse drag navigation                                   | `true`        |
| `playing`               | boolean | Start auto-rotation automatically                              | `false`       |
| `autoHeight`_\*_        | boolean | Adjust height to current slide                                 | `false`       |
| `buttons.placement`_\*_ | string  | `top`, `bottom`, `overlay-top`, `overlay-bottom`               | `overlay-top` |
| `buttons.type`          | string  | Any [Element color](/colors/element-colors/) name in lowercase | `null`        |
| `buttons.ghost`         | boolean | Use [ghost button](/forms/button/) type                        | `false`       |
| `buttons.size`          | string  | Any [Button size](/forms/button/#sizes) name in lowercase      | `null`        |

<div>
<p class="example-dashboard-color-list-legend env-m-top--0">
   <span style="font-size:1.4em">*</span> = Option was added in 2026.02.1.
</p>
</div>
<div>
<p class="example-dashboard-color-list-legend env-m-top--0">
   Options speed and overlay were deprecated in 2026.02.1, please use transition and buttons.placement instead.
</p>
</div>

## API functions

Instances of Image viewer may be controlled by the methods described below.

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
