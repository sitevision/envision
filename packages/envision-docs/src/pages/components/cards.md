---
title: Cards
---

<span class="env-badge env-badge--info">Added in 9.0.1</span>

## Cards & Cardholders

Use Cards to display information about, for example, a page, a group or a user.

A Card is a simple container that may have a header and a footer.
A Card has no colors or shadows of its own. To add colors and shadows
you may instead combine the `env-block` and `env-shadow` classes.

If used inside a Cardholder (see further down this page) the Card will stretch
its width and height to make a nice aligned grid of cards.

## Cards

```html
<div class="doc-demo-dark">
   <article class="example-card env-card env-block env-shadow-small">
      <header class="env-card__header">
         <h2 class="env-card__text env-card__text--title">Lorem Ipsumsson</h2>
      </header>
      <div class="env-card__body">
         <p class="env-card__text env-card__text--secondary">Web Developer</p>
         <p class="env-card__text env-card__text--secondary">
            <a href="#" class="env-link env-link-secondary">lorem@domain.com</a>
         </p>
         <p class="env-card__text env-card__text--secondary">
            <a href="#" class="env-link env-link-secondary">012-345 67 89</a>
         </p>
      </div>
      <footer class="env-card__footer">
         <a href="#" class="env-link">Contact</a>
      </footer>
   </article>

   <article
      class="example-card env-card env-block-primary env-block-primary--border env-shadow-small"
   >
      <div class="env-card__body">
         <img
            class="env-card__image env-profile-image env-profile-image--small"
            src="https://unsplash.it/64/64/"
            alt="Example profile image"
         />
         <h2 class="env-card__text env-card__text--title">Lorem Ipsumsson</h2>
         <p class="env-card__text env-card__text--secondary">Job Title</p>
         <p class="env-card__text env-card__text--secondary">
            <a href="#" class="env-link env-link-secondary">lorem@domain.com</a>
         </p>
         <p class="env-card__text env-card__text--secondary">
            <a href="#" class="env-link env-link-secondary">012-345 67 89</a>
         </p>
      </div>
   </article>

   <article
      class="example-card env-card  env-block-secondary env-block-secondary--border env-shadow-small"
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
               <p class="env-card__text">Open group &bull; 29 members</p>
               <p class="env-card__text">Latest activity 3 hours ago</p>
            </div>
         </article>

         <h2 class="env-card__text env-card__text--title">Lorem ipsum dolor</h2>
      </header>
      <div class="env-card__body">
         <p class="env-card__text env-card__text--secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget lobortis dui, in accumsan augue.
         </p>
      </div>
      <footer class="env-card__footer env-text--small">
         <a type="button" class="env-button env-button--link">
            <svg class="env-icon env-icon--small env-m-right--xx-small">
               <use
                  xlink:href="/sitevision/envision-icons.svg#icon-phone"
               ></use>
            </svg>
            Administrator
         </a>
      </footer>
   </article>
</div>
```

### Card anatomy

A Card may have a header, a body and a footer: `.env-card__header`, `.env-card__body`, `.env-card__footer`.

No matter HTML source order, header will always display first and footer last. The footer
will always stick to the bottom of the Card. Inside a Cardholder, if the Card needs to stretch
vertically, the body of the Card will be the element that stretches.

```html
<div class="doc-demo-dark">
   <article class="example-card-parts env-card env-block env-shadow-small">
      <header class="env-card__header">Header</header>
      <div class="env-card__body">Body</div>
      <footer class="env-card__footer">Footer</footer>
   </article>
</div>
```

## Cardholder

A Cardholder will make a nice grid of Cards that adapt to the given space.
Use one `env-cardholder__slot` to hold each Card. See configuration options below.

```html
<div class="doc-demo-dark">
   <div class="env-cardholder env-cardholder--3">
      <div class="env-cardholder__slot">
         <article class="env-card env-block env-shadow-small">
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
         <article class="env-card env-block env-shadow-small">
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
         <article class="env-card env-block env-shadow-small">
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
         <article class="env-card env-block env-shadow-small">
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
         <article class="env-card env-block env-shadow-small">
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
         <article class="env-card env-block env-shadow-small">
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

### Cardholder examples

There are several modifiers for the Cardholder that controls the Cardholder slots:

`.env-cardholder--N` - where N is a number that controls how many slots
the Cardholder can display at most in one row.
Possible values for N is `2`, `3`, `4`, `5`, `6`, `8`.

`.env-cardholder--max` - By default, slots have no max width. This modifier sets a max width.
Slots will be centered in the last row and may not align to the columns. On small screens, the slots
may not fill the entire screen width.

`.env-cardholder--start` - Must be combined with `.env-cardholder--max`. Will align slots to the left.

To control the size and spacing of the columns there are three CSS variables that may be set:

```CSS
.your-cardholder-container {
   /*
   min-width is used to control when column count breakpoints occur.
   max-width is only used when modifier env-cardholder--max is set.
   */
   --env-cardholder-column-min-width: 240px;
   --env-cardholder-column-max-width: 400px;
   --env-cardholder-column-spacing: var(--env-spacing-medium);
}
```

Below are a few examples that you may resize and see how the columns adapt to the given space.

<div class="demo-responsive-cards">
   <h4>Three columns</h4>
   <p><code class="language-text">.env-cardholder.env-cardholder--3</code></p>
   <div class="demo-responsive-cards__resizeable">   
   <div class="env-cardholder env-cardholder--3">
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
   </div>
   </div>
</div>

<div class="demo-responsive-cards">
   <h4>Five columns</h4>
   <p><code class="language-text">.env-cardholder.env-cardholder--5</code></p>
   <div class="demo-responsive-cards__resizeable">   
   <div class="env-cardholder env-cardholder--5">
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
   </div>
   </div>
</div>

<div class="demo-responsive-cards">
   <h4>Five columns, slot max width</h4>
   <p><code class="language-text">.env-cardholder.env-cardholder--5.env-cardholder--max</code></p>
   <div class="demo-responsive-cards__resizeable">   
   <div class="env-cardholder env-cardholder--5 env-cardholder--max">
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
   </div>
   </div>
</div>

<div class="demo-responsive-cards">
   <h4>Five columns, slot max width, aligned left</h4>
   <p><code class="language-text">.env-cardholder.env-cardholder--5.env-cardholder--max.env-cardholder--start</code></p>
   <div class="demo-responsive-cards__resizeable">   
   <div class="env-cardholder env-cardholder--5 env-cardholder--max env-cardholder--start">
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
      <div class="env-cardholder__slot"><div class="env-card"></div></div>
   </div>
   </div>
</div>
