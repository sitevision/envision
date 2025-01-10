---
title: Accordion
---

## Overview

```html
<div id="accordionExample">
   <h2 class="env-ui-text-sectionheading" id="heading1">
      <a
         class="env-link"
         href="#container1"
         aria-expanded="true"
         aria-controls="container1"
         data-env-accordion
      >
         Example 1
      </a>
   </h2>
   <div
      id="container1"
      class="env-accordion env-accordion--show"
      aria-labelledby="heading1"
      data-parent="#accordionExample"
   >
      <p class="env-text-body-02">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
         lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed
         purus quam. Proin eu tincidunt metus.
      </p>
   </div>

   <h2 class="env-ui-text-sectionheading" id="heading2">
      <a
         class="env-link"
         href="#container2"
         aria-expanded="false"
         aria-controls="container2"
         data-env-accordion
      >
         Example 2
      </a>
   </h2>
   <div
      id="container2"
      class="env-accordion"
      aria-labelledby="heading2"
      data-parent="#accordionExample"
   >
      <p class="env-text-body-02">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
         lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed
         purus quam. Proin eu tincidunt metus.
      </p>
   </div>

   <h2 class="env-ui-text-sectionheading" id="heading3">
      <a
         class="env-link"
         href="#container3"
         aria-expanded="false"
         aria-controls="container3"
         data-env-accordion
      >
         Example 3
      </a>
   </h2>
   <div
      id="container3"
      class="env-accordion"
      aria-labelledby="heading3"
      data-parent="#accordionExample"
   >
      <p class="env-text-body-02">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
         lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed
         purus quam. Proin eu tincidunt metus.
      </p>
   </div>
</div>
```

## Methods

You can `show`, `hide` and `toggle` on available collapsible elements.

```javascript
envision.accordion('#container1').then(function (accordions) {
   accordions[0].show();
});
```

```javascript
envision.accordion('#container1').then(function (accordions) {
   accordions[0].hide();
});
```

```javascript
envision.accordion('#container1').then(function (accordions) {
   accordions[0].toggle();
});
```
