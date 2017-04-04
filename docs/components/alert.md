---
layout: docs
title: Alert
description: Alert description
group: components
---

## Overview ##
{% example html %}
<div class="{{ site.css_prefix }}-alert" role="alert"><strong>Hello!</strong> this is alert</div>
{% endexample %}

## Variations ##
{% example html %}
<div class="{{ site.css_prefix }}-alert {{ site.css_prefix }}-alert--success" role="alert">
   <strong>Hello!</strong> this is successful alert 
   <button type="button" class="{{ site.css_prefix }}-alert__close" data-dismiss="alert" aria-label="Close">&times;</button>
</div>
<div class="{{ site.css_prefix }}-alert {{ site.css_prefix }}-alert--warning" role="alert"><strong>Hello!</strong> this is warning alert</div>
<div class="{{ site.css_prefix }}-alert {{ site.css_prefix }}-alert--danger" role="alert"><strong>Hello!</strong> this is danger alert</div>
{% endexample %}

{% example html %}
<div class="{{ site.css_prefix }}-alert" role="alert">
   <button type="button" class="{{ site.css_prefix }}-alert__close" data-dismiss="alert" aria-label="Close">&times;</button>
   <article class="{{ site.css_prefix }}-media">
      <div class="{{ site.css_prefix }}-media__figure">
         <a href="#">
            <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/100x100.png">
         </a>
      </div>
      <div class="{{ site.css_prefix }}-media__body">
         <h3 class="{{ site.css_prefix }}-font">
            <a class="{{ site.css_prefix }}-link {{ site.css_prefix }}-link--title" href="#">John Doe</a>
         </h3>
         <p class="{{ site.css_prefix }}-font">
            Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         </p>
      </div>
   </article>
</div>
{% endexample %}

## Links ##
{% example html %}
<div class="{{ site.css_prefix }}-alert" role="alert"><strong>Hello!</strong> this is alert with <a href="#" class="{{ site.css_prefix }}-alert__link">link</a></div>
{% endexample %}
