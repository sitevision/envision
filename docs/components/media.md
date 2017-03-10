---
layout: docs
title: Media
description: Media object
group: components
---
## Types ##
### Default media object ###
{% example html %}
<article class="sv-media">
   <div class="sv-media__figure">
      <a href="#">
         <img class="sv-image sv-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="sv-media__body">
      <h3 class="sv-font">
         <a class="sv-link sv-link--title" href="#">Emma</a>
      </h3>
      <p class="sv-font">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

### Default media object with actions menu ###
{% example html %}
<article class="sv-media">
   <div class="sv-media__figure">
      <a href="#">
         <img class="sv-image sv-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="sv-media__body">
      <h3 class="sv-font">
         <a class="sv-link sv-link--title" href="#">Emma</a>
      </h3>
      <div class="sv-media__actions">
         <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
            <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
            <span class="sv-assistive-text">More options</span>
         </button>
      </div>
      <p class="sv-font">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

### Inline media object ###
{% example html %}
<article class="sv-media">
   <div class="sv-media__figure">
      <a href="#">
         <img class="sv-image sv-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="sv-media__body sv-media__body--inline">
      <h3 class="sv-font">
         <a class="sv-link sv-link--title" href="#">Emma</a>
      </h3>
      <p class="sv-font">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

### Column media object ###
{% example html %}
<article class="sv-media sv-media--column">
   <div class="sv-media__figure">
      <a href="#">
         <img class="sv-image" src="https://placehold.it/200x200.png">
      </a>
   </div>
   <div class="sv-media__body">
      <h3 class="sv-font">
         <a class="sv-link sv-link--title" href="#">Emma</a>
      </h3>
      <p class="sv-font">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

## Alignment ##

### Center ###
{% example html %}
<article class="sv-media sv-media--center">
   <div class="sv-media__figure">
      <a href="#">
         <img class="sv-image sv-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="sv-media__body">
      <h3 class="sv-font">
         <a class="sv-link sv-link--title" href="#">Emma</a>
      </h3>
      <p class="sv-font">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

{% example html %}
<article class="sv-media sv-media--column sv-media--center">
   <div class="sv-media__figure">
      <a href="#">
         <img class="sv-image" src="https://placehold.it/200x200.png">
      </a>
   </div>
   <div class="sv-media__body">
      <h3 class="sv-font">
         <a class="sv-link sv-link--title" href="#">Emma</a>
      </h3>
      <p class="sv-font">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

### Bottom ###
{% example html %}
<article class="sv-media sv-media--bottom">
   <div class="sv-media__figure">
      <a href="#">
         <img class="sv-image sv-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="sv-media__body">
      <h3 class="sv-font">
         <a class="sv-link sv-link--title" href="#">Emma</a>
      </h3>
      <p class="sv-font">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

## Order ##

### Reverse ###
{% example html %}
<article class="sv-media sv-media--reverse">
   <div class="sv-media__figure">
      <a href="#">
         <img class="sv-image sv-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="sv-media__body">
      <h3 class="sv-font">
         <a class="sv-link sv-link--title" href="#">Emma</a>
      </h3>
      <p class="sv-font">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
   </div>
</article>
{% endexample %}

## Nesting ##

{% example html %}
<article class="sv-media">
   <div class="sv-media__figure">
      <a href="#">
         <img class="sv-image sv-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="sv-media__body">
      <h3 class="sv-font">
         <a class="sv-link sv-link--title" href="#">Emma</a>
      </h3>
      <p class="sv-font">
         Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
         Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
      </p>
      <article class="sv-media">
         <div class="sv-media__figure">
            <a href="#">
               <img class="sv-image sv-image--small" src="https://placehold.it/400x400.png">
            </a>
         </div>
         <div class="sv-media__body">
            <h3 class="sv-font">
               <a class="sv-link sv-link--title" href="#">Emma</a>
            </h3>
            <p class="sv-font">
               Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros.
               Morbi vel commodo diam. Integer hendrerit tellus nec ligula egestas consequat. Curabitur sapien mauris, rhoncus non blandit eu, rhoncus ut sem. Pellentesque elementum non augue vitae scelerisque.
            </p>
         </div>
      </article>
   </div>
</article>
{% endexample %}
