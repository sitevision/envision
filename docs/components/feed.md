---
layout: docs
title: Feed
description: Feed description
group: components
---
## Simple post with embedded attachment ##
{% example html %}
<article class="{{ site.css_prefix }}-post">
   <header class="{{ site.css_prefix }}-post__header {{ site.css_prefix }}-media">
      <div class="{{ site.css_prefix }}-media__figure">
         <a href="#">
            <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/250x250">
         </a>
      </div>
      <div class="{{ site.css_prefix }}-media__body">
         <h3 class="{{ site.css_prefix }}-text">
            <a href="#">Erik</a>
            <small class="{{ site.css_prefix }}-text--muted">16:34</small>
         </h3>
         <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Design</p>
      </div>
      <div class="{{ site.css_prefix }}-media__actions">
         <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
            <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
            <span class="{{ site.css_prefix }}-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="{{ site.css_prefix }}-post__entry">
      <p class="{{ site.css_prefix }}-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
      </p>
   </div>
   <div class="{{ site.css_prefix }}-post__attachment">
      <div class="{{ site.css_prefix }}-embedded">
         <img class="{{ site.css_prefix }}-embedded__img" alt="Image alternative" src="https://placehold.it/300x100.png">
         <div class="{{ site.css_prefix }}-embedded__block">
            <h4 class="{{ site.css_prefix }}-text">Lorem ipsum</h4>
            <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted {{ site.css_prefix }}-embedded__text">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder.</p>
         </div>
      </div>
   </div>
   <footer class="{{ site.css_prefix }}-post__footer">
      <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
         <li class="{{ site.css_prefix }}-list__item">
            <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
         </li>
         <li class="{{ site.css_prefix }}-list__item">
            <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Share</a>
         </li>
         <li class="{{ site.css_prefix }}-list__item">
            <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#comments" data-{{ site.css_prefix }}-collapse aria-controls="comments">Comment (0)</a>
         </li>
      </ul>
   </footer>
   <div class="{{ site.css_prefix }}-comments {{ site.css_prefix }}-collapse" id="comments" aria-expanded="false">
      <div class="{{ site.css_prefix }}-comments__wrapper">
         <ul class="{{ site.css_prefix }}-comments__list {{ site.css_prefix }}-list">
         </ul>
         <div class="{{ site.css_prefix }}-comments__comment {{ site.css_prefix }}-media"> 
            <div class="{{ site.css_prefix }}-media__figure">
               <a href="#">
                  <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--tiny" src="https://placehold.it/400x400.png">
               </a>
            </div>
            <div class="{{ site.css_prefix }}-media__body">
               <input type="text" class="{{ site.css_prefix }}-form-input" />
            </div>
            <div class="{{ site.css_prefix }}-media__actions">
               <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Comment</button>
            </div>
         </div>
      </div>
   </div>
</article>
{% endexample %}

## Comment ##
{% example html %}
<article class="{{ site.css_prefix }}-comment {{ site.css_prefix }}-media">
   <div class="{{ site.css_prefix }}-media__figure">
      <a href="#">
         <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="{{ site.css_prefix }}-media__body">
      <header class="{{ site.css_prefix }}-comment__header">
         <h3 class="{{ site.css_prefix }}-text">
            <a href="#">Emma</a>
         </h3>
      </header>
      <p class="{{ site.css_prefix }}-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet
      </p>
      <footer class="{{ site.css_prefix }}-comment__footer">
         <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
            <li class="{{ site.css_prefix }}-list__item">
               <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
            </li>
            <li class="{{ site.css_prefix }}-list__item">
               <small class="{{ site.css_prefix }}-text--muted">09:30</small>
            </li>
         </ul>
      </footer>
   </div>
   <div class="{{ site.css_prefix }}-media__actions">
      <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
         <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
         <span class="{{ site.css_prefix }}-assistive-text">More options</span>
      </button>
   </div>
</article>
{% endexample %}

