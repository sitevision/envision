---
title: Tab
description: The Tab component organizes content into sections, displaying one panel at a time.
---

## Default Tab

Note: All examples below require tabs to be [initialized from JavaScript](#init).

```html
<div class="env-tabs example-tabs">
   <ul class="env-tabs__nav env-tabs__nav--border-bottom" role="tablist">
      <li role="tab" aria-controls="panel1" aria-selected="true">Tab 1</li>
      <li role="tab" aria-controls="panel2" aria-selected="false">Tab 2</li>
      <li role="tab" aria-controls="panel3" aria-selected="false">Tab 3</li>
   </ul>
</div>
<div id="panel1" class="example-panel" role="tabpanel" aria-hidden="false">
   1
</div>
<div id="panel2" class="example-panel" role="tabpanel" aria-hidden="true">
   2
</div>
<div id="panel3" class="example-panel" role="tabpanel" aria-hidden="true">
   3
</div>
```

## Simple Tab

```html
<div class="env-tabs env-tabs--simple example-tabs1">
   <ul class="env-tabs__nav" role="tablist">
         <li
            id="tab4"
            role="tab"
            aria-controls="panel4"
            aria-selected="false"
            >Tab 4</li
         >
         <li
            id="tab5"
            role="tab"
            aria-controls="panel5"
            aria-selected="true"
            >Tab 5</li
         >
         <li
            id="tab6"
            role="tab"
            aria-controls="panel6"
            aria-selected="false"
            >Tab 6</li
         >
      </li>
   </ul>
</div>

<div
   id="panel4"
   class="example-panel"
   aria-labelledby="tab4"
   role="tabpanel"
   aria-hidden="true"
>
   4
</div>
<div
   id="panel5"
   class="example-panel"
   aria-labelledby="tab5"
   role="tabpanel"
   aria-hidden="false"
>
   5
</div>
<div
   id="panel6"
   class="example-panel"
   aria-labelledby="tab6"
   role="tabpanel"
   aria-hidden="true"
>
   6
</div>
```

## Hover fill

```html
<div class="env-tabs env-tabs--hover-fill example-tabs2">
   <ul class="env-tabs__nav" role="tablist">
      <li id="tab7" role="tab" aria-controls="panel7" aria-selected="true">
         Tab 7
      </li>
      <li id="tab8" role="tab" aria-controls="panel8" aria-selected="false">
         Tab 8
      </li>
      <li id="tab9" role="tab" aria-controls="panel9" aria-selected="false">
         Tab 9
      </li>
   </ul>
</div>

<div
   id="panel7"
   class="example-panel"
   aria-labelledby="tab7"
   role="tabpanel"
   aria-hidden="false"
>
   7
</div>
<div
   id="panel8"
   class="example-panel"
   aria-labelledby="tab8"
   role="tabpanel"
   aria-hidden="true"
>
   8
</div>
<div
   id="panel9"
   class="example-panel"
   aria-labelledby="tab9"
   role="tabpanel"
   aria-hidden="true"
>
   9
</div>
```

## Responsive

Add class modifier `env-tabs--column` to tab stack container to make tabs vertical.

```html
<div class="env-tabs example-tabs3">
   <ul class="env-tabs__nav env-tabs--column" role="tablist">
      <li   id="tab10"
            role="tab"
            aria-controls="panel10"
            aria-selected="true"
            >Tab 10
      </li>
      <li   id="tab11"
            role="tab"
            aria-controls="panel11"
            aria-selected="false"
            >Tab 11
      </li>
      <li   id="tab12"
            role="tab"
            aria-controls="panel12"
            aria-selected="false"
            >Tab 12</a
         >
      </li>
      <li   id="tab13"
            role="tab"
            aria-controls="panel13"
            aria-selected="false"
            >Tab 13
      </li>
      <li   id="tab14"
            role="tab"
            aria-controls="panel14"
            aria-selected="false"
            >Tab 14
      </li>
   </ul>
</div>

<div
   id="panel10"
   class="example-panel"
   aria-labelledby="tab10"
   role="tabpanel"
   aria-hidden="false"
>
   10
</div>
<div
   id="panel11"
   class="example-panel"
   aria-labelledby="tab11"
   role="tabpanel"
   aria-hidden="true"
>
   11
</div>
<div
   id="panel12"
   class="example-panel"
   aria-labelledby="tab12"
   role="tabpanel"
   aria-hidden="true"
>
   12
</div>
<div
   id="panel13"
   class="example-panel"
   aria-labelledby="tab13"
   role="tabpanel"
   aria-hidden="true"
>
   13
</div>
<div
   id="panel14"
   class="example-panel"
   aria-labelledby="tab14"
   role="tabpanel"
   aria-hidden="true"
>
   14
</div>
```

<div id="init"></div>

## Initiation

```javascript
envision.tabs('.example-tabs');
```
