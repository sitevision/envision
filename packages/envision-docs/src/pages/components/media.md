---
title: Media
description: The Media component is used to present user activity chronologically.
---

## Types

### Default media object

```html
<div class="env-media">
   <div class="env-media__figure">
      <a href="#">
         <img
            class="env-image env-image--small"
            src="https://envisionui.io/placeholders/text/400x400.png"
            alt="Example image"
         />
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-ui-text-subheading">
         <a href="#" class="env-link-secondary">Emma</a>
      </h3>
      <p class="env-ui-text-caption">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id
         dignissim sem odio at eros. Morbi vel commodo diam. Integer hendrerit
         tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus
         non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae
         scelerisque.
      </p>
   </div>
</div>
```

### Default media object with actions menu

```html
<div class="env-media">
   <div class="env-media__figure">
      <a href="#">
         <img
            class="env-image env-image--small"
            src="https://envisionui.io/placeholders/text/400x400.png"
            alt="Example image"
         />
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-ui-text-subheading">
         <a href="#" class="env-link-secondary">Emma</a>
      </h3>
      <p class="env-ui-text-caption">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id
         dignissim sem odio at eros. Morbi vel commodo diam. Integer hendrerit
         tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus
         non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae
         scelerisque.
      </p>
   </div>
   <div class="env-media__actions">
      <button
         type="button"
         class="env-button env-button--icon"
         aria-haspopup="true"
         title="More options"
      >
         <svg class="env-icon">
            <use href="/sitevision/envision-icons.svg#icon-arrow-down"></use>
         </svg>
         <span class="env-assistive-text">More options</span>
      </button>
   </div>
</div>
```

### Inline media object

```html
<div class="env-media">
   <div class="env-media__figure">
      <a href="#">
         <img
            class="env-image env-image--small"
            src="https://envisionui.io/placeholders/text/400x400.png"
            alt="Example image"
         />
      </a>
   </div>
   <div class="env-media__body env-media__body--inline">
      <h3 class="env-ui-text-subheading">
         <a href="#" class="env-link-secondary">Emma</a>
      </h3>
      <p class="env-ui-text-caption">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id
         dignissim sem odio at eros. Morbi vel commodo diam. Integer hendrerit
         tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus
         non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae
         scelerisque.
      </p>
   </div>
</div>
```

### Column media object

```html
<div class="env-media env-media--column">
   <div class="env-media__figure">
      <a href="#">
         <img
            class="env-image"
            src="https://envisionui.io/placeholders/text/200x200.png"
            alt="Example image"
         />
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-ui-text-subheading">
         <a href="#" class="env-link-secondary">Emma</a>
      </h3>
      <p class="env-ui-text-caption">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id
         dignissim sem odio at eros. Morbi vel commodo diam. Integer hendrerit
         tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus
         non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae
         scelerisque.
      </p>
   </div>
</div>
```

## Alignment

### Center

```html
<div class="env-media env-media--center">
   <div class="env-media__figure">
      <a href="#">
         <img
            class="env-image env-image--small"
            src="https://envisionui.io/placeholders/text/400x400.png"
            alt="Example image"
         />
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-ui-text-subheading">
         <a href="#" class="env-link-secondary">Emma</a>
      </h3>
      <p class="env-ui-text-caption">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id
         dignissim sem odio at eros. Morbi vel commodo diam. Integer hendrerit
         tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus
         non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae
         scelerisque.
      </p>
   </div>
</div>
```

```html
<div class="env-media env-media--column env-media--center">
   <div class="env-media__figure">
      <a href="#">
         <img
            class="env-image"
            src="https://envisionui.io/placeholders/text/200x200.png"
            alt="Example image"
         />
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-ui-text-subheading">
         <a href="#" class="env-link-secondary">Emma</a>
      </h3>
      <p class="env-ui-text-caption">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id
         dignissim sem odio at eros. Morbi vel commodo diam. Integer hendrerit
         tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus
         non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae
         scelerisque.
      </p>
   </div>
</div>
```

Alignment modifiers can also be applied to elements within the media container (`__figure` & `__body`)

```html
<div class="env-media env-media--column env-media">
   <div class="env-media__figure env-media__figure--center">
      <a href="#">
         <img
            class="env-image"
            src="https://envisionui.io/placeholders/text/200x200.png"
            alt="Example image"
         />
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-ui-text-subheading">
         <a href="#" class="env-link-secondary">Emma</a>
      </h3>
      <p class="env-ui-text-caption">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id
         dignissim sem odio at eros. Morbi vel commodo diam. Integer hendrerit
         tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus
         non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae
         scelerisque.
      </p>
   </div>
</div>
```

### Bottom

```html
<div class="env-media env-media--bottom">
   <div class="env-media__figure">
      <a href="#">
         <img
            class="env-image env-image--small"
            src="https://envisionui.io/placeholders/text/400x400.png"
            alt="Example image"
         />
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-ui-text-subheading">
         <a href="#" class="env-link-secondary">Emma</a>
      </h3>
      <p class="env-ui-text-caption">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id
         dignissim sem odio at eros. Morbi vel commodo diam. Integer hendrerit
         tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus
         non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae
         scelerisque.
      </p>
   </div>
</div>
```

## Order

### Reverse

```html
<div class="env-media env-media--reverse">
   <div class="env-media__figure">
      <a href="#">
         <img
            class="env-image env-image--small"
            src="https://envisionui.io/placeholders/text/400x400.png"
            alt="Example image"
         />
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-ui-text-subheading">
         <a href="#" class="env-link-secondary">Emma</a>
      </h3>
      <p class="env-ui-text-caption">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id
         dignissim sem odio at eros. Morbi vel commodo diam. Integer hendrerit
         tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus
         non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae
         scelerisque.
      </p>
   </div>
</div>
```

## Nesting

```html
<div class="env-media">
   <div class="env-media__figure">
      <a href="#">
         <img
            class="env-image env-image--small"
            src="https://envisionui.io/placeholders/text/400x400.png"
            alt="Example image"
         />
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-ui-text-subheading">
         <a href="#" class="env-link-secondary">Emma</a>
      </h3>
      <p class="env-ui-text-caption">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id
         dignissim sem odio at eros. Morbi vel commodo diam. Integer hendrerit
         tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus
         non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae
         scelerisque.
      </p>
      <div class="env-media">
         <div class="env-media__figure">
            <a href="#">
               <img
                  class="env-image env-image--small"
                  src="https://envisionui.io/placeholders/text/400x400.png"
                  alt="Example image"
               />
            </a>
         </div>
         <div class="env-media__body">
            <h3 class="env-ui-text-subheading">
               <a href="#" class="env-link-secondary">Emma</a>
            </h3>
            <p class="env-ui-text-caption">
               Cras varius, felis a accumsan accumsan, tellus elit maximus
               purus, id dignissim sem odio at eros. Morbi vel commodo diam.
               Integer hendrerit tellus nec ligula egestas consequat. Curabitur
               sapien mauris, rhoncus non blandit eu, rhoncus ut sem.
               Pellentesque elementum non augue vitae scelerisque.
            </p>
         </div>
      </div>
   </div>
</div>
```
