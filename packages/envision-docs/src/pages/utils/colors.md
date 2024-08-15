---
title: Colors
---

## Basic colors

There are a few general colors that are used for
larger sections or less defined parts of components.
For example, `--env-section-background-color`
is used as background color for Modal dialogs.

-  `--env-background-color` - Theme background color
-  `--env-section-background-color` - Used for larger sections
-  `--env-font-color` - Generic text color
-  `--env-link-font-color` - Generic link color
-  `--env-link-hover-font-color` - Generic link:hover color
-  `--env-border-color` - Generic border color
-  `--env-border-color-light` - Calculated from `--env-border-color`

`--env-font-color` should have at least a 4.5:1 contrast ratio on both `--env-background-color` and `--env-section-background-color`.

The following example uses `--env-background-color` outside the centered box and the following colors inside the box
`--env-section-background-color`, `--env-border-color`, `--env-font-color`, `--env-link-font-color`, `--env-link-hover-font-color`

```html
<div class="example-fill example-basic-colors  env-p-around--xx-large">
   <div class="env-ui-section env-border env-p-around--large">
      <div class="env-text">
         Generic text with
         <a href="javascript:void(0)" class="env-link">a link</a>.
      </div>
   </div>
</div>
```

## Block colors

Preset color combinations, use for larger blocks of content.

```html
<div class="example-grid" id="blocks">
   <div class="example-grid__col example-grid__col--33">
      <div class="env-block env-block--border">
         <div class="example-variant">
            <h2 class="env-text-h4">Default</h2>
            <p>
               Bacon <a href="#block" class="env-link">ipsum</a> dolor
               <a href="#blocks">amet beef</a> cupim brisket pork
               <a href="#block" class="env-link-secondary">turducken</a>.
            </p>
         </div>
      </div>
   </div>
   <div class="example-grid__col example-grid__col--33">
      <div class="env-block-primary env-block-primary--border">
         <div class="example-variant">
            <h2 class="env-text-h4">Primary</h2>
            <p>
               Bacon <a href="#block" class="env-link">ipsum</a> dolor
               <a href="#blocks">amet beef</a> cupim brisket pork
               <a href="#block" class="env-link-secondary">turducken</a>.
            </p>
         </div>
      </div>
   </div>
   <div class="example-grid__col example-grid__col--33">
      <div class="env-block-secondary env-block-secondary--border">
         <div class="example-variant">
            <h2 class="env-text-h4">Secondary</h2>
            <p>
               Bacon <span href="#block" class="env-link">ipsum</span> dolor
               <a href="#blocks">amet beef</a> cupim brisket pork
               <a href="#block" class="env-link-secondary">turducken</a>.
            </p>
         </div>
      </div>
   </div>
</div>
```

## Element colors

Element colors are used for elements and components. See usage examples below.

<div class="example-grid">
  <div class="example-grid__col">
    <div class="example-element-color example-element-color--default">
      <p>Default</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col">
    <div class="example-element-color example-element-color--primary">
      <p>Primary</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col">
    <div class="example-element-color example-element-color--secondary">
      <p>Secondary</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col">
    <div class="example-element-color example-element-color--success">
      <p>Success</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col">
    <div class="example-element-color example-element-color--warning">
      <p>Warning</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col">
    <div class="example-element-color example-element-color--danger">
      <p>Danger</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col">
    <div class="example-element-color example-element-color--info">
      <p>Info</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
</div>
<div class="example-grid">
  <div class="example-grid__col example-grid__col--100">
    <div class="example-grid__box example-grid">
      <div class="example-element-header example-grid__col example-grid__col--100">
        <h2 class="doc-heading-h2">Primary & default</h2>
        <p>All elements use the same color setting.</p>
      </div>
      <div class="example-grid__col example-grid__col--50">
        <div class="example-element">
          <div class="example-element-label">Buttons:</div>
          <button type="button" class="env-button">Default</button>
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
        </div>
        <div class="example-element">
          <div class="example-element-label">Badge:</div>
          <span class="env-badge">Primary</span>
        </div>
        <div class="example-element">
          <div class="example-element-label">Radio button:</div>
          <div class="env-form-control">
            <input class="env-radio" id="radio1" type="radio" name="radios" checked />
            <label for="radio1" class="env-form-label">Alternative</label>
          </div>
        </div>
        <div class="example-element">
          <div class="example-element-label">Checkbox:</div>
         <div class="env-form-control">
            <input id="checkbox1" class="env-checkbox" type="checkbox" checked name="options" />
            <label for="checkbox1" class="env-form-label">Checked</label>
          </div>
        </div>
        <div class="example-element">
         <div class="example-element-label">Switch:</div>
