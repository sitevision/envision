--- 
layout: docs
title: News item
description: Newslist description
group: components
--- 

## Types ## 

### Default news item ### 

{% example html %}

<article class="{{ site.css_prefix }}-news-item">
   <div class="{{ site.css_prefix }}-news-item__media">
      <img src="https://unsplash.it/467/300/?blur" />
   </div>
   <header class="{{ site.css_prefix }}-news-item__headline">
      <div class="{{ site.css_prefix }}-news-item__headline__title">
         <h2 class="{{ site.css_prefix }}-text">
            <a href="#">Lorem ipsum</a>
         </h2>
         <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Eric Ericsson, aug 12 12:56</p>
      </div>
   </header>
   <section class="{{ site.css_prefix }}-news-item__preamble">
      <p class="{{ site.css_prefix }}-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank, salami turkey
         t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage pork belly chicken hamburger,
         andouille pork loin capicola.</p>
   </section>
   <footer class="{{ site.css_prefix }}-news-item__footer">
      <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
         <li class="{{ site.css_prefix }}-list__item">
            <a href="#" class="{{ site.css_prefix }}-text">Like</a>
         </li>
         <li class="{{ site.css_prefix }}-list__item">
            <a href="#" class="{{ site.css_prefix }}-text">Reply</a>
         </li>
         <li class="{{ site.css_prefix }}-list__item">
            <span class="{{ site.css_prefix }}-text">12:56</span>
         </li>
      </ul>
   </footer>
</article>

{% endexample %} 
### Example: Vertical list ### 
`.{{ site.css_prefix }}-list`
   <ul class="{{ site.css_prefix }}-list">
      <li class="{{ site.css_prefix }}-list__item">
         <article class="{{ site.css_prefix }}-news-item">
            <div class="{{ site.css_prefix }}-news-item__media">
               <img src="https://unsplash.it/467/300/?blur" />
            </div>
            <header class="{{ site.css_prefix }}-news-item__headline">
               <div class="{{ site.css_prefix }}-news-item__headline__title">
                  <h2 class="{{ site.css_prefix }}-text">
                     <a href="#">Lorem ipsum</a>
                  </h2>
                  <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Eric Ericsson, aug 12 12:56</p>
               </div>
            </header>
            <div class="{{ site.css_prefix }}-news-item__preamble">
               <p class="{{ site.css_prefix }}-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
                  salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
                  pork belly chicken hamburger, andouille pork loin capicola.</p>
            </div>
            <footer class="{{ site.css_prefix }}-news-item__footer">
               <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
                  <li class="{{ site.css_prefix }}-list__item">
                     <a href="#" class="{{ site.css_prefix }}-text">Like</a>
                  </li>
                  <li class="{{ site.css_prefix }}-list__item">
                     <a href="#" class="{{ site.css_prefix }}-text">Reply</a>
                  </li>
                  <li class="{{ site.css_prefix }}-list__item">
                     <span class="{{ site.css_prefix }}-text">12:56</span>
                  </li>
               </ul>
            </footer>
         </article>
      </li>
      <li class="{{ site.css_prefix }}-list__item">
         <article class="{{ site.css_prefix }}-news-item">
            <div class="{{ site.css_prefix }}-news-item__media">
               <img src="https://unsplash.it/467/300/?blur" />
            </div>
            <header class="{{ site.css_prefix }}-news-item__headline">
               <div class="{{ site.css_prefix }}-news-item__headline__title">
                  <h2 class="{{ site.css_prefix }}-text">
                     <a href="#">Lorem ipsum</a>
                  </h2>
                  <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Eric Ericsson, aug 12 12:56</p>
               </div>
            </header>
            <div class="{{ site.css_prefix }}-news-item__preamble">
               <p class="{{ site.css_prefix }}-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
                  salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
                  pork belly chicken hamburger, andouille pork loin capicola.</p>
            </div>
            <footer class="{{ site.css_prefix }}-news-item__footer">
               <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
                  <li class="{{ site.css_prefix }}-list__item">
                     <a href="#" class="{{ site.css_prefix }}-text">Like</a>
                  </li>
                  <li class="{{ site.css_prefix }}-list__item">
                     <a href="#" class="{{ site.css_prefix }}-text">Reply</a>
                  </li>
                  <li class="{{ site.css_prefix }}-list__item">
                     <span class="{{ site.css_prefix }}-text">12:56</span>
                  </li>
               </ul>
            </footer>
         </article>
      </li>
      <li class="{{ site.css_prefix }}-list__item">
         <article class="{{ site.css_prefix }}-news-item">
            <div class="{{ site.css_prefix }}-news-item__media">
               <img src="https://unsplash.it/467/300/?blur" />
            </div>
            <header class="{{ site.css_prefix }}-news-item__headline">
               <div class="{{ site.css_prefix }}-news-item__headline__title">
                  <h2 class="{{ site.css_prefix }}-text">
                     <a href="#">Lorem ipsum</a>
                  </h2>
                  <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Eric Ericsson, aug 12 12:56</p>
               </div>
            </header>
            <div class="{{ site.css_prefix }}-news-item__preamble">
               <p class="{{ site.css_prefix }}-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
                  salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
                  pork belly chicken hamburger, andouille pork loin capicola.</p>
            </div>
            <footer class="{{ site.css_prefix }}-news-item__footer">
               <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
                  <li class="{{ site.css_prefix }}-list__item">
                     <a href="#" class="{{ site.css_prefix }}-text">Like</a>
                  </li>
                  <li class="{{ site.css_prefix }}-list__item">
                     <a href="#" class="{{ site.css_prefix }}-text">Reply</a>
                  </li>
                  <li class="{{ site.css_prefix }}-list__item">
                     <span class="{{ site.css_prefix }}-text">12:56</span>
                  </li>
               </ul>
            </footer>
         </article>
      </li>
   </ul>


