---
title: Dropdown
---

### Default Dropdown

Attribute `data-dropdown` is required on the button. Dropdown menu must use class `env-dropdown__menu`
and should be located inside the same parent element as the button.

```html
<div class="env-dropdown">
   <button
      id="example0-button"
      class="env-button env-button--primary env-button--icon env-button--icon-small env-button--icon-after"
      type="button"
      aria-expanded="false"
      aria-haspopup="menu"
      aria-controls="example0-menu"
      data-dropdown
   >
      Dropdown
      <svg class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-angle-down"></use>
      </svg>
   </button>
   <ul
      id="example0-menu"
      role="menu"
      aria-labelledby="example0-button"
      class="env-dropdown__menu"
   >
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

### Dropdown menu divider

Add an empty list item to menu with the class `env-dropdown--divider` and `role="separator"`.

```html
<div class="env-dropdown">
   <button
      id="example1-button"
      class="env-button env-button--primary"
      type="button"
      aria-expanded="false"
      aria-haspopup="menu"
      aria-controls="example1-menu"
      data-dropdown
   >
      Dropdown
   </button>
   <ul
      id="example1-menu"
      role="menu"
      aria-labelledby="example1-button"
      class="env-dropdown__menu"
   >
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

Use `env-button-group` to split buttons.

```html

<div
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
      aria-expanded="false"
      aria-haspopup="menu"
      aria-controls="example2-menu"
      data-dropdown
   >
      <svg class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-angle-down"></use>
      </svg>
      <span class="env-assistive-text">Toggle Dropdown Menu</span>
   </button>
   <ul id="example2-menu" role="menu" aria-labelledby="example2-button" class="env-dropdown__menu"
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

### Optional placement

Use `data-container="body"` on `<button>` element
to open dropdown as an immediate child of `<body>`.

```html
<div class="env-dropdown">
   <button
      id="example3-button"
      class="env-button env-button--primary env-button--icon env-button--icon-small env-button--icon-after"
      type="button"
      aria-expanded="false"
      aria-haspopup="menu"
      aria-controls="example3-menu"
      data-container="body"
      data-dropdown
   >
      Dropdown in body
      <svg class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-angle-down"></use>
      </svg>
   </button>
   <ul
      id="example3-menu"
      role="menu"
      aria-labelledby="example3-button"
      class="env-dropdown__menu"
   >
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

Default placement is aligned to start of button.
Use `data-placement="end"` on `<button>` element to open dropdown
aligned to end of button.

```html
<div class="example-dropdown-placement">
   <div class="env-dropdown">
      <button
         id="example4-button"
         class="env-button env-button--slim env-button--icon"
         type="button"
         aria-expanded="false"
         aria-haspopup="menu"
         aria-controls="example4-menu"
         data-dropdown
      >
         <svg class="env-icon">
            <use
               xlink:href="/sitevision/envision-icons.svg#icon-menu-dots"
            ></use>
         </svg>
         <span class="env-assistive-text">Default aligned Dropdown Menu</span>
      </button>
      <ul
         id="example4-menu"
         role="menu"
         aria-labelledby="example4-button"
         class="env-dropdown__menu"
      >
         <li role="presentation">
            <a href="#" role="menuitem" class="env-dropdown__item">Action</a>
         </li>
         <li role="presentation">
            <a href="#" role="menuitem" class="env-dropdown__item"
               >Properties</a
            >
         </li>
         <li role="presentation">
            <a href="#" role="menuitem" class="env-dropdown__item">Settings</a>
         </li>
      </ul>
   </div>
   <div class="env-dropdown">
      <button
         id="example5-button"
         class="env-button env-button--slim env-button--icon"
         type="button"
         aria-expanded="false"
         aria-haspopup="menu"
         aria-controls="example5-menu"
         data-placement="end"
         data-dropdown
      >
         <svg class="env-icon">
            <use
               xlink:href="/sitevision/envision-icons.svg#icon-menu-dots"
            ></use>
         </svg>
         <span class="env-assistive-text">End aligned Dropdown Menu</span>
      </button>
      <ul
         id="example5-menu"
         role="menu"
         aria-labelledby="example5-button"
         class="env-dropdown__menu"
      >
         <li role="presentation">
            <a href="#" role="menuitem" class="env-dropdown__item">Action</a>
         </li>
         <li role="presentation">
            <a href="#" role="menuitem" class="env-dropdown__item"
               >Properties</a
            >
         </li>
         <li role="presentation">
            <a href="#" role="menuitem" class="env-dropdown__item">Settings</a>
         </li>
      </ul>
   </div>
</div>
```
