---
title: Container
since: 2024.02.1
beta: true
---

Using the class `env-container` on an element will declare a containment context
that may be targeted with container query at-rules.
A containment context is required when using [Dynamic font size](/utils/dynamic-font-size/).

```html-no-example
<div class="env-container">
   <div class="example">Container example</div>
</div>
```

```css-no-expand
@container (min-width: 250px) {
   .example {
      /* Styles to apply to div.example when container is 250px wide or more */
   }
}
```
