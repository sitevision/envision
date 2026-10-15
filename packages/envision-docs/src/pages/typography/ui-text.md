---
title: UI Text
description: UI Text provides standardized styles for headings and text across templates, components, and applications.
menuSortOrder: 30
---

UI Text is a set of text styles that should be used for text in templates, components and applications.

## Heading styles

```html
<h1 class="env-ui-text-heading">Heading</h1>
<h2 class="env-ui-text-sectionheading">Section heading</h2>
<h3 class="env-ui-text-subheading">Subheading</h3>
```

## Text styles

```html
<p class="env-ui-text-overline">Overline</p>
<p class="env-ui-text-body">
   Body <span class="doc-badge doc-badge--info">2026.01.1</span>
</p>
<p class="env-ui-text-caption">Caption</p>
```

### Usage example

```html nocode
<div class="env-theme-example-brand">
   <div
      class="env-popover example-static-popover env-m-block--large"
      data-popper-placement="top"
   >
      <div class="env-popover__arrow"></div>
      <div class="env-popover__content">
         <h4 class="env-ui-text-sectionheading env-popover__header__title">
            Section heading
         </h4>
         <img
            class="env-card__image env-profile-image env-profile-image--small"
            src="https://envisionui.io/placeholders/profile/200x200/01.webp"
            alt="Example profile image"
         />
         <h2 class="env-ui-text-subheading">Subheading</h2>
         <p class="env-ui-text-body">Body</p>
         <p class="env-ui-text-caption">Caption</p>
      </div>
   </div>
</div>
```

<div id="navigation-text-styles"></div>

## Navigation text styles <span class="doc-badge doc-badge--info">2026.11.1</span>

The following text styles are used for navigation components such as Breadcrumb, Navigation and Pagination:

- `env-ui-text-nav-01`
- `env-ui-text-nav-02`
- `env-ui-text-nav-03`
- `env-ui-text-nav-04`

The default styling for navigation text is the same as for basic text but may be
easily customized for a theme.

Navigation text may be used standalone or in combination with navigation components
[Breadcrumb](/components/breadcrumb/), [Navigation](/components/navigation/) and [Pagination](/components/pagination/).

When using in combination with a navigation component, navigation text style class
name must be applied to the component's root element.

```html noexample
<nav aria-label="Breadcrumb">
   <ol class="env-breadcrumb env-ui-text-nav-01">
      ...
   </ol>
</nav>
```

### Examples

Examples of usage of Navigation text styles in combination with navigation components are shown below.

**Note:** A custom example theme is used for the following examples to demonstrate how
navigation text styles can be customized.

```html nocode example-theme
<nav aria-label="Breadcrumb">
   <ol class="env-breadcrumb env-ui-text-nav-01">
      <li class="env-breadcrumb__item">
         <a href="#">Root node</a>
         <span aria-hidden="true" class="env-breadcrumb__separator">/</span>
      </li>
      <li class="env-breadcrumb__item">
         <a href="#">Parent node</a>
         <span aria-hidden="true" class="env-breadcrumb__separator">/</span>
      </li>
      <li class="env-breadcrumb__item" aria-current="page">Current</li>
   </ol>
</nav>
```

```html nocode example-theme
<nav>
   <ul class="env-nav env-nav--menubar env-nav--border env-ui-text-nav-02">
      <li class="env-nav__item">
         <a class="env-nav__link" href="#">Item</a>
      </li>
      <li class="env-nav__item">
         <a class="env-nav__link" aria-current="page" href="#">Item</a>
      </li>
      <li class="env-nav__item">
         <a class="env-nav__link" href="#">Item</a>
      </li>
   </ul>
</nav>
```

```html nocode example-theme
<nav aria-label="Pagination example">
   <ul class="env-pagination env-ui-text-nav-03">
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Previous</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 1">1</a>
      </li>
      <li class="env-pagination__item">
         <a
            class="env-pagination__link"
            aria-current="true"
            href="#"
            aria-label="Current Page, Page 2"
            >2</a
         >
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#" aria-label="Page 3">3</a>
      </li>
      <li class="env-pagination__item">
         <a class="env-pagination__link" href="#">Next</a>
      </li>
   </ul>
</nav>
```
