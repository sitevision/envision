--- 
layout: docs 
title: Embedded 
description: Embedded description 
group: components 
--- 
## Example 1 ## 

{% example html %}

<div class="{{ site.css_prefix }}-embedded" style="width:20em">
   <div class="{{ site.css_prefix }}-embedded__img-container">
      <img class="{{ site.css_prefix }}-embedded__img" alt="Image alternative" src="https://placehold.it/640x480.png">
   </div>
   <div class="{{ site.css_prefix }}-embedded__block">
      <h4 class="{{ site.css_prefix }}-text">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted {{ site.css_prefix }}-embedded__text">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder.</p>
      <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Lorem ipsum</button>
   </div>
</div>

{% endexample %} 

## Example 2 ##

Uses `{{ site.css_prefix }}-embedded--horizontal` and `{{ site.css_prefix }}-embedded__img`.
Use `{{ site.css_prefix }}-embedded__img-container--right` to align image to the right. 

{% example html%}

<div class="{{ site.css_prefix }}-embedded {{ site.css_prefix }}-embedded--horizontal">
   <div class="{{ site.css_prefix }}-embedded__img-container">
      <img class="{{ site.css_prefix }}-embedded__img" alt="Image alternative" src="https://placehold.it/270x180.png">
   </div>
   <div class="{{ site.css_prefix }}-embedded__block">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-embedded__title">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-embedded__text {{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta tenderloin short loin.</p>
   </div>
</div>

<br />

<div class="{{ site.css_prefix }}-embedded {{ site.css_prefix }}-embedded--horizontal">
   <div class="{{ site.css_prefix }}-embedded__img-container {{ site.css_prefix }}-embedded__img-container--right">
      <img class="{{ site.css_prefix }}-embedded__img" alt="Image alternative"
         src="https://placehold.it/270x180.png">
   </div>
   <div class="{{ site.css_prefix }}-embedded__block">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-embedded__title">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-embedded__text {{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta tenderloin short loin.</p>
   </div>
</div>

{% endexample %} 

## Example 3 ## 

{% example html %}

<div class="{{ site.css_prefix }}-embedded">
   <div class="{{ site.css_prefix }}-embedded__img-container">
      <img class="{{ site.css_prefix }}-embedded__img" alt="Image alternative" src="https://placehold.it/769x180.png">
   </div>
   <div class="{{ site.css_prefix }}-embedded__block">
      <h4 class="{{ site.css_prefix }}-text">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-embedded__text {{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta tenderloin short loin. Jowl pastrami drumstick pig, beef jerky chicken ham hock salami.</p>
   </div>
</div>

{% endexample %}

## Example 4 ## 

Uses `{{ site.css_prefix }}-embedded__block--overlay` to position text on top of image.
You can align text to left or right with `{{ site.css_prefix }}-embedded__block--overlay--left` or `*--right` 

{% example html %}

<div class="{{ site.css_prefix }}-embedded {{ site.css_prefix }}-embedded--cover">
   <div class="{{ site.css_prefix }}-embedded__img-container">
      <img class="{{ site.css_prefix }}-embedded__img" alt="Image alternative" src="https://placehold.it/769x180.png">
   </div>
   <div class="{{ site.css_prefix }}-embedded__block--overlay">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-embedded__title">Lorem ipsum</h4>
      <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted {{ site.css_prefix }}-embedded__text">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder porchetta tenderloin short loin.</p>
   </div>
</div>

{% endexample %}

