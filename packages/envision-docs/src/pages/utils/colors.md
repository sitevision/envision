---
title: Colors
---

## Block colors

Preset color combinations, use for larger blocks oc content.

```html
<div class="example-blocks">
   <div class="example-block env-block-primary env-block--border">
      <h2>Primary</h2>
      <p>Bacon ipsum dolor amet beef cupim brisket pork turducken.</p>
      <div class="example-block-variants">
         <div
            class="example-block-variant env-block-primary env-block-primary--light"
         >
            Light
         </div>
         <div
            class="example-block-variant env-block-primary env-block-primary--dark"
         >
            Dark
         </div>
      </div>
   </div>

   <div class="example-block env-block-secondary env-block--border">
      <h2>Secondary</h2>
      <p>Bacon ipsum dolor amet beef cupim brisket pork turducken.</p>
      <div class="example-block-variants">
         <div
            class="example-block-variant env-block-secondary env-block-secondary--dark"
         >
            Dark
         </div>
         <div
            class="example-block-variant env-block-secondary env-block-secondary--light"
         >
            Light
         </div>
      </div>
   </div>

   <div class="example-block env-block-tertiary env-block--border">
      <h2>Tertiary</h2>
      <p>Bacon ipsum dolor amet beef cupim brisket pork turducken.</p>
      <div class="example-block-variants">
         <div
            class="example-block-variant env-block-tertiary env-block-tertiary--dark"
         >
            Dark
         </div>
         <div
            class="example-block-variant env-block-tertiary env-block-tertiary--light"
         >
            Light
         </div>
      </div>
   </div>
</div>
```

## Element colors

Element colors are used for elements and components.

<div class="example-element-colors"> 
   <div class="example-element-color example-element-color--primary">
      <p>Primary</p>
      <div class="example-element-color-variants">
         <div class="example-element-color-variant example-element-color-variant--light">Light</div>
         <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
   </div>
<div class="example-element-color example-element-color--secondary">
      <p>Secondary</p>
      <div class="example-element-color-variants">
         <div class="example-element-color-variant example-element-color-variant--light">Light</div>
         <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
   </div>
<div class="example-element-color example-element-color--success">
      <p>Success</p>
      <div class="example-element-color-variants">
         <div class="example-element-color-variant example-element-color-variant--light">Light</div>
         <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
   </div>
<div class="example-element-color example-element-color--warning">
      <p>Warning</p>
      <div class="example-element-color-variants">
         <div class="example-element-color-variant example-element-color-variant--light">Light</div>
         <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
   </div>
<div class="example-element-color example-element-color--danger">
      <p>Danger</p>
      <div class="example-element-color-variants">
         <div class="example-element-color-variant example-element-color-variant--light">Light</div>
         <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
   </div>
<div class="example-element-color example-element-color--info">
      <p>Info</p>
      <div class="example-element-color-variants">
         <div class="example-element-color-variant example-element-color-variant--light">Light</div>
         <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
   </div>
</div>

