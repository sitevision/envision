--- 
layout: docs
title: News item
description: Newslist description
group: components
--- 

## Types ## 

### Default news item ### 

{% example html %}

<article class="sv-news-item">
   <div class="sv-news-item__media">
      <img src="https://unsplash.it/467/300/?blur" />
   </div>
   <header class="sv-news-item__headline">
      <div class="sv-news-item__headline__title">
         <h2 class="sv-font sv-font--title">
            <a href="#" class="sv-link sv-link--title">Lorem ipsum</a>
         </h2>
         <p class="sv-font sv-font--tagline">Eric Ericsson, aug 12 12:56</p>
      </div>
   </header>
   <section class="sv-news-item__preamble">
      <p class="sv-font">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank, salami turkey
         t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage pork belly chicken hamburger,
         andouille pork loin capicola.</p>
   </section>
   <footer class="sv-news-item__footer">
      <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
         <li class="sv-list__item">
            <a href="#" class="sv-link sv-link--base">Like</a>
         </li>
         <li class="sv-list__item">
            <a href="#" class="sv-link sv-link--base">Reply</a>
         </li>
         <li class="sv-list__item">
            <span class="sv-link sv-link--base">12:56</span>
         </li>
      </ul>
   </footer>
</article>

{% endexample %} 
### Example: Vertical list ### 
`.sv-list`
   <ul class="sv-list">
      <li class="sv-list__item">
         <article class="sv-news-item">
            <div class="sv-news-item__media">
               <img src="https://unsplash.it/467/300/?blur" />
            </div>
            <header class="sv-news-item__headline">
               <div class="sv-news-item__headline__title">
                  <h2 class="sv-font sv-font--title">
                     <a href="#" class="sv-link sv-link--title">Lorem ipsum</a>
                  </h2>
                  <p class="sv-font sv-font--tagline">Eric Ericsson, aug 12 12:56</p>
               </div>
            </header>
            <div class="sv-news-item__preamble">
               <p class="sv-font">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
                  salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
                  pork belly chicken hamburger, andouille pork loin capicola.</p>
            </div>
            <footer class="sv-news-item__footer">
               <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
                  <li class="sv-list__item">
                     <a href="#" class="sv-link sv-link--base">Like</a>
                  </li>
                  <li class="sv-list__item">
                     <a href="#" class="sv-link sv-link--base">Reply</a>
                  </li>
                  <li class="sv-list__item">
                     <span class="sv-link sv-link--base">12:56</span>
                  </li>
               </ul>
            </footer>
         </article>
      </li>
      <li class="sv-list__item">
         <article class="sv-news-item">
            <div class="sv-news-item__media">
               <img src="https://unsplash.it/467/300/?blur" />
            </div>
            <header class="sv-news-item__headline">
               <div class="sv-news-item__headline__title">
                  <h2 class="sv-font sv-font--title">
                     <a href="#" class="sv-link sv-link--title">Lorem ipsum</a>
                  </h2>
                  <p class="sv-font sv-font--tagline">Eric Ericsson, aug 12 12:56</p>
               </div>
            </header>
            <div class="sv-news-item__preamble">
               <p class="sv-font">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
                  salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
                  pork belly chicken hamburger, andouille pork loin capicola.</p>
            </div>
            <footer class="sv-news-item__footer">
               <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
                  <li class="sv-list__item">
                     <a href="#" class="sv-link sv-link--base">Like</a>
                  </li>
                  <li class="sv-list__item">
                     <a href="#" class="sv-link sv-link--base">Reply</a>
                  </li>
                  <li class="sv-list__item">
                     <span class="sv-link sv-link--base">12:56</span>
                  </li>
               </ul>
            </footer>
         </article>
      </li>
      <li class="sv-list__item">
         <article class="sv-news-item">
            <div class="sv-news-item__media">
               <img src="https://unsplash.it/467/300/?blur" />
            </div>
            <header class="sv-news-item__headline">
               <div class="sv-news-item__headline__title">
                  <h2 class="sv-font sv-font--title">
                     <a href="#" class="sv-link sv-link--title">Lorem ipsum</a>
                  </h2>
                  <p class="sv-font sv-font--tagline">Eric Ericsson, aug 12 12:56</p>
               </div>
            </header>
            <div class="sv-news-item__preamble">
               <p class="sv-font">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
                  salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
                  pork belly chicken hamburger, andouille pork loin capicola.</p>
            </div>
            <footer class="sv-news-item__footer">
               <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
                  <li class="sv-list__item">
                     <a href="#" class="sv-link sv-link--base">Like</a>
                  </li>
                  <li class="sv-list__item">
                     <a href="#" class="sv-link sv-link--base">Reply</a>
                  </li>
                  <li class="sv-list__item">
                     <span class="sv-link sv-link--base">12:56</span>
                  </li>
               </ul>
            </footer>
         </article>
      </li>
   </ul>


