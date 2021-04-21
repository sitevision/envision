---
title: Alert
---

## Variations

```html
<div class="env-alert env-alert--success" role="alert">
   <strong>Hello!</strong> <a href="#">normal</a>
   <a class="env-text" href="#">env-text</a>
   <a class="env-link" href="#">envision</a> this is successful alert
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
   <strong>Hello!</strong> <a href="#">normal</a>
   <a class="env-text" href="#">env-text</a>
   <a class="env-link" href="#">envision</a> this is warning alert
</div>
<div class="env-alert env-alert--danger" role="alert">
   <strong>Hello!</strong> <a href="#">normal</a>
   <a class="env-text" href="#">env-text</a>
   <a class="env-link" href="#">envision</a> this is danger alert
</div>
<div class="env-alert env-alert--info" role="alert">
   <strong>Hello!</strong> <a href="#">normal</a>
   <a class="env-text" href="#">env-text</a>
   <a class="env-link" href="#">envision</a> this is info alert
</div>

<div class="example-link">
   <a href="#links" class="env-link">A standalone link</a>
</div>

<div class="example-link">
   <a href="#links" class="env-link-secondary">A secondary link</a>
</div>

<div class="example-link">
   <div class="env-text">Text with <a href="#links">a link</a> inside.</div>
</div>

<style>
   :root,
   .sv-theme-test {
      --env-link-font-color: rgb(255, 0, 255);
   }
</style>
```
