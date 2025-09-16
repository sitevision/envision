---
title: CSS variables
description: CSS Variables utility offers predefined custom properties for consistent styling across components.
---

CSS variables ([CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)) are available with the format: `--env-{variable}`

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

- `--env-font-family`
- `--env-font-color`
- `--env-font-size-base`
- `--env-font-size-x-small`
- `--env-font-size-small`
- `--env-font-size-medium`
- `--env-font-size-large`
- `--env-font-size-x-large`
- `--env-font-size-xx-large`
- `--env-font-size-xxx-large`
- `--env-font-size-xxxx-large`

#### Links

- `--env-link-font-color`
- `--env-link-text-decoration`
- `--env-link-hover-font-color`
- `--env-link-hover-text-decoration`
  <br><br>
- `--env-link-secondary-font-color`
- `--env-link-secondary-text-decoration`
- `--env-link-secondary-hover-font-color`
- `--env-link-secondary-hover-text-decoration`

#### Spacing

- `--env-spacing-xxx-small`
- `--env-spacing-xx-small`
- `--env-spacing-x-small`
- `--env-spacing-small`
- `--env-spacing-medium`
- `--env-spacing-large`
- `--env-spacing-x-large`
- `--env-spacing-xx-large`
- `--env-spacing-xxx-large`

#### Shadows

- `--env-box-shadow`
- `--env-box-shadow-large`
- `--env-box-shadow-small`
- `--env-box-shadow-color`

#### Borders

- `--env-border-radius`
- `--env-border-radius-small`
- `--env-border-radius-medium`
- `--env-border-radius-large`
  <br><br>
- `--env-border-color`
- `--env-border-color-05`

### Branding

#### UI Colors

- `--env-ui-color-brand`
- `--env-ui-color-brand-dark`
- `--env-ui-color-brand-contrast`
- `--env-ui-color-brand-{n}`
- `--env-ui-color-brand-{n}-contrast`

Valid values for `{n}` are: `05`, `10`, `15`, `20`, `25`, `30`, `35`, `40`, `45`, `50`, `55`, `60`, `65`, `70`, `75`, `80`
, `85`, `90`, `95`, `100`.

#### UI Status Colors

- `env-ui-color-status-neutral`
- `env-ui-color-status-neutral-contrast`
- `env-ui-color-status-active`
- `env-ui-color-status-active-contrast`
- `env-ui-color-status-active-text`
- `env-ui-color-status-attention`
- `env-ui-color-status-attention-contrast`
- `env-ui-color-status-attention-text`
- `env-ui-color-status-error`
- `env-ui-color-status-error-contrast`
- `env-ui-color-status-error-text`

### Typography

#### Text <span class="doc-badge doc-badge--info">2025.01.1</span>

- `--env-text-{name}-font-family`
- `--env-text-{name}-font-color`
- `--env-text-{name}-font-size`
- `--env-text-{name}-font-weight`
- `--env-text-{name}-font-style`
- `--env-text-{name}-text-transform`
- `--env-text-{name}-letter-spacing`
- `--env-text-{name}-line-height`
- `--env-text-{name}-margin-block-start`
- `--env-text-{name}-margin-block-end`
- `--env-text-{name}-link-font-color`
- `--env-text-{name}-link-text-decoration`
- `--env-text-{name}-link-hover-font-color`
- `--env-text-{name}-link-hover-text-decoration`

Valid values for `{name}` are: `heading-01` – `heading-06`, `display-01` – `display-03`, `summary-01`, `body-01` – `body-04`,
`caption-01`, `quotation-01`, `quotation-02`, `table-caption-01`, `table-heading-01`, `table-data-01`.

#### UI Text

- `--env-ui-text-{name}-font-family`
- `--env-ui-text-{name}-font-color`
- `--env-ui-text-{name}-font-size`
- `--env-ui-text-{name}-font-weight`
- `--env-ui-text-{name}-text-transform`
- `--env-ui-text-{name}-letter-spacing`

