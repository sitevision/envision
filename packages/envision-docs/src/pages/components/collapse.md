---
title: Collapse
---

<h2>Collapsible content</h2>

```html
<h4 class="env-text">
   <a
      role="button"
      class="env-button env-button--link"
      href="#container1"
      data-env-collapse
      aria-expanded="false"
      aria-controls="container1"
   >
      Example 1
   </a>
</h4>

<div class="env-collapse" id="container1">
   <p class="env-text">
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
<h4 class="env-text">
   <a
      class="env-collapse-header env-d--flex env-align-items--center env-justify-content--between"
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
   <p class="env-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
      lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus
      quam. Proin eu tincidunt metus.
   </p>
</div>
```

## Methods

Show

```javascript
// Since Sitevision 9.1
envision.collapse('#myCollapse').then(function (collapses) {
   collapses[0].show();
});

// Deprecated since Sitevision 9.1
$('#myCollapse').envCollapse('show');
```

Hide

```javascript
// Since Sitevision 9.1
envision.collapse('#myCollapse').then(function (collapses) {
   collapses[0].hide();
});

// Deprecated since Sitevision 9.1
$('#myCollapse').envCollapse('hide');
```

Toggle

```javascript
// Since Sitevision 9.1
envision.collapse('#myCollapse').then(function (collapses) {
   collapses[0].toggle();
});

// Deprecated since Sitevision 9.1
$('#myCollapse').envCollapse('toggle');
```
