---
title: Dialog
description: Use Dialog to present modal dialogs with customizable sizes, animations, and focus management.
---

The Dialog component relies heavily on
[The HTMLDialogElement interface](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement).

The component must be initialized from Javascript. In the Envision scripted component you will find a
few extra features:

-  Opener button added as option on initialization
-  Close on click outside as an option
-  Nice fade-in animation
-  Focus trap to keep tab navigation from leaving the dialog

### Default dialog

<div class="example-demo-dialog">
<dialog
   id="demo-dialog"
  class="env-dialog env-dialog--in"
  aria-labelledby="dialogHeader-1" open>
    <h2
      class="env-dialog__title"
      id="dialogHeader-1"
    >
      Dialog Title
    </h2>
    <div class="env-dialog__main">
      <p class="env-text">
        Caticus cuteicus wake up wander around the house making large
        amounts of noise jump on top of your human's bed and fall asleep.
      </p>
    </div>
    <div class="env-dialog__controls">
       <form method="dialog" onsubmit="return false;">
       <button
        type="submit"
        value="ok"
        class="env-button env-button--primary">
        OK
      </button>
      <button
        type="submit"
        value="cancel"
        class="env-button env-button--link">
        Cancel
      </button>
       </form>
    </div>
</dialog>
</div>

### Basic dialog example

```html
<button
   id="example-dialog-1-opener"
   type="button"
   class="env-button env-button--primary env-button--large"
>
   Show dialog
</button>
<dialog
   id="example-dialog-1"
   class="env-dialog"
   aria-labelledby="dialogHeader-1"
>
   <h2 class="env-dialog__title" id="dialogHeader-1">Dialog Title</h2>
   <div class="env-dialog__main">
      <p class="env-text">
         Caticus cuteicus wake up wander around the house making large amounts
         of noise jump on top of your human's bed and fall asleep.
      </p>
   </div>
   <div class="env-dialog__controls">
      <form method="dialog">
         <button
            type="submit"
            value="save"
            class="env-button env-button--primary"
         >
            Save
         </button>
         <button
            type="submit"
            value="cancel"
            class="env-button env-button--link"
         >
            Cancel
         </button>
      </form>
   </div>
</dialog>
```

```javascript
envision.dialog(document.querySelector('#example-dialog-1'), {
   opener: '#example-dialog-1-opener',
});
```

### Button alignment

Use modifier `env-dialog__controls--end` to align controls to the right.

### Optional sizes

Use `env-dialog--large` or `env-dialog--small` to control dialog size.

```html
<button
   id="example-dialog-2-opener"
   type="button"
   class="env-button env-button--primary"
>
   Show large dialog
</button>
<dialog
   id="example-dialog-2"
   class="env-dialog env-dialog--large"
   aria-labelledby="dialogHeader-2"
>
   <h2 class="env-dialog__title" id="dialogHeader-2">Large dialog</h2>
   <div class="env-dialog__main">
      <p class="env-text">
         Caticus cuteicus wake up wander around the house making large amounts
         of noise jump on top of your human's bed and fall asleep.
      </p>
   </div>
   <div class="env-dialog__controls env-dialog__controls--end">
      <form method="dialog">
         <button
            type="submit"
            value="save"
            class="env-button env-button--primary"
         >
            Save
         </button>
         <button
            type="submit"
            value="cancel"
            class="env-button env-button--link"
         >
            Cancel
         </button>
      </form>
   </div>
</dialog>

<button
   id="example-dialog-3-opener"
   type="button"
   class="env-button env-button--primary env-button--ghost"
>
   Show small dialog
</button>
<dialog
   id="example-dialog-3"
   class="env-dialog env-dialog--small"
   aria-labelledby="dialogHeader-3"
>
   <h2 class="env-dialog__title" id="dialogHeader-3">Small dialog</h2>
   <div class="env-dialog__main">
      <p class="env-text">
         Caticus cuteicus wake up wander around the house making large amounts
         of noise jump on top of your human's bed and fall asleep.
      </p>
   </div>
   <div class="env-dialog__controls">
      <form method="dialog">
         <button
            type="submit"
            value="save"
            class="env-button env-button--primary"
         >
            Save
         </button>
         <button
            type="submit"
            value="cancel"
            class="env-button env-button--link"
         >
            Cancel
         </button>
      </form>
   </div>
</dialog>
```

