---
title: Alert
---

## Variations

```html
<div class="env-alert env-alert--success" role="alert">
   <div class="env-alert__body">
      <div class="env-alert__icon">
         <svg class="env-icon env-icon--large">
            <use
               xlink:href="/sitevision/envision-icons.svg#icon-check-line"
            ></use>
         </svg>
      </div>
      <div class="env-alert__text">
         <strong>Hello!</strong> This <a href="/components/alert/">alert</a> is
         a success.
      </div>
      <button
         type="button"
         class="env-alert__close"
         data-dismiss="alert"
         aria-label="Close"
      >
         &times;
      </button>
   </div>
</div>
<div class="env-alert env-alert--warning" role="alert">
   <div class="env-alert__body">
      <div class="env-alert__icon">
         <svg class="env-icon env-icon--large">
            <use xlink:href="/sitevision/envision-icons.svg#icon-bell"></use>
         </svg>
      </div>
      <div class="env-alert__text">
         <strong class="env-alert__heading">Warning!</strong>
         This is a warning alert.
      </div>
      <button
         type="button"
         class="env-alert__close"
         data-dismiss="alert"
         aria-label="Close"
      >
         &times;
      </button>
   </div>
</div>
<div class="env-alert env-alert--danger" role="alert">
   <strong>Danger!</strong> This is a danger alert!
   <button
      type="button"
      class="env-alert__close"
      data-dismiss="alert"
      aria-label="Close"
   >
      &times;
   </button>
</div>
<div class="env-alert env-alert--info" role="alert">
   <strong>Info:</strong> This is info alert.
</div>
```