<div class="env-form-control">
            <input id="switch1" class="env-switch" type="checkbox" checked name="options" />
            <label for="switch1" class="env-form-label">On</label>
          </div>
        </div>
      </div>
      <div class="example-grid__col example-grid__col--50">
        <div class="example-element">
          <div class="example-element-label">Menu:</div>
          <nav>
            <ul class="env-nav env-nav--menubar env-nav--fill">
            <li class="env-nav__item">
              <a class="env-nav__link" href="javascript:void(0)">Item</a>
            </li>
            <li class="env-nav__item">
              <a class="env-nav__link env-nav__link--active" href="javascript:void(0)">Item</a>
            </li>
            <li class="env-nav__item">
              <a class="env-nav__link" href="javascript:void(0)">Item</a>
            </li>
          </ul>
         </nav>
        </div>
        <div class="example-element">
          <div class="example-element-label">Pagination:</div>
          <nav aria-label="Pagination example">
            <ul class="env-pagination">
              <li class="env-pagination__item">
                <a class="env-pagination__link" href="javascript:void(0)">Previous</a>
              </li>
              <li class="env-pagination__item">
                <a class="env-pagination__link" href="javascript:void(0)">1</a>
              </li>
              <li class="env-pagination__item">
                <a class="env-pagination__link" aria-current="true" href="javascript:void(0)"
                >2 <span class="env-assistive-text">Current</span></a
                >
              </li>
              <li class="env-pagination__item">
                <a class="env-pagination__link" href="javascript:void(0)">3</a>
              </li>
              <li class="env-pagination__item">
                <a class="env-pagination__link" href="javascript:void(0)">Next</a>
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
        <div class="example-element example-element--left">
          <div class="example-element-label">Range slider:</div>
             <div class="env-range-slider example-range-slider">
               <div class="env-range-slider__range"></div>
               <div class="env-range-slider__handle" tabindex="0"></div>
               <div class="env-range-slider__handle" tabindex="0"></div>
               <div class="env-range-slider__values">
                  <span
                     class="env-range-slider__values__value env-range-slider__values__value--from env-text"
                  ></span>
                  <span class="env-range-slider__values__separator env-text">-</span>
                  <span class="env-range-slider__values__value env-text"></span>
               </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--50">
    <div class="example-grid__box">
      <div class="example-element-header">
        <h2 class="doc-heading-h2">Success</h2>
      </div>
      <div class="example-element">
        <div class="example-element-label">Button:</div>
        <button type="button" class="env-button env-button--success">
          Success
        </button>
        <button
          type="button"
          class="env-button env-button--success env-button--ghost"
        >
          Success
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
            class="env-alert__close env-button env-button--link env-button--icon env-button--icon-small"
            data-dismiss="alert"
          >
            <svg class="env-icon env-icon--xx-small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-delete"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--50">
    <div class="example-grid__box">
      <div class="example-element-header">
        <h2 class="doc-heading-h2">Warning</h2>
      </div>
      <div class="example-element">
        <div class="example-element-label">Button:</div>
        <button type="button" class="env-button env-button--warning">
          Warning
        </button>
        <button
          type="button"
          class="env-button env-button--warning env-button--ghost"
        >
          Warning
        </button>
      </div>
      <div class="example-element">
        <div class="example-element-label">Badge:</div>
        <span class="env-badge env-badge--warning">Warning</span>
      </div>
      <div class="example-element">
        <div class="example-element-label">Alert:</div>
        <div class="env-alert env-alert--warning" role="alert">
          <strong>Hello!</strong> this is warning alert
          <button
            type="button"
            class="env-alert__close env-button env-button--link env-button--icon env-button--icon-small"
            data-dismiss="alert"
          >
            <svg class="env-icon env-icon--xx-small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-delete"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--50">
    <div class="example-grid__box">
      <div class="example-element-header">
        <h2 class="doc-heading-h2">Danger</h2>
      </div>
      <div class="example-element">
        <div class="example-element-label">Button:</div>
        <button type="button" class="env-button env-button--danger">
          Danger
        </button>
        <button
          type="button"
          class="env-button env-button--danger env-button--ghost"
        >
          Danger
        </button>
      </div>
      <div class="example-element">
        <div class="example-element-label">Badge:</div>
        <span class="env-badge env-badge--danger">Danger</span>
      </div>
      <div class="example-element">
        <div class="example-element-label">Alert:</div>
        <div class="env-alert env-alert--danger" role="alert">
          <strong>Hello!</strong> this is danger alert
          <button
            type="button"
            class="env-alert__close env-button env-button--link env-button--icon env-button--icon-small"
            data-dismiss="alert"
          >
            <svg class="env-icon env-icon--xx-small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-delete"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--50">
    <div class="example-grid__box">
      <div class="example-element-header">
        <h2 class="doc-heading-h2">Info</h2>
      </div>
      <div class="example-element">
        <div class="example-element-label">Button:</div>
        <button type="button" class="env-button env-button--info">
          Info
        </button>
        <button
          type="button"
          class="env-button env-button--info env-button--ghost"
        >
          Info
        </button>
      </div>
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
            class="env-alert__close env-button env-button--link env-button--icon env-button--icon-small"
            data-dismiss="alert"
          >
            <svg class="env-icon env-icon--xx-small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-delete"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<span id="status-colors" class="offset-anchor"></span>

