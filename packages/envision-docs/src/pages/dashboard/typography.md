---
title: Widget typography
dashboard: true
---

The widget theme uses [Inter](https://fonts.google.com/specimen/Inter) font family which has support for nine different weights
100-900. Other font familes should in most cases not be used.

```html-nocode
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
```

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

### Dynamic font size in widgets <span id="dynamic-font-size" class="offset-anchor"></span>

Widgets already has a containment context which makes them dynamic font containers by default.
Therefore the dynamic font container is **not** required.

Here is an overview of how different size widgets will change size at different Dashboard grid sizes.
The dashboard grid adapts between 1–4 columns depending on available screen space.

| Widget      | 1 column | 2 columns | 3 columns | 4 columns |
| :---------- | -------: | --------: | --------: | --------: |
| Small       |  250–342 |   250–342 |   250–342 |   250–342 |
| Medium      |  250–523 |   524–708 |   534–708 |   524–708 |
| Large       |  250–523 |   524-812 |  813-1071 |  798–1074 |
| Extra Large |  250–523 |   524-812 |  813-1071 | 1072–1440 |

There are additional widget specific boundaries available for Dynamic fonts. Regular boundaries are documented
on the [Dynamic font size page](/utils/dynamic-font-size/#dynamic-font-width-boundaries).
Boundaries are set using modifier classes `env-dynamic-font--from-{value}` and `env-dynamic-font--to-{value}`.

Additional boundaries for **from** values: `524`, `813`, `1072`

Additional boundaries for **to** values: `342`, `523`, `708`, `812`, `1071`, `1440`
