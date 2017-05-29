---
layout: docs
title: Text
description: Text description
group: utils
---

## Headings ##

{% example html %}
<h1 class="{{ site.css_prefix }}-text">Heading 1</h1>

<h2 class="{{ site.css_prefix }}-text">Heading 2</h2>

<h3 class="{{ site.css_prefix }}-text">Heading 3</h3>

<h4 class="{{ site.css_prefix }}-text">Heading 4</h4>

<h5 class="{{ site.css_prefix }}-text">Heading 5</h5>

<h6 class="{{ site.css_prefix }}-text">Heading 6</h6>
{% endexample %}

{% example html %}
<section class="sv-text">

<h1>Heading 1</h1>

<h2>Heading 2</h2>

<h3>Heading 3</h3>

<h4>Heading 4</h4>

<h5>Heading 5</h5>

<h6>Heading 6</h6>

</section>
{% endexample %}

{% example html %}
<h3 class="{{ site.css_prefix }}-text">Fancy display heading <small>With faded secondary text</small></h3>
{% endexample %}

{% example html %}

<h1 class="{{ site.css_prefix }}-text--uppercase">will be all uppercase</h1>

<p class="{{ site.css_prefix }}-text--lowercase">THIS WILL BE LOWERCASE</p>

<p class="{{ site.css_prefix }}-text--capitalize">every word will start with a capital letter.</p>

{% endexample %}
