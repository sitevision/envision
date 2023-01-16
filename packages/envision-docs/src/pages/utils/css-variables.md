---
layout: docs
title: CSS variables
description: CSS variables
group: utils
---

CSS variables ([CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)) are available with the format: `--env-{variable}`

Only works in browsers that support [CSS variables](https://caniuse.com/#feat=css-variables).

## Example

```html
<div class="example-variables">
   <div class="example-custom-css">Example</div>
</div>

<style>
   .example-custom-css {
      margin: var(--env-spacing-medium) var(--env-spacing-xx-large);
      padding: var(--env-spacing-x-large);
      box-shadow: var(--env-box-shadow);
      background-color: var(--env-block-secondary-background-color);
      color: var(--env-block-secondary-font-color);
      border: 2px dashed var(--env-block-secondary-border-color);
      border-radius: var(--env-border-radius-large);
      font-size: var(--env-font-size-large);
      text-align: center;
   }
</style>
```

## Available CSS variables

### General

#### Font

-  `--env-font-family`
-  `--env-font-color`
-  `--env-font-color-muted` <span class="env-badge env-badge--info">2023.01</span>
-  `--env-font-size-base`
-  `--env-font-size-x-small`
-  `--env-font-size-small`
-  `--env-font-size-medium`
-  `--env-font-size-large`
-  `--env-font-size-x-large`
-  `--env-font-size-xx-large`
-  `--env-font-size-xxx-large`
-  `--env-font-size-xxxx-large`

#### Links <span class="env-badge env-badge--info">8.2</span>

-  `--env-link-font-color`
-  `--env-link-text-decoration`
-  `--env-link-hover-font-color`
-  `--env-link-hover-text-decoration`
   <br><br>
-  `--env-link-secondary-font-color`
-  `--env-link-secondary-text-decoration`
-  `--env-link-secondary-hover-font-color`
-  `--env-link-secondary-hover-text-decoration`

#### Spacing <span class="env-badge env-badge--info">8.2</span>

-  `--env-spacing-xxx-small`
-  `--env-spacing-xx-small`
-  `--env-spacing-x-small`
-  `--env-spacing-small`
-  `--env-spacing-medium`
-  `--env-spacing-large`
-  `--env-spacing-x-large`
-  `--env-spacing-xx-large`
-  `--env-spacing-xxx-large`

#### Shadows <span class="env-badge env-badge--info">8.2</span>

-  `--env-box-shadow`
-  `--env-box-shadow-large`
-  `--env-box-shadow-small`

#### Borders <span class="env-badge env-badge--info">8.2</span>

-  `--env-border-radius`
-  `--env-border-radius-small`
-  `--env-border-radius-medium`
-  `--env-border-radius-large`
   <br><br>
-  `--env-border-color`
-  `--env-border-color-light`

### Branding

#### UI Colors <span class="env-badge env-badge--info">2023.01</span>

-  `--env-ui-color-brand`
-  `--env-ui-color-brand-dark`
-  `--env-ui-color-brand-contrast`
-  `--env-ui-color-brand-{n}`
-  `--env-ui-color-brand-{n}-contrast`

Valid values for `{n}` are: `05`, `10`, `15`, `20`, `25`, `30`, `35`, `40`, `45`, `50`, `55`, `60`, `65`, `70`, `75`, `80`
, `85`, `90`, `95`, `100`.

#### UI Text <span class="env-badge env-badge--info">2023.01</span>

-  `--env-ui-text-{name}-font-family`
-  `--env-ui-text-{name}-font-color`
-  `--env-ui-text-{name}-font-size`
-  `--env-ui-text-{name}-font-weight`
-  `--env-ui-text-{name}-text-transform`
-  `--env-ui-text-{name}-letter-spacing`

Valid values for `{name}` are: `overline`, `heading`, `sectionheading`, `subheading`, `caption`.

### Colors

#### Base

-  `--env-background-color` <span class="env-badge env-badge--info">9.2</span>
-  `--env-section-background-color` <span class="env-badge env-badge--info">8.2</span>

#### Blocks <span class="env-badge env-badge--info">8.2</span>

-  `--env-block-font-color`
-  `--env-block-background-color`
-  `--env-block-border-color`
   <br><span class="env-badge env-badge--info">Block links: 8.2.1</span>
-  `--env-block-link-font-color`
-  `--env-block-link-hover-font-color`
   <br><br>
-  `--env-block-primary-font-color`
-  `--env-block-primary-background-color`
-  `--env-block-primary-border-color`
   <br><span class="env-badge env-badge--info">Block links: 8.2.1</span>
-  `--env-block-primary-link-font-color`
-  `--env-block-primary-link-hover-font-color`
   <br><br>
-  `--env-block-secondary-font-color`
-  `--env-block-secondary-background-color`
-  `--env-block-secondary-border-color`
   <br><span class="env-badge env-badge--info">Block links: 8.2.1</span>
-  `--env-block-secondary-link-font-color`
-  `--env-block-secondary-link-hover-font-color`

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

#### Focus Outline <span class="env-badge env-badge--info">2023.01</span>

-  `--env-focus-size`
-  `--env-focus-offset`
-  `--env-focus-outline-color`
-  `--env-focus-inner-color`

### Components

#### Alert <span class="env-badge env-badge--info">8.2</span>

-  `--env-alert-font-family`
-  `--env-alert-border-radius`
-  `--env-alert-background-color`

#### Badge <span class="env-badge env-badge--info">8.2</span>

-  `--env-badge-font-family`
-  `--env-badge-font-size`
-  `--env-badge-border-radius`

#### Breadcrumbs <span class="env-badge env-badge--info">8.2</span>

-  `--env-breadcrumb-divider-color`

#### Buttons <span class="env-badge env-badge--info">8.2</span>

-  `--env-button-font-family`
-  `--env-button-border-radius`

#### Cardholder <span class="env-badge env-badge--info">9.0.1</span>

-  `--env-cardholder-column-min-width`
-  `--env-cardholder-column-max-width`
-  `--env-cardholder-column-spacing`
-  `--env-cardholder-grid-column-width` <span class="env-badge env-badge--info">10.0</span>
-  `--env-cardholder-grid-gap` <span class="env-badge env-badge--info">10.0</span>

#### Collapse <span class="env-badge env-badge--info">8.2</span>

-  `--env-collapse-border-style`
-  `--env-collapse-border-width`
-  `--env-collapse-icon-color`
-  `--env-collapse-icon-width`
-  `--env-collapse-icon-height`
-  `--env-collapse-toggle-duration`
-  `--env-collapse-background-color`
-  `--env-collapse-border-color`
-  `--env-collapse-expanded-background-color`
-  `--env-collapse-expanded-border-color`

#### Form <span class="env-badge env-badge--info">8.2</span>

-  `--env-form-font-family`
-  `--env-form-input-border-radius`
-  `--env-form-input-font-color`
-  `--env-form-input-border-color`
-  `--env-form-input-background-color`

#### Image viewer/slider controls <span class="env-badge env-badge--info">8.2</span>

-  `--env-image-control-color`

#### Modal <span class="env-badge env-badge--info">8.2</span>

-  `--env-modal-small-width`
-  `--env-modal-medium-width`
-  `--env-modal-large-width`
-  `--env-modal-backdrop-background-color`
-  `--env-modal-backdrop-opacity`

#### Pagination <span class="env-badge env-badge--info">8.2</span>

-  `--env-pagination-font-family`
-  `--env-pagination-border-width`
-  `--env-pagination-border-style`

#### Popover <span class="env-badge env-badge--info">8.2</span>

-  `--env-popover-width`

#### Progress indicator

-  `--env-progress-bar-poll-highlight-color` <span class="env-badge env-badge--info">9.2</span>

#### Profile image <span class="env-badge env-badge--info">8.2</span>

-  `--env-profile-image-border-radius`

#### Spinner

-  `--env-spinner-color`

## Legacy variables <span class="env-badge env-badge--danger">Deprecated</span>

-  `--env-border-success-color`
-  `--env-border-warning-color`
-  `--env-border-danger-color`
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
-  `--env-focus-background-color`
-  `--env-focus-color`

### Removed

-  `--env-page-background-color` <span class="env-badge env-badge--danger">9.2</span>
-  `--env-default-button-color` <span class="env-badge env-badge--danger">8.2</span>
-  `--env-image-control-inactive-color` <span class="env-badge env-badge--danger">9.2</span>
-  `--env-element-common-background-color-dark` <span class="env-badge env-badge--danger">2023.01</span>
