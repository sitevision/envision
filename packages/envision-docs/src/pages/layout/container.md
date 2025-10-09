---
title: Container
description: The Container utility establishes a containment context for applying container query at-rules.
since: 2024.02.1
---

Using the class `env-container` on an element will declare a containment context
that may be targeted with container query at-rules.
A containment context is required when using [Dynamic font size](/typography/basic-text/).

```html noexample
<div class="env-container">
   <div class="example">Container example</div>
</div>
```

```css noexpand
@container (min-width: 250px) {
   .example {
      /* Styles to apply to div.example when container is 250px wide or more */
   }
}
```
