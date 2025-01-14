---
title: Cards
description: Cards are simple containers for displaying information about pages, groups, or users.
---

Use Cards to display information about, for example, a page, a group or a user.

A Card is a simple container that may have a header and a footer.
A Card has no colors or shadows of its own. To add colors and shadows
you may instead combine the `env-block` and `env-shadow` classes.

If used inside a [Cardholder](/layout/cardholder/) the Card will stretch
its width and height to make a nice aligned grid of cards.

```html
<div class="example-demo-dark">
   <div
      class="example-card env-card env-ui-section env-border env-shadow-small"
   >
      <div class="env-card__header">
         <h2 class="env-ui-text-subheading">Lorem Ipsumsson</h2>
      </div>
      <div class="env-card__body">
         <p class="env-ui-text-caption">Web Developer</p>
         <p class="env-ui-text-caption">
            <a href="#" class="env-link env-link-secondary">lorem@domain.com</a>
         </p>
         <p class="env-ui-text-caption">
            <a href="#" class="env-link env-link-secondary">012-345 67 89</a>
         </p>
      </div>
      <div class="env-card__footer">
         <p class="env-ui-text-caption">
            <a href="#" class="env-link">Contact</a>
         </p>
      </div>
   </div>

   <div
      class="example-card env-card env-block-primary env-block-primary--border env-shadow-small"
   >
      <div class="env-card__body">
         <img
            class="env-card__image env-profile-image env-profile-image--small"
            src="https://envisionui.io/placeholders/profile/200x200/01.webp"
            alt="Example profile image"
         />
         <h2 class="env-ui-text-subheading">Lorem Ipsumsson</h2>
         <p class="env-ui-text-caption">Job Title</p>
         <p class="env-ui-text-caption">
            <a href="#" class="env-link env-link-secondary">lorem@domain.com</a>
         </p>
         <p class="env-ui-text-caption">
            <a href="#" class="env-link env-link-secondary">012-345 67 89</a>
         </p>
      </div>
   </div>

   <div
      class="example-card env-card  env-block-secondary env-block-secondary--border env-shadow-small"
   >
      <div class="env-card__header">
         <div class="env-media env-media--center">
            <div class="env-media__figure">
               <a href="#">
                  <img
                     class="env-profile-image env-profile-image--small"
                     src="https://envisionui.io/placeholders/profile/200x200/02.webp"
                     alt="Example profile image"
                  />
               </a>
            </div>
            <div class="env-media__body env-text--small">
               <p class="env-ui-text-caption">Open group &bull; 29 members</p>
               <p class="env-ui-text-caption">Latest activity 3 hours ago</p>
            </div>
         </div>

         <h2 class="env-ui-text-subheading">Lorem ipsum dolor</h2>
      </div>
      <div class="env-card__body">
         <p class="env-ui-text-caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget lobortis dui, in accumsan augue.
         </p>
      </div>
      <div class="env-card__footer env-text--small">
         <a href="#" type="button" class="env-button env-button--link">
            <svg class="env-icon env-icon--small env-m-right--xx-small">
               <use href="/sitevision/envision-icons.svg#icon-phone"></use>
            </svg>
            Administrator
         </a>
      </div>
   </div>
</div>
```

## Card anatomy

A Card may have a header, a body and a footer: `.env-card__header`, `.env-card__body`, `.env-card__footer`.

No matter HTML source order, header will always display first and footer last. The footer
will always stick to the bottom of the Card. Inside a Cardholder, if the Card needs to stretch
vertically, the body of the Card will be the element that stretches.

```html
<div class="example-demo-dark">
   <div class="example-card-parts env-card env-block env-shadow-small">
      <div class="env-card__header">Header</div>
      <div class="env-card__body">Body</div>
      <div class="env-card__footer">Footer</div>
   </div>
</div>
```
