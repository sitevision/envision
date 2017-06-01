---
layout: docs
title: Image viewer
description: Image viewer description
group: components
---
{% example html %}
<div data-image-viewer class="{{ site.css_prefix }}-image-viewer">
   <div class="{{ site.css_prefix }}-image-viewer {{ site.css_prefix }}-image-viewer--slide {{ site.css_prefix }}-image-viewer__inner">
      <div class="{{ site.css_prefix }}-image-viewer__item {{ site.css_prefix }}-image-viewer__item--active">
         <img tabindex="-1" src="https://unsplash.it/800/600/?blur" class="{{ site.css_prefix }}-embedded__img" alt="First slide">
      </div>
      <div class="{{ site.css_prefix }}-image-viewer__item">
         <img tabindex="-1" src="https://unsplash.it/800/600/" class="{{ site.css_prefix }}-embedded__img" alt="Second slide">
      </div>
      <div class="{{ site.css_prefix }}-image-viewer__item">
         <img tabindex="-1" src="https://unsplash.it/800/600/?blur" class="{{ site.css_prefix }}-embedded__img" alt="Third slide">
      </div>
   </div>
   <ol class="{{ site.css_prefix }}-image-viewer__thumbnails">
      <li data-move-to="0">
         <a href="//unsplash.it/800/600/?blur">
            <img src="https://unsplash.it/800/600/?blur" class="{{ site.css_prefix }}-image-viewer__thumbnail {{ site.css_prefix }}-image-viewer__item--active" alt="First thumbnail">
         </a>
      </li>
      <li data-move-to="1">
         <a href="//unsplash.it/800/600/">
            <img src="https://unsplash.it/800/600/" class="{{ site.css_prefix }}-image-viewer__thumbnail"
               alt="Second thumbnail">
         </a>
      </li>
      <li data-move-to="2">
         <a href="//unsplash.it/800/600/?blur">
            <img src="https://unsplash.it/800/600/?blur" class="{{ site.css_prefix }}-image-viewer__thumbnail"
               alt="Third thumbnail">
         </a>
      </li>
   </ol>
</div>

{% endexample %}