### Scrolling

The element `env-dialog__main` is scrollable when content makes the dialog too large to fit the viewport.

```html
<button
   id="example-dialog-4-opener"
   type="button"
   class="env-button env-button--primary"
>
   Show scrollable dialog
</button>

<dialog
   id="example-dialog-4"
   class="env-dialog"
   aria-labelledby="dialogHeader-4"
>
   <h2 class="env-dialog__title" id="dialogHeader-4">Scrollable dialog</h2>
   <div class="env-dialog__main">
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien
         turpis, aliquam nec porta ultrices, auctor ut mauris. Ut volutpat
         ornare consectetur. Phasellus nec nisi non tellus gravida porttitor a
         in arcu. Aliquam erat volutpat. Phasellus laoreet urna sem. In dui
         arcu, facilisis sed mollis at, bibendum vel purus. In sagittis lobortis
         tellus, sit amet egestas est dignissim vel. Vivamus a consequat nunc.
         Vestibulum eleifend malesuada quam id lacinia. Duis porta mauris et
         justo vehicula, sit amet malesuada tellus sollicitudin. Etiam
         convallis, ipsum non ultrices auctor, elit orci blandit est, vel
         finibus arcu massa eu lorem. Fusce sit amet est non tellus vulputate
         semper in eget est. In tincidunt ligula nec mauris tristique sagittis.
         Pellentesque interdum eleifend eros a viverra. Ut volutpat ut nisi nec
         gravida. Duis non sollicitudin ligula, ac vehicula turpis.
      </p>
      <p class="env-text">
         Duis eget lacus nec neque semper commodo. Nullam nisi nibh, vehicula
         eget condimentum sed, dictum vulputate erat. Quisque ut gravida magna.
         Cras eleifend maximus odio, quis tincidunt enim consectetur eu. Sed nec
         arcu auctor, porttitor eros malesuada, feugiat justo. Nulla ante augue,
         ultricies eu blandit et, vulputate sed nibh. Suspendisse in dapibus
         sapien. Fusce pulvinar, ligula vitae dapibus convallis, urna lectus
         viverra diam, a lobortis magna diam id libero. Duis et venenatis dolor,
         ac semper eros. Nunc tincidunt tempor enim.
      </p>
      <p class="env-text">
         Vivamus eget sagittis velit. Quisque magna libero, egestas a rutrum ac,
         imperdiet ac augue. Fusce nibh magna, sollicitudin sit amet massa in,
         iaculis tempus quam. Ut sodales commodo ante, in rutrum nunc semper
         quis. Vestibulum sed sollicitudin est. Etiam posuere id velit sit amet
         dictum. Nam semper placerat ultrices. Suspendisse in massa porttitor,
         faucibus neque sed, convallis velit. Nulla luctus ipsum a feugiat
         porta.
      </p>
      <p class="env-text">
         Duis ultricies gravida nunc, vitae fringilla sapien convallis ac. Lorem
         ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum
         pellentesque euismod. Cras dictum feugiat nisi, tincidunt imperdiet
         nunc pharetra vitae. Nunc ut neque in metus tristique bibendum. Vivamus
         nec lorem odio. Vestibulum pellentesque cursus diam in tempor.
      </p>
      <p class="env-text">
         Praesent id diam elementum, consequat nisl vitae, congue turpis. Sed
         sit amet cursus quam, vitae sagittis lorem. Morbi erat lectus, tempus
         eget interdum ac, blandit sit amet ante. Praesent scelerisque bibendum
         quam ut ornare. Duis ipsum ex, tincidunt vel volutpat eget, bibendum
         eget odio. Duis vitae tristique eros. Praesent at dui et velit
         porttitor malesuada sit amet a elit.
      </p>
      <p class="env-text">
         Donec at augue quis dolor porta rutrum. Nullam fringilla lobortis
         sapien ac cursus. Ut id egestas odio, mattis ornare dui. Etiam interdum
         venenatis quam id lobortis. Nunc id enim luctus, porta leo vitae,
         tristique lectus. In vel tortor nec lacus facilisis euismod vitae
         porttitor ligula. Vivamus ut mauris id urna dictum vestibulum.
      </p>
      <p class="env-text">
         Mauris interdum fermentum turpis, at ullamcorper sapien accumsan sit
         amet. Phasellus vitae augue volutpat, convallis elit sed, eleifend
         nisl. Sed at lorem dui. Nunc scelerisque nisi sapien, non sollicitudin
         tellus luctus vitae. Vivamus molestie turpis eu enim blandit, rutrum
         egestas nisl hendrerit. Mauris pharetra commodo malesuada. Proin at
         nisl nec turpis lacinia hendrerit non non orci. Cras tempor quam a
         mauris placerat lacinia. Donec eget sem ac tellus porttitor hendrerit.
         Duis congue risus non eros pharetra, ut facilisis risus ullamcorper.
         Vivamus fringilla suscipit lorem eu fermentum. Orci varius natoque
         penatibus et magnis dis parturient montes, nascetur ridiculus mus.
         Mauris tristique, leo et laoreet imperdiet, leo ligula egestas nibh, at
         accumsan lorem nibh ut nulla. Vivamus vitae ornare est. Suspendisse
         convallis tortor et nulla porttitor dictum.
      </p>
   </div>
   <div class="env-dialog__controls">
      <form method="dialog">
         <button
            type="submit"
            value="save"
            class="env-button env-button--primary"
         >
            Save
         </button>
         <button
            type="submit"
            value="cancel"
            class="env-button env-button--link"
         >
            Cancel
         </button>
      </form>
   </div>
</dialog>
```

