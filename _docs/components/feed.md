---
layout: docs
title: Feed
description: Feed description
group: components
---
## Simple post with embedded attachment ##
{% example html %}
<article class="env-post">
   <header class="env-post__header env-media">
      <div class="env-media__figure">
         <a href="#">
            <img class="env-image env-image--small" src="https://placehold.it/250x250">
         </a>
      </div>
      <div class="env-media__body">
         <h3 class="env-text">
            <a href="#">Erik</a>
            <small class="env-text--muted">16:34</small>
         </h3>
         <p class="env-text env-text--muted">Design</p>
      </div>
      <div class="env-media__actions">
         <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
            <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
            <span class="env-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="env-post__entry">
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
      </p>
   </div>
   <div class="env-post__attachment">
      <div class="env-embedded">
         <img class="env-embedded__img" alt="Image alternative" src="https://placehold.it/730x100.png?text=embedded%20image">
         <div class="env-embedded__block">
            <h4 class="env-text">Lorem ipsum</h4>
            <p class="env-text env-text--muted env-embedded__text">Bacon ipsum dolor amet beef cupim brisket pork turducken salami pig drumstick chuck ball tip biltong shoulder.</p>
         </div>
      </div>
   </div>
   <footer class="env-post__footer">
      <ul class="env-list env-list--horizontal env-list-dividers--left">
         <li class="env-list__item">
            <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
         </li>
         <li class="env-list__item">
            <a class="env-text env-text--small env-text--muted" role="button" href="#">Share</a>
         </li>
         <li class="env-list__item">
            <a class="env-text env-text--small env-text--muted" role="button" href="#comments" data-env-collapse aria-controls="comments">Comment (0)</a>
         </li>
      </ul>
   </footer>
   <div class="env-comments env-collapse" id="comments" aria-expanded="false">
      <div class="env-comments__wrapper">
         <ul class="env-comments__list env-list">
         </ul>
         <div class="env-comments__comment env-media"> 
            <div class="env-media__figure">
               <a href="#">
                  <img class="env-image env-image--tiny" src="https://placehold.it/400x400.png">
               </a>
            </div>
            <div class="env-media__body">
               <input type="text" class="env-form-input" />
            </div>
            <div class="env-media__actions">
               <button type="button" class="env-button env-button--primary">Comment</button>
            </div>
         </div>
      </div>
   </div>
</article>
{% endexample %}

## Comment ##
{% example html %}
<article class="env-comment env-media">
   <div class="env-media__figure">
      <a href="#">
         <img class="env-image env-image--small" src="https://placehold.it/400x400.png">
      </a>
   </div>
   <div class="env-media__body">
      <header class="env-comment__header">
         <h3 class="env-text">
            <a href="#">Emma</a>
         </h3>
      </header>
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet
      </p>
      <footer class="env-comment__footer">
         <ul class="env-list env-list--horizontal env-list-dividers--left">
            <li class="env-list__item">
               <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
            </li>
            <li class="env-list__item">
               <small class="env-text--muted">09:30</small>
            </li>
         </ul>
      </footer>
   </div>
   <div class="env-media__actions">
      <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
         <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
         <span class="env-assistive-text">More options</span>
      </button>
   </div>
</article>
{% endexample %}

