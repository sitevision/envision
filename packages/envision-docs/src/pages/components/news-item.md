---
title: News item
description: The News Item component presents news content with images and text in a structured layout.
---

## Types

### Default news item

```html
<div class="env-news-item">
   <div class="env-news-item__media">
      <img
         class="env-image"
         src="https://envisionui.io/placeholders/900x400/01.webp"
         alt="Example image"
      />
   </div>
   <div class="env-news-item__headline">
      <div class="env-news-item__headline__title">
         <h2 class="env-text">
            <a href="#" class="env-link-secondary">Lorem ipsum</a>
         </h2>
         <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
      </div>
   </div>
   <div class="env-news-item__preamble">
      <p class="env-text">
         Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta
         corned beef. Drumstick pork shank, salami turkey t-bone jerky corned
         beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
         pork belly chicken hamburger, andouille pork loin capicola.
      </p>
   </div>
   <div class="env-news-item__footer">
      <ul class="env-list env-list--horizontal env-list-dividers--left">
         <li class="env-list__item">
            <a href="#" class="env-text">Like</a>
         </li>
         <li class="env-list__item">
            <a href="#" class="env-text">Reply</a>
         </li>
         <li class="env-list__item">
            <span class="env-text">12:56</span>
         </li>
      </ul>
   </div>
</div>
```

### Example: Vertical list

`.env-list`

```html
<ul class="env-list">
   <li class="env-list__item">
      <div class="env-news-item">
         <div class="env-news-item__media">
            <img
               class="env-image"
               src="https://envisionui.io/placeholders/900x400/02.webp"
               alt="Example image"
            />
         </div>
         <div class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#" class="env-link-secondary">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">
                  Eric Ericsson, aug 12 12:56
               </p>
            </div>
         </div>
         <div class="env-news-item__preamble">
            <p class="env-text">
               Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin
               pancetta corned beef. Drumstick pork shank, salami turkey t-bone
               jerky corned beef picanha jowl brisket frankfurter shankle.
               Meatball jowl sausage pork belly chicken hamburger, andouille
               pork loin capicola.
            </p>
         </div>
         <div class="env-news-item__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a href="#" class="env-text">Like</a>
               </li>
               <li class="env-list__item">
                  <a href="#" class="env-text">Reply</a>
               </li>
               <li class="env-list__item">
                  <span class="env-text">12:56</span>
               </li>
            </ul>
         </div>
      </div>
   </li>
   <li class="env-list__item">
      <div class="env-news-item">
         <div class="env-news-item__media">
            <img
               class="env-image"
               src="https://envisionui.io/placeholders/900x400/03.webp"
               alt="Example image"
            />
         </div>
         <div class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#" class="env-link-secondary">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">
                  Eric Ericsson, aug 12 12:56
               </p>
            </div>
         </div>
         <div class="env-news-item__preamble">
            <p class="env-text">
               Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin
               pancetta corned beef. Drumstick pork shank, salami turkey t-bone
               jerky corned beef picanha jowl brisket frankfurter shankle.
               Meatball jowl sausage pork belly chicken hamburger, andouille
               pork loin capicola.
            </p>
         </div>
         <div class="env-news-item__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a href="#" class="env-text">Like</a>
               </li>
               <li class="env-list__item">
                  <a href="#" class="env-text">Reply</a>
               </li>
               <li class="env-list__item">
                  <span class="env-text">12:56</span>
               </li>
            </ul>
         </div>
      </div>
   </li>
   <li class="env-list__item">
      <div class="env-news-item">
         <div class="env-news-item__media">
            <img
               class="env-image"
               src="https://envisionui.io/placeholders/900x400/04.webp"
               alt="Example image"
            />
         </div>
         <div class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#" class="env-link-secondary">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">
                  Eric Ericsson, aug 12 12:56
               </p>
            </div>
         </div>
         <div class="env-news-item__preamble">
            <p class="env-text">
               Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin
               pancetta corned beef. Drumstick pork shank, salami turkey t-bone
               jerky corned beef picanha jowl brisket frankfurter shankle.
               Meatball jowl sausage pork belly chicken hamburger, andouille
               pork loin capicola.
            </p>
         </div>
         <div class="env-news-item__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a href="#" class="env-text">Like</a>
               </li>
               <li class="env-list__item">
                  <a href="#" class="env-text">Reply</a>
               </li>
               <li class="env-list__item">
                  <span class="env-text">12:56</span>
               </li>
            </ul>
         </div>
      </div>
   </li>
</ul>
```

### Example: Horizontal list

`env-list env-list--horizontal--fixed env-list--horizontal--fixed--2`

