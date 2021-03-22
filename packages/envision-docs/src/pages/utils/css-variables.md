---
layout: docs
title: CSS variables
description: CSS variables
group: utils
---

CSS variables are available with the format: `--env-{variable}`

Only works in browsers that support <a class="doc-link" href="https://caniuse.com/#feat=css-variables" target="_blank" rel="noopener">CSS variables.</a>

## Examples

```html
<div class="example-color">
   <div class="example-css-variables-brand">Brand</div>
   <div class="example-css-variables-success">Success</div>
   <div class="example-css-variables-info">Info</div>
   <div class="example-css-variables-warning">Warning</div>
   <div class="example-css-variables-danger">Danger</div>
</div>

<style>
   .example-css-variables-brand {
      background-color: var(--env-color-brand);
      color: var(--env-color-lightest);
   }

   .example-css-variables-success {
      background-color: var(--env-color-success);
      color: var(--env-color-lightest);
   }

   .example-css-variables-info {
      background-color: var(--env-color-info);
      color: var(--env-color-lightest);
   }

   .example-css-variables-warning {
      background-color: var(--env-color-warning);
   }

   .example-css-variables-danger {
      background-color: var(--env-color-danger);
      color: var(--env-color-lightest);
   }
</style>
```

## Available CSS variables

### General

#### Font

-  `--env-font-family`
-  `--env-font-color`
-  `--env-font-size-base`
-  `--env-font-size-x-small`
-  `--env-font-size-small`
-  `--env-font-size-medium`
-  `--env-font-size-large`
-  `--env-font-size-x-large`
-  `--env-font-size-xx-large`
-  `--env-font-size-xxx-large`
-  `--env-font-size-xxxx-large`

#### Spacing

-  `--env-spacing-xxx-small`
-  `--env-spacing-xx-small`
-  `--env-spacing-x-small`
-  `--env-spacing-small`
-  `--env-spacing-medium`
-  `--env-spacing-large`
-  `--env-spacing-x-large`
-  `--env-spacing-xx-large`
-  `--env-spacing-xxx-large`

#### Shadows

-  `--env-box-shadow`
-  `--env-box-shadow-large`
-  `--env-box-shadow-small`

#### Borders

-  `--env-border-radius`
-  `--env-border-radius-small`
-  `--env-border-radius-medium`
-  `--env-border-radius-large`
   <br><br>
-  `--env-border-color`
-  `--env-border-color-light`
-  `--env-border-success-color`
-  `--env-border-warning-color`
-  `--env-border-danger-color`

### Colors

#### Base <span class="env-badge env-badge--info">8.2</span>

-  `--env-page-background-color`
-  `--env-section-background-color`

#### Blocks <span class="env-badge env-badge--info">8.2</span>

-  `--env-block-font-color`
-  `--env-block-background-color`
-  `--env-block-border-color`
   <br><br>
-  `--env-block-primary-font-color`
-  `--env-block-primary-background-color`
-  `--env-block-primary-border-color`
   <br><br>
-  `--env-block-secondary-font-color`
-  `--env-block-secondary-background-color`
-  `--env-block-secondary-border-color`

### Elements <span class="env-badge env-badge--info">8.2</span>

-  `--env-element-font-color`
-  `--env-element-background-color`
-  `--env-element-background-color-dark`
-  `--env-element-background-color-light`
   <br><br>
-  `--env-element-primary-font-color`
-  `--env-element-primary-background-color`
-  `--env-element-primary-background-color-dark`
-  `--env-element-primary-background-color-light`
   <br><br>
-  `--env-element-secondary-font-color`
-  `--env-element-secondary-background-color`
-  `--env-element-secondary-background-color-dark`
-  `--env-element-secondary-background-color-light`
   <br><br>
-  `--env-element-success-font-color`
-  `--env-element-success-background-color`
-  `--env-element-success-background-color-dark`
-  `--env-element-success-background-color-light`
   <br><br>
-  `--env-element-warning-font-color`
-  `--env-element-warning-background-color`
-  `--env-element-warning-background-color-dark`
-  `--env-element-warning-background-color-light`
   <br><br>
-  `--env-element-danger-font-color`
-  `--env-element-danger-background-color`
-  `--env-element-danger-background-color-dark`
-  `--env-element-danger-background-color-light`
   <br><br>
-  `--env-element-info-font-color`
-  `--env-element-info-background-color`
-  `--env-element-info-background-color-dark`
-  `--env-element-info-background-color-light`
   <br><br>
-  `--env-element-common-background-color`
-  `--env-element-common-background-color-dark`

### Components

-  `--env-popover-width`

-  `--env-modal-small-width`
-  `--env-modal-medium-width`
-  `--env-modal-large-width`
-  `--env-modal-backdrop-background-color`
-  `--env-modal-backdrop-opacity`

-  `--env-breadcrumb-divider-color`

-  `--env-badge-font-family`
-  `--env-badge-font-size`
-  `--env-badge-border-radius`

-  `--env-image-control-color`
-  `--env-image-control-inactive-color`

-  `--env-button-font-family`
-  `--env-button-border-radius`

-  `--env-form-font-family`
-  `--env-form-input-border-radius`
-  `--env-form-input-font-color`
-  `--env-form-input-border-color`
-  `--env-form-input-background-color`

-  `--env-collapse-border-style`
-  `--env-collapse-border-width`
-  `--env-collapse-icon-width`
-  `--env-collapse-icon-height`
-  `--env-collapse-toggle-duration`
-  `--env-pagination-font-family`
-  `--env-pagination-border-width`
-  `--env-pagination-border-style`
-  `--env-alert-font-family`
-  `--env-alert-border-radius`
-  `--env-alert-background-color`
-  `--env-profile-image-border-radius`

#### Spinner

-  `--env-spinner-color`

## <span class="env-badge env-badge--danger">Deprecated</span>

-  `--env-color-page-bg`
-  `--env-color-element-bg`
-  `--env-color-brand`
-  `--env-color-brand-light`
-  `--env-color-brand-dark`
-  `--env-color-warning`
-  `--env-color-warning-dark`
-  `--env-color-danger`
-  `--env-color-success`
-  `--env-color-info`
-  `--env-color-hover`
-  `--env-font-color-light`
-  `--env-font-color-lighter`
-  `--env-font-color-invert`
-  `--env-color-base`
-  `--env-color-darker`
-  `--env-color-dark`
-  `--env-color-normal`
-  `--env-color-light`
-  `--env-color-lighter`
-  `--env-color-lightest`
-  `--env-default-button-color`
-  `--env-focus-background-color`
-  `--env-focus-color`

## New variables <span class="env-badge env-badge--info">Since 8.2</span>

### Base

-  `--env-font-color-light`
-  `--env-font-color-lighter`
-  `--env-font-color-invert`
-  `--env-color-page-bg`
-  `--env-color-element-bg`
-  `--env-color-primary`
-  `--env-color-primary-light`
-  `--env-color-primary-dark`
-  `--env-color-secondary`
-  `--env-color-secondary-light`
-  `--env-color-secondary-dark`
-  `--env-color-brand`
-  `--env-color-brand-light`
-  `--env-color-brand-dark`
-  `--env-color-warning`
-  `--env-color-warning-dark`
-  `--env-color-danger`
-  `--env-color-success`
-  `--env-color-info`
-  `--env-color-hover`
-  `--env-color-base`
-  `--env-color-darker`
-  `--env-color-dark`
-  `--env-color-normal`
-  `--env-color-light`
-  `--env-color-lighter`
-  `--env-color-lightest`
-  `--env-focus-color`
-  `--env-focus-background-color`
