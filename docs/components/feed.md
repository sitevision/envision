---
layout: docs
title: Feed
description: Feed description
group: components
---
## Simple post with attached image ##
{% example html %}
<article class="sv-post">
   <header class="sv-post__header sv-social">
      <div class="sv-social__figure sv-social__figure--profile">
         <a href="#">
            <img src="https://placehold.it/250x250">
         </a>
      </div>
      <div class="sv-social__body">
         <a class="sv-link sv-link--title" href="#">Erik</a>
         <span class="sv-font sv-font--detail-small">16:34</span>
         <p class="sv-font sv-font--tagline">Design</p>
      </div>
      <div class="sv-social__actions">
         <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
            <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
            <span class="sv-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="sv-post__entry">
      <p class="sv-font">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
      </p>
   </div>
   <div class="sv-post__attachment">
      <a href="#">
         <img src="https://placehold.it/250x250">
      </a>
   </div>
   <footer class="sv-post__footer">
      <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
         <li class="sv-list__item">
            <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
         </li>
         <li class="sv-list__item">
            <a class="sv-link sv-link--base" role="button" href="#">Share</a>
         </li>
         <li class="sv-list__item">
            <a class="sv-link sv-link--base" role="button" href="#comments" data-sv-collapse aria-controls="comments">Comment (0)</a>
         </li>
      </ul>
   </footer>
   <div class="sv-comments sv-collapse" id="comments" aria-expanded="false">
      <div class="sv-comments__wrapper">
         <ul class="sv-comments__list sv-list">
         </ul>
         <div class="sv-comments__comment sv-social"> 
            <div class="sv-social__figure sv-social__figure--me">
               <a href="#">
                  <img src="https://placehold.it/400x400.png">
               </a>
            </div>
            <div class="sv-social__body">
               <input type="text" class="sv-form-input" />
            </div>
            <div class="sv-social__actions">
               <button type="button" class="sv-button sv-button--primary">Comment</button>
            </div>
         </div>
      </div>
   </div>
</article>
{% endexample %}

## Comment ##
{% example html %}
<article class="sv-comment sv-social">
   <div class="sv-social__figure sv-social__figure--profile">
      <a href="#">
         <img src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="sv-comment__body">
      <header class="sv-comment__header sv-social">
         <div class="sv-social__body">
            <a class="sv-link sv-link--title" href="#">Erik</a>
         </div>
         <div class="sv-social__actions">
            <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
               <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
               <span class="sv-assistive-text">More options</span>
            </button>
         </div>
      </header>
      <div class="sv-comment__entry">
         <p class="sv-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet
         </p>
      </div>
      <footer class="sv-comment__footer">
         <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
            <li class="sv-list__item">
               <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
            </li>
            <li class="sv-list__item">
               <span class="sv-font sv-font--detail-small">09:30</span>
            </li>
         </ul>
      </footer>
   </div>
</article>
{% endexample %}