## Post with comments ##
{% example html %}
<article class="env-post">
   <header class="env-post__header env-media">
      <div class="env-media__figure">
         <a href="#">
            <img class="env-image env-image--small" src="https://placehold.it/250x250">
         </a>
      </div>
      <div class="env-media__body">
         <h3 class="env-text">
            <a href="#">Erik</a>
            <small class="env-text--muted">16:34</small>
         </h3>
         <p class="env-text env-text--muted">Design</p>
      </div>
      <div class="env-media__actions">
         <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
            <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
            <span class="env-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="env-post__entry">
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
      </p>
   </div>
   <footer class="env-post__footer">
      <ul class="env-list env-list--horizontal env-list-dividers--left">
         <li class="env-list__item">
            <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
         </li>
         <li class="env-list__item">
            <a class="env-text env-text--small env-text--muted" role="button" href="#">Share</a>
         </li>
         <li class="env-list__item">
            <a class="env-text env-text--small env-text--muted" role="button" href="#comments2" data-env-collapse aria-controls="comments2">Comment (3)</a>
         </li>
      </ul>
   </footer>
   <div class="env-comments env-collapse env-collapse--show" id="comments2" aria-expanded="true">
      <div class="env-comments__wrapper">
         <ul class="env-comments__list env-list">
            <li>
               <article class="env-comment env-media">
                  <div class="env-media__figure">
                     <a href="#">
                        <img class="env-image env-image--small" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="env-media__body">
                     <header class="env-comment__header">
                        <h4 class="env-text">
                           <a href="#">Malin</a>
                        </h4>
                     </header>
                     <p class="env-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet
                     </p>
                     <footer class="env-comment__footer">
                        <ul class="env-list env-list--horizontal env-list-dividers--left">
                           <li class="env-list__item">
                              <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
                           </li>
                           <li class="env-list__item">
                              <small class="env-text env-text--muted">10:27</small>
                           </li>
                        </ul>
                     </footer>
                  </div>
                  <div class="env-media__actions">
                     <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
                        <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
                        <span class="env-assistive-text">More options</span>
                     </button>
                  </div>
               </article>
            </li>
            <li>
               <article class="env-comment env-media">
                  <div class="env-media__figure">
                     <a href="#">
                        <img class="env-image env-image--small" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="env-media__body">
                     <header class="env-comment__header">
                        <h4 class="env-text">
                           <a href="#">Robin</a>
                        </h4>
                     </header>
                     <p class="env-text">
                        Aenean aliquet sem eget velit tincidunt ullamcorper. Donec aliquet, quam vitae cursus aliquet, lorem nunc efficitur nulla, ullamcorper placerat dui massa at eros.
                     </p>
                     <footer class="env-comment__footer">
                        <ul class="env-list env-list--horizontal env-list-dividers--left">
                           <li class="env-list__item">
                              <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
                           </li>
                           <li class="env-list__item">
                              <small class="env-text env-text--muted">15:25</small>
                           </li>
                        </ul>
                     </footer>
                  </div>
                  <div class="env-media__actions">
                     <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
                        <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
                        <span class="env-assistive-text">More options</span>
                     </button>
                  </div>
               </article>
            </li>
            <li>
               <article class="env-comment env-media">
                  <div class="env-media__figure">
                     <a href="#">
                        <img class="env-image env-image--small" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="env-media__body">
                     <header class="env-comment__header">
                        <h4 class="env-text">
                           <a href="#">Anders</a>
                        </h4>
                     </header>
                     <p class="env-text">
                        Aenean aliquet sem eget velit tincidunt ullamcorper. Donec aliquet, quam vitae cursus aliquet, lorem nunc efficitur nulla, ullamcorper placerat dui massa at eros.
                     </p>
                     <footer class="env-comment__footer">
                        <ul class="env-list env-list--horizontal env-list-dividers--left">
                           <li class="env-list__item">
                              <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
                           </li>
                           <li class="env-list__item">
                              <small class="env-text env-text--muted">17:39</small>
                           </li>
                        </ul>
                     </footer>
                  </div>
                  <div class="env-media__actions">
                     <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
                        <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
                        <span class="env-assistive-text">More options</span>
                     </button>
                  </div>
               </article>
            </li>
         </ul>
         <div class="env-comments__comment env-media"> 
            <div class="env-media__figure">
               <a href="#">
                  <img class="env-image env-image--tiny" src="https://placehold.it/400x400.png">
               </a>
            </div>
            <div class="env-media__body">
               <input type="text" class="env-form-input" />
            </div>
            <div class="env-media__actions">
               <button type="button" class="env-button env-button--primary">Comment</button>
            </div>
         </div>
      </div>
   </div>
</article>
{% endexample %}