```html
<div class="example-elements">
   <div class="example-element-wrapper example-element-wrapper--full">
      <h2>Primary & secondary</h2>

      <div class="example-element">
         <div class="example-element-label">Buttons:</div>
         <button type="button" class="env-button">Secondary</button>
         <button type="button" class="env-button env-button--primary">
            Primary
         </button>
         <button
            type="button"
            class="env-button env-button--primary env-button--ghost"
         >
            Ghost
         </button>
         <br />
         <br />
         <button type="button" class="env-button env-button--invert">
            Invert
         </button>
         <button type="button" class="env-button env-button--link">Link</button>
      </div>

      <div class="example-element">
         <div class="example-element-label">Badge:</div>
         <span class="env-badge">Default</span>
      </div>

      <div class="example-element">
         <div class="example-element-label">Radio button:</div>
         <div class="env-form-radio">
            <input id="radio1" type="radio" name="radios" checked />
            <label for="radio1" class="env-form-element__label">
               <span class="env-form-radio__fake"></span>
               <span class="env-form-radio__label">Alternative</span>
            </label>
         </div>
      </div>

      <div class="example-element">
         <div class="example-element-label">Checkbox:</div>
         <div class="env-checkbox">
            <input type="checkbox" checked name="options" id="cb1" />
            <label class="env-form-element__label" for="cb1">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Checked</span>
            </label>
         </div>
      </div>

      <div class="example-element">
         <div class="example-element-label">Menu:</div>
         <ul class="env-nav env-nav--menubar env-nav--fill" role="menubar">
            <li class="env-nav__item" role="menuitem">
               <a class="env-nav__link" href="#">Item</a>
            </li>
            <li class="env-nav__item" role="menuitem">
               <a class="env-nav__link env-nav__link--active" href="#">Item</a>
            </li>
            <li class="env-nav__item" role="menuitem">
               <a class="env-nav__link" href="#">Item</a>
            </li>
         </ul>
      </div>

      <div class="example-element">
         <div class="example-element-label">Pagination:</div>
         <nav aria-label="Pagination example">
            <ul class="env-pagination">
               <li class="env-pagination__item">
                  <a class="env-pagination__link" href="#">Previous</a>
               </li>
               <li class="env-pagination__item">
                  <a class="env-pagination__link" href="#">1</a>
               </li>
               <li class="env-pagination__item">
                  <a class="env-pagination__link env-is-active" href="#"
                     >2 <span class="env-assistive-text">Current</span></a
                  >
               </li>
               <li class="env-pagination__item">
                  <a class="env-pagination__link" href="#">3</a>
               </li>
               <li class="env-pagination__item">
                  <a class="env-pagination__link" href="#">Next</a>
               </li>
            </ul>
         </nav>
      </div>

      <div class="example-element">
         <div class="example-element-label">Progress bar:</div>
         <div class="example-progress">
            <div class="env-progress">
               <div
                  class="env-progress__bar"
                  role="progressbar"
                  style="width: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
               >
                  25%
               </div>
            </div>
         </div>
      </div>

      <div class="example-element">
         <div class="example-element-label">Tabs:</div>
         <div class="env-tabs example-tabs">
            <ul
               class="env-tabs__nav env-tabs__nav--border-bottom"
               role="tablist"
            >
               <li class="env-tabs__item" role="presentation">
                  <a
                     id="tab1"
                     class="env-tabs__link env-tabs__link--active"
                     href="#panel1"
                     role="tab"
                     aria-controls="panel1"
                     aria-selected="true"
                     tabindex="0"
                     >Tab 1</a
                  >
               </li>
               <li class="env-tabs__item" role="presentation">
                  <a
                     id="tab2"
                     class="env-tabs__link"
                     href="#panel2"
                     role="tab"
                     aria-controls="panel2"
                     aria-selected="false"
                     tabindex="0"
                     >Tab 2</a
                  >
               </li>
            </ul>
         </div>
      </div>
   </div>

   <div class="example-element-wrapper">
      <h2>Success</h2>

      <div class="example-element">
         <div class="example-element-label">Button:</div>
         <button type="button" class="env-button env-button--success">
            Success
         </button>
         <button
            type="button"
            class="env-button env-button--success env-button--ghost"
         >
            Ghost
         </button>
      </div>

      <div class="example-element">
         <div class="example-element-label">Badge:</div>
         <span class="env-badge env-badge--success">Success</span>
      </div>

      <div class="example-element">
         <div class="example-element-label">Alert:</div>
         <div class="env-alert env-alert--success" role="alert">
            <strong>Hello!</strong> this is successful alert
            <button
               type="button"
               class="env-alert__close"
               data-dismiss="alert"
               aria-label="Close"
            >
               &times;
            </button>
         </div>
      </div>
   </div>

   <div class="example-element-wrapper">
      <h2>Warning</h2>

      <div class="example-element">
         <div class="example-element-label">Badge:</div>
         <span class="env-badge env-badge--warning">warning</span>
      </div>

      <div class="example-element">
         <div class="example-element-label">Alert:</div>
         <div class="env-alert env-alert--warning" role="alert">
            <strong>Hello!</strong> this is warning alert
            <button
               type="button"
               class="env-alert__close"
               data-dismiss="alert"
               aria-label="Close"
            >
               &times;
            </button>
         </div>
      </div>
   </div>

   <div class="example-element-wrapper">
      <h2>danger</h2>

      <div class="example-element">
         <div class="example-element-label">Button:</div>
         <button type="button" class="env-button env-button--danger">
            danger
         </button>
         <button
            type="button"
            class="env-button env-button--danger env-button--ghost"
         >
            danger
         </button>
      </div>

      <div class="example-element">
         <div class="example-element-label">Badge:</div>
         <span class="env-badge env-badge--danger">danger</span>
      </div>

      <div class="example-element">
         <div class="example-element-label">Alert:</div>
         <div class="env-alert env-alert--danger" role="alert">
            <strong>Hello!</strong> this is danger alert
            <button
               type="button"
               class="env-alert__close"
               data-dismiss="alert"
               aria-label="Close"
            >
               &times;
            </button>
         </div>
      </div>
   </div>

   <div class="example-element-wrapper">
      <h2>info</h2>

      <div class="example-element">
         <div class="example-element-label">Badge:</div>
         <span class="env-badge env-badge--info">info</span>
      </div>

      <div class="example-element">
         <div class="example-element-label">Alert:</div>
         <div class="env-alert env-alert--info" role="alert">
            <strong>Hello!</strong> this is info alert
            <button
               type="button"
               class="env-alert__close"
               data-dismiss="alert"
               aria-label="Close"
            >
               &times;
            </button>
         </div>
      </div>
   </div>
</div>
```