Valid values for `{name}` are: `overline`, `heading`, `sectionheading`, `subheading`, `caption`.

<span id="text-list-variables" class="offset-anchor"></span>

#### Text lists <span class="doc-badge doc-badge--info">2025.09.1</span>

- `--env-text-list-ul-style-type`
- `--env-text-list-ol-style-type`
- `--env-text-list-margin-block-start`
- `--env-text-list-margin-block-end`
- `--env-text-list-margin-inline-start`
- `--env-text-list-margin-inline-end`
- `--env-text-list-padding-block-start`
- `--env-text-list-padding-block-end`
- `--env-text-list-padding-inline-start`
- `--env-text-list-padding-inline-end`
- `--env-text-list-item-margin-block-start`
- `--env-text-list-item-margin-block-end`
- `--env-text-list-item-margin-inline-start`
- `--env-text-list-item-margin-inline-end`
- `--env-text-list-item-padding-block-start`
- `--env-text-list-item-padding-block-end`
- `--env-text-list-item-padding-inline-start`
- `--env-text-list-item-padding-inline-end`

#### Blockquote <span class="doc-badge doc-badge--info">2025.04.2</span>

- `--env-blockquote-border-block-width`
- `--env-blockquote-border-block-color`
- `--env-blockquote-border-inline-start-width`
- `--env-blockquote-border-inline-start-color`
- `--env-blockquote-border-inline-end-width`
- `--env-blockquote-border-inline-end-color`
- `--env-blockquote-padding-block-start`
- `--env-blockquote-padding-inline-start`
- `--env-blockquote-padding-block-end`
- `--env-blockquote-padding-inline-end`
- `--env-blockquote-margin-block-start`
- `--env-blockquote-margin-block-end`

#### Mark <span class="doc-badge doc-badge--info">2025.04.2</span>

- `--env-mark-font-color`
- `--env-mark-background-color`

### Colors

#### Base

- `--env-background-color`
- `--env-section-background-color`
- `--env-section-background-color-05`

#### Blocks

- `--env-block-font-color`
- `--env-block-background-color`
- `--env-block-border-color`
- `--env-block-link-font-color`
- `--env-block-link-hover-font-color`
- `--env-block-link-text-decoration`
- `--env-block-link-hover-text-decoration`
  <br><br>
- `--env-block-primary-font-color`
- `--env-block-primary-background-color`
- `--env-block-primary-border-color`
- `--env-block-primary-link-font-color`
- `--env-block-primary-link-hover-font-color`
- `--env-block-primary-link-text-decoration`
- `--env-block-primary-link-hover-text-decoration`
  <br><br>
- `--env-block-secondary-font-color`
- `--env-block-secondary-background-color`
- `--env-block-secondary-border-color`
- `--env-block-secondary-link-font-color`
- `--env-block-secondary-link-hover-font-color`
- `--env-block-secondary-link-text-decoration`
- `--env-block-secondary-link-hover-text-decoration`

### Elements

- `--env-element-font-color`
- `--env-element-background-color`
- `--env-element-background-color-dark`
- `--env-element-background-color-light`
  <br><br>
- `--env-element-primary-font-color`
- `--env-element-primary-background-color`
- `--env-element-primary-background-color-dark`
- `--env-element-primary-background-color-light`
  <br><br>
- `--env-element-secondary-font-color`
- `--env-element-secondary-background-color`
- `--env-element-secondary-background-color-dark`
- `--env-element-secondary-background-color-light`
  <br><br>
- `--env-element-success-font-color`
- `--env-element-success-background-color`
- `--env-element-success-background-color-dark`
- `--env-element-success-background-color-light`
  <br><br>
- `--env-element-warning-font-color`
- `--env-element-warning-background-color`
- `--env-element-warning-background-color-dark`
- `--env-element-warning-background-color-light`
  <br><br>
