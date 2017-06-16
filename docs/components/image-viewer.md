---
layout: docs
title: Image viewer
description: Image viewer description
group: components
---
{% example html %}
<div data-image-viewer class="{{ site.css_prefix }}-image-viewer">
   <div>   
      <a class="{{ site.css_prefix }}-image-viewer__images" href="//unsplash.it/2000/400" data-image="0">
         <img src="https://unsplash.it/900/400/" class="{{ site.css_prefix }}-image-viewer__img" alt="Image">
      </a>
   </div>
   <ol class="{{ site.css_prefix }}-image-viewer__thumbnails">
      <li>
         <a class="{{ site.css_prefix }}-image-viewer__images" href="//unsplash.it/400/1900" data-image="1">
            <img src="https://unsplash.it/200/100" class="{{ site.css_prefix }}-image-viewer__thumbnail"
               alt="First thumbnail">
         </a>
      </li>
       <li>
         <a class="{{ site.css_prefix }}-image-viewer__images" href="//unsplash.it/800/800" data-image="2">
            <img src="https://unsplash.it/200/100" class="{{ site.css_prefix }}-image-viewer__thumbnail"
               alt="Second thumbnail">
         </a>
      </li>
   </ol>
</div>

{% endexample %}
