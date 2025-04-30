---
title: Sizing
description: The Sizing utility offers classes to define elements’ width and height using preset values.
---

Sizing utility classes are available for width and height. Classes are named using the the format: `env-{property}--{size}`

Valid values for _property_

- `w` for `width`
- `h` for `height`

Valid values for _size_ (%)

- `25`
- `50`
- `75`
- `100`

Examples `width`

```html
<div class="example-sizing">
   <div class="env-w--25 env-p-around--x-small env-m-bottom--small">25%</div>
   <div class="env-w--50 env-p-around--x-small env-m-bottom--small">50%</div>
   <div class="env-w--75 env-p-around--x-small env-m-bottom--small">75%</div>
   <div class="env-w--100 env-p-around--x-small">100%</div>
</div>
```

Examples `height`

```html
<div class="example-sizing-h">
   <div
      class="env-h--25 env-p-around--x-small env-m-right--small env-d--inline-block"
   >
      25%
   </div>
   <div
      class="env-h--50 env-p-around--x-small env-m-right--small env-d--inline-block"
   >
      50%
   </div>
   <div
      class="env-h--75 env-p-around--x-small env-m-right--small env-d--inline-block"
   >
      75%
   </div>
   <div class="env-h--100 env-p-around--x-small env-d--inline-block">100%</div>
</div>
```

Utility classes are also available for `max-width:100%` and `max-height:100%` and are named using the format: `env-m{property}--100`

Valid values for _property_

- `w` for `width`
- `h` for `height`