### Example: Horizontal list ###
`{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal--fixed {{ site.css_prefix }}-list--horizontal--fixed--2`
<ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal--fixed {{ site.css_prefix }}-list--horizontal--fixed--2">
   <li class="{{ site.css_prefix }}-list__item">
      <article class="{{ site.css_prefix }}-news-item">
         <div class="{{ site.css_prefix }}-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="{{ site.css_prefix }}-news-item__headline">
            <div class="{{ site.css_prefix }}-news-item__headline__title">
               <h2 class="{{ site.css_prefix }}-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="{{ site.css_prefix }}-news-item__preamble">
            <p class="{{ site.css_prefix }}-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="{{ site.css_prefix }}-news-item__footer">
            <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Like</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Reply</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <span class="{{ site.css_prefix }}-text">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <article class="{{ site.css_prefix }}-news-item">
         <div class="{{ site.css_prefix }}-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="{{ site.css_prefix }}-news-item__headline">
            <div class="{{ site.css_prefix }}-news-item__headline__title">
               <h2 class="{{ site.css_prefix }}-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="{{ site.css_prefix }}-news-item__preamble">
            <p class="{{ site.css_prefix }}-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="{{ site.css_prefix }}-news-item__footer">
            <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Like</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Reply</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <span class="{{ site.css_prefix }}-text">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <article class="{{ site.css_prefix }}-news-item">
         <div class="{{ site.css_prefix }}-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="{{ site.css_prefix }}-news-item__headline">
            <div class="{{ site.css_prefix }}-news-item__headline__title">
               <h2 class="{{ site.css_prefix }}-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="{{ site.css_prefix }}-news-item__preamble">
            <p class="{{ site.css_prefix }}-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="{{ site.css_prefix }}-news-item__footer">
            <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Like</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Reply</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <span class="{{ site.css_prefix }}-text">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <article class="{{ site.css_prefix }}-news-item">
         <div class="{{ site.css_prefix }}-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="{{ site.css_prefix }}-news-item__headline">
            <div class="{{ site.css_prefix }}-news-item__headline__title">
               <h2 class="{{ site.css_prefix }}-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="{{ site.css_prefix }}-news-item__preamble">
            <p class="{{ site.css_prefix }}-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="{{ site.css_prefix }}-news-item__footer">
            <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Like</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Reply</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <span class="{{ site.css_prefix }}-text">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <article class="{{ site.css_prefix }}-news-item">
         <div class="{{ site.css_prefix }}-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="{{ site.css_prefix }}-news-item__headline">
            <div class="{{ site.css_prefix }}-news-item__headline__title">
               <h2 class="{{ site.css_prefix }}-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="{{ site.css_prefix }}-news-item__preamble">
            <p class="{{ site.css_prefix }}-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="{{ site.css_prefix }}-news-item__footer">
            <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Like</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Reply</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <span class="{{ site.css_prefix }}-text">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <article class="{{ site.css_prefix }}-news-item">
         <div class="{{ site.css_prefix }}-news-item__media">
            <img src="https://unsplash.it/300/100/?blur" />
         </div>
         <header class="{{ site.css_prefix }}-news-item__headline">
            <div class="{{ site.css_prefix }}-news-item__headline__title">
               <h2 class="{{ site.css_prefix }}-text">
                  <a href="#">Lorem ipsum</a>
               </h2>
               <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Eric Ericsson, aug 12 12:56</p>
            </div>
         </header>
         <div class="{{ site.css_prefix }}-news-item__preamble">
            <p class="{{ site.css_prefix }}-text">Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank,
               salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage
               pork belly chicken hamburger, andouille pork loin capicola.</p>
         </div>
         <footer class="{{ site.css_prefix }}-news-item__footer">
            <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Like</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a href="#" class="{{ site.css_prefix }}-text">Reply</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <span class="{{ site.css_prefix }}-text">12:56</span>
               </li>
            </ul>
         </footer>
      </article>
   </li>
</ul>
