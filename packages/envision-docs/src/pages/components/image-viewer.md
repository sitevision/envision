---
title: Image viewer
---

```html
<div id="image-viewer" data-image-viewer class="env-image-viewer">
   <div>
      <a class="env-image-viewer__images" href="https://unsplash.it/800/800">
         <img
            src="https://unsplash.it/900/400/"
            class="env-image-viewer__img"
            alt="Image"
         />
      </a>
   </div>
   <ol class="env-image-viewer__thumbnails">
      <li>
         <a
            class="env-image-viewer__images"
            href="https://unsplash.it/800/800?blur"
         >
            <img
               src="https://unsplash.it/200/100"
               class="env-image-viewer__thumbnail"
               alt="First thumbnail"
            />
         </a>
      </li>
      <li>
         <a
            class="env-image-viewer__images"
            href="https://unsplash.it/800/800/"
         >
            <img
               src="https://unsplash.it/200/100?blur"
               class="env-image-viewer__thumbnail"
               alt="Second thumbnail"
            />
         </a>
      </li>
   </ol>
</div>
```

## Usage from script

<span class="env-badge env-badge--info">Added in 9.1</span>

```javascript
// Since Sitevision 9.1
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
