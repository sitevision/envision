---
title: Widget colors
description: The widget color palette provides a set of colors that can be used to style widgets.
dashboard: true
---

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
               <svg class="env-icon example-dashboard-color-list-icon"><use href="/images/docs-images.svg#text"></use></svg>*
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
      <use href="/images/docs-images.svg#text"></use>
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
