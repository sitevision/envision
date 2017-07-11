---
layout: docs
title: Accessibility
description: Accessibility description
group: utils
---

## Types ##
{% example html %}
<p class="{{ site.css_prefix }}-assistive-text">This text is invisible for the eye but visible to a screenreader</p>
<a href="#" class="{{ site.css_prefix }}-assistive-text {{ site.css_prefix }}-assistive-text--focusable">This text is invisible until focused</a>
{% endexample %}
