---
title: Toast
description: Use the Toast component to display brief, customizable notifications to inform users of system events.
---

```html
<div class="env-toast env-toast--visible">
   <div class="env-toast__content">Hello, World! This is a Toast message.</div>
   <button class="env-toast__close">
      <span class="env-assistive-text">Close</span>
      <svg class="env-icon env-icon--small" aria-hidden="true">
         <use href="/sitevision/envision-icons.svg#icon-delete"></use>
      </svg>
   </button>
</div>

<div class="env-toast env-toast--success env-toast--visible">
   <div class="env-toast__check">
      <svg class="env-icon env-icon--small" aria-hidden="true">
         <use href="/sitevision/envision-icons.svg#icon-check-done"></use>
      </svg>
   </div>
   <div class="env-toast__content">Hello, World! This is a Toast message.</div>
   <button class="env-toast__close">
      <span class="env-assistive-text">Close</span>
      <svg class="env-icon env-icon--small" aria-hidden="true">
         <use href="/sitevision/envision-icons.svg#icon-delete"></use>
      </svg>
   </button>
</div>

<div class="env-toast env-toast--primary env-toast--visible">
   <div class="env-toast__check">
      <svg class="env-icon env-icon--small" aria-hidden="true">
         <use href="/sitevision/envision-icons.svg#icon-check-done"></use>
      </svg>
   </div>
   <div class="env-toast__content">
      Hello, World! This is a Toast message. This Toast has several lines of
      toasty content!
   </div>
   <button class="env-toast__close">
      <span class="env-assistive-text">Close</span>
      <svg class="env-icon env-icon--small" aria-hidden="true">
         <use href="/sitevision/envision-icons.svg#icon-delete"></use>
      </svg>
   </button>
</div>
```
