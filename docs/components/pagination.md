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
      <li class="sv-pagination__item"><a class="sv-button" href="#">Previous</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">1</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">2</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">3</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">4</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">5</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

## States ##
### Disabled ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="sv-pagination sv-list sv-list--horizontal">
      <li class="sv-pagination__item sv-pagination__item--disabled">
         <a class="sv-button" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">1</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">2</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">3</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

### Active ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="sv-pagination sv-list sv-list--horizontal">
      <li class="sv-pagination__item"><a class="sv-button" href="#">Previous</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">1</a></li>
      <li class="sv-pagination__item sv-pagination__item--active">
         <a class="sv-button" href="#">2 <span class="sv-assistive-text">Current</span></a>
      </li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">3</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

## Alignment ##
### Center ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="sv-pagination sv-pagination--center sv-list sv-list--horizontal">
      <li class="sv-pagination__item"><a class="sv-button" href="#">Previous</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">1</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">2</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">3</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

### End ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="sv-pagination sv-pagination--end sv-list sv-list--horizontal">
      <li class="sv-pagination__item"><a class="sv-button" href="#">Previous</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">1</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">2</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">3</a></li>
      <li class="sv-pagination__item"><a class="sv-button" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}
