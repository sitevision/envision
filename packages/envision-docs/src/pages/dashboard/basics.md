---
title: Basics
description: Basics of designing a dashboard widget
dashboard: true
---

## Designing a Dashboard Widget

Use Envision components when possible.

When using custom CSS for styling, all colors should use Envision and Dashboard variables.
Other colors and hard coded color values should be avoided.

### Wrapper

Most dashboard widgets should be placed inside a wrapper element with class `env-dashboard-widget`.
This will set the correct background, borders and more for the widget. The wrapper does not set a padding.

<section class="env-dashboard-widget env-p-horizontal--large env-p-vertical--small env-m-bottom--large" style="width: fit-content">
   <h2 class="env-ui-text-sectionheading">
   Simple widget   
   </h2>
   <span class="env-ui-text-kpi-number" style="font-size: var(--env-ui-text-kpi-number-font-size-large)">96%</span>
</section>

```html-no-example
<section class="env-dashboard-widget">
   <!-- widget content --->
</section>
```

### Widget sizes

There are four available sizes for a widget. The developer may decide which size or sizes a widget should support.
The selected available sizes will be available as a user setting when the widget is added to a dashboard.

The widgets will be placed in a grid with four columns. Depending on the available screen size and the selected widget size,
a widget may use between one and four columns.

A small widget will never use more than one column. An extra large widget will
use as many as available. A small widget will not vary much in size, but a large widget may use anything between
250 and 1440 pixels width.

For adapting a widget to different sizes, see [Responsive widgets](/dashboard/responsive-widgets/).

#### Widget size table

| Widget      | Columns | Sizes (px) |
| :---------- | :-----: | :--------: |
| Small       |    1    |  250–342   |
| Medium      |   1–2   |  250–708   |
| Large       |   1–3   |  250–1074  |
| Extra Large |   1–4   |  250–1440  |

## Widget example

<section class="env-dashboard-widget env-p-horizontal--large env-p-vertical--small" style="width: fit-content" role="presentation">
   <h2 class="env-ui-text-sectionheading">
      Chart widget example heading
   </h2>
   <div class="env-m-vertical--medium">
<p class="env-ui-text-value">
<span class="env-m-right--large"><b class="env-dashboard-color-txt-orange-50">—</b>&nbsp;Legend line 1</span>
<span><b class="env-dashboard-color-txt-cyan-50">—</b>&nbsp;Legend line 2</span>
</p>
</div>
<div id="example-chart">
   <h3 class="env-ui-text-label example-chart-axis-label-y">
      Y axis label
   </h3>
   <ul class="example-chart-axis example-chart-axis--y">
      <li class="env-ui-text-value">1,200</li>
      <li class="env-ui-text-value">1,000</li>
      <li class="env-ui-text-value">800</li>
      <li class="env-ui-text-value">600</li>
      <li class="env-ui-text-value">400</li>
   </ul>
   <img class="env-border example-canvas"
           alt="Example chart" 
           src="https://envisionui.io/placeholders/examples/chart.webp" />
   <h3 class="env-ui-text-label example-chart-axis-label-x">
      X axis label
   </h3>
   <ul class="example-chart-axis example-chart-axis--x">
      <li class="env-ui-text-value">25 nov</li>
      <li class="env-ui-text-value">26 nov</li>
      <li class="env-ui-text-value">27 nov</li>
      <li class="env-ui-text-value">28 nov</li>
      <li class="env-ui-text-value">29 nov</li>
      <li>&nbsp;</li>
   </ul>
</div>
</section>

### Simplified code example

This example shows basic usage of CSS classes for headings, labels and more.

```html-no-example

<section class="env-dashboard-widget">
   <h2 class="env-ui-text-sectionheading">
      Chart widget example heading
   </h2>
   <p class="env-ui-text-value">
      <span class="env-dashboard-color-txt-orange-50">—</span> Legend line 1
      <span class="env-dashboard-color-txt-cyan-50">—</span> Legend line 2
   </p>
   <h3 class="env-ui-text-label">
      Y axis label
   </h3>
   <ul>
      <li class="env-ui-text-value">1,200</li>
      ...
   </ul>
   <canvas aria-label="Example chart, this text should tell the chart values for accessibility."
           role="img"></canvas>
   <h3 class="env-ui-text-label">
      X axis label
   </h3>
   <ul>
      <li class="env-ui-text-value">25 nov</li>
      ...
   </ul>
</section>
```
