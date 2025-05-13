---
title: Form input elements
indexing: false
---

```html
<div>
   <div>
      <div>
         <label for="c0">No styling</label>
      </div>
      <select id="c0" name="c0" style="max-width: 100%; margin: 0 0 1em 0">
         <option>
            Each form field combination of text label and form control may
            optionally be wrapped
         </option>
         <option value="">Alla kategorier</option>
         <option value="tema1">Tema 1</option>
         <option value="tema2">tema2</option>
         <option value="tema3">tema3</option>
         <option value="bingo">Bingo</option>
         <option value="lotteri">Lotteri</option>
         <option value="spilleautomat">Spilleautomat</option>
      </select>
   </div>
   <div class="env-form">
      <fieldset id="forms__textareas">
         <legend>Selected</legend>
         <div class="env-form-field">
            <label for="c">env-form-input</label>
            <select class="env-form-input" id="c" name="c">
               <option>
                  Each form field combination of text label and form control may
                  optionally be wrapped
               </option>
               <option value="">Alla kategorier</option>
               <option value="tema1">Tema 1</option>
               <option value="tema2">tema2</option>
               <option value="tema3">tema3</option>
               <option value="bingo">Bingo</option>
               <option value="lotteri">Lotteri</option>
               <option value="spilleautomat">Spilleautomat</option>
            </select>
         </div>
         <div class="env-form-field">
            <label for="select-1" class="env-form-label"
               >env-form-select select w icon</label
            >
            <div class="env-form-select">
               <select id="select-1">
                  <option>
                     Each form field combination of text label and form control
                     may optionally be wrapped
                  </option>
                  <option>Item 2</option>
                  <option>Item 3</option>
                  <option>Item 4</option>
               </select>
               <svg aria-hidden="true" class="env-icon">
                  <use
                     href="/sitevision/envision-icons.svg#icon-angle-down"
                  ></use>
               </svg>
            </div>
         </div>
         <div class="env-form-field">
            <label for="select-2" class="env-form-label"
               >env-form-input w selectedcontent</label
            >
            <select id="select-2" class="env-form-input">
               <button>
                  <selectedcontent></selectedcontent>
               </button>
               <option>
                  Each form field combination of text label and form control may
                  optionally be wrapped
               </option>
               <option>Option 2</option>
               <option>Option 3</option>
               <option>Option 4</option>
            </select>
         </div>
         <div class="env-form-field">
            <label for="select-2b" class="env-form-label"
               >env-form-input w selectedcontent & option icons</label
            >
            <select id="select-2b" class="env-form-input">
               <button>
                  <selectedcontent></selectedcontent>
               </button>
               <option>
                  <svg class="env-icon" aria-hidden="true">
                     <use href="/sitevision/envision-icons.svg#icon-file"></use>
                  </svg>
                  Each form field combination of text label and form control may
                  optionally be wrapped
               </option>
               <option>
                  <svg class="env-icon" aria-hidden="true">
                     <use
                        href="/sitevision/envision-icons.svg#icon-files"
                     ></use>
                  </svg>
                  Option 2
               </option>
               <option>
                  <svg class="env-icon" aria-hidden="true">
                     <use
                        href="/sitevision/envision-icons.svg#icon-image"
                     ></use>
                  </svg>
                  Option 3
               </option>
               <option>
                  <svg class="env-icon" aria-hidden="true">
                     <use
                        href="/sitevision/envision-icons.svg#icon-images"
                     ></use>
                  </svg>
                  Option 4
               </option>
            </select>
         </div>
         <div class="env-form-field">
            <label for="select-2c" class="env-form-label"
               >env-form-select select</label
            >
            <div class="env-form-select">
               <select id="select-2c">
                  <option>
                     <svg class="env-icon" aria-hidden="true">
                        <use
                           href="/sitevision/envision-icons.svg#icon-file"
                        ></use>
                     </svg>
                     Each form field combination of text label and form control
                     may optionally be wrapped
                  </option>
                  <option>
                     <svg class="env-icon" aria-hidden="true">
                        <use
                           href="/sitevision/envision-icons.svg#icon-files"
                        ></use>
                     </svg>
                     Option 2
                  </option>
                  <option>
                     <svg class="env-icon" aria-hidden="true">
                        <use
                           href="/sitevision/envision-icons.svg#icon-image"
                        ></use>
                     </svg>
                     Option 3
                  </option>
                  <option>
                     <svg class="env-icon" aria-hidden="true">
                        <use
                           href="/sitevision/envision-icons.svg#icon-images"
                        ></use>
                     </svg>
                     Option 4
                  </option>
               </select>
               <svg aria-hidden="true" class="env-icon">
                  <use
                     href="/sitevision/envision-icons.svg#icon-angle-down"
                  ></use>
               </svg>
            </div>
         </div>
         <div class="env-form-field">
            <label for="select-2d" class="env-form-label"
               >env-form-select select w selectedcontent</label
            >
            <div class="env-form-select">
               <select id="select-2d">
                  <button>
                     <selectedcontent></selectedcontent>
                  </button>
                  <option>
                     Each form field combination of text label and form control
                     may optionally be wrapped
                  </option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
               </select>
               <svg aria-hidden="true" class="env-icon">
                  <use
                     href="/sitevision/envision-icons.svg#icon-angle-down"
                  ></use>
               </svg>
            </div>
         </div>
         <div class="env-form-field">
            <label for="select-2d" class="env-form-label"
               >env-form-select select.env-form-input</label
            >
            <div class="env-form-select">
               <select class="env-form-input" id="select-2d">
                  <option>
                     Each form field combination of text label and form control
                     may optionally be wrapped
                  </option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
               </select>
               <svg aria-hidden="true" class="env-icon">
                  <use
                     href="/sitevision/envision-icons.svg#icon-angle-down"
                  ></use>
               </svg>
            </div>
         </div>
         <div class="env-form-field">
            <label for="select-2d" class="env-form-label"
               >env-form-select select.env-form-input w selectedcontent</label
            >
            <div class="env-form-select">
               <select class="env-form-input" id="select-2d">
                  <button>
                     <selectedcontent></selectedcontent>
                  </button>
                  <option>
                     Each form field combination of text label and form control
                     may optionally be wrapped
                  </option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
               </select>
               <svg aria-hidden="true" class="env-icon">
                  <use
                     href="/sitevision/envision-icons.svg#icon-angle-down"
                  ></use>
               </svg>
            </div>
         </div>
         <div class="env-form-field">
            <label for="select-2d" class="env-form-label"
               >env-form-select select w selectedcontent, no icon</label
            >
            <div class="env-form-select">
               <select id="select-2d">
                  <button>
                     <selectedcontent></selectedcontent>
                  </button>
                  <option>
                     Each form field combination of text label and form control
                     may optionally be wrapped
                  </option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
               </select>
            </div>
         </div>
         <div class="env-form-field">
            <label for="select-2e" class="env-form-label"
               >env-form-select select w selectedcontent and option icons</label
            >
            <div class="env-form-select">
               <select id="select-2e">
                  <button>
                     <selectedcontent></selectedcontent>
                  </button>
                  <optgroup label="Group 1">
                     <option>
                        <svg class="env-icon" aria-hidden="true">
                           <use
                              href="/sitevision/envision-icons.svg#icon-file"
                           ></use>
                        </svg>
                        Each form field combination of text label and form
                        control may optionally be wrapped
                     </option>
                  </optgroup>
                  <optgroup label="Group 2">
                     <option>
                        <svg class="env-icon" aria-hidden="true">
                           <use
                              href="/sitevision/envision-icons.svg#icon-file"
                           ></use>
                        </svg>
                        Each form field combination of text label and form
                        control may optionally be wrapped
                     </option>
                     <option>
                        <svg class="env-icon" aria-hidden="true">
                           <use
                              href="/sitevision/envision-icons.svg#icon-files"
                           ></use>
                        </svg>
                        Option 2
                     </option>
                     <option>
                        <svg class="env-icon" aria-hidden="true">
                           <use
                              href="/sitevision/envision-icons.svg#icon-image"
                           ></use>
                        </svg>
                        Option 3
                     </option>
                     <option>
                        <svg class="env-icon" aria-hidden="true">
                           <use
                              href="/sitevision/envision-icons.svg#icon-images"
                           ></use>
                        </svg>
                        Option 4
                     </option>
                  </optgroup>
               </select>
               <svg aria-hidden="true" class="env-icon">
                  <use
                     href="/sitevision/envision-icons.svg#icon-angle-down"
                  ></use>
               </svg>
            </div>
         </div>
         <div class="env-form-field">
            <label for="multiple-select-1" class="env-form-label"
               >Multiple select</label
            >
            <select class="env-form-input" id="multiple-select-1" multiple>
               <option>
                  Each form field combination of text label and form control may
                  optionally be wrapped
               </option>
               <option>Item 2</option>
               <option>Item 3</option>
               <option>Item 4</option>
            </select>
         </div>
      </fieldset>
   </div>
   <div class="env-form-field">
      <label class="env-form-label" class="env-form-label">Input text</label>
      <input class="env-form-input" type="date" value="2017-06-01" />
   </div>
   <div class="env-form-field">
      <label class="env-form-label" class="env-form-label">Input text</label>
      <input class="env-form-input" type="date" value="2017-06-01" />
   </div>
   <fieldset id="forms__html5">
      <legend>HTML5 inputs</legend>
      <div class="env-form-field">
         <label class="env-form-label" for="ic">Color input</label>
         <input class="env-form-input" type="color" id="ic" value="#000000" />
      </div>
      <div class="env-form-field">
         <label class="env-form-label" for="in">Number input</label>
         <input
            class="env-form-input"
            type="number"
            id="in"
            min="0"
            max="10"
            value="5"
         />
      </div>
      <div class="env-form-field">
         <label class="env-form-label" for="ir">Range input</label>
         <input class="env-form-input" type="range" id="ir" value="10" />
      </div>
      <div class="env-form-field">
         <label class="env-form-label" for="idd">Date input</label>
         <input
            class="env-form-input"
            type="date"
            id="idd"
            value="1970-01-01"
         />
      </div>
      <div class="env-form-field">
         <label class="env-form-label" for="idm">Month input</label>
         <input class="env-form-input" type="month" id="idm" value="1970-01" />
      </div>
      <div class="env-form-field">
         <label class="env-form-label" for="idw">Week input</label>
         <input class="env-form-input" type="week" id="idw" value="1970-W01" />
      </div>
      <div class="env-form-field">
         <label class="env-form-label" for="idt">Datetime input</label>
         <input
            class="env-form-input"
            type="datetime"
            id="idt"
            value="1970-01-01T00:00:00Z"
         />
      </div>
      <div class="env-form-field">
         <label class="env-form-label" for="idtl">Datetime-local input</label>
         <input
            class="env-form-input"
            type="datetime-local"
            id="idtl"
            value="1970-01-01T00:00"
         />
      </div>
   </fieldset>
   <div class="env-form">
      <fieldset id="forms__input">
         <legend>Input fields</legend>
         <div class="env-form-field">
            <label class="env-form-label" for="input__text">Text Input</label>
            <input
               class="env-form-input"
               id="input__text"
               type="text"
               placeholder="Text Input"
            />
         </div>
         <div class="env-form-field">
            <label class="env-form-label" for="input__password">Password</label>
            <input
               class="env-form-input"
               id="input__password"
               type="password"
               placeholder="Type your Password"
            />
         </div>
         <div class="env-form-field">
            <label class="env-form-label" for="input__webaddress"
               >Web Address</label
            >
            <input
               class="env-form-input"
               id="input__webaddress"
               type="url"
               placeholder="https://yoursite.com"
            />
         </div>
         <div class="env-form-field">
            <label class="env-form-label" for="input__emailaddress"
               >Email Address</label
            >
            <input
               class="env-form-input"
               id="input__emailaddress"
               type="email"
               placeholder="name@email.com"
            />
         </div>
         <div class="env-form-field">
            <label class="env-form-label" for="input__phone"
               >Phone Number</label
            >
            <input
               class="env-form-input"
               id="input__phone"
               type="tel"
               placeholder="(999) 999-9999"
            />
         </div>
         <div class="env-form-field">
            <label class="env-form-label" for="input__search">Search</label>
            <input
               class="env-form-input"
               id="input__search"
               type="search"
               placeholder="Enter Search Term"
            />
         </div>
         <div class="env-form-field">
            <label class="env-form-label" for="input__text2"
               >Number Input</label
            >
            <input
               class="env-form-input"
               id="input__text2"
               type="number"
               placeholder="Enter a Number"
            />
         </div>
         <div class="env-form-field">
            <label class="env-form-label" for="input__text3" class="error"
               >Error</label
            >
            <input
               class="env-form-input"
               id="input__text3"
               class="is-error"
               type="text"
               placeholder="Text Input"
            />
         </div>
         <div class="env-form-field">
            <label class="env-form-label" for="input__text4" class="valid"
               >Valid</label
            >
            <input
               class="env-form-input"
               id="input__text4"
               class="is-valid"
               type="text"
               placeholder="Text Input"
            />
         </div>
      </fieldset>
   </div>
   <div class="env-form">
      <fieldset id="forms__textareas2">
         <legend>Textareas</legend>
         <div class="env-form-field">
            <label class="env-form-label" for="textarea">Textarea</label>
            <textarea
               class="env-form-input"
               id="textarea"
               rows="8"
               cols="48"
               placeholder="Enter your message here"
            ></textarea>
         </div>
      </fieldset>
   </div>
</div>
```
