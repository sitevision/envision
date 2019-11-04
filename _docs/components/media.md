---
layout: docs
title: Media
description: Media object
group: components
---
## Types ##
### Default media object ###
{% example html %}
<article class="env-media">
   <div class="env-media__figure">
      <a href="#" aria-label="Example image">
         <img class="env-image env-image--small" src="https://placehold.it/400x400.png" alt="">
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-text">
         <a href="#">Emma</a>
      </h3>
      <p class="env-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

### Default media object with actions menu ###
{% example html %}
<article class="env-media">
   <div class="env-media__figure">
      <a href="#" aria-label="Example image">
         <img class="env-image env-image--small" src="https://placehold.it/400x400.png" alt="">
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-text">
         <a href="#">Emma</a>
      </h3>
      <p class="env-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
   <div class="env-media__actions">
      <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
         <svg class="env-icon">
            <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-arrow-down"></use>
         </svg>
         <span class="env-assistive-text">More options</span>
      </button>
   </div>
</article>
{% endexample %}

### Inline media object ###
{% example html %}
<article class="env-media">
   <div class="env-media__figure">
      <a href="#" aria-label="Example image">
         <img class="env-image env-image--small" src="https://placehold.it/400x400.png" alt="">
      </a>
   </div>
   <div class="env-media__body env-media__body--inline">
      <h3 class="env-text">
         <a href="#">Emma</a>
      </h3>
      <p class="env-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

### Column media object ###
{% example html %}
<article class="env-media env-media--column">
   <div class="env-media__figure">
      <a href="#" aria-label="Example image">
         <img class="env-image" src="https://placehold.it/200x200.png" alt="">
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-text">
         <a href="#">Emma</a>
      </h3>
      <p class="env-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

## Alignment ##

### Center ###
{% example html %}
<article class="env-media env-media--center">
   <div class="env-media__figure">
      <a href="#" aria-label="Example image">
         <img class="env-image env-image--small" src="https://placehold.it/400x400.png" alt="">
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-text">
         <a href="#">Emma</a>
      </h3>
      <p class="env-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

{% example html %}
<article class="env-media env-media--column env-media--center">
   <div class="env-media__figure">
      <a href="#" aria-label="Example image">
         <img class="env-image" src="https://placehold.it/200x200.png" alt="">
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-text">
         <a href="#">Emma</a>
      </h3>
      <p class="env-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

Alignment modifiers can also be applied to elements within the media container (`__figure` & `__body`)

{% example html %}
<article class="env-media env-media--column env-media">
   <div class="env-media__figure env-media__figure--center">
      <a href="#" aria-label="Example image">
         <img class="env-image" src="https://placehold.it/200x200.png" alt="">
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-text">
         <a href="#">Emma</a>
      </h3>
      <p class="env-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

### Bottom ###
{% example html %}
<article class="env-media env-media--bottom">
   <div class="env-media__figure">
      <a href="#" aria-label="Example image">
         <img class="env-image env-image--small" src="https://placehold.it/400x400.png" alt="">
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-text">
         <a href="#">Emma</a>
      </h3>
      <p class="env-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

## Order ##

### Reverse ###
{% example html %}
<article class="env-media env-media--reverse">
   <div class="env-media__figure">
      <a href="#" aria-label="Example image">
         <img class="env-image env-image--small" src="https://placehold.it/400x400.png" alt="">
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-text">
         <a href="#">Emma</a>
      </h3>
      <p class="env-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

## Nesting ##

{% example html %}
<article class="env-media">
   <div class="env-media__figure">
      <a href="#" aria-label="Example image">
         <img class="env-image env-image--small" src="https://placehold.it/400x400.png" alt="">
      </a>
   </div>
   <div class="env-media__body">
      <h3 class="env-text">
         <a href="#">Emma</a>
      </h3>
      <p class="env-text">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
      <article class="env-media">
         <div class="env-media__figure">
            <a href="#" aria-label="Example image">
               <img class="env-image env-image--small" src="https://placehold.it/400x400.png" alt="">
            </a>
         </div>
         <div class="env-media__body">
            <h3 class="env-text">
               <a href="#">Emma</a>
            </h3>
            <p class="env-text">
               Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
               Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
            </p>
         </div>
      </article>
   </div>
</article>
{% endexample %}
