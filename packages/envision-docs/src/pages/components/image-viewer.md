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

## Initiation

<span class="env-badge env-badge--info">Added in 9.1</span>

```javascript
// Since Sitevision 9.1
envision.imageviewer('#image-viewer');

envision.imageviewer('#image-viewer', object);
```

### Default object properties

```javascript
{
   index: 0, // Image viewer starting position.
}
```
