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
         <a class="env-pagination__link" href="#">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">3</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">4</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">5</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Next</a>
      </li>
   </ul>
</nav>
```

## States

### Disabled

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination">
      <li class="env-pagination__item">
         <a class="env-pagination__link env-is-disabled" href="#" tabindex="-1"
            >Previous</a
         >
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">3</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Next</a>
      </li>
   </ul>
</nav>
```

### Active

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Previous</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link env-is-active" href="#"
            >2 <span class="env-assistive-text">Current</span></a
         >
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">3</a>
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
         <a class="env-pagination__link" href="#">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">3</a>
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
         <a class="env-pagination__link" href="#">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">3</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Next</a>
      </li>
   </ul>
</nav>
```

## Sizes

`--small`

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--small">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">3</a>
      </li>
   </ul>
</nav>
```

`--large`

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--large">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">1</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">2</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">3</a>
      </li>
   </ul>
</nav>
```

## Wrap

When working with large number of items, utilize [flex-wrap](/utils/flexbox/#flex-wrap-flex-wrap-property) to make the items wrap onto multiple lines

```html
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--large env-flex-wrap--wrap">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Lorem ipsum dolor</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Lorem ipsum dolor</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Lorem ipsum dolor</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Lorem ipsum dolor</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Lorem ipsum dolor</a>
      </li>
   </ul>
</nav>
```
