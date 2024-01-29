---
title: Accordion
---

## Overview

```html
<div id="accordionExample">
   <h1 class="env-text" id="heading1">
      <a
         href="#container1"
         aria-expanded="true"
         aria-controls="container1"
         data-env-accordion
      >
         Example 1
      </a>
   </h1>
   <div
      id="container1"
      class="env-accordion env-accordion--show"
      aria-labelledby="heading1"
      data-parent="#accordionExample"
   >
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
         lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed
         purus quam. Proin eu tincidunt metus.
      </p>
   </div>

   <h1 class="env-text" id="heading2">
      <a
         href="#container2"
         aria-expanded="false"
         aria-controls="container2"
         data-env-accordion
      >
         Example 2
      </a>
   </h1>
   <div
      id="container2"
      class="env-accordion"
      aria-labelledby="heading2"
      data-parent="#accordionExample"
   >
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
         lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed
         purus quam. Proin eu tincidunt metus.
      </p>
   </div>

   <h1 class="env-text" id="heading3">
      <a
         href="#container3"
         aria-expanded="false"
         aria-controls="container3"
         data-env-accordion
      >
         Example 3
      </a>
   </h1>
   <div
      id="container3"
      class="env-accordion"
      aria-labelledby="heading3"
      data-parent="#accordionExample"
   >
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
         lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed
         purus quam. Proin eu tincidunt metus.
      </p>
   </div>
</div>
```

## Methods

You can `show`, `hide` and `toggle` on available collapsible elements.

Show

```javascript
envision.accordion('#container1').then(function (accordions) {
   accordions[0].show();
});
```

Hide

```javascript
envision.accordion('#container1').then(function (accordions) {
   accordions[0].hide();
});
```

Toggle

```javascript
envision.accordion('#container1').then(function (accordions) {
   accordions[0].toggle();
});
```
