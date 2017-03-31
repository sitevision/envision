---
layout: docs
title: Badge
description: Badge description
group: components
---

## Overview ##
{% example html %}
<h1 class="{{ site.css_prefix }}-text">Hello <span class="{{ site.css_prefix }}-badge">New</span></h1>
<h2 class="{{ site.css_prefix }}-text">Hello <span class="{{ site.css_prefix }}-badge">New</span></h2>
{% endexample %}

## Variations ##
{% example html %}
<span class="{{ site.css_prefix }}-badge">Default</span>
<span class="{{ site.css_prefix }}-badge {{ site.css_prefix }}-badge--success">Success</span>
<span class="{{ site.css_prefix }}-badge {{ site.css_prefix }}-badge--warning">Warning</span>
<span class="{{ site.css_prefix }}-badge {{ site.css_prefix }}-badge--danger">Danger</span>
{% endexample %}