## Status colors <span class="doc-badge doc-badge--info">2023.02.1</span>

Status colors are UI colors that are used to signal a status,
for example if a user is logged in or when new messages have arrived.

Status colors have a main color and a matching contrast color for text.

Status color text should be used when status color is applied to text on section background. <span class="doc-badge doc-badge--info">Since 2023.07.1</span>

<div class="example-grid">
  <div class="example-grid__col example-grid__col--25">
    <div class="example-ui-color-status example-ui-color-status--neutral">
      <p>Neutral</p>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--25">
    <div class="example-ui-color-status example-ui-color-status--active">
      <p>Active</p>
    </div>
    <p class="example-ui-color-status-text example-ui-color-status-text--active">Active text</p>
  </div>
  <div class="example-grid__col example-grid__col--25">
    <div class="example-ui-color-status example-ui-color-status--attention">
      <p>Attention</p>
    </div>
    <p class="example-ui-color-status-text example-ui-color-status-text--attention">Attention text</p>
  </div>
   <div class="example-grid__col example-grid__col--25">
    <div class="example-ui-color-status example-ui-color-status--error">
      <p>Error</p>
    </div>
    <p class="example-ui-color-status-text example-ui-color-status-text--error">Error text</p>
  </div>
</div>

### Examples of usage