## Shared post ##
{% example html %}
<article class="env-post">
   <header class="env-post__header env-media">
      <div class="env-media__figure">
         <a href="#">
            <img class="env-image env-image--small" src="https://placehold.it/250x250">
         </a>
      </div>
      <div class="env-media__body">
         <h3 class="env-text">
            <a href="#">Erik</a> <small class="env-text--muted">shared</small> <a href="#">Malin's</a> <small class="env-text--muted">post</small>
            <small class="env-text--muted">16:34</small>
         </h3>
         <p class="env-text env-text--muted">Design</p>
      </div>
      <div class="env-media__actions">
         <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
            <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
            <span class="env-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="env-post__entry">
      <p class="env-text">
         Lorem ipsum dolor sit amet
      </p>
   </div>
   <div class="env-post__shared">
      <blockquote class="env-post">
         <header class="env-post__header env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img class="env-image env-image--small" src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="env-media__body">
               <h3 class="env-text">
                  <a href="#">Malin</a>
                  <small class="env-text--muted">17:29</small>
               </h3>
               <p class="env-text env-text--muted">Design</p>
            </div>
         </header>
         <div class="env-post__entry">
            <p class="env-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
            </p>
         </div>
      </blockquote>
   </div>
   <footer class="env-post__footer">
      <ul class="env-list env-list--horizontal env-list-dividers--left">
         <li class="env-list__item">
            <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
         </li>
         <li class="env-list__item">
            <a class="env-text env-text--small env-text--muted" role="button" href="#">Share</a>
         </li>
         <li class="env-list__item">
            <a class="env-text env-text--small env-text--muted" role="button" href="#comments3" data-env-collapse aria-controls="comments3">Comment (0)</a>
         </li>
      </ul>
   </footer>
   <div class="env-comments env-collapse" id="comments3" aria-expanded="false">
      <div class="env-comments__wrapper">
         <ul class="env-comments__list env-list">
         </ul>
         <div class="env-comments__comment env-media"> 
            <div class="env-media__figure">
               <a href="#">
                  <img class="env-image env-image--tiny" src="https://placehold.it/400x400.png">
               </a>
            </div>
            <div class="env-media__body">
               <input type="text" class="env-form-input" />
            </div>
            <div class="env-media__actions">
               <button type="button" class="env-button env-button--primary">Comment</button>
            </div>
         </div>
      </div>
   </div>
</article>
{% endexample %}

