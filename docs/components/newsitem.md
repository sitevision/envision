---
layout: docs
title: News item
description: Newslist description
group: components
---

## Types ##
### Default news item ###
{% example html %}

<div class="sv-news-item">
   <div class="sv-news-item__media">
      <img src="https://unsplash.it/400/300/?blur" />
   </div>

   <div class="sv-news-item__headline">
      <div class="sv-news-item__headline__title">
         <h2 class="sv-font sv-font--title">
            <a href="#" class="sv-link sv-link-title"> Lorem ipsum </a>
         </h2>
         <p class="sv-font sv-font--tagline">Eric Ericsson, 12 aug 12:56</p>
      </div>
   </div>
   <div class="sv-news-item__preamble"> 
      <p class="sv-font"> Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank, salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage pork belly chicken hamburger, andouille pork loin capicola. Jerky bacon pork chop, turkey fatback sirloin biltong kielbasa hamburger spare ribs chicken tail pig landjaeger bresaola. Frankfurter chuck pork swine kielbasa jerky turducken boudin shoulder sausage flank. Meatloaf cupim picanha strip steak.</p> 
   </div>
   <div class="sv-news-item__footer">
      <a href="#" class="sv-link sv-link--base">Gilla </a>
      <i class="sv-icon--dot"></i>
      <a href="#" class="sv-link sv-link--base">Svara </a>
      <i class="sv-icon--dot"></i>
      <span class="sv-link sv-link--base">12:56</span>
   </div>
</div>

{% endexample %}


### Alternative news item ###
{% example html %}

<div class="sv-news-item">
   <div class="sv-news-item__media">
      <img src="https://unsplash.it/400/300/?blur" />
   </div>
   <div class="sv-news-item--column"> 
      <div class="sv-news-item__headline">
         <div class="sv-news-item__headline__title">
            <h2 class="sv-font sv-font--title">
               <a href="#" class="sv-link sv-link-title"> Lorem ipsum </a>
            </h2>
            <p class="sv-font sv-font--tagline">Eric Ericsson, 12 aug 12:56</p>
         </div>
      </div>
      <div class="sv-news-item__preamble"> 
         <p class="sv-font"> Bacon ipsum dolor amet leberkas jowl tail, cow rump pork loin pancetta corned beef. Drumstick pork shank, salami turkey t-bone jerky corned beef picanha jowl brisket frankfurter shankle. Meatball jowl sausage pork belly chicken hamburger, andouille pork loin capicola. Jerky bacon pork chop, turkey fatback sirloin biltong kielbasa hamburger spare ribs chicken tail pig landjaeger bresaola. Frankfurter chuck pork swine kielbasa jerky turducken boudin shoulder sausage flank. Meatloaf cupim picanha strip steak.</p> 
      </div>
      <div class="sv-news-item__footer">
         <a href="#" class="sv-link sv-link--base">Gilla</a>
         <i class="sv-icon--dot"></i>
         <a href="#" class="sv-link sv-link--base">Svara</a>
         <i class="sv-icon--dot"></i>
         <span class="sv-link sv-link--base">12:56</span>
      </div>
   </div>   
</div>

{% endexample %}