## Alert dialogs

Quote from [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role):

<i><q>The alertdialog role is to be used on modal alert dialogs that interrupt a user's workflow
to communicate an important message and require a response.</q></i>

To make a Dialog an alertdialog, add `role="alertdialog"`, and make sure to use an accessible name and description
for example by adding attributes `aria-labelledby` and `aria-describedby`.

**Note**: The option `backdropClick` will automatically be set to `false` for alertdialogs and can not be overridden.
Keypress `Escape` will not close the dialog.

Available alertdialog variations: `env-dialog--'error', 'success', 'warning', 'info'`

```html
<button
   id="example-alertdialog-1-opener"
   type="button"
   class="env-button env-button--primary"
>
   Alert Dialog
</button>
<dialog
   role="alertdialog"
   aria-labelledby="example-alertdialog-1-header"
   aria-describedby="example-alertdialog-1-desc"
   id="example-alertdialog-1"
   class="env-dialog"
>
   <div class="env-dialog__icon">
      <svg class="env-icon env-icon--large">
         <use href="/sitevision/envision-icons.svg#icon-check-line"></use>
      </svg>
   </div>
   <h2 class="env-dialog__title" id="example-alertdialog-1-header">
      Alert Dialog
   </h2>
   <div class="env-dialog__main" id="example-alertdialog-1-desc">
      <p class="env-text">
         Caticus cuteicus wake up wander around the house making large amounts
         of noise jump on top of your human's bed and fall asleep.
      </p>
   </div>
   <div class="env-dialog__controls">
      <form method="dialog">
         <button
            type="submit"
            value="ok"
            class="env-button env-button--primary"
         >
            OK
         </button>
         <button
            type="submit"
            value="cancel"
            class="env-button env-button--link"
         >
            Cancel
         </button>
      </form>
   </div>
</dialog>

<button
   id="example-alertdialog-2-opener"
   type="button"
   class="env-button env-button--success"
>
   Success Alert Dialog
</button>
<dialog
   role="alertdialog"
   aria-labelledby="example-alertdialog-2-header"
   aria-describedby="example-alertdialog-2-desc"
   id="example-alertdialog-2"
   class="env-dialog env-dialog--success"
>
   <div class="env-dialog__icon">
      <svg class="env-icon env-icon--large">
         <use href="/sitevision/envision-icons.svg#icon-thumb-up"></use>
      </svg>
   </div>
   <h2 class="env-dialog__title" id="example-alertdialog-2-header">
      Success Dialog Title
   </h2>
   <div class="env-dialog__main" id="example-alertdialog-2-desc">
      <p class="env-text">
         Caticus cuteicus wake up wander around the house making large amounts
         of noise jump on top of your human's bed and fall asleep.
      </p>
   </div>
   <div class="env-dialog__controls env-dialog__controls--end">
      <form method="dialog">
         <button
            type="submit"
            value="ok"
            class="env-button env-button--success"
         >
            OK
         </button>
      </form>
   </div>
</dialog>
<button
   id="example-alertdialog-3-opener"
   type="button"
   class="env-button env-button--danger"
>
   Error Alert Dialog
</button>
<dialog
   role="alertdialog"
   aria-labelledby="example-alertdialog-3-header"
   aria-describedby="example-alertdialog-3-desc"
   id="example-alertdialog-3"
   class="env-dialog env-dialog--error"
>
   <div class="env-dialog__icon">
      <svg class="env-icon env-icon--large">
         <use href="/sitevision/envision-icons.svg#icon-delete"></use>
      </svg>
   </div>
   <h3 class="env-dialog__title" id="example-alertdialog-3-header">
      Error Dialog Title
   </h3>
   <div class="env-dialog__main" id="example-alertdialog-3-desc">
      <p class="env-text">
         Caticus cuteicus wake up wander around the house making large amounts
         of noise jump on top of your human's bed and fall asleep.
      </p>
   </div>
   <div class="env-dialog__controls">
      <form method="dialog">
         <button
            type="submit"
            value="ok"
            class="env-button env-button--block env-button--danger"
         >
            OK
         </button>
      </form>
   </div>
</dialog>
```

