---
layout: docs
title: Icons
description: Icons description
group: utils
---

<div class="icons-demo">
   <ul class="sv-list sv-list-horizontal-fixed sv-list-horizontal-fixed--6">
      {% for icon in site.data.icons %}
      <li class="sv-list__item" title="{{ icon.className }}"><i class="{{ icon.className }}"></i></li>
      {% endfor %}
   </ul>
</div>