### Example: Horizontal list ###
`sv-list sv-list--horizontal--fixed sv-list--horizontal--fixed--2`
<ul class="sv-list sv-list--horizontal--fixed sv-list--horizontal--fixed--2">
   <li class="sv-list__item">
      <article class="sv-news-item">
         <div class="sv-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="sv-news-item__headline">
            <div class="sv-news-item__headline__title">
               <h2 class="sv-font sv-font--title">
                  <a href="#" class="sv-link sv-link--title">Lorem ipsum</a>
               </h2>
               <p class="sv-font sv-font--tagline">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="sv-news-item__preamble">
            <p class="sv-font">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="sv-news-item__footer">
            <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Like</a>
               </li>
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Reply</a>
               </li>
               <li class="sv-list__item">
                  <span class="sv-link sv-link--base">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
   <li class="sv-list__item">
      <article class="sv-news-item">
         <div class="sv-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="sv-news-item__headline">
            <div class="sv-news-item__headline__title">
               <h2 class="sv-font sv-font--title">
                  <a href="#" class="sv-link sv-link--title">Lorem ipsum</a>
               </h2>
               <p class="sv-font sv-font--tagline">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="sv-news-item__preamble">
            <p class="sv-font">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="sv-news-item__footer">
            <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Like</a>
               </li>
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Reply</a>
               </li>
               <li class="sv-list__item">
                  <span class="sv-link sv-link--base">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
   <li class="sv-list__item">
      <article class="sv-news-item">
         <div class="sv-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="sv-news-item__headline">
            <div class="sv-news-item__headline__title">
               <h2 class="sv-font sv-font--title">
                  <a href="#" class="sv-link sv-link--title">Lorem ipsum</a>
               </h2>
               <p class="sv-font sv-font--tagline">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="sv-news-item__preamble">
            <p class="sv-font">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="sv-news-item__footer">
            <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Like</a>
               </li>
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Reply</a>
               </li>
               <li class="sv-list__item">
                  <span class="sv-link sv-link--base">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
   <li class="sv-list__item">
      <article class="sv-news-item">
         <div class="sv-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="sv-news-item__headline">
            <div class="sv-news-item__headline__title">
               <h2 class="sv-font sv-font--title">
                  <a href="#" class="sv-link sv-link--title">Lorem ipsum</a>
               </h2>
               <p class="sv-font sv-font--tagline">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="sv-news-item__preamble">
            <p class="sv-font">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="sv-news-item__footer">
            <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Like</a>
               </li>
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Reply</a>
               </li>
               <li class="sv-list__item">
                  <span class="sv-link sv-link--base">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
   <li class="sv-list__item">
      <article class="sv-news-item">
         <div class="sv-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="sv-news-item__headline">
            <div class="sv-news-item__headline__title">
               <h2 class="sv-font sv-font--title">
                  <a href="#" class="sv-link sv-link--title">Lorem ipsum</a>
               </h2>
               <p class="sv-font sv-font--tagline">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="sv-news-item__preamble">
            <p class="sv-font">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="sv-news-item__footer">
            <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Like</a>
               </li>
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Reply</a>
               </li>
               <li class="sv-list__item">
                  <span class="sv-link sv-link--base">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
   <li class="sv-list__item">
      <article class="sv-news-item">
         <div class="sv-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="sv-news-item__headline">
            <div class="sv-news-item__headline__title">
               <h2 class="sv-font sv-font--title">
                  <a href="#" class="sv-link sv-link--title">Lorem ipsum</a>
               </h2>
               <p class="sv-font sv-font--tagline">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="sv-news-item__preamble">
            <p class="sv-font">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="sv-news-item__footer">
            <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Like</a>
               </li>
               <li class="sv-list__item">
                  <a href="#" class="sv-link sv-link--base">Reply</a>
               </li>
               <li class="sv-list__item">
                  <span class="sv-link sv-link--base">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
</ul>