## Post with comments ##
{% example html %}
<article class="sv-post">
   <header class="sv-post__header sv-social">
      <div class="sv-social__figure sv-social__figure--profile">
         <a href="#">
            <img src="https://placehold.it/250x250">
         </a>
      </div>
      <div class="sv-social__body">
         <a class="sv-link sv-link--title" href="#">Erik</a>
         <span class="sv-font sv-font--detail-small">16:34</span>
         <p class="sv-font sv-font--tagline">Design</p>
      </div>
      <div class="sv-social__actions">
         <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
            <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
            <span class="sv-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="sv-post__entry">
      <p class="sv-font">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
      </p>
   </div>
   <footer class="sv-post__footer">
      <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
         <li class="sv-list__item">
            <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
         </li>
         <li class="sv-list__item">
            <a class="sv-link sv-link--base" role="button" href="#">Share</a>
         </li>
         <li class="sv-list__item">
            <a class="sv-link sv-link--base" role="button" href="#comments2" data-sv-collapse aria-controls="comments2">Comment (3)</a>
         </li>
      </ul>
   </footer>
   <div class="sv-comments sv-collapse sv-collapse--show" id="comments2" aria-expanded="true">
      <div class="sv-comments__wrapper">
         <ul class="sv-comments__list sv-list">
            <li>
               <article class="sv-comment sv-social">
                  <div class="sv-social__figure sv-social__figure--profile">
                     <a href="#">
                        <img src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="sv-comment__body">
                     <header class="sv-comment__header sv-social">
                        <div class="sv-social__body">
                           <a class="sv-link sv-link--title" href="#">Malin</a>
                        </div>
                        <div class="sv-social__actions">
                           <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
                              <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
                              <span class="sv-assistive-text">More options</span>
                           </button>
                        </div>
                     </header>
                     <div class="sv-comment__entry">
                        <p class="sv-font">
                           Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros. 
                        </p>
                     </div>
                     <footer class="sv-comment__footer">
                        <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
                           <li class="sv-list__item">
                              <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
                           </li>
                           <li class="sv-list__item">
                              <span class="sv-font sv-font--detail-small">10:27</span>
                           </li>
                        </ul>
                     </footer>
                  </div>
               </article>
            </li>
            <li>
               <article class="sv-comment sv-social">
                  <div class="sv-social__figure sv-social__figure--profile">
                     <a href="#">
                        <img src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="sv-comment__body">
                     <header class="sv-comment__header sv-social">
                        <div class="sv-social__body">
                           <a class="sv-link sv-link--title" href="#">Robin</a>
                        </div>
                        <div class="sv-social__actions">
                           <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
                              <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
                              <span class="sv-assistive-text">More options</span>
                           </button>
                        </div>
                     </header>
                     <div class="sv-comment__entry">
                        <p class="sv-font">
                           Aenean aliquet sem eget velit tincidunt ullamcorper. Donec aliquet, quam vitae cursus aliquet, lorem nunc efficitur nulla, ullamcorper placerat dui massa at eros.
                        </p>
                     </div>
                     <footer class="sv-comment__footer">
                        <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
                           <li class="sv-list__item">
                              <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
                           </li>
                           <li class="sv-list__item">
                              <span class="sv-font sv-font--detail-small">15:25</span>
                           </li>
                        </ul>
                     </footer>
                  </div>
               </article>
            </li>
            <li>
               <article class="sv-comment sv-social">
                  <div class="sv-social__figure sv-social__figure--profile">
                     <a href="#">
                        <img src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="sv-comment__body">
                     <header class="sv-comment__header sv-social">
                        <div class="sv-social__body">
                           <a class="sv-link sv-link--title" href="#">Anders</a>
                        </div>
                        <div class="sv-social__actions">
                           <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
                              <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
                              <span class="sv-assistive-text">More options</span>
                           </button>
                        </div>
                     </header>
                     <div class="sv-comment__entry">
                        <p class="sv-font">
                           Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros. 
                        </p>
                     </div>
                     <footer class="sv-comment__footer">
                        <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
                           <li class="sv-list__item">
                              <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
                           </li>
                           <li class="sv-list__item">
                              <span class="sv-font sv-font--detail-small">17:39</span>
                           </li>
                        </ul>
                     </footer>
                  </div>
               </article>
            </li>
         </ul>
         <div class="sv-comments__comment sv-social"> 
            <div class="sv-social__figure sv-social__figure--me">
               <a href="#">
                  <img src="https://placehold.it/400x400.png">
               </a>
            </div>
            <div class="sv-social__body">
               <input type="text" class="sv-form-input" />
            </div>
            <div class="sv-social__actions">
               <button type="button" class="sv-button sv-button--primary">Comment</button>
            </div>
         </div>
      </div>
   </div>
</article>
{% endexample %}

## Shared post ##
{% example html %}
<article class="sv-post">
   <header class="sv-post__header sv-social">
      <div class="sv-social__figure sv-social__figure--profile">
         <a href="#">
            <img src="https://placehold.it/250x250">
         </a>
      </div>
      <div class="sv-social__body">
         <a class="sv-link sv-link--title" href="#">Erik</a> <span class="sv-font sv-font--detail-small">shared</span> <a class="sv-link sv-link--title" href="#">Malin's</a> <span class="sv-font sv-font--detail-small">post</span>
         <span class="sv-font sv-font--detail-small">16:34</span>
         <p class="sv-font sv-font--tagline">Design</p>
      </div>
      <div class="sv-social__actions">
         <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
            <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
            <span class="sv-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="sv-post__entry">
      <p class="sv-font">
         Lorem ipsum dolor sit amet
      </p>
   </div>
   <div class="sv-post__shared">
      <blockquote class="sv-post">
         <header class="sv-post__header sv-social">
            <div class="sv-social__figure sv-social__figure--profile">
               <a href="#">
                  <img src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="sv-social__body">
               <a class="sv-link sv-link--title" href="#">Malin</a>
               <span class="sv-font sv-font--detail-small">17:29</span>
               <p class="sv-font sv-font--tagline">Design</p>
            </div>
         </header>
         <div class="sv-post__entry">
            <p class="sv-font">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
            </p>
         </div>
      </blockquote>
   </div>
   <footer class="sv-post__footer">
      <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
         <li class="sv-list__item">
            <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
         </li>
         <li class="sv-list__item">
            <a class="sv-link sv-link--base" role="button" href="#">Share</a>
         </li>
         <li class="sv-list__item">
            <a class="sv-link sv-link--base" role="button" href="#comments3" data-sv-collapse aria-controls="comments3">Comment (0)</a>
         </li>
      </ul>
   </footer>
   <div class="sv-comments sv-collapse" id="comments3" aria-expanded="false">
      <div class="sv-comments__wrapper">
         <ul class="sv-comments__list sv-list">
         </ul>
         <div class="sv-comments__comment sv-social"> 
            <div class="sv-social__figure sv-social__figure--me">
               <a href="#">
                  <img src="https://placehold.it/400x400.png">
               </a>
            </div>
            <div class="sv-social__body">
               <input type="text" class="sv-form-input" />
            </div>
            <div class="sv-social__actions">
               <button type="button" class="sv-button sv-button--primary">Comment</button>
            </div>
         </div>
      </div>
   </div>
