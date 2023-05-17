---
title: Accordion
---

## Overview

```html
<div id="accordionExample">
   <h1 class="env-text" id="heading1">
      <a href="#container1" data-env-accordion aria-controls="container1">
         Example 1
      </a>
   </h1>
   <div
      id="container1"
      class="env-accordion env-accordion--show"
      aria-expanded="true"
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
      <a href="#container2" data-env-accordion aria-controls="container2">
         Example 2
      </a>
   </h1>
   <div
      id="container2"
      class="env-accordion"
      aria-expanded="false"
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
      <a href="#container3" data-env-accordion aria-controls="container3">
         Example 3
      </a>
   </h1>
   <div
      id="container3"
      class="env-accordion"
      aria-expanded="false"
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

### data-target

You can also use attribute `data-target="#container4"`

```html
<div id="accordionExample2">
   <h1 class="env-text" id="heading4">
      <a
         href="#container4"
         data-target="#container4"
         data-env-accordion
         aria-controls="container4"
      >
         Example 4
      </a>
   </h1>
   <div
      id="container4"
      class="env-accordion env-accordion--show"
      aria-expanded="true"
      aria-labelledby="heading4"
      data-parent="#accordionExample2"
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
