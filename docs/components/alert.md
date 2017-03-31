---
layout: docs
title: Alert
description: Alert description
group: components
---

## Overview ##
{% example html %}
<div class="sv-alert sv-alert--default" role="alert"><strong>Hello!</strong> this is alert</div>
{% endexample %}

## Variations ##
{% example html %}
<div class="sv-alert sv-alert--success" role="alert">
   <strong>Hello!</strong> this is successful alert 
   <button type="button" class="sv-alert__close" data-dismiss="alert" aria-label="Close">&times;</button>
</div>
<div class="sv-alert sv-alert--warning" role="alert"><strong>Hello!</strong> this is warning alert</div>
<div class="sv-alert sv-alert--danger" role="alert"><strong>Hello!</strong> this is danger alert</div>
{% endexample %}

{% example html %}
<div class="sv-alert sv-alert--default" role="alert">
   <button type="button" class="sv-alert__close" data-dismiss="alert" aria-label="Close">&times;</button>
   <article class="sv-media">
      <div class="sv-media__figure">
         <a href="#">
            <img class="sv-image sv-image--small" src="https://placehold.it/100x100.png">
         </a>
      </div>
      <div class="sv-media__body">
         <h3 class="sv-font">
            <a class="sv-link sv-link--title" href="#">John Doe</a>
         </h3>
         <p class="sv-font">
            Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         </p>
      </div>
   </article>
</div>
{% endexample %}

## Links ##
{% example html %}
<div class="sv-alert sv-alert--default" role="alert"><strong>Hello!</strong> this is alert with <a href="#" class="sv-alert__link">link</a></div>
{% endexample %}