</article>
{% endexample %}

## Feed list ##
{% example html %}
<ul class="sv-feed sv-list">
   <li class="sv-feed__item">
      <article class="sv-post">
         <header class="sv-post__header sv-social">
            <div class="sv-social__figure sv-social__figure--profile">
               <a href="#">
                  <img src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="sv-social__body">
               <a class="sv-link sv-link--title" href="#">Erik</a>
               <span class="sv-font sv-font--detail-small">16:34</span>
               <p class="sv-font sv-font--tagline">Design</p>
            </div>
            <div class="sv-social__actions">
               <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
                  <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
                  <span class="sv-assistive-text">More options</span>
               </button>
            </div>
         </header>
         <div class="sv-post__entry">
            <p class="sv-font">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
            </p>
         </div>
         <footer class="sv-post__footer">
            <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
               <li class="sv-list__item">
                  <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
               </li>
               <li class="sv-list__item">
                  <a class="sv-link sv-link--base" role="button" href="#">Share</a>
               </li>
               <li class="sv-list__item">
                  <a class="sv-link sv-link--base" role="button" href="#comments4" data-sv-collapse aria-controls="comments4">Comment (2)</a>
               </li>
            </ul>
         </footer>
         <div class="sv-comments sv-collapse sv-collapse--show" id="comments4" aria-expanded="true">
            <div class="sv-comments__wrapper">
               <ul class="sv-comments__list sv-list">
                  <li>
                     <article class="sv-comment sv-social">
                        <div class="sv-social__figure sv-social__figure--profile">
                           <a href="#">
                              <img src="https://placehold.it/400x400.png">
                           </a>
                        </div>
                        <div class="sv-comment__body">
                           <header class="sv-comment__header sv-social">
                              <div class="sv-social__body">
                                 <a class="sv-link sv-link--title" href="#">Anders</a>
                              </div>
                              <div class="sv-social__actions">
                                 <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
                                    <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
                                    <span class="sv-assistive-text">More options</span>
                                 </button>
                              </div>
                           </header>
                           <div class="sv-comment__entry">
                              <p class="sv-font">
                                 Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros. 
                              </p>
                           </div>
                           <footer class="sv-comment__footer">
                              <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
                                 <li class="sv-list__item">
                                    <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
                                 </li>
                                 <li class="sv-list__item">
                                    <span class="sv-font sv-font--detail-small">17:39</span>
                                 </li>
                              </ul>
                           </footer>
                        </div>
                     </article>
                  </li>
                  <li>
                     <article class="sv-comment sv-social">
                        <div class="sv-social__figure sv-social__figure--profile">
                           <a href="#">
                              <img src="https://placehold.it/400x400.png">
                           </a>
                        </div>
                        <div class="sv-comment__body">
                           <header class="sv-comment__header sv-social">
                              <div class="sv-social__body">
                                 <a class="sv-link sv-link--title" href="#">Emma</a>
                              </div>
                              <div class="sv-social__actions">
                                 <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
                                    <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
                                    <span class="sv-assistive-text">More options</span>
                                 </button>
                              </div>
                           </header>
                           <div class="sv-comment__entry">
                              <p class="sv-font">
                                 Cras varius, felis a accumsan accumsan, tellus elit maximus purus, id dignissim sem odio at eros. 
                              </p>
                           </div>
                           <footer class="sv-comment__footer">
                              <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
                                 <li class="sv-list__item">
                                    <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
                                 </li>
                                 <li class="sv-list__item">
                                    <span class="sv-font sv-font--detail-small">19:24</span>
                                 </li>
                              </ul>
                           </footer>
                        </div>
                     </article>
                  </li>
               </ul>
               <div class="sv-comments__comment sv-social"> 
                  <div class="sv-social__figure sv-social__figure--me">
                     <a href="#">
                        <img src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="sv-social__body">
                     <input type="text" class="sv-form-input" />
                  </div>
                  <div class="sv-social__actions">
                     <button type="button" class="sv-button sv-button--primary">Comment</button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
   <li class="sv-feed__item">
      <article class="sv-post">
         <header class="sv-post__header sv-social">
            <div class="sv-social__figure sv-social__figure--profile">
               <a href="#">
                  <img src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="sv-social__body">
               <a class="sv-link sv-link--title" href="#">Robin</a>
               <span class="sv-font sv-font--detail-small">17:28</span>
               <p class="sv-font sv-font--tagline">Design</p>
            </div>
            <div class="sv-social__actions">
               <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
                  <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
                  <span class="sv-assistive-text">More options</span>
               </button>
            </div>
         </header>
         <div class="sv-post__entry">
            <p class="sv-font">
               Duis eget eros urna. Maecenas rutrum tortor eget elit mattis, pretium aliquet sapien accumsan. Nunc congue vehicula mi sit amet dictum. Aenean aliquam ex lorem, sit amet laoreet justo ultrices quis.
            </p>
         </div>
         <footer class="sv-post__footer">
            <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
               <li class="sv-list__item">
                  <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
               </li>
               <li class="sv-list__item">
                  <a class="sv-link sv-link--base" role="button" href="#">Share</a>
               </li>
               <li class="sv-list__item">
                  <a class="sv-link sv-link--base" role="button" href="#comments5" data-sv-collapse aria-controls="comments5">Comment (0)</a>
               </li>
            </ul>
         </footer>
         <div class="sv-comments sv-collapse" id="comments5" aria-expanded="false">
            <div class="sv-comments__wrapper">
               <ul class="sv-comments__list sv-list">
               </ul>
               <div class="sv-comments__comment sv-social"> 
                  <div class="sv-social__figure sv-social__figure--me">
                     <a href="#">
                        <img src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="sv-social__body">
                     <input type="text" class="sv-form-input" />
                  </div>
                  <div class="sv-social__actions">
                     <button type="button" class="sv-button sv-button--primary">Comment</button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
   <li class="sv-feed__item">
      <article class="sv-post">
         <header class="sv-post__header sv-social">
            <div class="sv-social__figure sv-social__figure--profile">
               <a href="#">
                  <img src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="sv-social__body">
               <a class="sv-link sv-link--title" href="#">Ebba</a>
               <span class="sv-font sv-font--detail-small">19:05</span>
               <p class="sv-font sv-font--tagline">Design</p>
            </div>
            <div class="sv-social__actions">
               <button type="button" class="sv-button sv-button--dropdown sv-dropdown__toggle" aria-haspopup="true" title="More options">
                  <i class="sv-icon--dropdown-menu" aria-hidden="true"></i>
                  <span class="sv-assistive-text">More post options</span>
               </button>
            </div>
         </header>
         <div class="sv-post__entry">
            <p class="sv-font">
               Nulla faucibus ultrices ullamcorper. Duis gravida malesuada commodo. Praesent ornare id nisl non suscipit. 
            </p>
         </div>
         <footer class="sv-post__footer">
            <ul class="sv-list sv-list--horizontal sv-list-dividers--left">
               <li class="sv-list__item">
                  <a class="sv-link sv-link--base" role="button" href="#">Like (0)</a>
               </li>
               <li class="sv-list__item">
                  <a class="sv-link sv-link--base" role="button" href="#">Share</a>
               </li>
               <li class="sv-list__item">
                  <a class="sv-link sv-link--base" role="button" href="#comments6" data-sv-collapse aria-controls="comments6">Comment (0)</a>
               </li>
            </ul>
         </footer>
         <div class="sv-comments sv-collapse" id="comments6" aria-expanded="false">
            <div class="sv-comments__wrapper">
               <ul class="sv-comments__list sv-list">
               </ul>
               <div class="sv-comments__comment sv-social"> 
                  <div class="sv-social__figure sv-social__figure--me">
                     <a href="#">
                        <img src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="sv-social__body">
                     <input type="text" class="sv-form-input" />
                  </div>
                  <div class="sv-social__actions">
                     <button type="button" class="sv-button sv-button--primary">Comment</button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
</ul>
{% endexample %}
