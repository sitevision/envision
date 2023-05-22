---
title: Modal dialog
---

### Default modal dialog

```html
<div
   class="env-modal-dialog example-demo__modal"
   role="dialog"
   aria-modal="true"
   aria-labelledby="modalDialogHeader-1"
   aria-hidden="true"
>
   <div class="env-modal-dialog__dialog">
      <section class="env-modal-dialog__content">
         <header class="env-modal-dialog__header">
            <h4
               class="env-text-h5 env-modal-dialog__header__title"
               id="modalDialogHeader-1"
            >
               Modal Header
            </h4>
         </header>
         <div class="env-modal-dialog__body">
            <p class="env-text">
               Caticus cuteicus wake up wander around the house making large
               amounts of noise jump on top of your human's bed and fall asleep.
            </p>
         </div>
         <footer class="env-modal-dialog__footer">
            <button type="button" class="env-button env-button--primary">
               Save
            </button>
            <button
               type="button"
               data-modal-dialog-dismiss
               class="env-button env-button--link"
            >
               Cancel
            </button>
         </footer>
      </section>
   </div>
</div>
```

### Optional sizes

Uses `env-modal-dialog__dialog--large` and footer `env-modal-dialog__footer--right` aligning footer descendents to the right.

```html
<button
   id="largeBtn"
   data-modal-dialog
   data-target="#example1"
   type="button"
   class="env-button env-button--primary env-button--large"
>
   Show large
</button>

<div
   id="example1"
   class="env-modal-dialog"
   role="dialog"
   aria-modal="true"
   aria-labelledby="modalDialogHeader-2"
   aria-hidden="true"
   tabindex="-1"
>
   <div class="env-modal-dialog__dialog env-modal-dialog__dialog--large">
      <section class="env-modal-dialog__content">
         <header class="env-modal-dialog__header">
            <h5
               class="env-text-h5 env-modal-dialog__header__title"
               id="modalDialogHeader-2"
            >
               Modal Header
            </h5>
         </header>
         <div class="env-modal-dialog__body">
            <p class="env-text">
               Caticus cuteicus wake up wander around the house making large
               amounts of noise jump on top of your human's bed and fall asleep.
            </p>
         </div>
         <footer
            class="env-modal-dialog__footer env-modal-dialog__footer--right"
         >
            <button type="button" class="env-button env-button--primary">
               Save
            </button>
            <button
               type="button"
               data-modal-dialog-dismiss
               class="env-button env-button--link"
            >
               Cancel
            </button>
         </footer>
      </section>
   </div>
</div>
```

Uses `env-modal-dialog__dialog--small`

```html
<button
   id="smallBtn"
   data-modal-dialog
   data-target="#example2"
   type="button"
   class="env-button env-button--primary env-button--large"
>
   Show small
</button>

<div
   id="example2"
   class="env-modal-dialog"
   role="dialog"
   aria-modal="true"
   aria-labelledby="modalDialogHeader-3"
   aria-hidden="true"
   tabindex="-1"
>
   <div class="env-modal-dialog__dialog env-modal-dialog__dialog--small">
      <section class="env-modal-dialog__content">
         <header class="env-modal-dialog__header">
            <h6
               class="env-text-h5 env-modal-dialog__header__title"
               id="modalDialogHeader-3"
            >
               Modal Header
            </h6>
         </header>
         <div class="env-modal-dialog__body">
            <p class="env-text">
               Caticus cuteicus wake up wander around the house making large
               amounts of noise jump on top of your human's bed and fall asleep.
            </p>
         </div>
         <footer class="env-modal-dialog__footer">
            <button type="button" class="env-button env-button--primary">
               Save
            </button>
            <button
               type="button"
               data-modal-dialog-dismiss
               class="env-button env-button--link"
            >
               Cancel
            </button>
         </footer>
      </section>
   </div>
</div>
```

### Optional outer/inner scrolling

Outer scroll is default. Use `env-modal-dialog--inner-scroll` to set scrolling to inside the modal (`env-modal-dialog__body`).

