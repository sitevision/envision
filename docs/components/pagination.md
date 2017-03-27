---
layout: docs
title: Pagination
description: Pagination description
group: components
---

## Overview ##
{% example html %}
<nav aria-label="Pagination example">
   <ul class="sv-pagination sv-list sv-list--horizontal">
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">Previous</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">1</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">2</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">3</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">4</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">5</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

## States ##
### Disabled ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="sv-pagination sv-list sv-list--horizontal">
      <li class="sv-pagination__item">
         <a class="sv-pagination__link sv-is-disabled" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">1</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">2</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">3</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

### Active ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="sv-pagination sv-list sv-list--horizontal">
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">Previous</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">1</a></li>
      <li class="sv-pagination__item">
         <a class="sv-pagination__link sv-is-active" href="#">2 <span class="sv-assistive-text">Current</span></a>
      </li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">3</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

## Alignment ##
### Center ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="sv-pagination sv-pagination--center sv-list sv-list--horizontal">
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">Previous</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">1</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">2</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">3</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

### End ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="sv-pagination sv-pagination--end sv-list sv-list--horizontal">
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">Previous</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">1</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">2</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">3</a></li>
      <li class="sv-pagination__item"><a class="sv-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}