```html
<ul class="env-list env-list--horizontal--fixed env-list--horizontal--fixed--2">
   <li class="env-list__item">
      <div class="env-news-item">
         <div class="env-news-item__media">
            <img
               class="env-image"
               src="https://envisionui.io/placeholders/225x100/06.webp"
               alt="Example image"
            />
         </div>
         <div class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#" class="env-link-secondary">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">
                  Eric Ericsson, aug 12 12:56
               </p>
            </div>
         </div>
         <div class="env-news-item__preamble">
            <p class="env-text">
               Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin
               pancetta corned beef. Drumstick pork shank, salami turkey t-bone
               jerky corned beef picanha jowl brisket frankfurter shankle.
               Meatball jowl sausage pork belly chicken hamburger, andouille
               pork loin capicola.
            </p>
         </div>
         <div class="env-news-item__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a href="#" class="env-text">Like</a>
               </li>
               <li class="env-list__item">
                  <a href="#" class="env-text">Reply</a>
               </li>
               <li class="env-list__item">
                  <span class="env-text">12:56</span>
               </li>
            </ul>
         </div>
      </div>
   </li>
   <li class="env-list__item">
      <div class="env-news-item">
         <div class="env-news-item__media">
            <img
               class="env-image"
               src="https://envisionui.io/placeholders/225x100/07.webp"
               alt="Example image"
            />
         </div>
         <div class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#" class="env-link-secondary">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">
                  Eric Ericsson, aug 12 12:56
               </p>
            </div>
         </div>
         <div class="env-news-item__preamble">
            <p class="env-text">
               Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin
               pancetta corned beef. Drumstick pork shank, salami turkey t-bone
               jerky corned beef picanha jowl brisket frankfurter shankle.
               Meatball jowl sausage pork belly chicken hamburger, andouille
               pork loin capicola.
            </p>
         </div>
         <div class="env-news-item__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a href="#" class="env-text">Like</a>
               </li>
               <li class="env-list__item">
                  <a href="#" class="env-text">Reply</a>
               </li>
               <li class="env-list__item">
                  <span class="env-text">12:56</span>
               </li>
            </ul>
         </div>
      </div>
   </li>
   <li class="env-list__item">
      <div class="env-news-item">
         <div class="env-news-item__media">
            <img
               class="env-image"
               src="https://envisionui.io/placeholders/225x100/08.webp"
               alt="Example image"
            />
         </div>
         <div class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#" class="env-link-secondary">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">
                  Eric Ericsson, aug 12 12:56
               </p>
            </div>
         </div>
         <div class="env-news-item__preamble">
            <p class="env-text">
               Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin
               pancetta corned beef. Drumstick pork shank, salami turkey t-bone
               jerky corned beef picanha jowl brisket frankfurter shankle.
               Meatball jowl sausage pork belly chicken hamburger, andouille
               pork loin capicola.
            </p>
         </div>
         <div class="env-news-item__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a href="#" class="env-text">Like</a>
               </li>
               <li class="env-list__item">
                  <a href="#" class="env-text">Reply</a>
               </li>
               <li class="env-list__item">
                  <span class="env-text">12:56</span>
               </li>
            </ul>
         </div>
      </div>
   </li>
   <li class="env-list__item">
      <div class="env-news-item">
         <div class="env-news-item__media">
            <img
               class="env-image"
               src="https://envisionui.io/placeholders/225x100/09.webp"
               alt="Example image"
            />
         </div>
         <div class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#" class="env-link-secondary">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">
                  Eric Ericsson, aug 12 12:56
               </p>
            </div>
         </div>
         <div class="env-news-item__preamble">
            <p class="env-text">
               Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin
               pancetta corned beef. Drumstick pork shank, salami turkey t-bone
               jerky corned beef picanha jowl brisket frankfurter shankle.
               Meatball jowl sausage pork belly chicken hamburger, andouille
               pork loin capicola.
            </p>
         </div>
         <div class="env-news-item__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a href="#" class="env-text">Like</a>
               </li>
               <li class="env-list__item">
                  <a href="#" class="env-text">Reply</a>
               </li>
               <li class="env-list__item">
                  <span class="env-text">12:56</span>
               </li>
            </ul>
         </div>
      </div>
   </li>
   <li class="env-list__item">
      <div class="env-news-item">
         <div class="env-news-item__media">
            <img
               class="env-image"
               src="https://envisionui.io/placeholders/225x100/10.webp"
               alt="Example image"
            />
         </div>
         <div class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#" class="env-link-secondary">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">
                  Eric Ericsson, aug 12 12:56
               </p>
            </div>
         </div>
         <div class="env-news-item__preamble">
            <p class="env-text">
               Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin
               pancetta corned beef. Drumstick pork shank, salami turkey t-bone
               jerky corned beef picanha jowl brisket frankfurter shankle.
               Meatball jowl sausage pork belly chicken hamburger, andouille
               pork loin capicola.
            </p>
         </div>
         <div class="env-news-item__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a href="#" class="env-text">Like</a>
               </li>
               <li class="env-list__item">
                  <a href="#" class="env-text">Reply</a>
               </li>
               <li class="env-list__item">
                  <span class="env-text">12:56</span>
               </li>
            </ul>
         </div>
      </div>
   </li>
   <li class="env-list__item">
      <div class="env-news-item">
         <div class="env-news-item__media">
            <img
               class="env-image"
               src="https://envisionui.io/placeholders/225x100/11.webp"
               alt="Example image"
            />
         </div>
         <div class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#" class="env-link-secondary">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">
                  Eric Ericsson, aug 12 12:56
               </p>
            </div>
         </div>
         <div class="env-news-item__preamble">
            <p class="env-text">
               Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin
               pancetta corned beef. Drumstick pork shank, salami turkey t-bone
               jerky corned beef picanha jowl brisket frankfurter shankle.
               Meatball jowl sausage pork belly chicken hamburger, andouille
               pork loin capicola.
            </p>
         </div>
         <div class="env-news-item__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a href="#" class="env-text">Like</a>
               </li>
               <li class="env-list__item">
                  <a href="#" class="env-text">Reply</a>
               </li>
               <li class="env-list__item">
                  <span class="env-text">12:56</span>
               </li>
            </ul>
         </div>
      </div>
   </li>
</ul>
```
