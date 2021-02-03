---
title: Alert
---

## Variations

```html
<div class="env-alert env-alert--success" role="alert">
   <strong>Hello!</strong> this is successful alert
   <button
      type="button"
      class="env-alert__close"
      data-dismiss="alert"
      aria-label="Close"
   >
      &times;
   </button>
</div>
<div class="env-alert env-alert--warning" role="alert">
   <strong>Hello!</strong> this is warning alert
</div>
<div class="env-alert env-alert--danger" role="alert">
   <strong>Hello!</strong> this is danger alert
</div>
<div class="env-alert env-alert--info" role="alert">
   <strong>Hello!</strong> this is info alert
</div>
```

```html
<div class="env-alert env-alert--info" role="alert">
   <button
      type="button"
      class="env-alert__close"
      data-dismiss="alert"
      aria-label="Close"
   >
      &times;
   </button>
   <article class="env-media">
      <div class="env-media__figure">
         <a href="#" aria-label="Example image">
            <img
               class="env-image env-image--small"
               src="https://placehold.it/100x100.png"
               alt=""
            />
         </a>
      </div>
      <div class="env-media__body">
         <h3 class="env-text">
            <a href="#">John Doe</a>
         </h3>
         <p class="env-text">
            Cras varius, felis a accumsan accumsan, tellus elit maximus purus,
            id dignissim sem odio at eros.
         </p>
      </div>
   </article>
</div>
```

## Links

```html
<div class="env-alert" role="alert">
   <strong>Hello!</strong> this is alert with
   <a href="#" class="env-alert__link">link</a>
</div>
```
