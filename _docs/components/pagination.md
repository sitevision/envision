---
layout: docs
title: Pagination
description: Pagination description
group: components
---

## Overview ##
{% example html %}
<nav aria-label="Pagination example">
   <ul class="env-pagination env-list env-list--horizontal">
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">Previous</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">1</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">2</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">3</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">4</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">5</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

## States ##
### Disabled ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="env-pagination env-list env-list--horizontal">
      <li class="env-pagination__item">
         <a class="env-pagination__link env-is-disabled" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">1</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">2</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">3</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

### Active ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="env-pagination env-list env-list--horizontal">
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">Previous</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">1</a></li>
      <li class="env-pagination__item">
         <a class="env-pagination__link env-is-active" href="#">2 <span class="env-assistive-text">Current</span></a>
      </li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">3</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

## Alignment ##
### Center ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--center env-list env-list--horizontal">
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">Previous</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">1</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">2</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">3</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

### End ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--end env-list env-list--horizontal">
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">Previous</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">1</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">2</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">3</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

## Sizes ##
`--small`
{% example html %}
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--small env-list env-list--horizontal">
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">1</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">2</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">3</a></li>
   </ul>
</nav>
{% endexample %}

`--large`
{% example html %}
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--large env-list env-list--horizontal">
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">1</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">2</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">3</a></li>
   </ul>
</nav>
{% endexample %}

`--x-large`
{% example html %}
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--x-large env-list env-list--horizontal">
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">1</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">2</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">3</a></li>
   </ul>
</nav>
{% endexample %}

`--xx-large`
{% example html %}
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--xx-large env-list env-list--horizontal">
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">1</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">2</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">3</a></li>
   </ul>
</nav>
{% endexample %}

`--xxx-large`
{% example html %}
<nav aria-label="Pagination example">
   <ul class="env-pagination env-pagination--xxx-large env-list env-list--horizontal">
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">1</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">2</a></li>
      <li class="env-pagination__item"><a class="env-pagination__link" href="#">3</a></li>
   </ul>
</nav>
{% endexample %}
 