```html
<button
   id="outerBtn"
   data-modal-dialog
   data-target="#example3"
   type="button"
   class="env-button env-button--primary"
>
   Scroll outer scroll
</button>

<button
   id="innerBtn"
   data-modal-dialog
   data-target="#example4"
   type="button"
   class="env-button env-button--primary"
>
   Show inner scroll
</button>

<div
   id="example3"
   class="env-modal-dialog"
   role="dialog"
   aria-modal="true"
   aria-labelledby="modalDialogHeader-4"
   aria-hidden="true"
   tabindex="-1"
>
   <div class="env-modal-dialog__dialog">
      <section class="env-modal-dialog__content">
         <header class="env-modal-dialog__header">
            <h5
               class="env-text-h5 env-modal-dialog__header__title"
               id="modalDialogHeader-4"
            >
               Outer scroll
            </h5>
         </header>
         <div class="env-modal-dialog__body">
            <p class="env-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
               sapien turpis, aliquam nec porta ultrices, auctor ut mauris. Ut
               volutpat ornare consectetur. Phasellus nec nisi non tellus
               gravida porttitor a in arcu. Aliquam erat volutpat. Phasellus
               laoreet urna sem. In dui arcu, facilisis sed mollis at, bibendum
               vel purus. In sagittis lobortis tellus, sit amet egestas est
               dignissim vel. Vivamus a consequat nunc. Vestibulum eleifend
               malesuada quam id lacinia. Duis porta mauris et justo vehicula,
               sit amet malesuada tellus sollicitudin. Etiam convallis, ipsum
               non ultrices auctor, elit orci blandit est, vel finibus arcu
               massa eu lorem. Fusce sit amet est non tellus vulputate semper in
               eget est. In tincidunt ligula nec mauris tristique sagittis.
               Pellentesque interdum eleifend eros a viverra. Ut volutpat ut
               nisi nec gravida. Duis non sollicitudin ligula, ac vehicula
               turpis.
            </p>
            <p class="env-text">
               Duis eget lacus nec neque semper commodo. Nullam nisi nibh,
               vehicula eget condimentum sed, dictum vulputate erat. Quisque ut
               gravida magna. Cras eleifend maximus odio, quis tincidunt enim
               consectetur eu. Sed nec arcu auctor, porttitor eros malesuada,
               feugiat justo. Nulla ante augue, ultricies eu blandit et,
               vulputate sed nibh. Suspendisse in dapibus sapien. Fusce
               pulvinar, ligula vitae dapibus convallis, urna lectus viverra
               diam, a lobortis magna diam id libero. Duis et venenatis dolor,
               ac semper eros. Nunc tincidunt tempor enim.
            </p>
            <p class="env-text">
               Vivamus eget sagittis velit. Quisque magna libero, egestas a
               rutrum ac, imperdiet ac augue. Fusce nibh magna, sollicitudin sit
               amet massa in, iaculis tempus quam. Ut sodales commodo ante, in
               rutrum nunc semper quis. Vestibulum sed sollicitudin est. Etiam
               posuere id velit sit amet dictum. Nam semper placerat ultrices.
               Suspendisse in massa porttitor, faucibus neque sed, convallis
               velit. Nulla luctus ipsum a feugiat porta.
            </p>
            <p class="env-text">
               Duis ultricies gravida nunc, vitae fringilla sapien convallis ac.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
               fermentum pellentesque euismod. Cras dictum feugiat nisi,
               tincidunt imperdiet nunc pharetra vitae. Nunc ut neque in metus
               tristique bibendum. Vivamus nec lorem odio. Vestibulum
               pellentesque cursus diam in tempor.
            </p>
            <p class="env-text">
               Praesent id diam elementum, consequat nisl vitae, congue turpis.
               Sed sit amet cursus quam, vitae sagittis lorem. Morbi erat
               lectus, tempus eget interdum ac, blandit sit amet ante. Praesent
               scelerisque bibendum quam ut ornare. Duis ipsum ex, tincidunt vel
               volutpat eget, bibendum eget odio. Duis vitae tristique eros.
               Praesent at dui et velit porttitor malesuada sit amet a elit.
            </p>
            <p class="env-text">
               Donec at augue quis dolor porta rutrum. Nullam fringilla lobortis
               sapien ac cursus. Ut id egestas odio, mattis ornare dui. Etiam
               interdum venenatis quam id lobortis. Nunc id enim luctus, porta
               leo vitae, tristique lectus. In vel tortor nec lacus facilisis
               euismod vitae porttitor ligula. Vivamus ut mauris id urna dictum
               vestibulum.
            </p>
            <p class="env-text">
               Mauris interdum fermentum turpis, at ullamcorper sapien accumsan
               sit amet. Phasellus vitae augue volutpat, convallis elit sed,
               eleifend nisl. Sed at lorem dui. Nunc scelerisque nisi sapien,
               non sollicitudin tellus luctus vitae. Vivamus molestie turpis eu
               enim blandit, rutrum egestas nisl hendrerit. Mauris pharetra
               commodo malesuada. Proin at nisl nec turpis lacinia hendrerit non
               non orci. Cras tempor quam a mauris placerat lacinia. Donec eget
               sem ac tellus porttitor hendrerit. Duis congue risus non eros
               pharetra, ut facilisis risus ullamcorper. Vivamus fringilla
               suscipit lorem eu fermentum. Orci varius natoque penatibus et
               magnis dis parturient montes, nascetur ridiculus mus. Mauris
               tristique, leo et laoreet imperdiet, leo ligula egestas nibh, at
               accumsan lorem nibh ut nulla. Vivamus vitae ornare est.
               Suspendisse convallis tortor et nulla porttitor dictum.
            </p>
         </div>
         <footer
            class="env-modal-dialog__footer env-modal-dialog__footer--right"
         >
            <button type="button" class="env-button env-button--primary">
               Save
            </button>
            <button
               type="button"
               data-modal-dialog-dismiss
               class="env-button env-button--link"
            >
               Cancel
            </button>
         </footer>
      </section>
   </div>
</div>
<div
   id="example4"
   class="env-modal-dialog env-modal-dialog--inner-scroll"
   role="dialog"
   aria-modal="true"
   aria-labelledby="modalDialogHeader-5"
   aria-hidden="true"
   tabindex="-1"
>
   <div class="env-modal-dialog__dialog">
      <section class="env-modal-dialog__content">
         <header class="env-modal-dialog__header">
            <h5
               class="env-text env-modal-dialog__header__title"
               id="modalDialogHeader-5"
            >
               Inner scroll
            </h5>
         </header>
         <div class="env-modal-dialog__body">
            <p class="env-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
               sapien turpis, aliquam nec porta ultrices, auctor ut mauris. Ut
               volutpat ornare consectetur. Phasellus nec nisi non tellus
               gravida porttitor a in arcu. Aliquam erat volutpat. Phasellus
               laoreet urna sem. In dui arcu, facilisis sed mollis at, bibendum
               vel purus. In sagittis lobortis tellus, sit amet egestas est
               dignissim vel. Vivamus a consequat nunc. Vestibulum eleifend
               malesuada quam id lacinia. Duis porta mauris et justo vehicula,
               sit amet malesuada tellus sollicitudin. Etiam convallis, ipsum
               non ultrices auctor, elit orci blandit est, vel finibus arcu
               massa eu lorem. Fusce sit amet est non tellus vulputate semper in
               eget est. In tincidunt ligula nec mauris tristique sagittis.
               Pellentesque interdum eleifend eros a viverra. Ut volutpat ut
               nisi nec gravida. Duis non sollicitudin ligula, ac vehicula
               turpis.
            </p>
            <p class="env-text">
               Duis eget lacus nec neque semper commodo. Nullam nisi nibh,
               vehicula eget condimentum sed, dictum vulputate erat. Quisque ut
               gravida magna. Cras eleifend maximus odio, quis tincidunt enim
               consectetur eu. Sed nec arcu auctor, porttitor eros malesuada,
               feugiat justo. Nulla ante augue, ultricies eu blandit et,
               vulputate sed nibh. Suspendisse in dapibus sapien. Fusce
               pulvinar, ligula vitae dapibus convallis, urna lectus viverra
               diam, a lobortis magna diam id libero. Duis et venenatis dolor,
               ac semper eros. Nunc tincidunt tempor enim.
            </p>
            <p class="env-text">
               Vivamus eget sagittis velit. Quisque magna libero, egestas a
               rutrum ac, imperdiet ac augue. Fusce nibh magna, sollicitudin sit
               amet massa in, iaculis tempus quam. Ut sodales commodo ante, in
               rutrum nunc semper quis. Vestibulum sed sollicitudin est. Etiam
               posuere id velit sit amet dictum. Nam semper placerat ultrices.
               Suspendisse in massa porttitor, faucibus neque sed, convallis
               velit. Nulla luctus ipsum a feugiat porta.
            </p>
            <p class="env-text">
               Duis ultricies gravida nunc, vitae fringilla sapien convallis ac.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
               fermentum pellentesque euismod. Cras dictum feugiat nisi,
               tincidunt imperdiet nunc pharetra vitae. Nunc ut neque in metus
               tristique bibendum. Vivamus nec lorem odio. Vestibulum
               pellentesque cursus diam in tempor.
            </p>
            <p class="env-text">
               Praesent id diam elementum, consequat nisl vitae, congue turpis.
               Sed sit amet cursus quam, vitae sagittis lorem. Morbi erat
               lectus, tempus eget interdum ac, blandit sit amet ante. Praesent
               scelerisque bibendum quam ut ornare. Duis ipsum ex, tincidunt vel
               volutpat eget, bibendum eget odio. Duis vitae tristique eros.
               Praesent at dui et velit porttitor malesuada sit amet a elit.
            </p>
            <p class="env-text">
               Donec at augue quis dolor porta rutrum. Nullam fringilla lobortis
               sapien ac cursus. Ut id egestas odio, mattis ornare dui. Etiam
               interdum venenatis quam id lobortis. Nunc id enim luctus, porta
               leo vitae, tristique lectus. In vel tortor nec lacus facilisis
               euismod vitae porttitor ligula. Vivamus ut mauris id urna dictum
               vestibulum.
            </p>
            <p class="env-text">
               Mauris interdum fermentum turpis, at ullamcorper sapien accumsan
               sit amet. Phasellus vitae augue volutpat, convallis elit sed,
               eleifend nisl. Sed at lorem dui. Nunc scelerisque nisi sapien,
               non sollicitudin tellus luctus vitae. Vivamus molestie turpis eu
               enim blandit, rutrum egestas nisl hendrerit. Mauris pharetra
               commodo malesuada. Proin at nisl nec turpis lacinia hendrerit non
               non orci. Cras tempor quam a mauris placerat lacinia. Donec eget
               sem ac tellus porttitor hendrerit. Duis congue risus non eros
               pharetra, ut facilisis risus ullamcorper. Vivamus fringilla
               suscipit lorem eu fermentum. Orci varius natoque penatibus et
               magnis dis parturient montes, nascetur ridiculus mus. Mauris
               tristique, leo et laoreet imperdiet, leo ligula egestas nibh, at
               accumsan lorem nibh ut nulla. Vivamus vitae ornare est.
               Suspendisse convallis tortor et nulla porttitor dictum.
            </p>
         </div>
         <footer
            class="env-modal-dialog__footer env-modal-dialog__footer--right"
         >
            <button type="button" class="env-button env-button--primary">
               Save
            </button>
            <button
               type="button"
               data-modal-dialog-dismiss
               class="env-button env-button--link"
            >
               Cancel
            </button>
         </footer>
      </section>
   </div>
</div>
```