## Options

```javascript
// Default options
{
   opener: null,
   backdropClick: true,
   placement: null,
}
```

-  `opener` _'string'_ | _Node_

   -  A selector as a string or a DOM Node to assign event listener for opening the dialog.
   -  Default value: `null`

-  `backdropClick` _boolean_

   -  Click on backdrop (outside dialog) should close the dialog (not available for alertdialog).
   -  Default value: `true`

-  `placement` _'string'_ <span class="doc-badge doc-badge--info">since Sitevision 2024.09.2</span>

   -  Dialog window should be moved in the DOM and open as an immediate child of `<body>`.
   -  Allowed values: `'body'`
   -  Default value: `null`

## API

Instances of Dialog may be controlled by the methods described below.

```javascript
envision.dialog('#dialog', { opener: '#opener' }).then(function (dialogs) {
   console.log(dialogs[0].el.open);
   // dialogs[0].show(); // Uncomment to show dialog on load
});
```

```javascript
envision.dialog('#dialog').then(function (dialogs) {
   // Custom opener event
   document.querySelector('#opener').addEventListener('click', () => {
      // ... before show ...
      dialogs[0].show();
   });
});
```

### Options

-  `el`

   -  Access to the [HTMLDialogElement interface](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement), e.g. `open` and `returnValue`.

-  `show()`

   -  Show the dialog. Uses [HTMLDialogElement showModal()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) to always display the dialog in the [top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer).

-  `close()`

   -  Close the dialog.

## Events

Use [native HTMLDialogElement events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement#events).

### Example

```javascript
envision
   .dialog(document.querySelector('#dialog'), {
      opener: '#opener',
   })
   .then((dialogs) => {
      dialogs[0].el.addEventListener('close', () => {
         // ... do something when dialog is closed
         console.log(dialogs[0].el.returnValue);
      });
   });
```

## Legacy documentation

Dialog is a replacement for [Modal Dialog](/deprecated/modal-dialog/), deprecated since 2023.07.1.
