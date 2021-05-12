---
title: Cards
---

## Cards & Cardholders

Use Cards for displaying information about for example a page, a group or a user.

A Card is a simple container that may have a header and a footer. A Card does not have
it's own colors, so combine with `env-block` classes to set colors.

If used inside a Cardholder (see further down this page) the Card will stretch
its width and height to make a nice aligned grid of cards.

<div class="demo-responsive-cards">
   <div class="env-cardholder">
      <div class="env-card"></div>
   </div>
</div>

### Cards

Usage examples

```html
<div class="doc-demo-dark">
   <article class="example-card env-card env-block">
      <header class="env-card__header">
         <h2 class="env-card__text env-card__text--title">Lorem Ipsumsson</h2>
      </header>
      <div class="env-card__body">
         <p class="env-card__text env-card__text--secondary">Utvecklare</p>
         <p class="env-card__text env-card__text--secondary">
            <a href="#" class="env-link env-link-secondary">lorem@domain.com</a>
         </p>
         <p class="env-card__text env-card__text--secondary">
            <a href="#" class="env-link env-link-secondary">012-345 67 89</a>
         </p>
      </div>
      <footer class="env-card__footer">
         <a href="#" class="env-link">Kontakt</a>
      </footer>
   </article>

   <article
      class="example-card env-card env-block-primary env-block-primary--border"
   >
      <div class="env-card__body">
         <img
            class="env-card__image env-profile-image env-profile-image--small"
            src="https://unsplash.it/64/64/"
            alt="Example profile image"
         />
         <h2 class="env-card__text env-card__text--title">Lorem Ipsumsson</h2>
         <p class="env-card__text env-card__text--secondary">Utvecklare</p>
         <p class="env-card__text env-card__text--secondary">
            <a href="#" class="env-link env-link-secondary">lorem@domain.com</a>
         </p>
         <p class="env-card__text env-card__text--secondary">
            <a href="#" class="env-link env-link-secondary">012-345 67 89</a>
         </p>
      </div>
   </article>

   <article
      class="example-card env-card  env-block-secondary env-block-secondary--border"
   >
      <header class="env-card__header">
         <article class="env-media env-media--center">
            <div class="env-media__figure">
               <a href="#" aria-label="Example image">
                  <img
                     class="env-profile-image env-profile-image--small"
                     src="https://unsplash.it/64/64/"
                     alt="Example profile image"
                  />
               </a>
            </div>
            <div class="env-media__body env-text--small">
               <p class="env-card__text">Öppen grupp &bull; 29 medlemmar</p>
               <p class="env-card__text">Senaste aktivitet för 3 tim sedan</p>
            </div>
         </article>

         <h2 class="env-card__text env-card__text--title">
            Snygga bilar från Sveg
         </h2>
      </header>
      <div class="env-card__body">
         <p class="env-card__text env-card__text--secondary">
            We use Cookies to give you the best possible service. By continuing
            to browse our site you are agreeing to our use of Cookies.
         </p>
      </div>
      <footer class="env-card__footer env-text--small">
         <a type="button" class="env-button env-button--link">
            <svg class="env-icon env-icon--small env-m-right--xx-small">
               <use
                  xlink:href="/sitevision/envision-icons.svg#icon-phone"
               ></use>
            </svg>
            Administratör
         </a>
      </footer>
   </article>
</div>
```

### Card anatomy

A card may have a header, a body and a footer: `.env-card__header`, `.env-card__body`, `.env-card__footer`.

No matter source order, header will always display first and footer last. The footer
will always stick to the bottom of the card. Inside a Cardholder, if the card needs to stretch
vertically, the body will be the element that stretches.

```html
<div class="doc-demo-dark">
   <article class="example-card env-card env-block">
      <header class="env-card__header">Header</header>
      <div class="env-card__body">Body</div>
      <footer class="env-card__footer">Footer</footer>
   </article>
</div>
```

### Cardholder

A Cardholder will make a nice grid of Cards that adapt to the given space.
See configuration options below.

```html
<div class="doc-demo-dark">
   <div class="env-cardholder env-cardholder--3">
      <div class="env-cardholder__slot">
         <article class="env-card env-block">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://unsplash.it/64/64/"
                  alt="Example profile image"
               />
               <h2 class="env-card__text env-card__text--title">
                  Lorem Ipsumsson
               </h2>
               <p class="env-card__text">Utvecklare</p>
               <p class="env-card__text env-card__text--secondary">
                  Utvecklare
               </p>
               <p class="env-card__text env-card__text--secondary">
                  <a href="#" class="env-link env-link-secondary"
                     >lorem@domain.com</a
                  >
               </p>
               <p class="env-card__text env-card__text--secondary">
                  <a href="#" class="env-link env-link-secondary"
                     >012-345 67 89</a
                  >
               </p>
            </div>
         </article>
      </div>
      <div class="env-cardholder__slot">
         <article class="env-card env-block">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://unsplash.it/64/64/"
                  alt="Example profile image"
               />
               <h2 class="env-card__text env-card__text--title">
                  Lorem Ipsumsson
               </h2>
               <p class="env-card__text env-card__text--secondary">
                  <a href="#" class="env-link env-link-secondary"
                     >012-345 67 89</a
                  >
               </p>
            </div>
         </article>
      </div>
      <div class="env-cardholder__slot">
         <article class="env-card env-block">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://unsplash.it/64/64/"
                  alt="Example profile image"
               />
               <h2 class="env-card__text env-card__text--title">
                  Lorem Ipsumsson
               </h2>
               <p class="env-card__text env-card__text--secondary">
                  Utvecklare
               </p>
               <p class="env-card__text env-card__text--secondary">
                  <a href="#" class="env-link env-link-secondary"
                     >012-345 67 89</a
                  >
               </p>
            </div>
         </article>
      </div>
      <div class="env-cardholder__slot">
         <article class="env-card env-block">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://unsplash.it/64/64/"
                  alt="Example profile image"
               />
               <h2 class="env-card__text env-card__text--title">
                  Lorem Ipsumsson
               </h2>
               <p class="env-card__text env-card__text--secondary">
                  Utvecklare
               </p>
            </div>
         </article>
      </div>
      <div class="env-cardholder__slot">
         <article class="env-card env-block">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://unsplash.it/64/64/"
                  alt="Example profile image"
               />
               <h2 class="env-card__text env-card__text--title">
                  Lorem Ipsumsson
               </h2>
               <p class="env-card__text env-card__text--secondary">
                  Utvecklare
               </p>
               <p class="env-card__text env-card__text--secondary">
                  <a href="#" class="env-link env-link-secondary"
                     >lorem@domain.com</a
                  >
               </p>
            </div>
         </article>
      </div>
      <div class="env-cardholder__slot">
         <article class="env-card env-block">
            <div class="env-card__body">
               <img
                  class="env-card__image env-profile-image env-profile-image--small"
                  src="https://unsplash.it/64/64/"
                  alt="Example profile image"
               />
               <h2 class="env-card__text env-card__text--title">
                  Lorem Ipsumsson
               </h2>
               <p class="env-card__text env-card__text--secondary">
                  Utvecklare
               </p>
               <p class="env-card__text env-card__text--secondary">
                  <a href="#" class="env-link env-link-secondary"
                     >lorem@domain.com</a
                  >
               </p>
               <p class="env-card__text env-card__text--secondary">
                  <a href="#" class="env-link env-link-secondary"
                     >012-345 67 89</a
                  >
               </p>
            </div>
         </article>
      </div>
   </div>
</div>
```
