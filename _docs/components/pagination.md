---
layout: docs
title: Pagination
description: Pagination description
group: components
---

## Overview ##
{% example html %}
<nav aria-label="Pagination example">
   <ul class="{{ site.css_prefix }}-pagination {{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">Previous</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">1</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">2</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">3</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">4</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">5</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

## States ##
### Disabled ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="{{ site.css_prefix }}-pagination {{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-pagination__item">
         <a class="{{ site.css_prefix }}-pagination__link {{ site.css_prefix }}-is-disabled" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">1</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">2</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">3</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

### Active ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="{{ site.css_prefix }}-pagination {{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">Previous</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">1</a></li>
      <li class="{{ site.css_prefix }}-pagination__item">
         <a class="{{ site.css_prefix }}-pagination__link {{ site.css_prefix }}-is-active" href="#">2 <span class="{{ site.css_prefix }}-assistive-text">Current</span></a>
      </li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">3</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

## Alignment ##
### Center ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="{{ site.css_prefix }}-pagination {{ site.css_prefix }}-pagination--center {{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">Previous</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">1</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">2</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">3</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

### End ###
{% example html %}
<nav aria-label="Pagination example">
   <ul class="{{ site.css_prefix }}-pagination {{ site.css_prefix }}-pagination--end {{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">Previous</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">1</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">2</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">3</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">Next</a></li>
   </ul>
</nav>
{% endexample %}

## Sizes ##
`--small`
{% example html %}
<nav aria-label="Pagination example">
   <ul class="{{ site.css_prefix }}-pagination {{ site.css_prefix }}-pagination--small {{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">1</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">2</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">3</a></li>
   </ul>
</nav>
{% endexample %}

`--large`
{% example html %}
<nav aria-label="Pagination example">
   <ul class="{{ site.css_prefix }}-pagination {{ site.css_prefix }}-pagination--large {{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">1</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">2</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">3</a></li>
   </ul>
</nav>
{% endexample %}

`--x-large`
{% example html %}
<nav aria-label="Pagination example">
   <ul class="{{ site.css_prefix }}-pagination {{ site.css_prefix }}-pagination--x-large {{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">1</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">2</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">3</a></li>
   </ul>
</nav>
{% endexample %}

`--xx-large`
{% example html %}
<nav aria-label="Pagination example">
   <ul class="{{ site.css_prefix }}-pagination {{ site.css_prefix }}-pagination--xx-large {{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">1</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">2</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">3</a></li>
   </ul>
</nav>
{% endexample %}

`--xxx-large`
{% example html %}
<nav aria-label="Pagination example">
   <ul class="{{ site.css_prefix }}-pagination {{ site.css_prefix }}-pagination--xxx-large {{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">1</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">2</a></li>
      <li class="{{ site.css_prefix }}-pagination__item"><a class="{{ site.css_prefix }}-pagination__link" href="#">3</a></li>
   </ul>
</nav>
{% endexample %}
 