<div class="example-grid">
  <div class="example-grid__col example-grid__col--50">
      <div class="example-grid__box">
         <h3 class="env-ui-text-caption example-ui-color-status-heading">Badge</h3>
         <span class="env-badge env-badge--neutral">8</span>
         <span class="env-badge env-badge--active">Logged in</span>
         <span class="env-badge env-badge--attention">42</span>
         <h3 class="env-ui-text-caption example-ui-color-status-heading">Custom inline SVG decoration</h3>
         <button type="button" class="env-button env-button--large env-button--icon env-button--link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="env-icon env-icon--medium" aria-hidden="true">
               <circle cx="20" cy="4" r="4" class="env-icon--attention"></circle>
               <g transform="matrix(1,0,0,1,0,0)"><path d="M12,24c-1.23,0-2.36-.8-2.72-2.04-.12-.4,.11-.81,.51-.93,.4-.11,.81,.11,.93,.51,.21,.71,.95,1.11,1.66,.91,.44-.13,.78-.47,.91-.91,.12-.4,.54-.62,.93-.51,.4,.12,.62,.53,.51,.93-.27,.93-.99,1.65-1.92,1.92-.27,.08-.53,.11-.8,.11Z"></path><path d="M12,3.75c-.41,0-.75-.34-.75-.75V.75c0-.41,.34-.75,.75-.75s.75,.34,.75,.75V3c0,.41-.34,.75-.75,.75Z"></path><path d="M21,19.5H3c-.29,0-.55-.16-.67-.42-.13-.26-.09-.56,.08-.79,0,0,1.34-1.9,1.34-7.79C3.75,5.95,7.45,2.25,12,2.25c.37,0,.74,.02,1.1,.07,.41,.06,.7,.43,.64,.84-.05,.41-.44,.7-.84,.64-.3-.04-.6-.06-.9-.06-3.72,0-6.75,3.03-6.75,6.75,0,3.95-.57,6.26-1.04,7.5h15.5c-.45-1.16-.92-3.26-.96-6.99,0-.41,.33-.75,.74-.76,.42-.03,.75,.33,.76,.74,.06,5.91,1.24,7.19,1.25,7.2,.25,.2,.33,.52,.22,.82-.11,.3-.41,.49-.73,.49Z"></path></g>
            </svg>
         </button>
         <h3 class="env-ui-text-caption example-ui-color-status-heading">Error message</h3>
<div class="env-form-element env-form-element--error">
   <label for="danger" class="env-form-element__label">Email</label>
   <div class="env-form-element__control">
      <input
         type="text"
         class="env-form-input"
         id="danger"
         value="wrong @address.com"
         aria-describedby="error-feedback"
         >
   </div>
   <span id="error-feedback" class="env-form-element__feedback">Please enter a valid email address</span>
</div>
      </div>
   </div>
   <div class="example-grid__col example-grid__col--50">
      <div class="example-grid__box">
         <h3 class="env-ui-text-caption example-ui-color-status-heading">
            Status badge
         </h3>
         <h4 class="env-ui-text-subheading">Lorem Ipsumsson</h4>
         <p class="env-ui-text-caption">
            <span class="env-status-badge env-status-badge--active">Logged in</span>
         </p>
         <h3 class="env-ui-text-caption example-ui-color-status-heading">Status badge on Profile image</h3>
         <div class="env-profile-image env-profile-image--small">
            <img
               src="https://envisionui.io/placeholders/profile/200x200/01.webp"
               alt="Example profile image" />
            <div class="env-status-badge env-status-badge--active">Logged in</div>
         </div>
         <h3 class="env-ui-text-caption example-ui-color-status-heading">Text</h3>
         <p class="env-text env-text--active">Logged in</p>
         <p class="env-text env-text--attention">New message</p>
         <p class="env-text env-text--error">An error occurred</p>
      </div>
   </div>
</div>

Documentation of examples:

-  [Status variant Badge](/components/badge/#status-variant)
-  [Custom inline SVG decoration](/utils/icons/#attention)
-  [Status badge](/components/badge/#status-badge)
-  [Status badge on Profile image](/components/profile-image/#status-badge)
-  [Form error message](/components/form/#validation)
-  [Text status colors](/utils/text/#status-colors)

## Legacy colors <span class="doc-badge doc-badge--danger">Deprecated</span>

The following colors are deprecated and will be removed.

-  env-bg-color--brand
-  env-bg-color--success
-  env-bg-color--info
-  env-bg-color--warning
-  env-bg-color--danger
-  env-bg-color--hover
-  env-bg-color--base
-  env-bg-color--darker
-  env-bg-color--dark
-  env-bg-color--normal
-  env-bg-color--light
-  env-bg-color--lighter
-  env-bg-color--lightest
-  env-color--brand
-  env-color--success
-  env-color--info
-  env-color--warning
-  env-color--danger
-  env-color--hover
-  env-color--base
-  env-color--darker
-  env-color--dark
-  env-color--normal
-  env-color--light
-  env-color--lighter
-  env-color--lightest
