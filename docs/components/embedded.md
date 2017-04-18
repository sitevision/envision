--- 
layout: docs 
title: Embedded 
description: Embedded description 
group: components 
--- 
## Example 1 ## 

{% example html %}

<div class="{{ site.css_prefix }}-embedded" style="width:18em">
   <img class="{{ site.css_prefix }}-embedded__img" alt="Image alternative" src="https://unsplash.it/400/180?blur">
   <div class="{{ site.css_prefix }}-embedded__block">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text-size--large {{ site.css_prefix }}-text--bold">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--tagline {{ site.css_prefix }}-text-size--medium {{ site.css_prefix }}-embedded__text">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder.</p>
      <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Lorem ipsum</button>
   </div>
</div>

{% endexample %} 

## Example 2 ##

Uses `{{ site.css_prefix }}-embedded--horizontal` and `{{ site.css_prefix }}-embedded__img--horizontal`.
Use `{{ site.css_prefix }}-embedded__img--horizontal--right` to align image to the right. {% example html%}
<div class="{{ site.css_prefix }}-embedded {{ site.css_prefix }}-embedded--horizontal">
   <img class="{{ site.css_prefix }}-embedded__img--horizontal" alt="Image alternative" src="https://unsplash.it/400/180?blur">
   <div class="{{ site.css_prefix }}-embedded__block">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text-size--large {{ site.css_prefix }}-text--bold {{ site.css_prefix }}-embedded__title">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-embedded__text {{ site.css_prefix }}-text {{ site.css_prefix }}-text--tagline {{ site.css_prefix }}-text-size--medium">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta
         tenderloin short loin. Jowl pastrami drumstick pig.</p>
   </div>
</div>

<br />

<div class="{{ site.css_prefix }}-embedded {{ site.css_prefix }}-embedded--horizontal">
   <img class="{{ site.css_prefix }}-embedded__img--horizontal {{ site.css_prefix }}-embedded__img--horizontal--right" alt="Image alternative"
      src="https://unsplash.it/400/180?blur">
   <div class="{{ site.css_prefix }}-embedded__block">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text-size--large {{ site.css_prefix }}-text--bold {{ site.css_prefix }}-embedded__title">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-embedded__text {{ site.css_prefix }}-text {{ site.css_prefix }}-text--tagline {{ site.css_prefix }}-text-size--medium">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta
         tenderloin short loin. Jowl pastrami drumstick pig.</p>
   </div>
</div>

{% endexample %} 

## Example 3 ## 

{% example html %}

<div class="{{ site.css_prefix }}-embedded">
   <img class="{{ site.css_prefix }}-embedded__img" alt="Image alternative" src="https://unsplash.it/769/180?blur">
   <div class="{{ site.css_prefix }}-embedded__block">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text-size--large {{ site.css_prefix }}-text--bold">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-embedded__text {{ site.css_prefix }}-text {{ site.css_prefix }}-text--tagline {{ site.css_prefix }}-text-size--medium">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta
         tenderloin short loin. Jowl pastrami drumstick pig, beef jerky chicken ham hock salami.</p>
   </div>
</div>

<br />

<div class="{{ site.css_prefix }}-embedded">
   <div class="{{ site.css_prefix }}-embedded__block">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text-size--large {{ site.css_prefix }}-text--bold">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-embedded__text {{ site.css_prefix }}-text {{ site.css_prefix }}-text--tagline {{ site.css_prefix }}-text-size--medium">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta
         tenderloin short loin. Jowl pastrami drumstick pig, beef jerky chicken ham hock salami.</p>
   </div>
   <img class="{{ site.css_prefix }}-embedded__img" alt="Image alternative" src="https://unsplash.it/769/180?blur">
</div>

{% endexample %}

## Example 4 ## 

Uses `{{ site.css_prefix }}-embedded__block--overlay` to position text on top of image.
You can align text to left or right with `{{ site.css_prefix }}-embedded__block--overlay--left` or `*--right` 

{% example html %}

<div class="{{ site.css_prefix }}-embedded {{ site.css_prefix }}-embedded--cover">
   <img class="{{ site.css_prefix }}-embedded__img" alt="Image alternative" src="https://unsplash.it/400/180?blur">
   <div class="{{ site.css_prefix }}-embedded__block--overlay">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text-size--large {{ site.css_prefix }}-text--bold {{ site.css_prefix }}-embedded__title">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--tagline {{ site.css_prefix }}-text-size--medium {{ site.css_prefix }}-embedded__text">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta
         tenderloin short loin.</p>
   </div>
</div>

{% endexample %}