### Optional placement

Use `data-modal-dialog-placement-body` attribute on container element
to open dialog window as an immediate child of `<body>`.

```html
<button
   id="largeBtn"
   data-modal-dialog
   data-target="#example5"
   type="button"
   class="env-button env-button--primary env-button--large"
>
   Show in body
</button>

<div
   id="example5"
   class="env-modal-dialog"
   role="dialog"
   aria-modal="true"
   aria-labelledby="modalDialogHeader-6"
   aria-hidden="true"
   tabindex="-1"
   data-modal-dialog-placement-body
>
   <div
      class="env-modal-dialog__dialog env-modal-dialog__dialog--large"
      id="modalDialogHeader-6"
   >
      <section class="env-modal-dialog__content">
         <header class="env-modal-dialog__header">
            <h5 class="env-text env-modal-dialog__header__title">
               Modal Header
            </h5>
         </header>
         <div class="env-modal-dialog__body">
            <p class="env-text">
               Caticus cuteicus wake up wander around the house making large
               amounts of noise jump on top of your human's bed and fall asleep.
            </p>
         </div>
         <footer
            class="env-modal-dialog__footer env-modal-dialog__footer--right"
         >
            <button type="button" class="env-button env-button--primary">
               Save
            </button>
            <button
               type="button"
               data-modal-dialog-dismiss
               class="env-button env-button--link"
            >
               Cancel
            </button>
         </footer>
      </section>
   </div>
</div>
```