- `--env-element-danger-font-color`
- `--env-element-danger-background-color`
- `--env-element-danger-background-color-dark`
- `--env-element-danger-background-color-light`
  <br><br>
- `--env-element-info-font-color`
- `--env-element-info-background-color`
- `--env-element-info-background-color-dark`
- `--env-element-info-background-color-light`

#### Focus Outline

- `--env-focus-size`
- `--env-focus-offset`
- `--env-focus-outline-color`
- `--env-focus-inner-color`

### Components

#### Alert

- `--env-alert-font-family`
- `--env-alert-border-radius`
- `--env-alert-background-color`

#### Badge

- `--env-badge-font-family`
- `--env-badge-font-size`
- `--env-badge-border-radius`
- `--env-badge-text-transform`
- `--env-badge-font-weight`
- `--env-badge-letter-spacing`

#### Breadcrumbs

- `--env-breadcrumb-divider-color`

#### Buttons

- `--env-button-font-family`
- `--env-button-border-radius`

#### Cardholder

- `--env-cardholder-column-min-width`
- `--env-cardholder-column-max-width`
- `--env-cardholder-column-spacing`
- `--env-cardholder-grid-column-width`
- `--env-cardholder-grid-gap`

#### Collapse

- `--env-collapse-border-style`
- `--env-collapse-border-width`
- `--env-collapse-icon-color`
- `--env-collapse-icon-width`
- `--env-collapse-icon-height`
- `--env-collapse-toggle-duration`
- `--env-collapse-background-color`
- `--env-collapse-border-color`
- `--env-collapse-expanded-background-color`
- `--env-collapse-expanded-border-color`

#### Form

- `--env-form-font-family`
- `--env-form-input-border-radius`
- `--env-form-input-font-color`
- `--env-form-input-border-color`
- `--env-form-input-background-color`
- `--env-form-label-font-family`
- `--env-form-label-font-weight`

#### Dialog

- `--env-dialog-small-width`
- `--env-dialog-medium-width`
- `--env-dialog-large-width`

#### Pagination

- `--env-pagination-font-family`
- `--env-pagination-border-width`
- `--env-pagination-border-style`

#### Popover

- `--env-popover-width`

#### Progress indicator

- `--env-progress-bar-poll-highlight-color`

#### Profile image

- `--env-profile-image-border-radius`

#### Spinner

- `--env-spinner-color`

#### Tooltip

- `--env-tooltip-font-family`
- `--env-tooltip-font-size`
- `--env-tooltip-font-color`
- `--env-tooltip-font-weight`
- `--env-tooltip-background-color`
- `--env-tooltip-border-radius`

## Legacy variables <span class="doc-badge doc-badge--danger">Deprecated</span>

- `--env-border-success-color`
- `--env-border-warning-color`
- `--env-border-danger-color`
- `--env-border-color-light`
- `--env-color-page-bg`
- `--env-color-element-bg`
- `--env-color-brand`
- `--env-color-brand-light`
- `--env-color-brand-dark`
- `--env-color-warning`
- `--env-color-warning-dark`
- `--env-color-danger`
- `--env-color-success`
- `--env-color-info`
- `--env-color-hover`
- `--env-font-color-light`
- `--env-font-color-lighter`
- `--env-font-color-invert`
- `--env-font-color-muted`
- `--env-color-base`
- `--env-color-darker`
- `--env-color-dark`
- `--env-color-normal`
- `--env-color-light`
- `--env-color-lighter`
- `--env-color-lightest`
- `--env-focus-background-color`
- `--env-focus-color`
- `--env-modal-small-width`
- `--env-modal-medium-width`
- `--env-modal-large-width`
- `--env-modal-backdrop-background-color`
- `--env-modal-backdrop-opacity`
- `--env-image-control-color`
- `--env-element-common-background-color`

### Removed

- `--env-page-background-color`
- `--env-default-button-color`
- `--env-image-control-inactive-color`
- `--env-element-common-background-color-dark`