## Background color

```html
<div class="example-color">
   <div class="env-bg-color--primary env-color--lightest">Primary</div>
   <div class="env-bg-color--success env-color--lightest">Success</div>
   <div class="env-bg-color--info env-color--lightest">Info</div>
   <div class="env-bg-color--warning">Warning</div>
   <div class="env-bg-color--danger env-color--lightest">Danger</div>
   <div class="env-bg-color--hover">Hover</div>
   <div class="env-bg-color--base env-color--lighter">Base</div>
   <div class="env-bg-color--darker env-color--lighter">Darker</div>
   <div class="env-bg-color--dark env-color--lightest">Dark</div>
   <div class="env-bg-color--normal env-color--lightest">Normal</div>
   <div class="env-bg-color--light">Light</div>
   <div class="env-bg-color--lighter">Lighter</div>
   <div class="env-bg-color--lightest">Lightest</div>
</div>
```

## Color

```html
<div class="example-color">
   <p class="env-text env-color--primary">Primary</p>
   <p class="env-text env-color--success">Success</p>
   <p class="env-text env-color--info">Info</p>
   <p class="env-text env-color--warning env-bg-color--dark">Warning</p>
   <p class="env-text env-color--danger">Danger</p>
   <p class="env-text env-color--hover env-bg-color--dark">Hover</p>
   <p class="env-text env-color--base">Base</p>
   <p class="env-text env-color--darker">Darker</p>
   <p class="env-text env-color--dark">Dark</p>
   <p class="env-text env-color--normal">Normal</p>
   <p class="env-text env-color--light env-bg-color--darker">Light</p>
   <p class="env-text env-color--lighter env-bg-color--dark">Lighter</p>
   <p class="env-text env-color--lightest env-bg-color--dark">Lightest</p>
</div>
```

## Background color - Darker / Lighter

`env-bg-color--{color}--{value}`

Valid values for _value_ (%)

-  `80`
-  `60`
-  `40`
-  `20`
-  `10`

```html
<div
   class="example-color env-list--horizontal--fixed env-list--horizontal--fixed--6"
>
   <div class="env-list__item">
      <div class="env-bg-color--primary example-color-size-large"></div>
      <div class="env-bg-color--primary--80 example-color-size"></div>
      <div class="env-bg-color--primary--60 example-color-size"></div>
      <div class="env-bg-color--primary--40 example-color-size"></div>
      <div class="env-bg-color--primary--20 example-color-size"></div>
      <div class="env-bg-color--primary--10 example-color-size"></div>
   </div>
   <div class="env-list__item">
      <div class="env-bg-color--success example-color-size-large"></div>
      <div class="env-bg-color--success--80 example-color-size"></div>
      <div class="env-bg-color--success--60 example-color-size"></div>
      <div class="env-bg-color--success--40 example-color-size"></div>
      <div class="env-bg-color--success--20 example-color-size"></div>
      <div class="env-bg-color--success--10 example-color-size"></div>
   </div>
   <div class="env-list__item">
      <div class="env-bg-color--info example-color-size-large"></div>
      <div class="env-bg-color--info--80 example-color-size"></div>
      <div class="env-bg-color--info--60 example-color-size"></div>
      <div class="env-bg-color--info--40 example-color-size"></div>
      <div class="env-bg-color--info--20 example-color-size"></div>
      <div class="env-bg-color--info--10 example-color-size"></div>
   </div>
   <div class="env-list__item">
      <div class="env-bg-color--warning example-color-size-large"></div>
      <div class="env-bg-color--warning--80 example-color-size"></div>
      <div class="env-bg-color--warning--60 example-color-size"></div>
      <div class="env-bg-color--warning--40 example-color-size"></div>
      <div class="env-bg-color--warning--20 example-color-size"></div>
      <div class="env-bg-color--warning--10 example-color-size"></div>
   </div>
   <div class="env-list__item">
      <div class="env-bg-color--danger example-color-size-large"></div>
      <div class="env-bg-color--danger--80 example-color-size"></div>
      <div class="env-bg-color--danger--60 example-color-size"></div>
      <div class="env-bg-color--danger--40 example-color-size"></div>
      <div class="env-bg-color--danger--20 example-color-size"></div>
      <div class="env-bg-color--danger--10 example-color-size"></div>
   </div>
   <div class="env-list__item">
      <div class="env-bg-color--dark example-color-size-large"></div>
      <div class="env-bg-color--dark--80 example-color-size"></div>
      <div class="env-bg-color--dark--60 example-color-size"></div>
      <div class="env-bg-color--dark--40 example-color-size"></div>
      <div class="env-bg-color--dark--20 example-color-size"></div>
      <div class="env-bg-color--dark--10 example-color-size"></div>
   </div>
</div>
```
