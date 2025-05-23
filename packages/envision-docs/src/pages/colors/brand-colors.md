---
title: Brand colors
description: The “Brand Colors” section defines primary brand hues with contrast-friendly shades for accessibility.
---

An Envision theme will have one brand color and a matching contrast color. [The default theme](#brand-defaults) uses a neutral color.

The brand color is used to generate a palette of lighter and darker variants. Each color in the palette has a matching contrast color
verified against WCAG 2 AA.

<span id="ui-text" class="offset-anchor"></span>

<h2 class="doc-heading-2">
   Example branding of components <span id="examples" class="offset-anchor"></span>
</h2>

<div class="env-theme-example-brand">

<button type="button" class="env-button env-button--brand">Brand button</button>

<div class="env-m-vertical--large">
<span class="env-badge env-badge--brand">Badge</span>
</div>

<div id="example4" class="env-dropdown">
   <button
      id="example4-button"
      class="env-button env-button--brand env-button--icon env-button--icon-small env-button--icon-after"
      aria-expanded="false"
      aria-haspopup="true"
      data-dropdown
      type="button"
      data-target="#example4"
   >
      Dropdown
      <svg class="env-icon">
         <use href="/sitevision/envision-icons.svg#icon-angle-down"></use>
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

<div class="env-theme-example-brand">
<div class="env-popover example-static-popover env-m-vertical--large" data-popper-placement="top">
   <div class="env-popover__arrow"></div>
   <div class="env-popover__content">
      <h2 class="env-ui-text-sectionheading env-popover__header__title">Section heading</h2>
      <img
         class="env-card__image env-profile-image env-profile-image--small"
         src="https://envisionui.io/placeholders/profile/200x200/01.webp"
         alt="Example profile image"
      />
      <h2 class="env-ui-text-subheading">Subheading</h2>
      <p class="env-ui-text-caption">Caption</p>
   </div>
</div>
</div>

<div class="example-progress">
   <p class="env-ui-text-sectionheading env-m-bottom--large">
      Section heading
   </p>
   <div class="env-progress-poll" title="Number of votes: 5">
      <div
         class="env-progress-poll__bar"
         role="progressbar"
         aria-label="Example progress bar"
         aria-valuemin="0"
         aria-valuemax="100"
         aria-valuenow="10"
         style="width: 10%;"
      ></div>
      <div class="env-progress-poll__label">Branded poll label 1</div>
      <div class="env-progress-poll__value">10 %</div>
   </div>
   <div
      class="env-progress-poll env-progress-poll--highlighted"
      title="Number of votes: 29"
   >
      <div
         class="env-progress-poll__bar"
         role="progressbar"
         aria-label="Example progress bar"
         aria-valuemin="0"
         aria-valuemax="100"
         aria-valuenow="58"
         style="width: 58%;"
      ></div>
      <div class="env-progress-poll__label">Branded poll label 2 (highlighted)</div>
      <div class="env-progress-poll__value">60 %</div>
   </div>
   <div class="env-progress-poll" title="Number of votes: 16">
      <div
         class="env-progress-poll__bar"
         role="progressbar"
         aria-label="Example progress bar"
         aria-valuemin="0"
         aria-valuemax="100"
         aria-valuenow="32"
         style="width: 32%;"
      ></div>
      <div class="env-progress-poll__label">
         Branded poll label 3
         <svg
            xmlns="http://www.w3.org/2000/svg"
            class="env-progress-poll__icon"
         >
            <title>Your vote</title>
            <use
               href="/sitevision/envision-icons.svg#icon-check-done"
            ></use>
         </svg>
      </div>
      <div class="env-progress-poll__value">30 %</div>
   </div>
</div>

<div class="example-brand-color-palette">

<h3 class="doc-heading-3">Example brand color palette</h3>

<ol class="example-brand-color-list">
   <li class="example-section-brand"><div>Brand color</div></li>
   <li class="example-section-brand-05"><div>Brand 05</div></li>
   <li class="example-section-brand-10"><div>Brand 10</div></li>
   <li class="example-section-brand-15"><div>Brand 15</div></li>
   <li class="example-section-brand-20"><div>Brand 20</div></li>
   <li class="example-section-brand-25"><div>Brand 25</div></li>
   <li class="example-section-brand-30"><div>Brand 30</div></li>
   <li class="example-section-brand-35"><div>Brand 35</div></li>
   <li class="example-section-brand-40"><div>Brand 40</div></li>
   <li class="example-section-brand-45"><div>Brand 45</div></li>
   <li class="example-section-brand-50"><div>Brand 50</div></li>
   <li class="example-section-brand-55"><div>Brand 55</div></li>
   <li class="example-section-brand-60"><div>Brand 60</div></li>
   <li class="example-section-brand-65"><div>Brand 65</div></li>
   <li class="example-section-brand-70"><div>Brand 70</div></li>
   <li class="example-section-brand-75"><div>Brand 75</div></li>
   <li class="example-section-brand-80"><div>Brand 80</div></li>
   <li class="example-section-brand-85"><div>Brand 85</div></li>
   <li class="example-section-brand-90"><div>Brand 90</div></li>
   <li class="example-section-brand-95"><div>Brand 95</div></li>
   <li class="example-section-brand-100"><div>Brand 100</div></li>
</ol>

</div>

</div>

## Default brand color palette <span id="brand-defaults" class="brand-defaults"></span>

<ol class="example-brand-color-list env-m-vertical--large env-theme-default-brand">
   <li class="example-section-brand"><div>Brand color</div></li>
   <li class="example-section-brand-05"><div>Brand 05</div></li>
   <li class="example-section-brand-10"><div>Brand 10</div></li>
   <li class="example-section-brand-15"><div>Brand 15</div></li>
   <li class="example-section-brand-20"><div>Brand 20</div></li>
   <li class="example-section-brand-25"><div>Brand 25</div></li>
   <li class="example-section-brand-30"><div>Brand 30</div></li>
   <li class="example-section-brand-35"><div>Brand 35</div></li>
   <li class="example-section-brand-40"><div>Brand 40</div></li>
   <li class="example-section-brand-45"><div>Brand 45</div></li>
   <li class="example-section-brand-50"><div>Brand 50</div></li>
   <li class="example-section-brand-55"><div>Brand 55</div></li>
   <li class="example-section-brand-60"><div>Brand 60</div></li>
   <li class="example-section-brand-65"><div>Brand 65</div></li>
   <li class="example-section-brand-70"><div>Brand 70</div></li>
   <li class="example-section-brand-75"><div>Brand 75</div></li>
   <li class="example-section-brand-80"><div>Brand 80</div></li>
   <li class="example-section-brand-85"><div>Brand 85</div></li>
   <li class="example-section-brand-90"><div>Brand 90</div></li>
   <li class="example-section-brand-95"><div>Brand 95</div></li>
   <li class="example-section-brand-100"><div>Brand 100</div></li>
</ol>

Inverted themes where the font color is lighter than the section background color will result in an inverted (reversed)
palette where `05` is the darkest and `100` is the lightest variant.
