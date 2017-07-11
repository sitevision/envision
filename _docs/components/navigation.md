---
layout: docs
title: Navigation
description: Navigation description
group: components
---

<h2>Menubar</h2>

<h3>Fill</h3>
{% example html %}
<nav>
   <ul class="{{ site.css_prefix }}-nav {{ site.css_prefix }}-nav--menubar {{ site.css_prefix }}-nav--fill" role="menubar">
      <li class="{{ site.css_prefix }}-nav__item" role="none">
         <a class="{{ site.css_prefix }}-nav__link" role="menu-item" href="#">Item</a>
      </li>
      <li class="{{ site.css_prefix }}-nav__item" role="none">
         <a class="{{ site.css_prefix }}-nav__link {{ site.css_prefix }}-nav__link--active" role="menu-item" href="#">Item</a>
      </li>
      <li class="{{ site.css_prefix }}-nav__item" role="none">
         <a class="{{ site.css_prefix }}-nav__link" role="menu-item" href="#">Item</a>
      </li>
   </ul>
</nav>
{% endexample %}

<h3>Border</h3>
{% example html %}
<nav>
   <ul class="{{ site.css_prefix }}-nav {{ site.css_prefix }}-nav--menubar {{ site.css_prefix }}-nav--border" role="menubar">
      <li class="{{ site.css_prefix }}-nav__item" role="none">
         <a class="{{ site.css_prefix }}-nav__link" role="menu-item" href="#">Item</a>
      </li>
      <li class="{{ site.css_prefix }}-nav__item" role="none">
         <a class="{{ site.css_prefix }}-nav__link {{ site.css_prefix }}-nav__link--active" role="menu-item" href="#">Item</a>
      </li>
      <li class="{{ site.css_prefix }}-nav__item" role="none">
         <a class="{{ site.css_prefix }}-nav__link" role="menu-item" href="#">Item</a>
      </li>
   </ul>
</nav>
{% endexample %}

<h2>Sidenav</h2>
{% example html %}
<nav>
   <ul class="{{ site.css_prefix }}-nav {{ site.css_prefix }}-nav--sidenav" role="menu">
      <li class="{{ site.css_prefix }}-nav__item" role="none">
         <a class="{{ site.css_prefix }}-nav__link" role="menu-item" href="#">Item</a>
      </li>
      <li class="{{ site.css_prefix }}-nav__item" role="none">
         <a class="{{ site.css_prefix }}-nav__link {{ site.css_prefix }}-nav__link--active" role="menu-item" href="#">Item</a>
      </li>
      <li class="{{ site.css_prefix }}-nav__item" role="none">
         <a class="{{ site.css_prefix }}-nav__link" role="menu-item" href="#">Item</a>
      </li>
   </ul>
</nav>
{% endexample %}
