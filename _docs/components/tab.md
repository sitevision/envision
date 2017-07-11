---
layout: docs
title: Tab
description: Tab description
group: components
---

{% example html %}

<div class="env-tabs example-tabs">
   <ul class="env-tabs__nav" role="tablist">
      <li class="env-tabs__nav__item" role="presentation"><a id="tab1" class="env-tabs__nav__link env-is-active" href="#panel1" role="tab" aria-controls="panel1" aria-selected="true" tabindex="0">Tab 1</a></li>
      <li class="env-tabs__nav__item" role="presentation"><a id="tab2" class="env-tabs__nav__link" href="#panel2" role="tab" aria-controls="panel2" aria-selected="false" tabindex="0">Tab 2</a></li>
      <li class="env-tabs__nav__item" role="presentation"><a id="tab3" class="env-tabs__nav__link" href="#panel3" role="tab" aria-controls="panel3" aria-selected="false" tabindex="0">Tab 3</a></li>
   </ul>
   <div id="panel1" aria-labelledby="tab1" role="tabpanel" aria-hidden="false">
      <img class="env-image" src="https://placehold.it/100x100?text=1">
   </div>
   <div id="panel2" aria-labelledby="tab2" role="tabpanel" aria-hidden="true">
      <img class="env-image" src="https://placehold.it/100x100?text=2">
   </div>
   <div id="panel3" aria-labelledby="tab3" role="tabpanel" aria-hidden="true">
      <img class="env-image" src="https://placehold.it/100x100?text=3">
   </div>
</div>

{% endexample %}
