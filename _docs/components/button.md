---
layout: docs
title: Button
description: Buttons description
group: components
---

## Types ##
{% example html %}
<button type="button" class="env-button">Default</button>

<button type="button" class="env-button env-button--primary">Primary</button>

<button type="button" class="env-button env-button--success">Success</button>

<button type="button" class="env-button env-button--danger">Danger</button>

<button type="button" class="env-button env-button--invert">Invert</button>

<button type="button" class="env-button env-button--link">Link</button>
{% endexample %}

## Sizes ##
{% example html %}
<p>
   <button type="button" class="env-button env-button--primary env-button--large">Large</button>
   <button type="button" class="env-button env-button--large">Large</button>
</p>

<p>
   <button type="button" class="env-button env-button--primary">Default</button>
   <button type="button" class="env-button">Default</button>
</p>

<p>
   <button type="button" class="env-button env-button--primary env-button--small">Small</button>
   <button type="button" class="env-button env-button--small">Small</button>
</p>
{% endexample %}

### Block ###
{% example html %}
<p>
   <button type="button" class="env-button env-button--primary env-button--large env-button--block">Large</button>
   <button type="button" class="env-button env-button--large env-button--block">Large</button>
</p>

<p>
   <button type="button" class="env-button env-button--primary env-button--block">Default</button>
   <button type="button" class="env-button env-button--block">Default</button>
</p>

<p>
   <button type="button" class="env-button env-button--primary env-button--small env-button--block">Small</button>
   <button type="button" class="env-button env-button--small env-button--block">Small</button>
</p>
{% endexample %}

## State ##

### Disabled ###
{% example html %}
<button type="button" class="env-button" disabled>Disabled</button>
{% endexample %}
