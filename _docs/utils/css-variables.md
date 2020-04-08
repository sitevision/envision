---
layout: docs
title: CSS variables
description: CSS variables
group: utils
---

CSS variables are available with the format: `--env-{variable}`

Only works in browsers that support <a class="doc-link" href="https://caniuse.com/#feat=css-variables" target="_blank" rel="noopener">CSS variables.</a>

## Examples ##
{% example html %}
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
{% endexample %}

Available CSS variables
* `--font-family`
* `--font-size-base`
* `--font-size-x-small`
* `--font-size-small`
* `--font-size-medium`
* `--font-size-large`
* `--font-size-x-large`
* `--font-size-xx-large`
* `--font-size-xxx-large`
* `--font-size-xxxx-large`
* `--color-page-bg`
* `--color-element-bg`
* `--color-brand`
* `--color-brand-light`
* `--color-brand-dark`
* `--color-warning`
* `--color-warning-dark`
* `--color-danger`
* `--color-success`
* `--color-info`
* `--color-hover`
* `--font-color`
* `--font-color-light`
* `--font-color-lighter`
* `--font-color-invert`
* `--color-base`
* `--color-darker`
* `--color-dark`
* `--color-normal`
* `--color-light`
* `--color-lighter`
* `--color-lightest`
* `--default-button-color`
* `--focus-background-color`
* `--focus-color`
* `--spinner-color`