---
title: Text
since: 2025.01.1
---

Text is designed to be used for content text. It is a versatile and flexible
set of site fonts that can be used for a wide range of purposes, from body text to
headings and image captions.

Text is divided into different sets, each with its own unique style and purpose.

```html-nocode
<div class="example-content-text-demo">
   <h2 class="env-text-heading-01">Heading</h2>
   <h2 class="env-text-display-01">Display</h2>
   <p class="env-text-summary-01">Summary</p>
   <p class="env-text-body-01">Body</p>
   <p class="env-text-caption-01">Image Caption</p>
   <p class="env-text-quotation-01">Quotation</p>
   <p class="env-text-caption-01">Table Caption</p>
   <p class="env-text-table-data-01">Table</p>
</div>
```

## Variants

Variants of a text style are named 01, 02, 03, etc.

For headings there is no need to assign a certain variant number to the HTML `<H{n}>` element with the same number.
Look at the variant numbers as a size and style indicator rather than a specific element type.

When designing a website you may for example choose to use the 02 variant as a default size for an `<H1>` element and then
use the 01 variant for specific cases where you might want to display a larger heading.

## Heading style sets

The Heading and Display style sets are used for titles and headings.
There are six and three different heading styles available respectively.

```html
<div class="example-content-text-demo">
   <h1 class="env-text-heading-01">Heading / 01</h1>
   <h2 class="env-text-heading-02">Heading / 02</h2>
   <h3 class="env-text-heading-03">Heading / 03</h3>
   <h4 class="env-text-heading-04">Heading / 04</h4>
   <h5 class="env-text-heading-05">Heading / 05</h5>
   <h6 class="env-text-heading-06">Heading / 06</h6>
   <h1 class="env-text-display-01">Display / 01</h1>
   <h2 class="env-text-display-02">Display / 02</h2>
   <h3 class="env-text-display-03">Display / 03</h3>
</div>
```

## Body text style sets

The Body, Summary, Quotation and Table style sets are used for different types of body text.

```html
<div class="example-content-text-demo">
   <p class="env-text-summary-01">Summary / 01</p>
   <p class="env-text-body-01">Body / 01</p>
   <p class="env-text-body-02">Body / 02</p>
   <p class="env-text-body-03">Body / 03</p>
   <p class="env-text-body-04">Body / 04</p>
   <p class="env-text-quotation-01">Quotation / 01</p>
   <p class="env-text-quotation-02">Quotation / 02</p>
</div>
```

## Specialized text style sets

For image captions and table text there are specialized styles available.

```html
<figure>
   <img src="/placeholders/225x100/10.webp" alt="Example image" />
   <figcaption class="env-text-caption-01">Caption / 01</figcaption>
</figure>
```

When using the `env-table` component, the table text styles will be used by default, no further
classes are needed.

```html
<table class="env-table">
   <caption>
      Envision table
   </caption>
   <thead>
      <tr>
         <th>Name</th>
         <th>Username</th>
         <th>Email</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>John Doe</td>
         <td>johdoe</td>
         <td>john@doe.com</td>
      </tr>
      <tr>
         <td>Jane Doe</td>
         <td>jandoe</td>
         <td>jane@doe.com</td>
      </tr>
   </tbody>
</table>
```

For other tables, the table text styles can be used by adding the Table text style classes to the
appropriate table elements.

```html
<table class="example-table">
   <caption class="env-text-table-caption-01">
      Custom table using Table text style
   </caption>
   <thead>
      <tr>
         <th class="env-text-table-heading-01">Name</th>
         <th class="env-text-table-heading-01">Username</th>
         <th class="env-text-table-heading-01">Email</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="env-text-table-data-01">John Doe</td>
         <td class="env-text-table-data-01">johdoe</td>
         <td class="env-text-table-data-01">john@doe.com</td>
      </tr>
      <tr>
         <td class="env-text-table-data-01">Jane Doe</td>
         <td class="env-text-table-data-01">jandoe</td>
         <td class="env-text-table-data-01">jane@doe.com</td>
      </tr>
   </tbody>
</table>
```

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

Possible values for `{name}`: `heading-01`, `heading-02`, `heading-03`, `heading-04`, `heading-05`, `heading-06`,
`display-01`, `display-02`, `display-03`, `summary-01`, `body-01`, `body-02`, `body-03`, `body-04`,
`caption-01`,`quotation-01`, `quotation-02`, `table-caption-01`, `table-heading-01`, `table-data-01`.

## Links

The heading styles (Heading and Display) will in the default
settings use the toned down styling similar to <a class="env-link-secondary" href="/utils/text/#links">&laquo;secondary links&raquo;</a>.

Body, summary, Quotation and Table will all use the
<a class="env-link" href="/utils/text/#links">&laquo;default link styling&raquo;</a> as default.

```html
<h2 class="env-text-heading-01">
   <a href="javascript:void(0)">Link in Heading / 01</a>
</h2>
<p class="env-text-summary-01">
   And here is a <a href="javascript:void(0)">link in Summary / 01</a>.
</p>
```

Link color and underline may be adjusted as fit for each style in a set using the following classes where name is the name of the font style:

-  `--env-text-{name}-link-font-color`
-  `--env-text-{name}-link-text-decoration`
-  `--env-text-{name}-link-hover-font-color`
-  `--env-text-{name}-link-hover-text-decoration`

## Example

Here is a link to [an example article](/examples/article-text) that uses many of the above the text styles.
