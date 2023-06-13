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

#### Links

-  `--env-link-font-color`
-  `--env-link-text-decoration`
-  `--env-link-hover-font-color`
-  `--env-link-hover-text-decoration`
   <br><br>
-  `--env-link-secondary-font-color`
-  `--env-link-secondary-text-decoration`
-  `--env-link-secondary-hover-font-color`
-  `--env-link-secondary-hover-text-decoration`

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
   <br><br><span class="env-badge env-badge--info">Box shadow color, size, offset: 2023.04.1</span>
-  `--env-box-shadow-color`

#### Borders

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

-  `--env-background-color`
-  `--env-section-background-color`

#### Blocks

-  `--env-block-font-color`
-  `--env-block-background-color`
-  `--env-block-border-color`
-  `--env-block-link-font-color`
-  `--env-block-link-hover-font-color`
-  `--env-block-link-text-decoration` <span class="env-badge env-badge--info">2023.03.1</span>
-  `--env-block-link-hover-text-decoration` <span class="env-badge env-badge--info">2023.03.1</span>
   <br><br>
-  `--env-block-primary-font-color`
-  `--env-block-primary-background-color`
-  `--env-block-primary-border-color`
-  `--env-block-primary-link-font-color`
-  `--env-block-primary-link-hover-font-color`
-  `--env-block-primary-link-text-decoration` <span class="env-badge env-badge--info">2023.03.1</span>
-  `--env-block-primary-link-hover-text-decoration` <span class="env-badge env-badge--info">2023.03.1</span>
   <br><br>
-  `--env-block-secondary-font-color`
-  `--env-block-secondary-background-color`
-  `--env-block-secondary-border-color`
-  `--env-block-secondary-link-font-color`
-  `--env-block-secondary-link-hover-font-color`
-  `--env-block-secondary-link-text-decoration` <span class="env-badge env-badge--info">2023.03.1</span>
-  `--env-block-secondary-link-hover-text-decoration` <span class="env-badge env-badge--info">2023.03.1</span>

### Elements

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

#### Status <span class="env-badge env-badge--info">2023.02.1</span>

-  `env-ui-color-status-neutral`
-  `env-ui-color-status-neutral-contrast`
-  `env-ui-color-status-active`
-  `env-ui-color-status-active-contrast`
-  `env-ui-color-status-active-text` <span class="env-badge env-badge--info">2023.07.1</span>
-  `env-ui-color-status-attention`
-  `env-ui-color-status-attention-contrast`
-  `env-ui-color-status-attention-text` <span class="env-badge env-badge--info">2023.07.1</span>
-  `env-ui-color-status-error` <span class="env-badge env-badge--info">2023.07.1</span>
-  `env-ui-color-status-error-contrast` <span class="env-badge env-badge--info">2023.07.1</span>
-  `env-ui-color-status-error-text` <span class="env-badge env-badge--info">2023.07.1</span>

#### Focus Outline <span class="env-badge env-badge--info">2023.01</span>

-  `--env-focus-size`
-  `--env-focus-offset`
-  `--env-focus-outline-color`
-  `--env-focus-inner-color`

### Components

#### Alert

-  `--env-alert-font-family`
-  `--env-alert-border-radius`
-  `--env-alert-background-color`

#### Badge

-  `--env-badge-font-family`
-  `--env-badge-font-size`
-  `--env-badge-border-radius`

#### Breadcrumbs

-  `--env-breadcrumb-divider-color`

#### Buttons

-  `--env-button-font-family`
-  `--env-button-border-radius`

#### Cardholder

-  `--env-cardholder-column-min-width`
-  `--env-cardholder-column-max-width`
-  `--env-cardholder-column-spacing`
-  `--env-cardholder-grid-column-width`
-  `--env-cardholder-grid-gap`

#### Collapse

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

#### Form

-  `--env-form-font-family`
-  `--env-form-input-border-radius`
-  `--env-form-input-font-color`
-  `--env-form-input-border-color`
-  `--env-form-input-background-color`
-  `--env-form-label-font-family` <span class="env-badge env-badge--info">2023.04.1</span>
-  `--env-form-label-font-weight` <span class="env-badge env-badge--info">2023.04.1</span>

#### Dialog <span class="env-badge env-badge--info">2023.07.1</span>

-  `--env-dialog-small-width`
-  `--env-dialog-medium-width`
-  `--env-dialog-large-width`

#### Image viewer/slider controls

-  `--env-image-control-color`

#### Pagination

-  `--env-pagination-font-family`
-  `--env-pagination-border-width`
-  `--env-pagination-border-style`

#### Popover

-  `--env-popover-width`

#### Progress indicator

-  `--env-progress-bar-poll-highlight-color`

#### Profile image

-  `--env-profile-image-border-radius`

#### Spinner

-  `--env-spinner-color`

#### Tooltip <span class="env-badge env-badge--info">2023.02.1</span>

-  `--env-tooltip-font-family`
-  `--env-tooltip-font-size`
-  `--env-tooltip-font-color`
-  `--env-tooltip-font-weight`
-  `--env-tooltip-background-color`
-  `--env-tooltip-border-radius`

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
-  `--env-modal-small-width`
-  `--env-modal-medium-width`
-  `--env-modal-large-width`
-  `--env-modal-backdrop-background-color`
-  `--env-modal-backdrop-opacity`
-  `--env-image-control-color`
-  `--env-element-common-background-color`

### Removed

-  `--env-page-background-color`
-  `--env-default-button-color`
-  `--env-image-control-inactive-color`
-  `--env-element-common-background-color-dark`