## Feed list ##
{% example html %}
<ul class="env-feed env-list">
   <li class="env-feed__item">
      <article class="env-post">
         <header class="env-post__header env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img class="env-image env-image--small" src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="env-media__body">
               <h3 class="env-text">
                  <a href="#">Erik</a>
                  <small class="env-text--muted">16:34</small>
               </h3>
               <p class="env-text env-text--muted">Design</p>
            </div>
            <div class="env-media__actions">
               <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
                  <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
                  <span class="env-assistive-text">More options</span>
               </button>
            </div>
         </header>
         <div class="env-post__entry">
            <p class="env-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.
            </p>
         </div>
         <footer class="env-post__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
               </li>
               <li class="env-list__item">
                  <a class="env-text env-text--small env-text--muted" role="button" href="#">Share</a>
               </li>
               <li class="env-list__item">
                  <a class="env-text env-text--small env-text--muted" role="button" href="#comments4" data-env-collapse aria-controls="comments4">Comment (2)</a>
               </li>
            </ul>
         </footer>
         <div class="env-comments env-collapse env-collapse--show" id="comments4" aria-expanded="true">
            <div class="env-comments__wrapper">
               <ul class="env-comments__list env-list">
                  <li>
                     <article class="env-comment env-media">
                        <div class="env-media__figure">
                           <a href="#">
                              <img class="env-image env-image--small" src="https://placehold.it/400x400.png">
                           </a>
                        </div>
                        <div class="env-media__body">
                           <header class="env-comment__header">
                              <h4 class="env-text">
                                 <a href="#">Anders</a>
                              </h4>
                           </header>
                           <p class="env-text">
                              Aenean aliquet sem eget velit tincidunt ullamcorper. Donec aliquet, quam vitae cursus aliquet, lorem nunc efficitur nulla, ullamcorper placerat dui massa at eros.
                           </p>
                           <footer class="env-comment__footer">
                              <ul class="env-list env-list--horizontal env-list-dividers--left">
                                 <li class="env-list__item">
                                    <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
                                 </li>
                                 <li class="env-list__item">
                                    <small class="env-text env-text--muted">17:39</small>
                                 </li>
                              </ul>
                           </footer>
                        </div>
                        <div class="env-media__actions">
                           <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
                              <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
                              <span class="env-assistive-text">More options</span>
                           </button>
                        </div>
                     </article>
                  </li>
                  <li>
                     <article class="env-comment env-media">
                        <div class="env-media__figure">
                           <a href="#">
                              <img class="env-image env-image--small" src="https://placehold.it/400x400.png">
                           </a>
                        </div>
                        <div class="env-media__body">
                           <header class="env-comment__header">
                              <h4 class="env-text">
                                 <a href="#">Emma</a>
                              </h4>
                           </header>
                           <p class="env-text">
                              Aenean aliquet sem eget velit tincidunt ullamcorper. Donec aliquet, quam vitae cursus aliquet, lorem nunc efficitur nulla, ullamcorper placerat dui massa at eros.
                           </p>
                           <footer class="env-comment__footer">
                              <ul class="env-list env-list--horizontal env-list-dividers--left">
                                 <li class="env-list__item">
                                    <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
                                 </li>
                                 <li class="env-list__item">
                                    <small class="env-text env-text--muted">19:24</small>
                                 </li>
                              </ul>
                           </footer>
                        </div>
                        <div class="env-media__actions">
                           <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
                              <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
                              <span class="env-assistive-text">More options</span>
                           </button>
                        </div>
                     </article>
                  </li>
               </ul>
               <div class="env-comments__comment env-media"> 
                  <div class="env-media__figure">
                     <a href="#">
                        <img class="env-image env-image--tiny" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="env-media__body">
                     <input type="text" class="env-form-input" />
                  </div>
                  <div class="env-media__actions">
                     <button type="button" class="env-button env-button--primary">Comment</button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
   <li class="env-feed__item">
      <article class="env-post">
         <header class="env-post__header env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img class="env-image env-image--small" src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="env-media__body">
               <h3 class="env-text">
                  <a href="#">Robin</a>
                  <small class="env-text env-text--muted">17:28</small>
               </h3>
               <p class="env-text env-text--muted">Design</p>
            </div>
            <div class="env-media__actions">
               <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
                  <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
                  <span class="env-assistive-text">More options</span>
               </button>
            </div>
         </header>
         <div class="env-post__entry">
            <p class="env-text">
               Duis eget eros urna. Maecenas rutrum tortor eget elit mattis, pretium aliquet sapien accumsan. Nunc congue vehicula mi sit amet dictum. Aenean aliquam ex lorem, sit amet laoreet justo ultrices quis.
            </p>
         </div>
         <footer class="env-post__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
               </li>
               <li class="env-list__item">
                  <a class="env-text env-text--small env-text--muted" role="button" href="#">Share</a>
               </li>
               <li class="env-list__item">
                  <a class="env-text env-text--small env-text--muted" role="button" href="#comments5" data-env-collapse aria-controls="comments5">Comment (0)</a>
               </li>
            </ul>
         </footer>
         <div class="env-comments env-collapse" id="comments5" aria-expanded="false">
            <div class="env-comments__wrapper">
               <ul class="env-comments__list env-list">
               </ul>
               <div class="env-comments__comment env-media"> 
                  <div class="env-media__figure">
                     <a href="#">
                        <img class="env-image env-image--tiny" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="env-media__body">
                     <input type="text" class="env-form-input" />
                  </div>
                  <div class="env-media__actions">
                     <button type="button" class="env-button env-button--primary">Comment</button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
   <li class="env-feed__item">
      <article class="env-post">
         <header class="env-post__header env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img class="env-image env-image--small" src="https://placehold.it/250x250">
               </a>
            </div>
            <div class="env-media__body">
               <h3 class="env-text">
                  <a href="#">Ebba</a>
                  <small class="env-text env-text--muted">19:05</small>
               </h3>
               <p class="env-text env-text--muted">Design</p>
            </div>
            <div class="env-media__actions">
               <button type="button" class="env-button env-button--dropdown env-dropdown__toggle" aria-haspopup="true" title="More options">
                  <i class="env-icon--dropdown-menu" aria-hidden="true"></i>
                  <span class="env-assistive-text">More post options</span>
               </button>
            </div>
         </header>
         <div class="env-post__entry">
            <p class="env-text">
               Nulla faucibus ultrices ullamcorper. Duis gravida malesuada commodo. Praesent ornare id nisl non suscipit. 
            </p>
         </div>
         <footer class="env-post__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <a class="env-text env-text--small env-text--muted" role="button" href="#">Like (0)</a>
               </li>
               <li class="env-list__item">
                  <a class="env-text env-text--small env-text--muted" role="button" href="#">Share</a>
               </li>
               <li class="env-list__item">
                  <a class="env-text env-text--small env-text--muted" role="button" href="#comments6" data-env-collapse aria-controls="comments6">Comment (0)</a>
               </li>
            </ul>
         </footer>
         <div class="env-comments env-collapse" id="comments6" aria-expanded="false">
            <div class="env-comments__wrapper">
               <ul class="env-comments__list env-list">
               </ul>
               <div class="env-comments__comment env-media"> 
                  <div class="env-media__figure">
                     <a href="#">
                        <img class="env-image env-image--tiny" src="https://placehold.it/400x400.png">
                     </a>
                  </div>
                  <div class="env-media__body">
                     <input type="text" class="env-form-input" />
                  </div>
                  <div class="env-media__actions">
                     <button type="button" class="env-button env-button--primary">Comment</button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
</ul>
{% endexample %}
