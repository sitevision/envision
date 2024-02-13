---
title: Dynamic font size
beta: true
---

Use Dynamic font size to scale the base font size of an container element. Any element inside the container using
relative font sizes, for example `em`, will scale proportionally. There is a given container width where the
scaling starts, and a width where scaling stops. These parameters may be controlled using modifer classnames as
described below.

The default values are a scaling factor of `1 – 1.25` between widths `400px – 750px`.

<div class="example-dynamic-font-wrapper">
   <section class="example-dynamic-font env-m-bottom--large">
      <div class="example-dynamic-font__resizeable"><!-- -->
         <div class="env-dynamic-font-container example-dynamic-container">
            <div class="env-p-around--medium">
               <div class="env-dynamic-font">
                  <h2 class="env-ui-text-sectionheading">
                     Dynamic font
                     <span class="example-dynamic-font__elfontsize"></span>
                  </h2>
                  <p class="env-text env-m-top--small">
                     This text will resize dynamically depending on the width of the container element.
                     Baseline font-size will go from 1em to 1.25em starting at 400px width up to 750px.
                     The heading will also scale to a factor of 1.25, but starting at 1.25em it will scale up to 1.5625em.
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
            </div>
            <span class="example-dynamic-font__dffontsize"></span>
         </div>
         <p class="example-dynamic-font__resizeable__help env-ui-text-caption env-text-align--right">
            Resize container (<span class="example-dynamic-font__width"></span>px)
            <span class="example-dynamic-font__resizeable__help__arrow">&rarr;</span>
         </p>
      </div>
   </section>
</div>

## Required markup

There must be a container element with class `env-dynamic-font-container`. This element is the one from which
the base width is calculated.

Inside the container, place one or more dynamic font elements with class `env-dynamic-font`. Text inside these elements
will be dynamically scaled. Text placed outside of the dynamic font element will not be scaled.

```html-no-example
<div class="env-dynamic-font-container">
   <div class="env-dynamic-font">
      <p class="env-text">
         This text will resize!
      </p>
   </div>
</div>
```

Note: When using [Envision for Dashboard Widgets](/dashboard/#dynamic-font-size), the container element is not required.

### Additional markup

To not interfere with the width calculations, padding must be used on a
separate element inside the container element. Elements placed inside `env-dynamic-font-container` but outside of
`env-dynamic-font` will not scale.

```html-no-example
<div class="env-dynamic-font-container">
   <div class="env-p-around--medium">
      <h2 class="env-ui-text-sectionheading">
         This heading will not resize
      </h2>
      <div class="env-dynamic-font">
         <p class="env-text">
            This text will resize ...
         </p>
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
   <section class="example-dynamic-font env-m-bottom--large">
      <div class="example-dynamic-font__resizeable"><!-- -->
         <div class="env-dynamic-font-container example-dynamic-container">
            <div class="env-p-around--medium">
               <h2 class="env-ui-text-sectionheading">
                  Scaling factor
               </h2>
               <div class="env-dynamic-font env-dynamic-font--scale-1_125 env-m-top--small">
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
         <p class="example-dynamic-font__resizeable__help env-ui-text-caption env-text-align--right">
            Resize container (<span class="example-dynamic-font__width"></span>px)
            <span class="example-dynamic-font__resizeable__help__arrow">&rarr;</span>
         </p>
      </div>
   </section>
</div>

```html-no-example
<div class="env-dynamic-font-container">
   <div class="env-dynamic-font env-dynamic-font--scale-1_125">
      <p class="env-text">
         Scaling factor 1.125
      </p>
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
   <section class="example-dynamic-font env-m-bottom--large">
      <div class="example-dynamic-font__resizeable"><!-- -->
         <div class="env-dynamic-font-container example-dynamic-container">
            <div class="env-p-around--medium">
               <h2 class="env-ui-text-sectionheading">
                  Boundaries
               </h2>
               <div class="env-dynamic-font env-dynamic-font--from-250 env-dynamic-font--to-500 env-m-vertical--small">
                  <p class="env-text">
                     From 250 to 500
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
               <div class="env-dynamic-font env-dynamic-font--from-400 env-dynamic-font--to-650 env-m-vertical--small">
                  <p class="env-text">
                     From 400 to 650
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
               <div class="env-dynamic-font env-dynamic-font--from-550 env-dynamic-font--to-800 env-m-vertical--small">
                  <p class="env-text">
                     From 550 to 800
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
            </div>
         </div>
         <p class="example-dynamic-font__resizeable__help env-ui-text-caption env-text-align--right">
            Resize container (<span class="example-dynamic-font__width"></span>px)
            <span class="example-dynamic-font__resizeable__help__arrow">&rarr;</span>
         </p>
      </div>
   </section>
</div>

```html-no-example
<div class="env-dynamic-font-container">
   <div class="env-dynamic-font env-dynamic-font--from-250 env-dynamic-font--to-500">
      <p class="env-text">
         From 250 to 500
      </p>
   </div>
</div>
```

Note: When using [Envision for Dashboard Widgets](/dashboard/#dynamic-font-size),
there are additional widget specific boundaries available.

### Downscaling

The default is scaling up from `1 – 1.25`. Scaling may be reversed, so `1` is the highest factor by using
the modifier `env-dynamic-font--downscale`. The lowest factor will then be `1 / {scale}`, which is `0.8`
at default settings.

<div class="example-dynamic-font-wrapper">
   <section class="example-dynamic-font env-m-bottom--large">
      <div class="example-dynamic-font__resizeable"><!-- -->
         <div class="env-dynamic-font-container example-dynamic-container">
            <div class="env-p-around--medium">
               <h2 class="env-ui-text-sectionheading">
                  Upscaling vs downscaling
               </h2>
               <div class="env-dynamic-font">
                  <p class="env-text env-m-vertical--small">
                     Upscaling (default)
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
               <div class="env-dynamic-font env-dynamic-font--downscale">
                  <p class="env-text env-m-vertical--small">
                     Downscaling
                     <span class="example-dynamic-font__elfontsize"></span>
                  </p>
               </div>
            </div>
         </div>
         <p class="example-dynamic-font__resizeable__help env-ui-text-caption env-text-align--right">
            Resize container (<span class="example-dynamic-font__width"></span>px)
            <span class="example-dynamic-font__resizeable__help__arrow">&rarr;</span>
         </p>
      </div>
   </section>
</div>

```html-no-example
<div class="env-dynamic-font-container">
   <div class="env-dynamic-font">
      <p class="env-text">
         Upscaling (default)
      </p>
   </div>
   <div class="env-dynamic-font env-dynamic-font--downscale">
      <p class="env-text">
         Downscaling
      </p>
   </div>
</div>
```

## CSS settings

For higher precision in setting the values, the following CSS variables may be set.

**Note!** Do not use any units.

```css-no-expand
.some-element .env-dynamic-font {
   /* Scaling factor */
   --df-scale: 1.13;
   /* Container from- and to widths (px) */
   --df-from-width: 312;
   --df-to-width: 645;
}
```
