---
layout: docs
title: Button
description: Buttons description
group: components
---

## Types ##
{% example html %}
<button type="button" class="sv-button">Default</button>

<button type="button" class="sv-button sv-button--primary">Primary</button>

<button type="button" class="sv-button sv-button--danger">Secondary</button>

<button type="button" class="sv-button sv-button--invert">Invert</button>

<button type="button" class="sv-button sv-button--link">Link</button>
{% endexample %}

## Sizes ##
{% example html %}
<p>
   <button type="button" class="sv-button sv-button--primary sv-button--large">Large</button>
   <button type="button" class="sv-button sv-button--large">Large</button>
</p>

<p>
   <button type="button" class="sv-button sv-button--primary">Default</button>
   <button type="button" class="sv-button">Default</button>
</p>

<p>
   <button type="button" class="sv-button sv-button--primary sv-button--small">Small</button>
   <button type="button" class="sv-button sv-button--small">Small</button>
</p>
{% endexample %}

### Block ###
{% example html %}
<p>
   <button type="button" class="sv-button sv-button--primary sv-button--large sv-button--block">Large</button>
   <button type="button" class="sv-button sv-button--large sv-button--block">Large</button>
</p>

<p>
   <button type="button" class="sv-button sv-button--primary sv-button--block">Default</button>
   <button type="button" class="sv-button sv-button--block">Default</button>
</p>

<p>
   <button type="button" class="sv-button sv-button--primary sv-button--small sv-button--block">Small</button>
   <button type="button" class="sv-button sv-button--small sv-button--block">Small</button>
</p>
{% endexample %}

## State ##

### Disabled ###
{% example html %}
<button type="button" class="sv-button" disabled>Disabled</button>
{% endexample %}
