--- 
layout: docs
title: News item
description: Newslist description
group: components
--- 

## Types ## 

### Default news item ### 

{% example html %}

<article class="env-news-item">
   <div class="env-news-item__media">
      <img src="https://unsplash.it/467/300/?blur" />
   </div>
   <header class="env-news-item__headline">
      <div class="env-news-item__headline__title">
         <h2 class="env-text">
            <a href="#">Lorem ipsum</a>
         </h2>
         <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
      </div>
   </header>
   <section class="env-news-item__preamble">
      <p class="env-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank, salami turkey
         t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage pork belly chicken hamburger,
         andouille pork loin capicola.</p>
   </section>
   <footer class="env-news-item__footer">
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
   </footer>
</article>

{% endexample %} 
### Example: Vertical list ### 
`.env-list`
   <ul class="env-list">
      <li class="env-list__item">
         <article class="env-news-item">
            <div class="env-news-item__media">
               <img src="https://unsplash.it/467/300/?blur" />
            </div>
            <header class="env-news-item__headline">
               <div class="env-news-item__headline__title">
                  <h2 class="env-text">
                     <a href="#">Lorem ipsum</a>
                  </h2>
                  <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
               </div>
            </header>
            <div class="env-news-item__preamble">
               <p class="env-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
                  salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
                  pork belly chicken hamburger, andouille pork loin capicola.</p>
            </div>
            <footer class="env-news-item__footer">
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
            </footer>
         </article>
      </li>
      <li class="env-list__item">
         <article class="env-news-item">
            <div class="env-news-item__media">
               <img src="https://unsplash.it/467/300/?blur" />
            </div>
            <header class="env-news-item__headline">
               <div class="env-news-item__headline__title">
                  <h2 class="env-text">
                     <a href="#">Lorem ipsum</a>
                  </h2>
                  <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
               </div>
            </header>
            <div class="env-news-item__preamble">
               <p class="env-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
                  salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
                  pork belly chicken hamburger, andouille pork loin capicola.</p>
            </div>
            <footer class="env-news-item__footer">
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
            </footer>
         </article>
      </li>
      <li class="env-list__item">
         <article class="env-news-item">
            <div class="env-news-item__media">
               <img src="https://unsplash.it/467/300/?blur" />
            </div>
            <header class="env-news-item__headline">
               <div class="env-news-item__headline__title">
                  <h2 class="env-text">
                     <a href="#">Lorem ipsum</a>
                  </h2>
                  <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
               </div>
            </header>
            <div class="env-news-item__preamble">
               <p class="env-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
                  salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
                  pork belly chicken hamburger, andouille pork loin capicola.</p>
            </div>
            <footer class="env-news-item__footer">
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
            </footer>
         </article>
      </li>
   </ul>


### Example: Horizontal list ###
`env-list env-list--horizontal--fixed env-list--horizontal--fixed--2`
<ul class="env-list env-list--horizontal--fixed env-list--horizontal--fixed--2">
   <li class="env-list__item">
      <article class="env-news-item">
         <div class="env-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="env-news-item__preamble">
            <p class="env-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="env-news-item__footer">
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
         </footer>
      </article>
   </li>
   <li class="env-list__item">
      <article class="env-news-item">
         <div class="env-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="env-news-item__preamble">
            <p class="env-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="env-news-item__footer">
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
         </footer>
      </article>
   </li>
   <li class="env-list__item">
      <article class="env-news-item">
         <div class="env-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="env-news-item__preamble">
            <p class="env-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="env-news-item__footer">
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
         </footer>
      </article>
   </li>
   <li class="env-list__item">
      <article class="env-news-item">
         <div class="env-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="env-news-item__preamble">
            <p class="env-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="env-news-item__footer">
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
         </footer>
      </article>
   </li>
   <li class="env-list__item">
      <article class="env-news-item">
         <div class="env-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="env-news-item__preamble">
            <p class="env-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="env-news-item__footer">
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
         </footer>
      </article>
   </li>
   <li class="env-list__item">
      <article class="env-news-item">
         <div class="env-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="env-news-item__headline">
            <div class="env-news-item__headline__title">
               <h2 class="env-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="env-text env-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="env-news-item__preamble">
            <p class="env-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="env-news-item__footer">
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
         </footer>
      </article>
   </li>
</ul>
