---
layout: docs
title: CSS variables
description: CSS variables description
group: utils
---

Sass variables affected directly by settings in SiteVision are available as CSS variables in the format: `--env-{variable}`

Only works in browsers that support CSS variables.   
<a href="https://caniuse.com/#feat=css-variables">https://caniuse.com/#feat=css-variables</a>

Examples

{% example css %}
<div class="example-css-variables my-external-class"></div>

<style>
.my-external-class {
  background-color: var(--env-color-brand);
}
</style>

{% endexample %}

Available variables
  * `--env-font-family`
  * `--env-font-size-base`
  * `--env-font-size-x-small`
  * `--env-font-size-small`
  * `--env-font-size-medium`
  * `--env-font-size-large`
  * `--env-font-size-x-large`
  * `--env-font-size-xx-large`
  * `--env-font-size-xxx-large`
  * `--env-font-size-xxxx-large`
  * `--env-color-page-bg`
  * `--env-color-element-bg`
  * `--env-color-brand`
  * `--env-color-brand-light`
  * `--env-color-brand-dark`
  * `--env-color-warning`
  * `--env-color-warning-dark`
  * `--env-color-danger`
  * `--env-color-success`
  * `--env-color-info`
  * `--env-color-hover`
  * `--env-font-color`
  * `--env-font-color-light`
  * `--env-font-color-lighter`
  * `--env-font-color-invert`
  * `--env-color-base`
  * `--env-color-darker`
  * `--env-color-dark`
  * `--env-color-normal`
  * `--env-color-light`
  * `--env-color-lighter`
  * `--env-color-lightest`
  * `--env-default-button-color`
  * `--env-focus-background-color`
  * `--env-focus-color`
  * `--env-spinner-color`

