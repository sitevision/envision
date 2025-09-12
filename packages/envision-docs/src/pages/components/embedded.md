---
title: Embedded
description: The Embedded component displays images and text with flexible layouts and overlay options.
---

## Example 1

```html
<div class="env-embedded" style="width:20em">
   <div class="env-embedded__img-container">
      <img
         class="env-embedded__img"
         alt=""
         src="https://envisionui.io/placeholders/text/640x480.png"
      />
   </div>
   <div class="env-embedded__block">
      <h4 class="env-text">Lorem ipsum</h4>
      <p class="env-text">
         Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig
         drumstick chuck ball tip biltong shoulder
      </p>
      <button type="button" class="env-button env-button--primary">
         Lorem ipsum
      </button>
   </div>
</div>
```

## Example 2

Uses `env-embedded--horizontal` and `env-embedded__img`. Use `env-embedded__img-container--right` to align image to the right.

```html
<div class="env-embedded env-embedded--horizontal">
   <div class="env-embedded__img-container">
      <img
         class="env-embedded__img"
         alt=""
         src="https://envisionui.io/placeholders/text/270x180.png"
      />
   </div>
   <div class="env-embedded__block">
      <h4 class="env-text">Lorem ipsum</h4>
      <p class="env-text">
         Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig
         drumstick chuck ball tip biltong shoulder porchetta tenderloin short
         loin.
      </p>
   </div>
</div>

<br />

<div class="env-embedded env-embedded--horizontal">
   <div class="env-embedded__img-container env-embedded__img-container--right">
      <img
         class="env-embedded__img"
         alt=""
         src="https://envisionui.io/placeholders/text/270x180.png"
      />
   </div>
   <div class="env-embedded__block">
      <h4 class="env-text">Lorem ipsum</h4>
      <p class="env-text">
         Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig
         drumstick chuck ball tip biltong shoulder porchetta tenderloin short
         loin.
      </p>
   </div>
</div>
```

## Example 3

```html
<div class="env-embedded">
   <div class="env-embedded__img-container">
      <img
         class="env-embedded__img"
         alt=""
         src="https://envisionui.io/placeholders/text/769x180.png"
      />
   </div>
   <div class="env-embedded__block">
      <h4 class="env-text">Lorem ipsum</h4>
      <p class="env-text">
         Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig
         drumstick chuck ball tip biltong shoulder porchetta tenderloin short
         loin. Jowl pastrami drumstick pig, beef jerky chicken ham hock salami.
      </p>
   </div>
</div>
```

## Example 4

Uses `env-embedded__block--overlay` to position text on top of image. You can align text to left or right with `env-embedded__block--overlay--left` or `*--right`

```html
<div class="env-embedded env-embedded--cover">
   <div class="env-embedded__img-container">
      <img
         class="env-embedded__img"
         alt=""
         src="https://envisionui.io/placeholders/text/769x180.png"
      />
   </div>
   <div class="env-embedded__block--overlay">
      <h4 class="env-text">Lorem ipsum</h4>
      <p class="env-text">
         Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig
         drumstick chuck ball tip biltong shoulder porchetta tenderloin short
         loin.
      </p>
   </div>
</div>
```
