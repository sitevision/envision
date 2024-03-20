---
title: Image viewer
deprecated: true
indexing: false
---

Image viewer is deprecated since 2023.07.1 and will eventually be removed. Please use [Image Viewer 2](/components/image-viewer-2/).

```html
<div id="image-viewer" data-image-viewer class="env-image-viewer">
   <div>
      <a
         class="env-image-viewer__images"
         href="https://envisionui.io/placeholders/originals/10.webp"
      >
         <img
            src="https://envisionui.io/placeholders/900x400/10.webp"
            class="env-image-viewer__img"
            alt="Image"
         />
      </a>
   </div>
   <ol class="env-image-viewer__thumbnails">
      <li>
         <a
            class="env-image-viewer__images"
            href="https://envisionui.io/placeholders/originals/05.webp"
         >
            <img
               src="https://envisionui.io/placeholders/200x100/05.webp"
               class="env-image-viewer__thumbnail"
               alt="First thumbnail"
            />
         </a>
      </li>
      <li>
         <a
            class="env-image-viewer__images"
            href="https://envisionui.io/placeholders/originals/02.webp"
         >
            <img
               src="https://envisionui.io/placeholders/200x100/02.webp"
               class="env-image-viewer__thumbnail"
               alt="Second thumbnail"
            />
         </a>
      </li>
   </ol>
</div>
```

## Usage from script

### Options

`i18n` _'sv'_ | _'en'_ | _{ prev, next, moveto }_

```javascript
envision.imageViewer('#image-viewer').then(function (viewers) {
   // Show Image viewer
   viewers[0].show();

   // Show Image viewer starting at selected index
   viewers[0].show(2);

   // Hide Image viewer
   viewers[0].hide();

   // Move viewer to next image
   viewers[0].next();

   // Move viewer to previous image
   viewers[0].prev();
});
```
