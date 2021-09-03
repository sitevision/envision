---
title: Dropdown
---

### Default Dropdown

```html
<div id="example0" class="env-dropdown">
   <button
      class="env-button env-button--primary env-button--large env-button--icon env-button--icon-after"
      aria-expanded="false"
      aria-haspopup="true"
      data-dropdown
      type="button"
      data-target="#example0"
   >
      Dropdown
      <svg class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"></use>
      </svg>
   </button>
   <ul class="env-dropdown__menu env-dropdown__menu--large">
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Action</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Properties</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Settings</a>
      </li>
   </ul>
</div>
```

### Dropdown divider

Add a `<div>` element to menu list with the class `env-dropdown--divider`.

```html
<div id="example1" class="env-dropdown">
   <button
      class="env-button env-button--primary env-button--large"
      aria-expanded="false"
      aria-haspopup="true"
      data-dropdown
      type="button"
      data-target="#example1"
   >
      Dropdown
   </button>
   <ul class="env-dropdown__menu env-dropdown__menu--large">
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Action</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Properties</a>
      </li>
      <li class="env-dropdown--divider" role="separator"></li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Settings</a>
      </li>
   </ul>
</div>
```

### Split button dropdown

Use `env-button-group` to split buttons and add `env-dropdown--toggle-split` to desired button.

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
      class="env-button env-button--primary env-button--ghost env-button--ghost-split"
      type="button"
      data-dropdown
      aria-expanded="false"
      aria-haspopup="true"
      data-target="#example2"
   >
      <svg class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"></use>
      </svg>
      <span class="env-assistive-text">Toggle Dropdown Menu</span>
   </button>
   <ul class="env-dropdown__menu">
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Action</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Properties</a>
      </li>
      <li class="env-dropdown--divider" role="separator"></li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Settings</a>
      </li>
   </ul>
</div>
```

### Dropdown with menu icons

```html
<div id="example3" class="env-dropdown">
   <button
      class="env-button env-button--primary env-button--large env-button--icon env-button--icon-after"
      aria-expanded="false"
      aria-haspopup="true"
      data-dropdown
      type="button"
      data-target="#example3"
   >
      Dropdown
      <svg class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"></use>
      </svg>
   </button>
   <ul class="env-dropdown__menu env-dropdown__menu--large">
      <li role="presentation">
         <button type="button" role="menuitem" class="env-dropdown__item">
            <svg class="env-icon env-icon--small env-m-right--small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-file"></use>
            </svg>
            Action
         </button>
      </li>
      <li role="presentation">
         <button type="button" role="menuitem" class="env-dropdown__item">
            <svg class="env-icon env-icon--small env-m-right--small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-bell"></use>
            </svg>
            Properties
         </button>
      </li>
      <li class="env-dropdown--divider" role="separator"></li>
      <li role="presentation">
         <button type="button" role="menuitem" class="env-dropdown__item">
            <svg class="env-icon env-icon--small env-m-right--small">
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
