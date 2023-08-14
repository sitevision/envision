---
title: Text
---

## Headings

```html
<h1 class="env-text">Heading 1</h1>

<h2 class="env-text">Heading 2</h2>

<h3 class="env-text">Heading 3</h3>

<h4 class="env-text">Heading 4</h4>

<h5 class="env-text">Heading 5</h5>

<h6 class="env-text">Heading 6</h6>
```

```html
<section class="env-text">
   <h1>Heading 1</h1>

   <h2>Heading 2</h2>

   <h3>Heading 3</h3>

   <h4>Heading 4</h4>

   <h5>Heading 5</h5>

   <h6>Heading 6</h6>
</section>
```

```html
<div class="env-text-h1">Looks like heading 1</div>

<div class="env-text-h2">Looks like heading 2</div>

<div class="env-text-h3">Looks like heading 3</div>

<div class="env-text-h4">Looks like heading 4</div>

<div class="env-text-h5">Looks like heading 5</div>

<div class="env-text-h6">Looks like heading 6</div>

<div class="env-text-p">Looks like paragraph</div>

<div class="env-text-small">Looks like small</div>
```

```html
<h3 class="env-text">
   Fancy display heading
   <small class="env-text--muted">With faded secondary text</small>
</h3>
```

## Transformation

```html
<p class="env-text env-text--uppercase">will be all uppercase</p>

<p class="env-text env-text--lowercase">THIS WILL BE LOWERCASE</p>

<p class="env-text env-text--capitalize">
   every word will start with a capital letter.
</p>

<p class="env-text env-text--strike">This text will be hard to read</p>
```

## Alignment

```html
<div class="env-text">Left aligned (default)</div>
<div class="env-text env-text-align--center">Center aligned</div>
<div class="env-text env-text-align--right">Right aligned</div>
```

### Logical properties <span class="env-badge env-badge--info">2023.08.1</span>

```html
<div class="env-text env-text-align--start">Start aligned</div>
<div class="env-text env-text-align--end">End aligned</div>
```

#### Logical properties, right to left-aligned

```html
<div dir="rtl">
   <div class="env-text">من اليمين الى اليسار</div>
   <div class="env-text env-text-align--start">بدء محاذاة</div>
   <div class="env-text env-text-align--end">محاذاة النهاية</div>
</div>
```

<span id="status-colors" class="offset-anchor"></span>

## Status colors <span class="env-badge env-badge--info">2023.07.1</span>

```html
<p class="env-text env-text--attention">Attention text</p>
<p class="env-text env-text--active">Active text</p>
<p class="env-text env-text--error">Error text</p>
```

## Links

<div id="links"></div>

```html
<div class="example-link">
   <a href="#links" class="env-link">A standalone link</a>
</div>

<div class="example-link">
   <a href="#links" class="env-link-secondary">A secondary link</a>
</div>

<div class="example-link">
   <div class="env-text">Text with <a href="#links">a link</a> inside.</div>
</div>
```