## Post with comments ##
{% example html %}
<article class="{{ site.css_prefix }}-post">
   <header class="{{ site.css_prefix }}-post__header {{ site.css_prefix }}-media">
      <div class="{{ site.css_prefix }}-media__figure">
         <a href="#">
            <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/250x250">
         </a>
      </div>
      <div class="{{ site.css_prefix }}-media__body">
         <h3 class="{{ site.css_prefix }}-text">
            <a href="#">Erik</a>
            <small class="{{ site.css_prefix }}-text--muted">16:34</small>
         </h3>
         <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Design</p>
      </div>
      <div class="{{ site.css_prefix }}-media__actions">
         <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
            <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
            <span class="{{ site.css_prefix }}-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="{{ site.css_prefix }}-post__entry">
      <p class="{{ site.css_prefix }}-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
      </p>
   </div>
   <footer class="{{ site.css_prefix }}-post__footer">
      <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
         <li class="{{ site.css_prefix }}-list__item">
            <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
         </li>
         <li class="{{ site.css_prefix }}-list__item">
            <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Share</a>
         </li>
         <li class="{{ site.css_prefix }}-list__item">
            <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#comments2" data-{{ site.css_prefix }}-collapse aria-controls="comments2">Comment (3)</a>
         </li>
      </ul>
   </footer>
   <div class="{{ site.css_prefix }}-comments {{ site.css_prefix }}-collapse {{ site.css_prefix }}-collapse--show" id="comments2" aria-expanded="true">
      <div class="{{ site.css_prefix }}-comments__wrapper">
         <ul class="{{ site.css_prefix }}-comments__list {{ site.css_prefix }}-list">
            <li>
               <article class="{{ site.css_prefix }}-comment {{ site.css_prefix }}-media">
                  <div class="{{ site.css_prefix }}-media__figure">
                     <a href="#">
                        <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="{{ site.css_prefix }}-media__body">
                     <header class="{{ site.css_prefix }}-comment__header">
                        <h4 class="{{ site.css_prefix }}-text">
                           <a href="#">Malin</a>
                        </h4>
                     </header>
                     <p class="{{ site.css_prefix }}-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet
                     </p>
                     <footer class="{{ site.css_prefix }}-comment__footer">
                        <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
                           <li class="{{ site.css_prefix }}-list__item">
                              <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
                           </li>
                           <li class="{{ site.css_prefix }}-list__item">
                              <small class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">10:27</small>
                           </li>
                        </ul>
                     </footer>
                  </div>
                  <div class="{{ site.css_prefix }}-media__actions">
                     <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
                        <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
                        <span class="{{ site.css_prefix }}-assistive-text">More options</span>
                     </button>
                  </div>
               </article>
            </li>
            <li>
               <article class="{{ site.css_prefix }}-comment {{ site.css_prefix }}-media">
                  <div class="{{ site.css_prefix }}-media__figure">
                     <a href="#">
                        <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="{{ site.css_prefix }}-media__body">
                     <header class="{{ site.css_prefix }}-comment__header">
                        <h4 class="{{ site.css_prefix }}-text">
                           <a href="#">Robin</a>
                        </h4>
                     </header>
                     <p class="{{ site.css_prefix }}-text">
                        Aenean aliquet sem eget velit tincidunt ullamcorper. Donec aliquet, quam vitae cursus aliquet, lorem nunc efficitur nulla, ullamcorper placerat dui massa at eros.
                     </p>
                     <footer class="{{ site.css_prefix }}-comment__footer">
                        <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
                           <li class="{{ site.css_prefix }}-list__item">
                              <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
                           </li>
                           <li class="{{ site.css_prefix }}-list__item">
                              <small class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">15:25</small>
                           </li>
                        </ul>
                     </footer>
                  </div>
                  <div class="{{ site.css_prefix }}-media__actions">
                     <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
                        <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
                        <span class="{{ site.css_prefix }}-assistive-text">More options</span>
                     </button>
                  </div>
               </article>
            </li>
            <li>
               <article class="{{ site.css_prefix }}-comment {{ site.css_prefix }}-media">
                  <div class="{{ site.css_prefix }}-media__figure">
                     <a href="#">
                        <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="{{ site.css_prefix }}-media__body">
                     <header class="{{ site.css_prefix }}-comment__header">
                        <h4 class="{{ site.css_prefix }}-text">
                           <a href="#">Anders</a>
                        </h4>
                     </header>
                     <p class="{{ site.css_prefix }}-text">
                        Aenean aliquet sem eget velit tincidunt ullamcorper. Donec aliquet, quam vitae cursus aliquet, lorem nunc efficitur nulla, ullamcorper placerat dui massa at eros.
                     </p>
                     <footer class="{{ site.css_prefix }}-comment__footer">
                        <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
                           <li class="{{ site.css_prefix }}-list__item">
                              <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
                           </li>
                           <li class="{{ site.css_prefix }}-list__item">
                              <small class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">17:39</small>
                           </li>
                        </ul>
                     </footer>
                  </div>
                  <div class="{{ site.css_prefix }}-media__actions">
                     <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
                        <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
                        <span class="{{ site.css_prefix }}-assistive-text">More options</span>
                     </button>
                  </div>
               </article>
            </li>
         </ul>
         <div class="{{ site.css_prefix }}-comments__comment {{ site.css_prefix }}-media"> 
            <div class="{{ site.css_prefix }}-media__figure">
               <a href="#">
                  <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--tiny" src="https://placehold.it/400x400.png">
               </a>
            </div>
            <div class="{{ site.css_prefix }}-media__body">
               <input type="text" class="{{ site.css_prefix }}-form-input" />
            </div>
            <div class="{{ site.css_prefix }}-media__actions">
               <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Comment</button>
            </div>
         </div>
      </div>
   </div>
