---
layout: docs
title: Colors
description: Colors description
group: utils
---

## Background color ##

{% example html %}
<div class="example-color">
   <div class="env-bg-color--brand env-color--lightest">Brand</div>
   <div class="env-bg-color--success env-color--lightest">Success</div>
   <div class="env-bg-color--info env-color--lightest">Info</div>
   <div class="env-bg-color--warning">Warning</div>
   <div class="env-bg-color--danger env-color--lightest">Danger</div>
   <div class="env-bg-color--hover">Hover</div>
   <div class="env-bg-color--base env-color--lighter">Base</div>
   <div class="env-bg-color--darker env-color--lighter">Darker</div>
   <div class="env-bg-color--dark env-color--lightest">Dark</div>
   <div class="env-bg-color--normal env-color--lightest">Normal</div>
   <div class="env-bg-color--light">Light</div>
   <div class="env-bg-color--lighter">Lighter</div>
   <div class="env-bg-color--lightest">Lightest</div>
</div>
{% endexample %}

## Color ##
{% example html %}
<div class="example-color">
   <p class="env-text env-color--brand">Brand</p>
   <p class="env-text env-color--success">Success</p>
   <p class="env-text env-color--info">Info</p>
   <p class="env-text env-color--warning env-bg-color--dark">Warning</p>
   <p class="env-text env-color--danger">Danger</p>
   <p class="env-text env-color--hover env-bg-color--dark">Hover</p>
   <p class="env-text env-color--base">Base</p>
   <p class="env-text env-color--darker">Darker</p>
   <p class="env-text env-color--dark">Dark</p>
   <p class="env-text env-color--normal">Normal</p>
   <p class="env-text env-color--light env-bg-color--darker">Light</p>
   <p class="env-text env-color--lighter env-bg-color--dark">Lighter</p>
   <p class="env-text env-color--lightest env-bg-color--dark">Lightest</p>
</div>
{% endexample %}


## Background color - Darker / Lighter ##

`env-bg-color--{color}--{value}`

Valid values for _value_ (%)
* `80`
* `60`
* `40`
* `20`
* `10`

{% example html %}
<div class="example-color env-list--horizontal--fixed env-list--horizontal--fixed--6">
   <div class="env-list__item">
      <div class="env-bg-color--brand example-color-size-large"></div>
      <div class="env-bg-color--brand--80 example-color-size"></div>
      <div class="env-bg-color--brand--60 example-color-size"></div>
      <div class="env-bg-color--brand--40 example-color-size"></div>
      <div class="env-bg-color--brand--20 example-color-size"></div>
   </div>
   <div class="env-list__item">
      <div class="env-bg-color--success example-color-size-large"></div>
      <div class="env-bg-color--success--80 example-color-size"></div>
      <div class="env-bg-color--success--60 example-color-size"></div>
      <div class="env-bg-color--success--40 example-color-size"></div>
      <div class="env-bg-color--success--20 example-color-size"></div>
   </div>
   <div class="env-list__item">
      <div class="env-bg-color--info example-color-size-large"></div>
      <div class="env-bg-color--info--80 example-color-size"></div>
      <div class="env-bg-color--info--60 example-color-size"></div>
      <div class="env-bg-color--info--40 example-color-size"></div>
      <div class="env-bg-color--info--20 example-color-size"></div>
   </div>
   <div class="env-list__item">
      <div class="env-bg-color--warning example-color-size-large"></div>
      <div class="env-bg-color--warning--80 example-color-size"></div>
      <div class="env-bg-color--warning--60 example-color-size"></div>
      <div class="env-bg-color--warning--40 example-color-size"></div>
      <div class="env-bg-color--warning--20 example-color-size"></div>
   </div>
   <div class="env-list__item">
      <div class="env-bg-color--danger example-color-size-large"></div>
      <div class="env-bg-color--danger--80 example-color-size"></div>
      <div class="env-bg-color--danger--60 example-color-size"></div>
      <div class="env-bg-color--danger--40 example-color-size"></div>
      <div class="env-bg-color--danger--20 example-color-size"></div>
   </div>
   <div class="env-list__item">
      <div class="env-bg-color--dark example-color-size-large"></div>
      <div class="env-bg-color--dark--80 example-color-size"></div>
      <div class="env-bg-color--dark--60 example-color-size"></div>
      <div class="env-bg-color--dark--40 example-color-size"></div>
      <div class="env-bg-color--dark--20 example-color-size"></div>
      <div class="env-bg-color--dark--10 example-color-size"></div>
   </div>
</div>
{% endexample %}
