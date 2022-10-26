---
title: Branding examples
---

Envision components using Brand colors and UI Text

## Brand button

<button type="button" class="env-button env-button--brand">Default</button>
<button type="button" class="env-button env-button--ghost env-button--brand">Default</button>

## Brand badge

<span class="env-badge env-badge--brand">Brand</span>

## Dropdown menu

<div id="example4" class="env-dropdown">
   <button
      id="example4-button"
      class="env-button env-button--brand env-button--icon env-button--icon-small env-button--icon-after"
      aria-expanded="false"
      aria-haspopup="true"
      data-dropdown
      data-dropdown-placement-body
      type="button"
      data-target="#example4"
   >
      Dropdown in body
      <svg class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-angle-down"></use>
      </svg>
   </button>
   <ul
      class="env-dropdown__menu env-dropdown__menu--large"
      aria-labelledby="example4-button"
   >
      <li>
         <a href="#" class="env-dropdown__item">Action</a>
      </li>
      <li>
         <a href="#" class="env-dropdown__item">Properties</a>
      </li>
      <li>
         <a href="#" class="env-dropdown__item">Settings</a>
      </li>
   </ul>
</div>

## Tabs

<div class="env-tabs example-tabs">
   <ul class="env-tabs__nav env-tabs__nav--border-bottom" role="tablist">
      <li role="tab" aria-controls="panel1" aria-selected="true">Tab 1</li>
      <li role="tab" aria-controls="panel2" aria-selected="false">Tab 2</li>
      <li role="tab" aria-controls="panel3" aria-selected="false">Tab 3</li>
   </ul>
</div>
<div id="panel1" class="example-panel" role="tabpanel" aria-hidden="false">
   1
</div>
<div id="panel2" class="example-panel" role="tabpanel" aria-hidden="true">
   2
</div>
<div id="panel3" class="example-panel" role="tabpanel" aria-hidden="true">
   3
</div>

## Card

<div class="env-shadow-small env-border env-p-around--large">
   <div class="card__header">
       <p class="env-ui-text-heading">Mina grupper</p>
   </div>
   <ul class="env-list env-m-top--large listing groups">
       <li class="env-flex">
           <div>
               <img
            class="env-card__image env-profile-image env-profile-image--small"
            src="https://envisionui.io/placeholders/profile/200x200/01.jpeg"
            alt="Example profile image"
         />
           </div>
           <div class="env-p-left--large">
               <p class="env-ui-text-subheading"><a href="#">Frukostklubben serverar pölsa</a></p>
               <p class="env-ui-text-caption">Senast aktiv 3 dagar</p>
               <p class="env-ui-text-caption">Administratör</p>
       </div></li>
       <li class="env-flex">
           <div>
               <img
            class="env-card__image env-profile-image env-profile-image--small"
            src="https://envisionui.io/placeholders/profile/200x200/02.jpeg"
            alt="Example profile image"
         />
           </div>
           <div class="env-p-left--large">
               <p class="env-ui-text-subheading"><a href="#">Gaming på jobbet</a></p>
               <p class="env-ui-text-caption">Senast aktiv 3 dagar</p>
               <p class="env-ui-text-caption">Administratör</p>
       </div></li>
       <li class="env-flex">
           <div>
               <img
            class="env-card__image env-profile-image env-profile-image--small"
            src="https://envisionui.io/placeholders/profile/200x200/03.jpeg"
            alt="Example profile image"
         />
           </div>
           <div class="env-p-left--large">
               <p class="env-ui-text-subheading"><a href="#">I en annan del av världen</a></p>
               <p class="env-ui-text-caption">Senast aktiv 3 dagar</p>
            </div>
      </li>
   </ul>
</div>

## Popover

<div class="env-popover" data-popper-placement="top">
   <div class="env-popover__arrow"></div>
   <div class="env-popover__header">
      <h4 class="env-ui-text-overline env-popover__header__title">Popover</h4>
   </div>
   <div class="env-popover__content">
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum
         nunc bibendum laoreet malesuada. Proin eget augue tortor. Sed bibendum
         cursus eros, vitae mattis leo laoreet eget. Cras luctus semper
         facilisis. Aliquam diam risus, tincidunt vitae erat sed, lobortis
         pretium magna. Donec sollicitudin lorem eget imperdiet auctor.
      </p>
   </div>
</div>

### Poll

<div class="example-progress">
   <p class="env-text env-m-bottom--large">
      Lorem ipsum lectus molestie vivamus?
   </p>
   <div class="env-progress-poll" title="Number of votes: 5">
      <div
         class="env-progress-poll__bar"
         role="progressbar"
         aria-valuemin="0"
         aria-valuemax="100"
         aria-valuenow="10"
         style="width: 10%;"
      ></div>
      <div class="env-progress-poll__label">Pellentesque rutrum duis</div>
      <div class="env-progress-poll__value">10 %</div>
   </div>
   <div
      class="env-progress-poll env-progress-poll--highlighted"
      title="Number of votes: 29"
   >
      <div
         class="env-progress-poll__bar"
         role="progressbar"
         aria-valuemin="0"
         aria-valuemax="100"
         aria-valuenow="58"
         style="width: 58%;"
      ></div>
      <div class="env-progress-poll__label">Diam bibendum</div>
      <div class="env-progress-poll__value">60 %</div>
   </div>
   <div class="env-progress-poll" title="Number of votes: 16">
      <div
         class="env-progress-poll__bar"
         role="progressbar"
         aria-valuemin="0"
         aria-valuemax="100"
         aria-valuenow="32"
         style="width: 32%;"
      ></div>
      <div class="env-progress-poll__label">
         Nibh urna eu vitae sem donec in sem tellus ipsum
         <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="env-progress-poll__icon"
         >
            <title>Your vote</title>
            <use
               xlink:href="/sitevision/envision-icons.svg#icon-check-done"
            ></use>
         </svg>
      </div>
      <div class="env-progress-poll__value">30 %</div>
   </div>
</div>
