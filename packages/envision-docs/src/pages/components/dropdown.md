---
title: Dropdown
---

### Default Dropdown

```html
<div id="example0" class="env-dropdown">
   <button
      id="example0-button"
      class="env-button env-button--primary env-button--large env-button--icon env-button--icon-small env-button--icon-after"
      aria-expanded="false"
      aria-haspopup="true"
      data-dropdown
      type="button"
      data-target="#example0"
   >
      Dropdown
      <svg class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-angle-down"></use>
      </svg>
   </button>
   <ul
      class="env-dropdown__menu env-dropdown__menu--large"
      aria-labelledby="example0-button"
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
```

### Dropdown divider

Add a `<div>` element to menu list with the class `env-dropdown--divider`.

```html
<div id="example1" class="env-dropdown">
   <button
      id="example1-button"
      class="env-button env-button--primary env-button--large"
      aria-expanded="false"
      aria-haspopup="true"
      data-dropdown
      type="button"
      data-target="#example1"
   >
      Dropdown
   </button>
   <ul
      class="env-dropdown__menu env-dropdown__menu--large"
      aria-labelledby="example1-button"
   >
      <li>
         <a href="#" class="env-dropdown__item">Action</a>
      </li>
      <li>
         <a href="#" class="env-dropdown__item">Properties</a>
      </li>
      <li class="env-dropdown--divider" role="separator"></li>
      <li>
         <a href="#" class="env-dropdown__item">Settings</a>
      </li>
   </ul>
</div>
```

### Split button dropdown

Use `env-button-group` to split buttons.

```html
<div
   id="example2"
   class="env-dropdown env-button-group env_list__item"
   role="group"
>
   <button
      class="env-button env-button--ghost env-button--primary"
      type="button"
   >
      Button
   </button>
   <button
      id="example2-button"
      class="env-button env-button--icon env-button--icon-small env-button--primary env-button--ghost"
      type="button"
      data-dropdown
      aria-expanded="false"
      aria-haspopup="true"
      data-target="#example2"
   >
      <svg class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-angle-down"></use>
      </svg>
      <span class="env-assistive-text">Toggle Dropdown Menu</span>
   </button>
   <ul class="env-dropdown__menu" aria-labelledby="example2-button"
      <li>
         <a href="#" class="env-dropdown__item">Action</a>
      </li>
      <li>
         <a href="#" class="env-dropdown__item">Properties</a>
      </li>
      <li class="env-dropdown--divider" role="separator"></li>
      <li>
         <a href="#" class="env-dropdown__item">Settings</a>
      </li>
   </ul>
</div>
```

### Dropdown with menu icons

```html
<div id="example3" class="env-dropdown">
   <button
      id="example3-button"
      class="env-button env-button--primary env-button--large env-button--icon env-button--icon-small env-button--icon-after"
      aria-expanded="false"
      aria-haspopup="true"
      data-dropdown
      type="button"
      data-target="#example3"
   >
      Dropdown
      <svg class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-angle-down"></use>
      </svg>
   </button>
   <ul
      class="env-dropdown__menu env-dropdown__menu--large"
      aria-labelledby="example3-button"
   >
      <li>
         <button type="button" class="env-dropdown__item">
            <svg class="env-icon">
               <use xlink:href="/sitevision/envision-icons.svg#icon-file"></use>
            </svg>
            Action
         </button>
      </li>
      <li>
         <button type="button" class="env-dropdown__item">
            <svg class="env-icon">
               <use xlink:href="/sitevision/envision-icons.svg#icon-bell"></use>
            </svg>
            Properties
         </button>
      </li>
      <li class="env-dropdown--divider" role="separator"></li>
      <li>
         <button type="button" class="env-dropdown__item">
            <svg class="env-icon">
               <use
                  xlink:href="/sitevision/envision-icons.svg#icon-check-done"
               ></use>
            </svg>
            Settings
         </button>
      </li>
   </ul>
</div>
```

### Optional placement

Use `data-dropdown-placement-body` attribute on `<button>` element
to open dropdown as an immediate child of `<body>`.

```html
<div id="example4" class="env-dropdown">
   <button
      id="example4-button"
      class="env-button env-button--primary env-button--large env-button--icon env-button--icon-small env-button--icon-after"
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
```
