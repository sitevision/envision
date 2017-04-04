---
layout: docs
title: Icons
description: Icons description
group: utils
---

<div class="icons-demo">
   <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal--fixed {{ site.css_prefix }}-list--horizontal--fixed--6">
      {% for icon in site.data.icons %}
      <li class="{{ site.css_prefix }}-list__item" title="{{ site.css_prefix }}{{ icon.className }}"><i class="{{ site.css_prefix }}{{ icon.className }}"></i></li>
      {% endfor %}
   </ul>
</div>
