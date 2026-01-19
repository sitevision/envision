---
title: Dynamic font size
description: The Dynamic Font Size utility scales an element’s base font size based on container width.
---

Use Dynamic font size to scale the base font size of an element. Any element children using
relative font sizes will scale proportionally.

A [container element](/utils/container/) is required as a wrapper.
There are set widths for the container where the scaling starts and stops.
The scaling and width parameters may be controlled using modifer classnames as
described below.

The default values are a scaling factor of `1 – 1.25` between widths `400px – 750px`.

<div class="example-dynamic-font-wrapper">
   <div class="example-dynamic-font env-m-block-end--large">
      <div class="example-dynamic-font__resizeable">
         <div class="env-container example-dynamic-container">
            <div class="env-p--medium">
               <div class="env-dynamic-font">
                  <h2 class="env-ui-text-sectionheading">
                     Dynamic font
                     <span class="example-dynamic-font__elfontsize"></span>
                  </h2>
                  <p class="env-text env-m-block-start--small">
                     This text will resize dynamically depending on the width of the containment context.
                     Baseline font-size will go from 1em to 1.25em starting at 400px width up to 750px.
                     The heading will also scale to a factor of 1.25, but starting at 1.25em it will scale up to 1.5625em.
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
            </div>
            <span class="example-dynamic-font__dffontsize"></span>
         </div>
         <p class="example-dynamic-font__resizeable__help">
            Resize container (<span class="example-dynamic-font__width"></span>px)
            <span class="example-dynamic-font__resizeable__help__arrow">&rarr;</span>
         </p>
      </div>
   </div>
</div>

## Required markup

A containment context is required. The easiest way to create one is to use the [container element](/utils/container/).
The containment context determines the width from which the scaling of the dynamic font is calculated.

Inside the container, place one or more dynamic font elements using class `env-dynamic-font`.
Text inside these elements will be dynamically scaled, text outside will not.

```html noexample
<div class="env-container">
   <div class="env-dynamic-font">
      <p class="env-text">This text will resize!</p>
   </div>
</div>
```

