---
layout: docs
title: Popover
description: Popover description
group: components
---

{% example html %}

<div class="{{ site.css_prefix }}-popover">
   <div class="{{ site.css_prefix }}-popover__arrow {{ site.css_prefix }}-popover__arrow--top"></div>
   <div class="{{ site.css_prefix }}-popover__header">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-popover__header__title">Popover</h4>
   </div>
   <div class="{{ site.css_prefix }}-popover__content {{ site.css_prefix }}-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget. Cras luctus semper facilisis. Aliquam diam risus, tincidunt vitae erat sed, lobortis pretium magna. Donec sollicitudin lorem eget imperdiet auctor.
   </div>
</div>

{% endexample %}

{% example html %}

<div class="{{ site.css_prefix }}-popover">
   <div class="{{ site.css_prefix }}-popover__arrow {{ site.css_prefix }}-popover__arrow--bottom"></div>
   <div class="{{ site.css_prefix }}-popover__header">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-popover__header__title">Popover</h4>
   </div>
   <div class="{{ site.css_prefix }}-popover__content {{ site.css_prefix }}-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget. Cras luctus semper facilisis. Aliquam diam risus, tincidunt vitae erat sed, lobortis pretium magna. Donec sollicitudin lorem eget imperdiet auctor.
   </div>
</div>

{% endexample %}

{% example html %}

<div class="{{ site.css_prefix }}-popover">
   <div class="{{ site.css_prefix }}-popover__arrow {{ site.css_prefix }}-popover__arrow--left"></div>
   <div class="{{ site.css_prefix }}-popover__header">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-popover__header__title">Popover</h4>
   </div>
   <div class="{{ site.css_prefix }}-popover__content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget. Cras luctus semper facilisis. Aliquam diam risus, tincidunt vitae erat sed, lobortis pretium magna. Donec sollicitudin lorem eget imperdiet auctor.
   </div>
</div>

{% endexample %}

{% example html %}

<div class="{{ site.css_prefix }}-popover">
   <div class="{{ site.css_prefix }}-popover__arrow {{ site.css_prefix }}-popover__arrow--right"></div>
   <div class="{{ site.css_prefix }}-popover__header">
      <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-popover__header__title">Popover</h4>
   </div>
   <div class="{{ site.css_prefix }}-popover__content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget. Cras luctus semper facilisis. Aliquam diam risus, tincidunt vitae erat sed, lobortis pretium magna. Donec sollicitudin lorem eget imperdiet auctor.
   </div>
</div>

{% endexample %}

{% example html %}

<button 
   class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary example-popover"
   data-placement="top"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget.">
   Try me!
</button>

{% endexample %}

{% example html %}

<button 
   class="{{ site.css_prefix }}-button example-popover"
   data-placement="top"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget.">
   Top
</button>

<button 
   class="{{ site.css_prefix }}-button example-popover"
   data-placement="right"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget.">
   Right
</button>

<button 
   class="{{ site.css_prefix }}-button example-popover"
   data-placement="bottom"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget.">
   Bottom
</button>

<button 
   class="{{ site.css_prefix }}-button example-popover"
   data-placement="left"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget.">
   Left
</button>

{% endexample %}

{% example html %}

<button 
   class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary example-popover"
   data-placement="top"
   data-trigger="focus"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget.">
   Focus me!
</button>

{% endexample %}

{% example html %}

<button 
   class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary example-popover"
   data-placement="top"
   data-trigger="hover"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget.">
   Hover me!
</button>

{% endexample %}

{% example html %}

<button 
   class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary example-popover"
   data-placement="top"
   data-trigger="hover focus"
   data-title="Lorem ipsum"
   data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum cursus eros, vitae mattis leo laoreet eget.">
   Hover OR focus me!
</button>

{% endexample %}
