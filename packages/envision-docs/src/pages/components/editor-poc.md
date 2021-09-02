---
title: Theme Editor POC
---

### Custom Theme <button type="button" id="reset" class="env-button env-button--small env-button--danger env-button--ghost">Reset</button>

<div class="theme-editor" data-label="Bakgrund">
   <div data-section-background-color data-label="Sektion">
<div class="env-cardholder env-cardholder--3">
      <div class="env-cardholder__slot">
<h3 class="env-m-top--0">Element Colors</h3>
      <div class="env-m-vertical--medium">
         <button type="button" class="env-button">Default</button>
         <button type="button" class="env-button env-button--primary">Primary</button>
         <button type="button" class="env-button env-button--secondary">
            Secondary
         </button>
      </div>
      <div class="env-form-element">
      <div
         class="env-form-element__control"
         role="radiogroup"
         aria-labelledby="radio-header"
      >
         <div class="env-form-radio">
            <input id="radio1" type="radio" name="radios" checked />
            <label for="radio1" class="env-form-element__label">
               <span class="env-form-radio__fake"></span>
               <span class="env-form-radio__label">Alternative</span>
            </label>
         </div>
      </div>
      <div
         class="env-form-element__control"
         role="group"
         aria-labelledby="checkbox-header"
      >
         <div class="env-checkbox">
            <input type="checkbox" checked name="options" id="cb1" />
            <label class="env-form-element__label" for="cb1">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Checked</span>
            </label>
         </div>
      </div>
      <div
         class="env-form-element__control"
         role="group"
         aria-labelledby="switch-header"
      >
         <div class="env-switch">
            <label class="env-switch__label">
               <input type="checkbox" checked />
               <span class="env-switch__text">On</span>
               <span class="env-switch__slider"></span>
            </label>
         </div>
   </div>
   </div>
</div>
<div class="env-cardholder__slot">
<div class="env-block env-block--border env-m-bottom--small">
         <div class="example-variant">
            <h3 class="env-m-around--0">Default Block</h3>
         </div>
      </div>
<div class="env-block-primary env-block-primary--border env-m-bottom--small">
         <div class="example-variant">
            <h3 class="env-m-around--0">Primary Block</h3>
         </div>
      </div>
<div class="env-block-secondary env-block-secondary--border">
         <div class="example-variant">
            <h3 class="env-m-around--0">Secondary Block</h3>
         </div>
      </div>
</div>
</div>
   </div>
</div>

<div class="theme-editor-controls">
   <div class="env-form">
      <div class="env-form__row">
         <div class="env-form-element">
            <label class="env-form-element__label">
               Background
            </label>
            <input type="color" name="background-color">
         </div>
         <div class="env-form-element">
            <label class="env-form-element__label">
               Section background
            </label>
            <input type="color" name="section-background-color">
         </div>
         <div class="env-form-element">
            <label class="env-form-element__label">
               Font color
            </label>
            <input type="color" name="font-color">
         </div>
         <div class="env-form-element">
            <label class="env-form-element__label">
               Base font size (em)
            </label>
            <input type="number" step="0.1" class="env-form-input" name="font-size-base">
         </div>
      </div>
<div class="env-form__row"><h2>Elements</h2></div>      
<div class="env-form__row">
         <div class="env-form-element">
            <label class="env-form-element__label">
               Default background
            </label>
            <input type="color" name="element-background-color">
            <label class="env-form-element__label">
               Default font
            </label>
            <input type="color" name="element-font-color">
         </div>
<div class="env-form-element">
            <label class="env-form-element__label">
               Primary background
            </label>
            <input type="color" name="element-primary-background-color">
            <label class="env-form-element__label">
               Primary font
            </label>
            <input type="color" name="element-primary-font-color">
         </div>
<div class="env-form-element">
            <label class="env-form-element__label">
               Secondary background
            </label>
            <input type="color" name="element-secondary-background-color">
            <label class="env-form-element__label">
               Secondary font
            </label>
            <input type="color" name="element-secondary-font-color">
         </div>
      </div>
<div class="env-form__row"><h2>Blocks</h2></div>      
<div class="env-form__row">
<div class="env-form-element">
   <label class="env-form-element__label">
      Default background
   </label>
   <input type="color" name="block-background-color">
   <label class="env-form-element__label">
      Default font
   </label>
   <input type="color" name="block-font-color">
   <label class="env-form-element__label">
      Default border
   </label>
   <input type="color" name="block-border-color">
</div>
<div class="env-form-element">
   <label class="env-form-element__label">
      Primary background
   </label>
   <input type="color" name="block-primary-background-color">
   <label class="env-form-element__label">
      Primary font
   </label>
   <input type="color" name="block-primary-font-color">
   <label class="env-form-element__label">
      Primary border
   </label>
   <input type="color" name="block-primary-border-color">
</div>
<div class="env-form-element">
   <label class="env-form-element__label">
      Secondary background
   </label>
   <input type="color" name="block-secondary-background-color">
   <label class="env-form-element__label">
      Secondary font
   </label>
   <input type="color" name="block-secondary-font-color">
   <label class="env-form-element__label">
      Secondary border
   </label>
   <input type="color" name="block-secondary-border-color">
</div>
</div>
   </div>
</div>

<style>
.theme-editor {
   border: 5px solid #000;
   padding: 2em;
   background-color: var(--env-background-color);
   color: var(--env-font-color);
   font-size: var(--env-font-size-base);
}
.theme-editor, .theme-editor [data-label] {
   position: relative;
}
.theme-editor [data-label] {
   border: 1px solid var(--env-border-color);
   padding: 2em;
}
.theme-editor:before, .theme-editor [data-label]:before {
   content: attr(data-label);
   display: block;
   position: absolute;
   top: -0.6em;
   left: 4px;
   font-size: 9px;
   line-height: 1;
   background-color: rgba(255,255,255,0.8);
   color: #000;
   text-transform: uppercase;
   padding: 2px;
}
.theme-editor:before {
   top: 2px;
   left: 2px;
}

.theme-editor [data-section-background-color] {
   background-color: var(--env-section-background-color);
}

.theme-editor-controls {
   padding: 2em 0;
}
.theme-editor-controls label {
   display: block;
margin: 0.5em 0 0.25em;
}
.theme-editor-controls input {
   margin: 0 1em 0 0;
}
.theme-editor-controls input[type=number] {
   max-width: 4em;
}
</style>
