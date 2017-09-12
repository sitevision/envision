---
layout: docs
title: Tab
description: Tab description
group: components
---

## Default ##

{% example html %}

<div class="env-tabs example-tabs">
   <ul class="env-tabs__nav" role="tablist">
      <li class="env-tabs__item" role="presentation"><a id="tab1" class="env-tabs__link env-tabs__link--active" href="#panel1" role="tab" aria-controls="panel1" aria-selected="true" tabindex="0">Tab 1</a></li>
      <li class="env-tabs__item" role="presentation"><a id="tab2" class="env-tabs__link" href="#panel2" role="tab" aria-controls="panel2" aria-selected="false" tabindex="0">Tab 2</a></li>
      <li class="env-tabs__item" role="presentation"><a id="tab3" class="env-tabs__link" href="#panel3" role="tab" aria-controls="panel3" aria-selected="false" tabindex="0">Tab 3</a></li>
   </ul>
</div>

<div id="panel1" class="example-panel" aria-labelledby="tab1" role="tabpanel" aria-hidden="false">
   1
</div>
<div id="panel2" class="example-panel" aria-labelledby="tab2" role="tabpanel" aria-hidden="true">
   2
</div>
<div id="panel3" class="example-panel" aria-labelledby="tab3" role="tabpanel" aria-hidden="true">
   3
</div>

{% endexample %}

```javascript
$('.example-tabs').envTabs();
```

## Hover fill ##

{% example html %}

<div class="env-tabs env-tabs--hover-fill example-tabs2">
   <ul class="env-tabs__nav" role="tablist">
      <li class="env-tabs__item" role="presentation"><a id="tab1" class="env-tabs__link env-tabs__link--active" href="#panel4" role="tab" aria-controls="panel4" aria-selected="true" tabindex="0">Tab 4</a></li>
      <li class="env-tabs__item" role="presentation"><a id="tab2" class="env-tabs__link" href="#panel5" role="tab" aria-controls="panel5" aria-selected="false" tabindex="0">Tab 5</a></li>
      <li class="env-tabs__item" role="presentation"><a id="tab3" class="env-tabs__link" href="#panel6" role="tab" aria-controls="panel6" aria-selected="false" tabindex="0">Tab 6</a></li>
   </ul>
</div>

<div id="panel4" class="example-panel" aria-labelledby="tab4" role="tabpanel" aria-hidden="false">
   4
</div>
<div id="panel5" class="example-panel" aria-labelledby="tab5" role="tabpanel" aria-hidden="true">
   5
</div>
<div id="panel6" class="example-panel" aria-labelledby="tab6" role="tabpanel" aria-hidden="true">
   6
</div>

{% endexample %}

```javascript
$('.example-tabs2').envTabs();
```