## Modal Alerts

Avaliable alert variations: `env-modal-alert--'secondary', 'success', 'warning', 'danger', 'info'`

```html
<button
   id="primaryAlertBtn"
   data-modal-alert
   data-target="#example6"
   type="button"
   class="env-button env-button--primary"
>
   Primary Alert Modal
</button>

<button
   id="successAlertBtn"
   data-modal-alert
   data-target="#example7"
   type="button"
   class="env-button env-button--success"
>
   Success Alert Modal
</button>

<button
   id="dangerAlertBtn"
   data-modal-alert
   data-target="#example8"
   type="button"
   class="env-button env-button--danger"
>
   Danger Alert Modal
</button>

<button
   id="infoAlertBtn"
   data-modal-alert
   data-target="#example9"
   type="button"
   class="env-button env-button--info"
>
   Info Alert Modal
</button>

<div
   id="example6"
   class="env-modal-alert"
   role="dialog"
   aria-modal="true"
   aria-labelledby="modalDialogHeader-7"
   aria-hidden="true"
   tabindex="-1"
>
   <div class="env-modal-alert__dialog">
      <article class="env-modal-alert__content">
         <header class="env-modal-alert__header">
            <div class="env-modal-alert__icon">
               <svg class="env-icon env-icon--large">
                  <use
                     xlink:href="/sitevision/envision-icons.svg#icon-check-line"
                  ></use>
               </svg>
            </div>
            <h5
               class="env-text env-modal-alert__header__title"
               id="modalDialogHeader-7"
            >
               Modal Header
            </h5>
         </header>
         <div class="env-modal-alert__body">
            <p class="env-text">
               Caticus cuteicus wake up wander around the house making large
               amounts of noise jump on top of your human's bed and fall asleep.
            </p>
         </div>
         <footer class="env-modal-alert__footer">
            <button type="button" class="env-button env-button--primary">
               Save
            </button>
            <button
               type="button"
               data-modal-dialog-dismiss
               class="env-button env-button--link"
            >
               Cancel
            </button>
         </footer>
      </article>
   </div>
</div>

<div
   id="example7"
   class="env-modal-alert env-modal-alert--success"
   role="dialog"
   aria-modal="true"
   aria-labelledby="modalDialogHeader-8"
   aria-hidden="true"
   tabindex="-1"
>
   <div class="env-modal-alert__dialog">
      <article class="env-modal-alert__content">
         <header class="env-modal-alert__header">
            <div class="env-modal-alert__icon">
               <svg class="env-icon env-icon--large">
                  <use
                     xlink:href="/sitevision/envision-icons.svg#icon-thumb-up"
                  ></use>
               </svg>
            </div>
            <h5
               class="env-text env-modal-alert__header__title"
               id="modalDialogHeader-8"
            >
               Modal Header
            </h5>
         </header>
         <div class="env-modal-alert__body">
            <p class="env-text">
               Caticus cuteicus wake up wander around the house making large
               amounts of noise jump on top of your human's bed and fall asleep.
            </p>
         </div>
         <footer class="env-modal-alert__footer env-modal-alert__footer--right">
            <button type="button" class="env-button env-button--success">
               Save
            </button>
            <button
               type="button"
               data-modal-dialog-dismiss
               class="env-button env-button--link"
            >
               Cancel
            </button>
         </footer>
      </article>
   </div>
</div>

<div
   id="example8"
   class="env-modal-alert env-modal-alert--danger"
   role="dialog"
   aria-modal="true"
   aria-labelledby="modalDialogHeader-9"
   aria-hidden="true"
   tabindex="-1"
>
   <div class="env-modal-alert__dialog">
      <article class="env-modal-alert__content">
         <header class="env-modal-alert__header">
            <div class="env-modal-alert__icon">
               <svg class="env-icon env-icon--large">
                  <use
                     xlink:href="/sitevision/envision-icons.svg#icon-delete"
                  ></use>
               </svg>
            </div>
            <h5
               class="env-text env-modal-alert__header__title"
               id="modalDialogHeader-9"
            >
               Modal Header
            </h5>
         </header>
         <div class="env-modal-alert__body">
            <p class="env-text">
               Caticus cuteicus wake up wander around the house making large
               amounts of noise jump top bed and fall asleep.
            </p>
         </div>
         <footer class="env-modal-alert__footer">
            <button
               type="button"
               data-modal-dialog-dismiss
               class="env-button env-button--danger env-button--block"
            >
               Cancel
            </button>
         </footer>
      </article>
   </div>
</div>

<div
   id="example9"
   class="env-modal-alert env-modal-alert--info"
   role="dialog"
   aria-modal="true"
   aria-labelledby="modalDialogHeader-10"
   aria-hidden="true"
   tabindex="-1"
>
   <div class="env-modal-alert__dialog">
      <article class="env-modal-alert__content">
         <header class="env-modal-alert__header">
            <div class="env-modal-alert__icon">
               <svg class="env-icon env-icon--large">
                  <use
                     xlink:href="/sitevision/envision-icons.svg#icon-user-group"
                  ></use>
               </svg>
            </div>
            <h5
               class="env-text env-modal-alert__header__title"
               id="modalDialogHeader-10"
            >
               Modal Header
            </h5>
         </header>
         <div class="env-modal-alert__body">
            <p class="env-text">
               Caticus cuteicus wake up wander around the house making large
               amounts of noise jump top bed and fall asleep.
            </p>
         </div>
         <footer class="env-modal-alert__footer">
            <button type="button" class="env-button env-button--info">
               OK
            </button>
            <button type="button" data-modal-dialog-dismiss class="env-button">
               Cancel
            </button>
         </footer>
      </article>
   </div>
</div>
```

## Methods

Show

```javascript
envision.dialog('#myModal').then(function (dialogs) {
   dialogs[0].show();
});
```

Hide

```javascript
envision.dialog('#myModal').then(function (dialogs) {
   dialogs[0].hide();
});
```

Toggle

```javascript
envision.dialog('#myModal').then(function (dialogs) {
   dialogs[0].toggle();
});
```

## Events

Events are only applicable to `modal dialogs` and not `modal alerts`.

`hide.env-modal-dialog`

```javascript
$('#myModal').on('hide.env-modal-dialog', function() { // Do something... });
```

`hidden.env-modal-dialog`

```javascript
$('#myModal').on('hidden.env-modal-dialog', function () {
   // Do something...
});
```

`show.env-modal-dialog`

```javascript
$('#myModal').on('show.env-modal-dialog', function () {
   // Do something...
});
```

`shown.env-modal-dialog`

```javascript
$('#myModal').on('shown.env-modal-dialog', function () {
   // Do something...
});
```
