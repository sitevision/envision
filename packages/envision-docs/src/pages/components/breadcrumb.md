---
title: Breadcrumb
description: Use breadcrumbs to display the user´s location within a site’s hierarchy, enhancing navigation.
---

Breadcrumb component uses basic text styles by default.

The component may also use [navigation text styles](/typography/ui-text/#navigation-text-styles).
Apply the appropriate class to the root element of the navigation component.

Use `env-breadcrumb__separator` in combination with `aria-hidden="true"` to hide the separator character from assistive technology.

```html
<nav aria-label="Breadcrumb">
   <ol class="env-breadcrumb">
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