</article>
{% endexample %}

## Shared post ##
{% example html %}
<article class="{{ site.css_prefix }}-post">
   <header class="{{ site.css_prefix }}-post__header {{ site.css_prefix }}-media">
      <div class="{{ site.css_prefix }}-media__figure">
         <a href="#">
            <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/250x250">
         </a>
      </div>
      <div class="{{ site.css_prefix }}-media__body">
         <h3 class="{{ site.css_prefix }}-text">
            <a href="#">Erik</a> <small class="{{ site.css_prefix }}-text--muted">shared</small> <a href="#">Malin's</a> <small class="{{ site.css_prefix }}-text--muted">post</small>
            <small class="{{ site.css_prefix }}-text--muted">16:34</small>
         </h3>
         <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Design</p>
      </div>
      <div class="{{ site.css_prefix }}-media__actions">
         <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
            <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
            <span class="{{ site.css_prefix }}-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="{{ site.css_prefix }}-post__entry">
      <p class="{{ site.css_prefix }}-text">
         Lorem ipsum dolor sit amet
      </p>
   </div>
   <div class="{{ site.css_prefix }}-post__shared">
      <blockquote class="{{ site.css_prefix }}-post">
         <header class="{{ site.css_prefix }}-post__header {{ site.css_prefix }}-media">
            <div class="{{ site.css_prefix }}-media__figure">
               <a href="#">
                  <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="{{ site.css_prefix }}-media__body">
               <h3 class="{{ site.css_prefix }}-text">
                  <a href="#">Malin</a>
                  <small class="{{ site.css_prefix }}-text--muted">17:29</small>
               </h3>
               <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Design</p>
            </div>
         </header>
         <div class="{{ site.css_prefix }}-post__entry">
            <p class="{{ site.css_prefix }}-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
            </p>
         </div>
      </blockquote>
   </div>
   <footer class="{{ site.css_prefix }}-post__footer">
      <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
         <li class="{{ site.css_prefix }}-list__item">
            <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
         </li>
         <li class="{{ site.css_prefix }}-list__item">
            <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Share</a>
         </li>
         <li class="{{ site.css_prefix }}-list__item">
            <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#comments3" data-{{ site.css_prefix }}-collapse aria-controls="comments3">Comment (0)</a>
         </li>
      </ul>
   </footer>
   <div class="{{ site.css_prefix }}-comments {{ site.css_prefix }}-collapse" id="comments3" aria-expanded="false">
      <div class="{{ site.css_prefix }}-comments__wrapper">
         <ul class="{{ site.css_prefix }}-comments__list {{ site.css_prefix }}-list">
         </ul>
         <div class="{{ site.css_prefix }}-comments__comment {{ site.css_prefix }}-media"> 
            <div class="{{ site.css_prefix }}-media__figure">
               <a href="#">
                  <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--tiny" src="https://placehold.it/400x400.png">
               </a>
            </div>
            <div class="{{ site.css_prefix }}-media__body">
               <input type="text" class="{{ site.css_prefix }}-form-input" />
            </div>
            <div class="{{ site.css_prefix }}-media__actions">
               <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Comment</button>
            </div>
         </div>
      </div>
   </div>
</article>
{% endexample %}

