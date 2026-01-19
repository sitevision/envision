---
title: Responsive widgets
description: Use CSS container queries to make widgets responsive to different sizes.
dashboard: true
---

Some widgets may need to use a responsive design to fit different widths. Media queries should **not** be used since the width
of the widget may not be relative to the viewport width. To make adaptions for [different widget sizes](/dashboard/basics/), use [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries).

The grid column container where the app will be displayed is a [containment context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries#using_container_queries) named `dashboard-widget`.

### Responsive widget example

<div class="example-responsive-widget-wrapper">
   <section class="env-dashboard-widget example-responsive-widget env-m-block-end--large">
      <div class="example-responsive-widget__resizeable env-p-inline--large env-p-block--small">
         <h2 class="env-ui-text-sectionheading">
            Responsive example widget   
         </h2>
         <p class="env-ui-text-kpi-number">96%</p>
         <p class="env-ui-text-caption env-text-align--right">Resize this widget <span style="font-size: 1.25em;transform: rotate(28deg) translate(0.2em, 0.2em);display: inline-block;">&rarr;</span></p>
      </div>
   </section>
</div>

```html noexample noexpand
<section class="env-dashboard-widget example-responsive-widget">
   <h2 class="env-ui-text-sectionheading">Responsive example widget</h2>
   <p class="env-ui-text-kpi-number">96%</p>
</section>
```

```css noexpand
@container dashboard-widget (max-width: 449px) {
   .example-responsive-widget .env-ui-text-kpi-number {
      font-size: var(--env-ui-text-kpi-number-font-size-small);
      color: var(--env-dashboard-color-pink-50);
   }
}

@container dashboard-widget (min-width: 580px) {
   .example-responsive-widget .env-ui-text-kpi-number {
      font-size: var(--env-ui-text-kpi-number-font-size-large);
      color: var(--env-dashboard-color-light-blue-90);
   }
}
```
