---
title: Envision for Dashboard Widgets
dashboard: true
---

## Introduction

Envision for Dashboard Widgets is an extension to Envision that
should be used when creating Sitevision Dashboard Widgets.

The Sitevision dashboard uses a supplied custom Envision theme as a base.

Additional CSS variables, class names and components for building widgets are available as described in this page.

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
   <span class="env-ui-text-kpi-number">96%</span>
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
320 and 1440 pixels width.

#### Widget size table

| Widget      | Columns | Sizes (px) |
| :---------- | :-----: | :--------: |
| Small       |    1    |  250–342   |
| Medium      |   1–2   |  320–708   |
| Large       |   1–3   |  320–1074  |
| Extra Large |   1–4   |  320–1440  |

## Responsive widgets

Some widgets may need to use a responsive design to fit different widths. Media queries should **not** be used since the width
of the widget may not be relative to the viewport width. To make adaptions for different widget sizes, use [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries).

The grid column container where the app will be displayed is a [containment context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries#using_container_queries) named `dashboard-widget`.

### Responsive widget example

<section class="env-dashboard-widget example-responsive-widget env-m-bottom--large">
   <div class="example-responsive-widget__resizeable env-p-horizontal--large env-p-vertical--small">
      <h2 class="env-ui-text-sectionheading">
         Responsive example widget   
      </h2>
      <p class="env-ui-text-kpi-number">96%</p>
      <p class="env-ui-text-caption env-text-align--right">Resize this widget <span style="font-size: 1.25em;transform: rotate(28deg) translate(0.2em, 0.2em);display: inline-block;">&rarr;</span></p>
   </div>
</section>

```html-no-example
<section class="env-dashboard-widget example-responsive-widget">
   <h2 class="env-ui-text-sectionheading">
      Responsive example widget
   </h2>
   <p class="env-ui-text-kpi-number">96%</p>
</section>
```

```css-no-expand

@container dashboard-widget (max-width: 449px) {
   .example-responsive-widget .env-ui-text-kpi-number {
      font-size: var(--env-ui-text-kpi-number-font-size-small);
      color: var(--env-dashboard-color-pink-90);
   }
}

@container dashboard-widget (min-width: 580px) {
   .example-responsive-widget .env-ui-text-kpi-number {
      font-size: var(--env-ui-text-kpi-number-font-size-large);
      color: var(--env-dashboard-color-light-blue-90);
   }
}
```

## Typography

The widget theme uses [Inter](https://fonts.google.com/specimen/Inter) font family which has support for nine different weights
100-900. Other font familes should in most cases not be used.

<div class="code-example">
   <p class="example-fw-100">
      Thin 100 — The quick brown fox jumps … 123456789
   </p>
   <p class="example-fw-200">
      Extra Light 200 — The quick brown fox jumps … 123456789
   </p>
   <p class="example-fw-300">
      Light 300 — The quick brown fox jumps … 123456789
   </p>
   <p class="example-fw-400">
      Normal 400 — The quick brown fox jumps … 123456789
   </p>
   <p class="example-fw-500">
      Medium 500 — The quick brown fox jumps … 123456789
   </p>
   <p class="example-fw-600">
      Semi Bold 600 — The quick brown fox jumps … 123456789
   </p>
   <p class="example-fw-700">
      Bold 700 — The quick brown fox jumps … 123456789
   </p>
   <p class="example-fw-800">
      Extra Bold 800 — The quick brown fox jumps … 123456789
   </p>
   <p class="example-fw-900">
      Black 900 — The quick brown fox jumps … 123456789
   </p>
</div>

```css
/* Available weights 100–900 */
.example-fw-100 {
   font-weight: 100;
}
```

### Headings

Widgets should use [UI Text](/ui/#ui-text) for headings.

```html
<p class="env-ui-text-overline">Overline</p>
<h1 class="env-ui-text-heading">Heading</h1>
<h2 class="env-ui-text-sectionheading">Section heading</h2>
<h3 class="env-ui-text-subheading">Subheading</h3>
<p class="env-ui-text-caption">Caption / description</p>
```

### Values and labels

Additional styles only availble in widgets should be used for labels and values in charts and similar.

```html
<p class="env-ui-text-label">Axis label / Label</p>
<p class="env-ui-text-value">Axis value / Legend</p>
```

### Key performance indicators

For displaying key performance indicators you should use the `env-ui-text-kpi-number` class.
Set different sizes using CSS variables `--env-ui-text-kpi-number-font-size-{x}`.

```html
<span class="env-ui-text-kpi-number example-kpi-small">96%</span>
<span class="env-ui-text-kpi-number">96%</span>
<span class="env-ui-text-kpi-number example-kpi-large">96%</span>
<span class="env-ui-text-kpi-number example-kpi-x-large">96%</span>
```

```css
.example-kpi-small {
   font-size: var(--env-ui-text-kpi-number-font-size-small);
}

.example-kpi-large {
   font-size: var(--env-ui-text-kpi-number-font-size-large);
}

.example-kpi-x-large {
   font-size: var(--env-ui-text-kpi-number-font-size-x-large);
}
```

## Badges

If a value has changed for the better, the worse or is unchanged it may be displayed using one of the
widget specific badges availble.

```html
<span class="env-badge env-badge--negative">
   <svg class="env-icon env-icon--xx-small">
      <use
         xlink:href="/sitevision/envision-icons.svg#icon-arrow-fill-down"
      ></use>
   </svg>
   Down 18%
</span>

<span class="env-badge env-badge--unchanged">
   <svg class="env-icon env-icon--xx-small">
      <use
         xlink:href="/sitevision/envision-icons.svg#icon-arrow-fill-right"
      ></use>
   </svg>
   No change
</span>

<span class="env-badge env-badge--positive">
   <svg class="env-icon env-icon--xx-small">
      <use xlink:href="/sitevision/envision-icons.svg#icon-arrow-fill-up"></use>
   </svg>
   Up 18%
</span>
```

## Colors

Widgets should always use the widget color palette variables. In cases where using a variable is not possible,
for example in an image, the HEX values from the palette should be used.

### Color palette

Make sure color combinations are used that meets the WCAG 2 AA requirements. If unsure about a certain combination,
please use a [color contrast checker](https://webaim.org/resources/contrastchecker/) to validate.

<div class="env-cardholder-grid example-dashboard-color-grid" id="dashboard-color-list" data-display="all">
<!-- Color Palette Generated in JS -->
</div>

<div class="env-cardholder-grid example-dashboard-color-grid" style="margin:var(--env-cardholder-grid-gap) 0">
   <ul class="example-dashboard-color-list">
      <li class="env-dashboard-color-bg-black env-dashboard-color-txt-white" data-wcag-aa="true">
         <div>
            <span>Black
               <svg class="env-icon example-dashboard-color-list-icon"><use xlink:href="/images/docs-icons.svg#text"></use></svg>*
            </span>
            <span>#202330</span>
         </div>
      </li>
      <li class="env-dashboard-color-bg-white env-border-inline env-border-block-end env-dashboard-color-txt-black" data-wcag-aa="false">
         <div>
            <span>White</span>
            <span>#ffffff</span>
         </div>
      </li>
   </ul>
</div>

<p class="example-dashboard-color-list-legend env-m-bottom--0">
   <svg class="env-icon example-dashboard-color-list-icon">
      <use xlink:href="/images/docs-icons.svg#text"></use>
   </svg> = The color will pass WCAG 2 level AA contrast requirements as text on white (widget wrapper) background.
</p>
<p class="example-dashboard-color-list-legend env-m-top--0">
   <span style="font-size:1.4em">*</span> = The color also passes contrast requirements if used as text on gray-05 (theme body) background.
</p>

### Color palette CSS variable names

Color variables are named `--env-dashboard-color-white`, `--env-dashboard-color-black` and `--env-dashboard-color-{colorName}-{variant}`.

Available color names: `red`,
`pink`,`purple`,`deep-purple`,`indigo`,`blue`,`light-blue`,`cyan`,`teal`,`green`,`light-green`,`lime`,`yellow`,`orange`,`brown`,`gray`

Available variants: `05`, `20`, `50`, `90`,

### Color palette utility classes

Simple decoration of areas may be done using CSS classes. Each palette color has a background and a foreground classname.

Available classnames are `env-dashboard-bg-color-{colorName}-{variant}` where `colorName` and `variant` follow the same
patterns as CSS variable names.

```html
<div
   class="env-dashboard-color-bg-purple-20 env-p-around--medium env-m-bottom--medium"
>
   This is a purple-20 area with default font color.
</div>
<div
   class="env-dashboard-color-bg-purple-50 env-dashboard-color-txt-white env-p-around--medium"
>
   This is a purple-50 area with white font color.
</div>
```

### Brand colors

Brand colors are not available in the dashboard theme, please use the Color palette.

## Widget example

<section class="env-dashboard-widget env-p-horizontal--large env-p-vertical--small" style="width: fit-content">
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
   <canvas id="example-chart-canvas"
           class="env-border example-canvas"
           aria-label="Example chart, this text should tell the chart values for accessibility." 
           role="img"></canvas>
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
