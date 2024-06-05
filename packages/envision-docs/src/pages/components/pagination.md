---
title: Pagination
---

## Overview

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Previous</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 1">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 2">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 3">3</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 4">4</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 5">5</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Next</a>
      </li>
   </ul>
</nav>
```

## States

### Current

Use `aria-current="page"` or `aria-current="true"` on a link to indicate that the link is the current page or item.

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Previous</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 1">1</a>
      </li>
      <li class="env-pagination__item">
         <a
            class="env-pagination__link"
            aria-current="true"
            href="#"
            aria-label="Current Page, Page 2"
            >2</a
         >
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 3">3</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Next</a>
      </li>
   </ul>
</nav>
```

### Disabled

An element without href attribute is considered disabled. If you must use a link, remove the href attribute
and set the `aria-disabled="true"` and `aria-role="link"` attributes.

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination">
      <li class="env-pagination__item">
         <span class="env-pagination__link">Previous</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 1">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 2">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 3">3</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Next</a>
      </li>
   </ul>
</nav>
```

## Alignment

### Center

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--center env-list">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Previous</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 1">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 2">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 3">3</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Next</a>
      </li>
   </ul>
</nav>
```

### End

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--end">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Previous</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 1">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 2">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 3">3</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Next</a>
      </li>
   </ul>
</nav>
```

## Sizes

### Small

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--small">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 1">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 2">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 3">3</a>
      </li>
   </ul>
</nav>
```

### Large

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--large">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 1">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 2">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 3">3</a>
      </li>
   </ul>
</nav>
```
