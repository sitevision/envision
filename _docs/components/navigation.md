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
   <ul class="env-nav env-nav--menubar env-nav--fill" role="menubar">
      <li class="env-nav__item" role="menuitem">
         <a class="env-nav__link" href="#">Item</a>
      </li>
      <li class="env-nav__item" role="menuitem">
         <a class="env-nav__link env-nav__link--active" href="#">Item</a>
      </li>
      <li class="env-nav__item" role="menuitem">
         <a class="env-nav__link" href="#">Item</a>
      </li>
   </ul>
</nav>
{% endexample %}

<h3>Border</h3>
{% example html %}
<nav>
   <ul class="env-nav env-nav--menubar env-nav--border" role="menubar">
      <li class="env-nav__item" role="menuitem">
         <a class="env-nav__link" href="#">Item</a>
      </li>
      <li class="env-nav__item" role="menuitem">
         <a class="env-nav__link env-nav__link--active" href="#">Item</a>
      </li>
      <li class="env-nav__item" role="menuitem">
         <a class="env-nav__link" href="#">Item</a>
      </li>
   </ul>
</nav>
{% endexample %}

<h2>Sidenav</h2>
{% example html %}
<nav>
   <ul class="env-nav env-nav--sidenav" role="menu">
      <li class="env-nav__item" role="menuitem">
         <a class="env-nav__link" href="#">Item</a>
      </li>
      <li class="env-nav__item" role="menuitem">
         <a class="env-nav__link env-nav__link--active" href="#">Item</a>
      </li>
      <li class="env-nav__item" role="menuitem">
         <a class="env-nav__link" href="#">Item</a>
      </li>
   </ul>
</nav>
{% endexample %}
