---
title: Spacing
---

Padding and margin utility classes are named using the format: `env-{property}-{specifier}--{size}`

Valid values for _property_

-  `m` for `margin`
-  `p` for `padding`

Valid values for _specifier_

-  `top`
-  `right`
-  `bottom`
-  `left`
-  `horizontal` <span class="env-badge env-badge--info">9.1</span>
-  `vertical` <span class="env-badge env-badge--info">9.1</span>
-  `around`

Valid values for _size_

-  `0`
-  `a` auto, only applicable to `margin`
-  `xxx-small`
-  `xx-small`
-  `x-small`
-  `small`
-  `medium`
-  `large`
-  `x-large`
-  `xx-large`
-  `xxx-large`

Invert values for margin by adding the negative modifier <span class="env-badge env-badge--info">9.1</span>

-  `env-m-{specifier}--negative`

### Spacing examples

<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__padding env-m-around--medium env-p-around--medium">
         <div class="example-spacing__content">
            env-m-around--medium<br />env-p-around--medium
         </div>
      </div>
   </div>
</div>
<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__padding env-m-horizontal--xxx-large env-p-vertical--large">
         <div class="example-spacing__content">
            env-m-horizontal--xxx-large<br />env-p-vertical--large
         </div>
      </div>
   </div>
</div>
<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__padding env-m-horizontal--negative env-m-horizontal--large env-m-vertical--medium env-p-around--small">
         <div class="example-spacing__content">
            env-m-horizontal--large<br />
            env-m-horizontal--negative<br /> 
            env-m-vertical--medium<br />
            env-p-around--small<br />
         </div>
      </div>
   </div>
</div>
<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__padding env-m-top--negative env-m-top--medium env-m-right--medium env-m-bottom--small env-m-left--xxx-large env-p-around--medium">
         <div class="example-spacing__content">
            env-m-top--negative<br />
            env-m-top--medium<br />
            env-m-right--medium<br />
            env-m-bottom--small<br />
            env-m-left--xxx-large<br />
            env-p-around--medium<br />
         </div>
      </div>
   </div>
</div>
<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__padding env-w--50 env-m-vertical--medium env-m-horizontal--a env-p-around--medium">
         <div class="example-spacing__content">
            env-w--50<br />
            env-m-vertical--medium<br />
            env-m-horizontal--a<br />
            env-p-around--medium<br />
         </div>
      </div>
   </div>
</div>