## Feed list ##
{% example html %}
<ul class="{{ site.css_prefix }}-feed {{ site.css_prefix }}-list">
   <li class="{{ site.css_prefix }}-feed__item">
      <article class="{{ site.css_prefix }}-post">
         <header class="{{ site.css_prefix }}-post__header {{ site.css_prefix }}-media">
            <div class="{{ site.css_prefix }}-media__figure">
               <a href="#">
                  <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="{{ site.css_prefix }}-media__body">
               <h3 class="{{ site.css_prefix }}-text">
                  <a href="#">Erik</a>
                  <small class="{{ site.css_prefix }}-text--muted">16:34</small>
               </h3>
               <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Design</p>
            </div>
            <div class="{{ site.css_prefix }}-media__actions">
               <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
                  <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
                  <span class="{{ site.css_prefix }}-assistive-text">More options</span>
               </button>
            </div>
         </header>
         <div class="{{ site.css_prefix }}-post__entry">
            <p class="{{ site.css_prefix }}-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
            </p>
         </div>
         <footer class="{{ site.css_prefix }}-post__footer">
            <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
               <li class="{{ site.css_prefix }}-list__item">
                  <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Share</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#comments4" data-{{ site.css_prefix }}-collapse aria-controls="comments4">Comment (2)</a>
               </li>
            </ul>
         </footer>
         <div class="{{ site.css_prefix }}-comments {{ site.css_prefix }}-collapse {{ site.css_prefix }}-collapse--show" id="comments4" aria-expanded="true">
            <div class="{{ site.css_prefix }}-comments__wrapper">
               <ul class="{{ site.css_prefix }}-comments__list {{ site.css_prefix }}-list">
                  <li>
                     <article class="{{ site.css_prefix }}-comment {{ site.css_prefix }}-media">
                        <div class="{{ site.css_prefix }}-media__figure">
                           <a href="#">
                              <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
                           </a>
                        </div>
                        <div class="{{ site.css_prefix }}-media__body">
                           <header class="{{ site.css_prefix }}-comment__header">
                              <h4 class="{{ site.css_prefix }}-text">
                                 <a href="#">Anders</a>
                              </h4>
                           </header>
                           <p class="{{ site.css_prefix }}-text">
                              Aenean aliquet sem eget velit tincidunt ullamcorper. Donec aliquet, quam vitae cursus aliquet, lorem nunc efficitur nulla, ullamcorper placerat dui massa at eros.
                           </p>
                           <footer class="{{ site.css_prefix }}-comment__footer">
                              <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
                                 <li class="{{ site.css_prefix }}-list__item">
                                    <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
                                 </li>
                                 <li class="{{ site.css_prefix }}-list__item">
                                    <small class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">17:39</small>
                                 </li>
                              </ul>
                           </footer>
                        </div>
                        <div class="{{ site.css_prefix }}-media__actions">
                           <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
                              <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
                              <span class="{{ site.css_prefix }}-assistive-text">More options</span>
                           </button>
                        </div>
                     </article>
                  </li>
                  <li>
                     <article class="{{ site.css_prefix }}-comment {{ site.css_prefix }}-media">
                        <div class="{{ site.css_prefix }}-media__figure">
                           <a href="#">
                              <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/400x400.png">
                           </a>
                        </div>
                        <div class="{{ site.css_prefix }}-media__body">
                           <header class="{{ site.css_prefix }}-comment__header">
                              <h4 class="{{ site.css_prefix }}-text">
                                 <a href="#">Emma</a>
                              </h4>
                           </header>
                           <p class="{{ site.css_prefix }}-text">
                              Aenean aliquet sem eget velit tincidunt ullamcorper. Donec aliquet, quam vitae cursus aliquet, lorem nunc efficitur nulla, ullamcorper placerat dui massa at eros.
                           </p>
                           <footer class="{{ site.css_prefix }}-comment__footer">
                              <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
                                 <li class="{{ site.css_prefix }}-list__item">
                                    <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
                                 </li>
                                 <li class="{{ site.css_prefix }}-list__item">
                                    <small class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">19:24</small>
                                 </li>
                              </ul>
                           </footer>
                        </div>
                        <div class="{{ site.css_prefix }}-media__actions">
                           <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
                              <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
                              <span class="{{ site.css_prefix }}-assistive-text">More options</span>
                           </button>
                        </div>
                     </article>
                  </li>
               </ul>
               <div class="{{ site.css_prefix }}-comments__comment {{ site.css_prefix }}-media"> 
                  <div class="{{ site.css_prefix }}-media__figure">
                     <a href="#">
                        <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--tiny" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="{{ site.css_prefix }}-media__body">
                     <input type="text" class="{{ site.css_prefix }}-form-input" />
                  </div>
                  <div class="{{ site.css_prefix }}-media__actions">
                     <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Comment</button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
   <li class="{{ site.css_prefix }}-feed__item">
      <article class="{{ site.css_prefix }}-post">
         <header class="{{ site.css_prefix }}-post__header {{ site.css_prefix }}-media">
            <div class="{{ site.css_prefix }}-media__figure">
               <a href="#">
                  <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="{{ site.css_prefix }}-media__body">
               <h3 class="{{ site.css_prefix }}-text">
                  <a href="#">Robin</a>
                  <small class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">17:28</small>
               </h3>
               <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Design</p>
            </div>
            <div class="{{ site.css_prefix }}-media__actions">
               <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
                  <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
                  <span class="{{ site.css_prefix }}-assistive-text">More options</span>
               </button>
            </div>
         </header>
         <div class="{{ site.css_prefix }}-post__entry">
            <p class="{{ site.css_prefix }}-text">
               Duis eget eros urna. Maecenas rutrum tortor eget elit mattis, pretium aliquet sapien accumsan. Nunc congue vehicula mi sit amet dictum. Aenean aliquam ex lorem, sit amet laoreet justo ultrices quis.
            </p>
         </div>
         <footer class="{{ site.css_prefix }}-post__footer">
            <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
               <li class="{{ site.css_prefix }}-list__item">
                  <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Share</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#comments5" data-{{ site.css_prefix }}-collapse aria-controls="comments5">Comment (0)</a>
               </li>
            </ul>
         </footer>
         <div class="{{ site.css_prefix }}-comments {{ site.css_prefix }}-collapse" id="comments5" aria-expanded="false">
            <div class="{{ site.css_prefix }}-comments__wrapper">
               <ul class="{{ site.css_prefix }}-comments__list {{ site.css_prefix }}-list">
               </ul>
               <div class="{{ site.css_prefix }}-comments__comment {{ site.css_prefix }}-media"> 
                  <div class="{{ site.css_prefix }}-media__figure">
                     <a href="#">
                        <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--tiny" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="{{ site.css_prefix }}-media__body">
                     <input type="text" class="{{ site.css_prefix }}-form-input" />
                  </div>
                  <div class="{{ site.css_prefix }}-media__actions">
                     <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Comment</button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
   <li class="{{ site.css_prefix }}-feed__item">
      <article class="{{ site.css_prefix }}-post">
         <header class="{{ site.css_prefix }}-post__header {{ site.css_prefix }}-media">
            <div class="{{ site.css_prefix }}-media__figure">
               <a href="#">
                  <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--small" src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="{{ site.css_prefix }}-media__body">
               <h3 class="{{ site.css_prefix }}-text">
                  <a href="#">Ebba</a>
                  <small class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">19:05</small>
               </h3>
               <p class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--muted">Design</p>
            </div>
            <div class="{{ site.css_prefix }}-media__actions">
               <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--dropdown {{ site.css_prefix }}-dropdown__toggle" aria-haspopup="true" title="More options">
                  <i class="{{ site.css_prefix }}-icon--dropdown-menu" aria-hidden="true"></i>
                  <span class="{{ site.css_prefix }}-assistive-text">More post options</span>
               </button>
            </div>
         </header>
         <div class="{{ site.css_prefix }}-post__entry">
            <p class="{{ site.css_prefix }}-text">
               Nulla faucibus ultrices ullamcorper. Duis gravida malesuada commodo. Praesent ornare id nisl non suscipit. 
            </p>
         </div>
         <footer class="{{ site.css_prefix }}-post__footer">
            <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
               <li class="{{ site.css_prefix }}-list__item">
                  <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Like (0)</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#">Share</a>
               </li>
               <li class="{{ site.css_prefix }}-list__item">
                  <a class="{{ site.css_prefix }}-text {{ site.css_prefix }}-text--small {{ site.css_prefix }}-text--muted" role="button" href="#comments6" data-{{ site.css_prefix }}-collapse aria-controls="comments6">Comment (0)</a>
               </li>
            </ul>
         </footer>
         <div class="{{ site.css_prefix }}-comments {{ site.css_prefix }}-collapse" id="comments6" aria-expanded="false">
            <div class="{{ site.css_prefix }}-comments__wrapper">
               <ul class="{{ site.css_prefix }}-comments__list {{ site.css_prefix }}-list">
               </ul>
               <div class="{{ site.css_prefix }}-comments__comment {{ site.css_prefix }}-media"> 
                  <div class="{{ site.css_prefix }}-media__figure">
                     <a href="#">
                        <img class="{{ site.css_prefix }}-image {{ site.css_prefix }}-image--tiny" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="{{ site.css_prefix }}-media__body">
                     <input type="text" class="{{ site.css_prefix }}-form-input" />
                  </div>
                  <div class="{{ site.css_prefix }}-media__actions">
                     <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Comment</button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
</ul>
{% endexample %}
