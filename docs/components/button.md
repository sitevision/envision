---
layout: docs
title: Button
description: Buttons description
group: components
---

## Types ##
{% example html %}
<button type="button" class="{{ site.css_prefix }}-button">Default</button>

<button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Primary</button>

<button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--danger">Secondary</button>

<button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--invert">Invert</button>

<button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--link">Link</button>
{% endexample %}

## Sizes ##
{% example html %}
<p>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--large">Large</button>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--large">Large</button>
</p>

<p>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Default</button>
   <button type="button" class="{{ site.css_prefix }}-button">Default</button>
</p>

<p>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--small">Small</button>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--small">Small</button>
</p>
{% endexample %}

### Block ###
{% example html %}
<p>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--large {{ site.css_prefix }}-button--block">Large</button>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--large {{ site.css_prefix }}-button--block">Large</button>
</p>

<p>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--block">Default</button>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--block">Default</button>
</p>

<p>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--small {{ site.css_prefix }}-button--block">Small</button>
   <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--small {{ site.css_prefix }}-button--block">Small</button>
</p>
{% endexample %}

## State ##

### Disabled ###
{% example html %}
<button type="button" class="{{ site.css_prefix }}-button" disabled>Disabled</button>
{% endexample %}
