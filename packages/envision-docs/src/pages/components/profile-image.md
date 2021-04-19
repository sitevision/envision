---
title: Profile image
---

<span class="env-badge env-badge--info">Added in 8.2</span>

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
   <div data-demo-size="256px">
      <img
         class="env-profile-image env-profile-image--xx-large"
         src="https://placehold.jp/ccc/000/256x256.png?text=XXL"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="224px">
      <img
         class="env-profile-image env-profile-image--x-large"
         src="https://placehold.jp/ccc/000/224x224.png?text=XL"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="128px">
      <img
         class="env-profile-image env-profile-image--large"
         src="https://placehold.jp/ccc/000/128x128.png?text=L"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="96px">
      <img
         class="env-profile-image env-profile-image--medium"
         src="https://placehold.jp/ccc/000/96x96.png?text=M"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="64px">
      <img
         class="env-profile-image env-profile-image--small"
         src="https://placehold.jp/ccc/000/64x64.png?text=S"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="48px">
      <img
         class="env-profile-image env-profile-image--x-small"
         src="https://placehold.jp/ccc/000/48x48.png?text=XS"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="32px">
      <img
         class="env-profile-image env-profile-image--xx-small"
         src="https://placehold.jp/ccc/000/32x32.png?text=XXS"
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
         src="https://placehold.jp/ccc/000/256x256.png?text=XXL"
         alt="Example profile image"
      />
   </div>
</div>
```
