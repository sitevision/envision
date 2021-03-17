---
title: Profile image
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
   <div data-demo-size="256px">
      <img
         class="env-profile-image env-profile-image--xx-large"
         src="https://placehold.it/256x256.png/ccc/000?text=XXL"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="224px">
      <img
         class="env-profile-image env-profile-image--x-large"
         src="https://placehold.it/224x224.png/ccc/000?text=XL"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="128px">
      <img
         class="env-profile-image env-profile-image--large"
         src="https://placehold.it/128x128.png/ccc/000?text=L"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="96px">
      <img
         class="env-profile-image env-profile-image--medium"
         src="https://placehold.it/96x96.png/ccc/000?text=M"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="64px">
      <img
         class="env-profile-image env-profile-image--small"
         src="https://placehold.it/64x64.png/ccc/000?text=S"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="48px">
      <img
         class="env-profile-image env-profile-image--x-small"
         src="https://placehold.it/48x48.png/ccc/000?text=XS"
         alt="Example profile image"
      />
   </div>

   <div data-demo-size="32px">
      <img
         class="env-profile-image env-profile-image--xx-small"
         src="https://placehold.it/32x32.png/ccc/000?text=XXS"
         alt="Example profile image"
      />
   </div>
</div>
```

### Responsive size

Using a wrapper element will make the image resize if the element containing
the image is smaller than the image.

```html
<div class="example-profile-images">
   <div
      class="env-profile-image env-profile-image--xx-large"
      data-demo-size="256px"
   >
      <img
         src="https://placehold.it/256x256.png/ccc/000?text=XXL"
         alt="Example profile image"
      />
   </div>
   <div
      class="env-profile-image env-profile-image--x-large"
      data-demo-size="224px"
   >
      <img
         src="https://placehold.it/224x224.png/ccc/000?text=XL"
         alt="Example profile image"
      />
   </div>

   <div
      class="env-profile-image env-profile-image--large"
      data-demo-size="128px"
   >
      <img
         src="https://placehold.it/128x128.png/ccc/000?text=L"
         alt="Example profile image"
      />
   </div>

   <div
      class="env-profile-image env-profile-image--medium"
      data-demo-size="96px"
   >
      <img
         src="https://placehold.it/96x96.png/ccc/000?text=M"
         alt="Example profile image"
      />
   </div>

   <div
      class="env-profile-image env-profile-image--small"
      data-demo-size="64px"
   >
      <img
         src="https://placehold.it/64x64.png/ccc/000?text=S"
         alt="Example profile image"
      />
   </div>

   <div
      class="env-profile-image env-profile-image--x-small"
      data-demo-size="48px"
   >
      <img
         src="https://placehold.it/48x48.png/ccc/000?text=XS"
         alt="Example profile image"
      />
   </div>

   <div
      class="env-profile-image env-profile-image--xx-small"
      data-demo-size="32px"
   >
      <img
         src="https://placehold.it/32x32.png/ccc/000?text=XXS"
         alt="Example profile image"
      />
   </div>
</div>
```
