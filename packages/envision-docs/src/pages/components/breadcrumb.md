---
title: Breadcrumb
description: Use breadcrumbs to display the user´s location within a site’s hierarchy, enhancing navigation.
---

**Updated in 2025.01.2**: A new class `env-breadcrumb__separator` is available.
It's purpose is hiding the separator character from assistive technology which is done by setting `aria-hidden="true"`.

```html
<nav aria-label="Breadcrumb">
   <ol class="env-breadcrumb env-text">
      <li class="env-breadcrumb__item">
         <a href="#">Root node</a>
         <span aria-hidden="true" class="env-breadcrumb__separator">/</span>
      </li>
      <li class="env-breadcrumb__item">
         <a href="#">Parent node</a>
         <span aria-hidden="true" class="env-breadcrumb__separator">/</span>
      </li>
      <li class="env-breadcrumb__item" aria-current="page">Current</li>
   </ol>
</nav>
```
