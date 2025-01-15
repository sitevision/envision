---
title: Profile image
description: The Profile Image component displays images with fixed or responsive sizes.
---

## Overview

`.env-profile-image` will always give you a centered image. Use modifiers for size:
<br>
<br>
`env-profile-image--xx-large`, `env-profile-image--x-large`, `env-profile-image--large`,
`env-profile-image--medium`, `env-profile-image--small`, `env-profile-image--x-small`, `env-profile-image--xx-small`

### Fixed size

Using the class directly on the IMG tag will make the image fixed size. If the containing
element is smaller, the image will overflow.

```html
<div class="example-profile-images">
   <div data-demo-size-fixed data-demo-size="256px">
      <img
         class="env-profile-image env-profile-image--xx-large"
         src="https://envisionui.io/placeholders/text/xxl.png"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size-fixed data-demo-size="224px">
      <img
         class="env-profile-image env-profile-image--x-large"
         src="https://envisionui.io/placeholders/text/xl.png"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size-fixed data-demo-size="128px">
      <img
         class="env-profile-image env-profile-image--large"
         src="https://envisionui.io/placeholders/text/l.png"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size-fixed data-demo-size="96px">
      <img
         class="env-profile-image env-profile-image--medium"
         src="https://envisionui.io/placeholders/text/m.png"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size-fixed data-demo-size="64px">
      <img
         class="env-profile-image env-profile-image--small"
         src="https://envisionui.io/placeholders/text/s.png"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size-fixed data-demo-size="48px">
      <img
         class="env-profile-image env-profile-image--x-small"
         src="https://envisionui.io/placeholders/text/xs.png"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size-fixed data-demo-size="32px">
      <img
         class="env-profile-image env-profile-image--xx-small"
         src="https://envisionui.io/placeholders/text/xxs.png"
         alt="Example profile image"
      />
   </div>
</div>
```

### Responsive size

Using a wrapper element will make the image resize if the element containing
the image is smaller than the image.

```html
<div class="example-profile-images example-profile-images--resizeable">
   <div
      class="env-profile-image env-profile-image--xx-large"
      data-demo-size-inside
      data-demo-size="256px"
   >
      <img
         src="https://envisionui.io/placeholders/text/xxl.png"
         alt="Example profile image"
      />
   </div>
</div>
```

<span id="status-badge" class="offset-anchor"></span>

#### Status badge in responsive size Profile image

<span class="doc-badge doc-badge--info">2023.02.1</span>

A responsive size Profile image may have a [Status badge](/components/badge/#status-badge) inside.
The text will be visually hidden and the badge will adjust its size
relative to the image.

```html
<div class="example-profile-images example-profile-images--resizeable">
   <div class="env-profile-image env-profile-image--xx-large">
      <img
         src="https://envisionui.io/placeholders/profile/400x400/02.webp"
         alt="Example profile image"
      />
      <p class="env-status-badge env-status-badge--active">Logged in</p>
   </div>
</div>
```
