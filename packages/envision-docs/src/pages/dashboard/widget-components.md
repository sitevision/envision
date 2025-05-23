---
title: Widget components
description: Styles for widget components such as labels, values, and badges.
dashboard: true
---

## Values and labels

Additional styles only availble in widgets should be used for labels and values in charts and similar.

```html
<p class="env-ui-text-label">Axis label / Label</p>
<p class="env-ui-text-value">Axis value / Legend</p>
```

### Key performance indicators

For displaying key performance indicators you should use the `env-ui-text-kpi-number` class.
Set different sizes using CSS variables `--env-ui-text-kpi-number-font-size-{x}`.

```html
<span class="env-ui-text-kpi-number example-kpi-x-small">96%</span>
<span class="env-ui-text-kpi-number example-kpi-small">96%</span>
<span class="env-ui-text-kpi-number">96%</span>
<span class="env-ui-text-kpi-number example-kpi-large">96%</span>
<span class="env-ui-text-kpi-number example-kpi-x-large">96%</span>
```

```css
.example-kpi-x-small {
   font-size: var(--env-ui-text-kpi-number-font-size-x-small);
}

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
      <use href="/sitevision/envision-icons.svg#icon-arrow-fill-down"></use>
   </svg>
   Down 18%
</span>

<span class="env-badge env-badge--unchanged">
   <svg class="env-icon env-icon--xx-small">
      <use href="/sitevision/envision-icons.svg#icon-arrow-fill-right"></use>
   </svg>
   No change
</span>

<span class="env-badge env-badge--positive">
   <svg class="env-icon env-icon--xx-small">
      <use href="/sitevision/envision-icons.svg#icon-arrow-fill-up"></use>
   </svg>
   Up 18%
</span>
```
