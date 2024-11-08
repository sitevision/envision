---
title: Content Text
since: 2025.xx.x
---

<div class="env-block-secondary env-block-secondary--border env-m-bottom--large">
   <div class="example-variant">
      <h2 class="env-text-headline-04">Secondary</h2>
      <p class="env-text-body-02">
         Bacon <span href="#block" class="env-link">ipsum</span> dolor
         <a href="#blocks">amet beef</a> cupim brisket pork
         <a href="#block" class="env-link-secondary">turducken</a>.
      </p>
   </div>
</div>

**Note:** Content text is not yet available in Sitevision.

Content Text is designed to be used for all types of text content.
It is a versatile and flexible set of site fonts that can be used for a wide range of purposes,
from body text to headings and captions.

Content Text is divided into six different sets, each with its own unique style and purpose.

<div class="code-example">
   <div class="example-content-text-demo">
      <h2 class="env-text-headline-02">Headline</h2>  
      <h2 class="env-text-display-02">Display</h2>  
      <p class="env-text-preamble">Preamble</p>  
      <p class="env-text-body-02">Body</p>  
      <p class="env-text-quotation-02">Quotation</p>  
      <p class="env-text-table-data">Table</p>
   </div>
</div>

## Variants

Variants of a text style are named 01, 02, 03, etc. and are used to differentiate between different sizes of the same style.

For headings there is no need to assign a certain variant number to the HTML `<H{n}>` element with the same number. Look at the
variant numbers as a size and style indicator rather than a specific element type.

When designing a website you may for example choose to use the 02 variant as a default size for an `<H1>` element and then
use the 01 variant for specific cases where you might want to display a larger heading.

### Headline

Headline text is used for titles and headings. There are six different headline styles available.

```html
<div class="example-content-text-demo">
   <h1 class="env-text-headline-01">Headline / 01</h1>
   <h2 class="env-text-headline-02">Headline / 02</h2>
   <h2 class="env-text-headline-03">Headline / 03</h2>
   <h3 class="env-text-headline-04">Headline / 04</h3>
   <h3 class="env-text-headline-05">Headline / 05</h3>
   <h4 class="env-text-headline-06">Headline / 06</h4>
</div>
```

Headline class names: `env-text-headline-01`, `env-text-headline-02`, `env-text-headline-03`, `env-text-headline-04`, `env-text-headline-05`, `env-text-headline-06`.

## Styling

All variants of a font will have its own set of variables that can be used to style the text. Below is a list of the variables.

-  `--env-text-{name}-font-family`
-  `--env-text-{name}-font-size`
-  `--env-text-{name}-font-weight`
-  `--env-text-{name}-font-style`
-  `--env-text-{name}-line-height`
-  `--env-text-{name}-text-transform`
-  `--env-text-{name}-letter-spacing`
-  `--env-text-{name}-font-color`
-  `--env-text-{name}-margin-block-start`
-  `--env-text-{name}-margin-block-end`

Possible values for `{name}`: `headline-01`, `headline-02`, `headline-03`, `headline-04`, `headline-05`, `headline-06`,
`display-01`, `display-02`, `display-03`, `preamble`, `body-01`, `body-02`, `body-03`, `body-04`,
`quotation-01`, `quotation-02`, `table-caption`, `table-heading`, `table-data`.

<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__env-content" style="margin:1.5em 0 0.5em">
          <h2 class="env-text-display-02 example-spacing__lineheight" style="margin:0">Display / 02</h2>
      </div>
   </div>
</div>

```html
<div class="example-content-text-demo">
   <h1 class="env-text-headline-01">Headline / 01</h1>
   <h2 class="env-text-headline-02">Headline / 02</h2>
   <h2 class="env-text-headline-03">Headline / 03</h2>
   <h3 class="env-text-headline-04">Headline / 04</h3>
   <h3 class="env-text-headline-05">Headline / 05</h3>
   <h4 class="env-text-headline-06">Headline / 06</h4>
   <h2 class="env-text-display-01">Display / 01</h2>
   <h2 class="env-text-display-02">Display / 02</h2>
   <h3 class="env-text-display-03">Display / 03</h3>
   <p class="env-text-preamble">Preamble</p>
   <p class="env-text-body-01">Body / 01</p>
   <p class="env-text-body-02">Body / 02</p>
   <p class="env-text-body-03">Body / 03</p>
   <p class="env-text-body-04">Body / 04</p>
   <p class="env-text-quotation-01">Quotation / 01</p>
   <p class="env-text-quotation-02">Quotation / 02</p>
   <p class="env-text-table-caption">Table / Caption</p>
   <p class="env-text-table-heading">Table / Heading</p>
   <p class="env-text-table-data">Table / Data</p>
</div>
```

## Links

The heading styles (Headline and Display) will in the default
settings use the toned down styling similar to [secondary links](/utils/text/#links).
Body, Preamble, Quotation and Table will all use the
[default link styling](/utils/text/#links) as default.

Link styling may be adjusted by using the following classes where name is the name of the font style:

-  `--env-text-{name}-link-font-color`
-  `--env-text-{name}-link-text-decoration`
-  `--env-text-{name}-link-hover-font-color`
-  `--env-text-{name}-link-hover-text-decoration`

[Example Article](/examples/content-text-article)
