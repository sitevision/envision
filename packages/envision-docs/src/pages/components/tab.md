---
title: Tab
---

## Default Tab

Note: All examples below require tabs to be <a href="#init">initialized from JavaScript</a>.

```html
<div class="env-tabs example-tabs">
   <ul class="env-tabs__nav env-tabs__nav--border-bottom" role="tablist">
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab1"
            class="env-tabs__link env-tabs__link--active"
            href="#panel1"
            role="tab"
            aria-controls="panel1"
            aria-selected="true"
            >Tab 1</a
         >
      </li>
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab2"
            class="env-tabs__link"
            href="#panel2"
            role="tab"
            aria-controls="panel2"
            aria-selected="false"
            >Tab 2</a
         >
      </li>
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab3"
            class="env-tabs__link"
            href="#panel3"
            role="tab"
            aria-controls="panel3"
            aria-selected="false"
            >Tab 3</a
         >
      </li>
   </ul>
</div>
<a
   href="#"
   id="panel1"
   class="example-panel"
   aria-labelledby="tab1"
   role="tabpanel"
   aria-hidden="false"
>
   1
</a>
<a
   href="#"
   id="panel2"
   class="example-panel"
   aria-labelledby="tab2"
   role="tabpanel"
   aria-hidden="true"
>
   2
</a>
<a
   href="#"
   id="panel3"
   class="example-panel"
   aria-labelledby="tab3"
   role="tabpanel"
   aria-hidden="true"
>
   3
</a>
```

## Simple Tab

```html
<div class="env-tabs env-tabs--simple example-tabs1">
   <ul class="env-tabs__nav" role="tablist">
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab4"
            class="env-tabs__link env-tabs__link--active"
            href="#panel4"
            role="tab"
            aria-controls="panel4"
            aria-selected="true"
            >Tab 4</a
         >
      </li>
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab5"
            class="env-tabs__link"
            href="#panel5"
            role="tab"
            aria-controls="panel5"
            aria-selected="false"
            >Tab 5</a
         >
      </li>
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab6"
            class="env-tabs__link"
            href="#panel6"
            role="tab"
            aria-controls="panel6"
            aria-selected="false"
            >Tab 6</a
         >
      </li>
   </ul>
</div>

<div
   id="panel4"
   class="example-panel"
   aria-labelledby="tab4"
   role="tabpanel"
   aria-hidden="false"
>
   4
</div>
<div
   id="panel5"
   class="example-panel"
   aria-labelledby="tab5"
   role="tabpanel"
   aria-hidden="true"
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
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab7"
            class="env-tabs__link env-tabs__link--active"
            href="#panel7"
            role="tab"
            aria-controls="panel7"
            aria-selected="true"
            >Tab 7</a
         >
      </li>
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab8"
            class="env-tabs__link"
            href="#panel8"
            role="tab"
            aria-controls="panel8"
            aria-selected="false"
            >Tab 8</a
         >
      </li>
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab9"
            class="env-tabs__link"
            href="#panel9"
            role="tab"
            aria-controls="panel9"
            aria-selected="false"
            >Tab 9</a
         >
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
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab10"
            class="env-tabs__link env-tabs__link--active"
            href="#panel10"
            role="tab"
            aria-controls="panel10"
            aria-selected="true"
            >Tab 10</a
         >
      </li>
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab11"
            class="env-tabs__link"
            href="#panel11"
            role="tab"
            aria-controls="panel11"
            aria-selected="false"
            >Tab 11</a
         >
      </li>
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab12"
            class="env-tabs__link"
            href="#panel12"
            role="tab"
            aria-controls="panel12"
            aria-selected="false"
            >Tab 12</a
         >
      </li>
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab13"
            class="env-tabs__link"
            href="#panel13"
            role="tab"
            aria-controls="panel13"
            aria-selected="false"
            >Tab 13</a
         >
      </li>
      <li class="env-tabs__item" role="presentation">
         <a
            id="tab14"
            class="env-tabs__link"
            href="#panel14"
            role="tab"
            aria-controls="panel14"
            aria-selected="false"
            >Tab 14</a
         >
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
// Since Sitevision 9.1
envision.tabs('.example-tabs');

// Deprecated since Sitevision 9.1
$('.example-tabs').envTabs();
```
