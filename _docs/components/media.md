---
layout: docs
title: Media
description: Media object
group: components
---
## Types ##
### Default media object ###
{% example html %}
<article class="{{ site.css_prefix }}-media">
   <div class="{{ site.css_prefix }}-media__figure">
      <a href="#">
         <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body">
      <h3 class="{{ site.css_prefix }}-text">
         <a href="#">Emma</a>
      </h3>
      <p class="{{ site.css_prefix }}-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

### Default media object with actions menu ###
{% example html %}
<article class="{{ site.css_prefix }}-media">
   <div class="{{ site.css_prefix }}-media__figure">
      <a href="#">
         <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body">
      <h3 class="{{ site.css_prefix }}-text">
         <a href="#">Emma</a>
      </h3>
      <p class="{{ site.css_prefix }}-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
   <div class="{{ site.css_prefix }}-media__actions">
      <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
         <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
         <span class="{{ site.css_prefix }}-assistive-text">More options</span>
      </button>
   </div>
</article>
{% endexample %}

### Inline media object ###
{% example html %}
<article class="{{ site.css_prefix }}-media">
   <div class="{{ site.css_prefix }}-media__figure">
      <a href="#">
         <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body {{ site.css_prefix }}-media__body--inline">
      <h3 class="{{ site.css_prefix }}-text">
         <a href="#">Emma</a>
      </h3>
      <p class="{{ site.css_prefix }}-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

### Column media object ###
{% example html %}
<article class="{{ site.css_prefix }}-media {{ site.css_prefix }}-media--column">
   <div class="{{ site.css_prefix }}-media__figure">
      <a href="#">
         <img class="{{ site.css_prefix }}-image" src="https://placehold.it/200x200.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body">
      <h3 class="{{ site.css_prefix }}-text">
         <a href="#">Emma</a>
      </h3>
      <p class="{{ site.css_prefix }}-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

## Alignment ##

### Center ###
{% example html %}
<article class="{{ site.css_prefix }}-media {{ site.css_prefix }}-media--center">
   <div class="{{ site.css_prefix }}-media__figure">
      <a href="#">
         <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body">
      <h3 class="{{ site.css_prefix }}-text">
         <a href="#">Emma</a>
      </h3>
      <p class="{{ site.css_prefix }}-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

{% example html %}
<article class="{{ site.css_prefix }}-media {{ site.css_prefix }}-media--column {{ site.css_prefix }}-media--center">
   <div class="{{ site.css_prefix }}-media__figure">
      <a href="#">
         <img class="{{ site.css_prefix }}-image" src="https://placehold.it/200x200.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body">
      <h3 class="{{ site.css_prefix }}-text">
         <a href="#">Emma</a>
      </h3>
      <p class="{{ site.css_prefix }}-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

Alignment modifiers can also be applied to elements within the media container (`__figure` & `__body`)

{% example html %}
<article class="{{ site.css_prefix }}-media {{ site.css_prefix }}-media--column {{ site.css_prefix }}-media">
   <div class="{{ site.css_prefix }}-media__figure {{ site.css_prefix }}-media__figure--center">
      <a href="#">
         <img class="{{ site.css_prefix }}-image" src="https://placehold.it/200x200.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body">
      <h3 class="{{ site.css_prefix }}-text">
         <a href="#">Emma</a>
      </h3>
      <p class="{{ site.css_prefix }}-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

### Bottom ###
{% example html %}
<article class="{{ site.css_prefix }}-media {{ site.css_prefix }}-media--bottom">
   <div class="{{ site.css_prefix }}-media__figure">
      <a href="#">
         <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body">
      <h3 class="{{ site.css_prefix }}-text">
         <a href="#">Emma</a>
      </h3>
      <p class="{{ site.css_prefix }}-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

## Order ##

### Reverse ###
{% example html %}
<article class="{{ site.css_prefix }}-media {{ site.css_prefix }}-media--reverse">
   <div class="{{ site.css_prefix }}-media__figure">
      <a href="#">
         <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body">
      <h3 class="{{ site.css_prefix }}-text">
         <a href="#">Emma</a>
      </h3>
      <p class="{{ site.css_prefix }}-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

## Nesting ##

{% example html %}
<article class="{{ site.css_prefix }}-media">
   <div class="{{ site.css_prefix }}-media__figure">
      <a href="#">
         <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body">
      <h3 class="{{ site.css_prefix }}-text">
         <a href="#">Emma</a>
      </h3>
      <p class="{{ site.css_prefix }}-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
      <article class="{{ site.css_prefix }}-media">
         <div class="{{ site.css_prefix }}-media__figure">
            <a href="#">
               <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
            </a>
         </div>
         <div class="{{ site.css_prefix }}-media__body">
            <h3 class="{{ site.css_prefix }}-text">
               <a href="#">Emma</a>
            </h3>
            <p class="{{ site.css_prefix }}-text">
               Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
               Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
            </p>
         </div>
      </article>
   </div>
</article>
{% endexample %}