Note: When using [Envision for Dashboard Widgets](/dashboard/widget-typography/#dynamic-font-size),
the container element is not required since the widget already is a containment context.

### Additional markup

To not interfere with the width calculations, padding must be used on a
separate element inside the container element. Elements placed inside the container but outside of
`env-dynamic-font` will not scale.

```html noexample
<div class="env-container">
   <div class="env-p--medium">
      <h2 class="env-ui-text-sectionheading">This heading will not resize</h2>
      <div class="env-dynamic-font">
         <p class="env-text">This text will resize ...</p>
      </div>
   </div>
</div>
```

## Controlling the scaling

### Scaling factor

Use modifer `env-dynamic-font--{scale}` where `{scale}` may be one of:

`1_125`, `1_25`, `1_375`, `1_5`, `1_625`, `1_75`, `1_875`, `2`

Default scaling factor is `1.25` which is identical to using the `1_25` modifer.

_Note that dot is replaced by underscore as dot is not allowed in CSS class names._

<div class="example-dynamic-font-wrapper">
   <div class="example-dynamic-font env-m-block-end--large">
      <div class="example-dynamic-font__resizeable">
         <div class="env-container example-dynamic-container">
            <div class="env-p--medium">
               <h2 class="env-ui-text-sectionheading">
                  Scaling factor
               </h2>
               <div class="env-dynamic-font env-dynamic-font--scale-1_125 env-m-block-start--small">
                  <p class="env-text">
                     Scaling factor 1.125
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
               <div class="env-dynamic-font">
                  <p class="env-text">
                     Scaling factor 1.25 (default)
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
               <div class="env-dynamic-font env-dynamic-font--scale-1_375">
                  <p class="env-text">
                     Scaling factor 1.375
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
<div class="env-dynamic-font env-dynamic-font--scale-1_5">
                  <p class="env-text">
                     Scaling factor 1.5
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
<div class="env-dynamic-font env-dynamic-font--scale-1_625">
                  <p class="env-text">
                     Scaling factor 1.625
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
<div class="env-dynamic-font env-dynamic-font--scale-1_75">
                  <p class="env-text">
                     Scaling factor 1.75
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
<div class="env-dynamic-font env-dynamic-font--scale-1_875">
                  <p class="env-text">
                     Scaling factor 1.875
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
            
<div class="env-dynamic-font env-dynamic-font--scale-2">
                  <p class="env-text">
                     Scaling factor 2
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
         </div>
</div>
         <p class="example-dynamic-font__resizeable__help">
            Resize container (<span class="example-dynamic-font__width"></span>px)
            <span class="example-dynamic-font__resizeable__help__arrow">&rarr;</span>
         </p>
      </div>
   </div>
</div>

```html noexample
<div class="env-container">
   <div class="env-dynamic-font env-dynamic-font--scale-1_125">
      <p class="env-text">Scaling factor 1.125</p>
   </div>
</div>
```

### Scaling width boundaries <span id="dynamic-font-width-boundaries" class="offset-anchor"></span>

The scaling will occur between two set widths. If the container width is smaller than the from-value,
the scaling will be set to the lowest possible value and vice versa for the to-value.

Boundaries are set using modifier classes `env-dynamic-font--from-{value}` and `env-dynamic-font--to-{value}`.

Allowed **from** values: `250`, `300`, `350`, `400`, `450`, `500`, `550`

Allowed **to** values: `500`, `550`, `600`, `650`, `700`, `750`, `800`, `900`, `1000`

Default boundaries are from 400 to 750.

<img class="example-dynamic-font-chart"
alt="Dynamic font scaling chart"
src="/placeholders/examples/dyn-font.svg" />

<div class="example-dynamic-font-wrapper">
   <div class="example-dynamic-font env-m-block-end--large">
      <div class="example-dynamic-font__resizeable">
         <div class="env-container example-dynamic-container">
            <div class="env-p--medium">
               <h2 class="env-ui-text-sectionheading">
                  Boundaries
               </h2>
               <div class="env-dynamic-font env-dynamic-font--from-250 env-dynamic-font--to-500 env-m-block--small">
                  <p class="env-text">
                     From 250 to 500
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
               <div class="env-dynamic-font env-dynamic-font--from-400 env-dynamic-font--to-650 env-m-block--small">
                  <p class="env-text">
                     From 400 to 650
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
               <div class="env-dynamic-font env-dynamic-font--from-550 env-dynamic-font--to-800 env-m-block--small">
                  <p class="env-text">
                     From 550 to 800
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
            </div>
         </div>
         <p class="example-dynamic-font__resizeable__help">
            Resize container (<span class="example-dynamic-font__width"></span>px)
            <span class="example-dynamic-font__resizeable__help__arrow">&rarr;</span>
         </p>
      </div>
   </div>
</div>

```html noexample
<div class="env-container">
   <div
      class="env-dynamic-font env-dynamic-font--from-250 env-dynamic-font--to-500"
   >
      <p class="env-text">From 250 to 500</p>
   </div>
</div>
```

Note: When using [Envision for Dashboard Widgets](/dashboard/widget-typography/#dynamic-font-size),
there are additional widget specific boundaries available.

### Downscaling

The default is scaling up from `1 – 1.25`. Scaling may be reversed, so `1` is the highest factor by using
the modifier `env-dynamic-font--downscale`. The lowest factor will then be `1 / {scale}`, which is `0.8`
at default settings.

<div class="example-dynamic-font-wrapper">
   <div class="example-dynamic-font env-m-block-end--large">
      <div class="example-dynamic-font__resizeable">
         <div class="env-container example-dynamic-container">
            <div class="env-p--medium">
               <h2 class="env-ui-text-sectionheading">
                  Upscaling vs downscaling
               </h2>
               <div class="env-dynamic-font env-m-block--small">
                  <p class="env-text">
                     Upscaling factor 1.25 (default)
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
<div class="env-dynamic-font env-dynamic-font--scale-2 env-m-block--small">
<p class="env-text">
                     Upscaling factor 2
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p></div>
               <div class="env-dynamic-font env-dynamic-font--downscale env-m-block--small">
                  <p class="env-text">
                     Downscaling factor 1.25
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
<div class="env-dynamic-font env-dynamic-font--scale-2 env-dynamic-font--downscale env-m-block--small">
<p class="env-text">
                     Downscaling factor 2
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p></div>
            </div>
         </div>
         <p class="example-dynamic-font__resizeable__help">
            Resize container (<span class="example-dynamic-font__width"></span>px)
            <span class="example-dynamic-font__resizeable__help__arrow">&rarr;</span>
         </p>
      </div>
   </div>
</div>

```html noexample
<div class="env-container">
   <div class="env-dynamic-font">
      <p class="env-text">Upscaling factor 1.25 (default)</p>
   </div>
   <div class="env-dynamic-font env-dynamic-font--scale-2">
      <p class="env-text">Upscaling factor 2</p>
   </div>
   <div class="env-dynamic-font env-dynamic-font--downscale">
      <p class="env-text">Downscaling factor 1.25</p>
   </div>
   <div
      class="env-dynamic-font env-dynamic-font--scale-2 env-dynamic-font--downscale"
   >
      <p class="env-text">Downscaling factor 2</p>
   </div>
</div>
```

## CSS settings

For higher precision in setting the values, the following CSS variables may be set.

**Note!** Do not use any units.

```html noexample
<div class="env-container">
   <div class="env-dynamic-font example-custom-dynamic-font-settings">
      <p class="env-text">Scaling factor 1.2345</p>
   </div>
</div>
```

```css noexpand
.example-custom-dynamic-font-settings {
   /* Scaling factor */
   --env-dynamic-font-scale: 1.2345;
   /* Container from- and to widths (px) */
   --env-dynamic-font-from-width: 357;
   --env-dynamic-font-to-width: 579;
}
```
