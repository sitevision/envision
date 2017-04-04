---
layout: docs
title: Button group
description: Button group description
group: components
---

## Types ##
{% example html %}
<div class="{{ site.css_prefix }}-button-group" role="group">
   <button type="button" class="{{ site.css_prefix }}-button">Default</button>

   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Primary</button>

   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--danger">Secondary</button>
</div>

{% endexample %}
