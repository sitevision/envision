---
title: Collapse
description: The Collapse component is used to show and hide content through a trigger element.
---

Use Collapse when you want to show or hide a section of content. The component consists of a toggle button and a collapsible content element. The content is hidden by default and becomes visible when the toggle button is activated.

## Basic example

```html
<h4 class="env-ui-text-sectionheading">
   <a
      role="button"
      class="env-link"
      href="#collapse-1"
      data-env-collapse
      aria-expanded="false"
      aria-controls="collapse-1"
   >
      Example 1
   </a>
</h4>
<div class="env-collapse" id="collapse-1">
   <p class="env-text-body-02">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
      lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus
      quam. Proin eu tincidunt metus.
   </p>
</div>
```

## Required markup

The collapsible content element must have:

- `class="env-collapse"`
- a unique `id`

The toggle button element must have:

- Attribute `data-env-collapse`
- Either `href="#id"` or `data-target="#id"`_\*_
- `aria-controls="id"`_\*_
- `aria-expanded="true|false"`

<p class="doc-legend">
   <span style="font-size:1.4em">*</span> = The ID of the collapsible content element.
</p>

When using an `<a>` element as the toggle button, also add `role="button"`.

A `<button type="button">` must use `data-target`.

## Styled toggle button

Use `env-collapse-header` to style the toggle button as an expandable
section header. Add `env-collapse-header--icons` to display expand and collapse
icons.

```html
<h4 class="env-ui-text-sectionheading">
   <a
      class="env-collapse-header env-flex env-flex--justify-content-between"
      role="button"
      href="#collapse-2"
      data-env-collapse
      aria-expanded="false"
      aria-controls="collapse-2"
   >
      <span class="env-m-inline-end--x-large">Example 2</span>
      <span class="env-collapse-header--icons"></span>
   </a>
</h4>
<div class="env-collapse" id="collapse-2">
   <p class="env-text-body-02">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   </p>
</div>
```

## Initially expanded

Add `env-collapse--show` to the content element if the content
should be visible when the page loads.

Add `env-collapse--expanded` to the toggle button. Make sure the toggle button uses
`aria-expanded="true"`.

```html
<h4 class="env-ui-text-sectionheading">
   <a
      class="env-collapse-header env-collapse--expanded env-flex env-flex--justify-content-between"
      role="button"
      href="#collapse-3"
      data-env-collapse
      aria-expanded="true"
      aria-controls="collapse-3"
   >
      <span class="env-m-inline-end--x-large">Example 3</span>
      <span class="env-collapse-header--icons"></span>
   </a>
</h4>
<div class="env-collapse env-collapse--show" id="collapse-3">
   <p class="env-text-body-02">This content is visible when the page loads.</p>
</div>
```

## Initialization

Toggle buttons using data-env-collapse are initialized automatically. No manual
JavaScript initialization is required for standard click interactions. The component is
initialized the first time it is used.

## Linking to content inside a collapse <span class="doc-badge doc-badge--info">2026.07.1</span>

If the page loads with a hash pointing to content inside a collapsed section,
the section is automatically expanded so the target content becomes accessible.

The same behavior applies when clicking a same-page anchor link that points to
content inside a collapsed section.

## Methods

The selector argument should target the `.env-collapse` content element, not the
toggle button.

### Show

```javascript
envision.collapse('#myCollapse').then(function (collapses) {
   collapses[0].show();
});
```

### Hide

```javascript
envision.collapse('#myCollapse').then(function (collapses) {
   collapses[0].hide();
});
```

### Toggle

```javascript
envision.collapse('#myCollapse').then(function (collapses) {
   collapses[0].toggle();
});
```
