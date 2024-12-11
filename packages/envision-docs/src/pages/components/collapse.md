---
title: Collapse
---

## Collapsible content

```html
<h4 class="env-ui-text-sectionheading">
   <a
      role="button"
      class="env-link"
      href="#container1"
      data-env-collapse
      aria-expanded="false"
      aria-controls="container1"
   >
      Example 1
   </a>
</h4>

<div class="env-collapse" id="container1">
   <p class="env-text-body-02">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
      lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus
      quam. Proin eu tincidunt metus.
   </p>
</div>
```

Add `env-collapse--show` to have your content expanded

## Background

Add `env-collapse-header` to give the collapsible header a background
Add `env-collapse-header--icons` to add icons

```html
<h4 class="env-ui-text-sectionheading">
   <a
      class="env-collapse-header env-flex env-flex--justify-content-between"
      role="button"
      href="#container2"
      data-env-collapse
      aria-expanded="false"
      aria-controls="container2"
   >
      <span class="env-m-right--x-large"> Example 2 </span>
      <span class="env-collapse-header--icons"></span>
   </a>
</h4>

<div class="env-collapse" id="container2">
   <p class="env-text-body-02">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
      lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus
      quam. Proin eu tincidunt metus.
   </p>
</div>
```

## Methods

Show

```javascript
envision.collapse('#myCollapse').then(function (collapses) {
   collapses[0].show();
});
```

Hide

```javascript
envision.collapse('#myCollapse').then(function (collapses) {
   collapses[0].hide();
});
```

Toggle

```javascript
envision.collapse('#myCollapse').then(function (collapses) {
   collapses[0].toggle();
});
```
