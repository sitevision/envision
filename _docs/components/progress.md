---
layout: docs
title: Progress indicator
description: Progress indicator description
group: components
---

## Types ##
{% example html %}
<div class="example-progress">
   <div class="env-progress">
      <div class="env-progress__bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
   </div>
   <div class="env-progress">
      <div class="env-progress__bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
   </div>
   <div class="env-progress">
      <div class="env-progress__bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
   </div>
</div>
{% endexample %}

## Styling ##
### Labels ###
{% example html %}
<div class="example-progress">
   <div class="env-progress">
      <div class="env-progress__bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
   </div>
   <div class="env-progress">
      <div class="env-progress__bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
   </div>
   <div class="env-progress">
      <div class="env-progress__bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
   </div>
</div>
{% endexample %}

### Colors ###
Use modifiers `--success`, `--warning` or `--danger` to change background color of `env-progress__bar`
{% example html %}
<div class="example-progress">
   <div class="env-progress">
      <div class="env-progress__bar env-progress__bar--success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
   </div>
   <div class="env-progress">
      <div class="env-progress__bar env-progress__bar--warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
   </div>
   <div class="env-progress">
      <div class="env-progress__bar env-progress__bar--danger" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
   </div>
</div>
{% endexample %}

### Stripes ###
Apply modifier `--striped` to enhance the progress bar with stripes
{% example html %}
<div class="example-progress">
   <div class="env-progress">
      <div class="env-progress__bar env-progress__bar--striped" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
   </div>

   <div class="env-progress">
      <div class="env-progress__bar env-progress__bar--success env-progress__bar--striped" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
   </div>
</div>
{% endexample %}

Apply `--striped--flip` to flip stripes alignment
{% example html %}
<div class="example-progress">
   <div class="env-progress">
      <div class="env-progress__bar env-progress__bar--striped env-progress__bar--striped--flip" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
   </div>
</div>
{% endexample %}

### Animated stripes ###
Add `--striped--animated` to animate the stripes
{% example html %}
<div class="example-progress">
   <div class="env-progress">
      <div class="env-progress__bar env-progress__bar--striped env-progress__bar--striped--animated" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
   </div>
</div>
{% endexample %}
