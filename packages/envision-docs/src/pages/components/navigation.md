---
title: Navigation
description: The Navigation component provides customizable menus for site navigation, including menubars and side navigation.
---

Use `aria-current="page"` on a link to indicate that the user is currently on that page.

## Menubar

### Fill

```html
<nav>
   <ul class="env-nav env-nav--menubar env-nav--fill">
      <li class="env-nav__item">
         <a class="env-nav__link" href="#">Item</a>
      </li>
      <li class="env-nav__item">
         <a class="env-nav__link" aria-current="page" href="#">Item</a>
      </li>
      <li class="env-nav__item">
         <a class="env-nav__link" href="#">Item</a>
      </li>
   </ul>
</nav>
```

### Border

```html
<nav>
   <ul class="env-nav env-nav--menubar env-nav--border">
      <li class="env-nav__item">
         <a class="env-nav__link" href="#">Item</a>
      </li>
      <li class="env-nav__item">
         <a class="env-nav__link" aria-current="page" href="#">Item</a>
      </li>
      <li class="env-nav__item">
         <a class="env-nav__link" href="#">Item</a>
      </li>
   </ul>
</nav>
```

## Sidenav

```html
<nav>
   <ul class="env-nav env-nav--sidenav">
      <li class="env-nav__item">
         <a class="env-nav__link" href="#">Item</a>
      </li>
      <li class="env-nav__item">
         <a class="env-nav__link" aria-current="page" href="#">Item</a>
      </li>
      <li class="env-nav__item">
         <a class="env-nav__link" href="#">Item</a>
      </li>
   </ul>
</nav>
```
