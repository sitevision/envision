---
layout: docs
title: Colors
description: Colors description
group: utils
---

## Background color ##

{% example html %}
<div class="example-color">
   <div class="{{ site.css_prefix }}-bg-color--brand">Brand</div>
   <div class="{{ site.css_prefix }}-bg-color--success">Success</div>
   <div class="{{ site.css_prefix }}-bg-color--warning">Warning</div>
   <div class="{{ site.css_prefix }}-bg-color--danger">Danger</div>
   <div class="{{ site.css_prefix }}-bg-color--base {{ site.css_prefix }}-color--lighter">Base</div>
   <div class="{{ site.css_prefix }}-bg-color--darker {{ site.css_prefix }}-color--lighter">Darker</div>
   <div class="{{ site.css_prefix }}-bg-color--dark">Dark</div>
   <div class="{{ site.css_prefix }}-bg-color--normal">Normal</div>
   <div class="{{ site.css_prefix }}-bg-color--light">Light</div>
   <div class="{{ site.css_prefix }}-bg-color--lighter">Lighter</div>
   <div class="{{ site.css_prefix }}-bg-color--lightest">Lightest</div>
</div>
{% endexample %}

## Color ##
{% example html %}
<div class="example-color">
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--brand">Brand</p>
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--success">Success</p>
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--warning">Warning</p>
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--danger">Danger</p>
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--base">Base</p>
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--darker">Darker</p>
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--dark">Dark</p>
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--normal">Normal</p>
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--light">Light</p>
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--lighter {{ site.css_prefix }}-bg-color--dark">Lighter</p>
   <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-color--lightest {{ site.css_prefix }}-bg-color--dark">Lightest</p>
</div>
{% endexample %}
