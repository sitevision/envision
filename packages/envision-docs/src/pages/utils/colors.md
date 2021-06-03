---
title: Colors
---

## Block colors <span class="env-badge env-badge--info">8.2</span>

Preset color combinations, use for larger blocks of content.

```html
<div class="example-grid doc-demo__modal" id="blocks">
   <div class="example-grid__col example-grid__col--33">
      <div class="env-block env-block--border">
         <div class="example-variant">
            <h2>Default</h2>
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
            <h2>Primary</h2>
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
            <h2>Secondary</h2>
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

## Element colors <span class="env-badge env-badge--info">8.2</span>

Element colors are used for elements and components. See usage examples below.

<div class="example-grid">
  <div class="example-grid__col example-grid__col--25">
    <div class="example-element-color example-element-color--default">
      <p>Default</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--25">
    <div class="example-element-color example-element-color--primary">
      <p>Primary</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--25">
    <div class="example-element-color example-element-color--secondary">
      <p>Secondary</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--25">
    <div class="example-element-color example-element-color--success">
      <p>Success</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--25">
    <div class="example-element-color example-element-color--warning">
      <p>Warning</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--25">
    <div class="example-element-color example-element-color--danger">
      <p>Danger</p>
      <div class="example-element-color-variants">
        <div class="example-element-color-variant example-element-color-variant--light">Light</div>
        <div class="example-element-color-variant example-element-color-variant--dark">Dark</div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--25">
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
        <h2>Primary & default</h2>
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
          <br />
          <button type="button" class="env-button env-button--invert">
            Invert
          </button>
          <button type="button" class="env-button env-button--link">Link</button>
        </div>
        <div class="example-element">
          <div class="example-element-label">Badge:</div>
          <span class="env-badge">Primary</span>
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
         <div class="example-element-label">Switch:</div>
         <div class="env-switch">
            <label class="env-switch__label">
               <input type="checkbox" checked />
               <span class="env-switch__text">On</span>
               <span class="env-switch__slider"></span>
            </label>
         </div>
        </div>
      </div>
      <div class="example-grid__col example-grid__col--50">
        <div class="example-element">
          <div class="example-element-label">Menu:</div>
          <ul class="env-nav env-nav--menubar env-nav--fill" role="menubar">
            <li class="env-nav__item" role="menuitem">
              <a class="env-nav__link" href="javascript:void(0)">Item</a>
            </li>
            <li class="env-nav__item" role="menuitem">
              <a class="env-nav__link env-nav__link--active" href="javascript:void(0)">Item</a>
            </li>
            <li class="env-nav__item" role="menuitem">
              <a class="env-nav__link" href="javascript:void(0)">Item</a>
            </li>
          </ul>
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
                <a class="env-pagination__link env-is-active" href="javascript:void(0)"
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
        <h2>Success</h2>
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
  <div class="example-grid__col example-grid__col--50">
    <div class="example-grid__box">
      <div class="example-element-header">
        <h2>Warning</h2>
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
  <div class="example-grid__col example-grid__col--50">
    <div class="example-grid__box">
      <div class="example-element-header">
        <h2>Danger</h2>
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
  <div class="example-grid__col example-grid__col--50">
    <div class="example-grid__box">
      <div class="example-element-header">
        <h2>Info</h2>
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
</div>

## General colors

There are a few general colors that is used for
larger sections or less defined parts of components.
For example, `--env-section-background-color`
is used as background color for Modal dialogs.

-  `--env-font-color` - Generic text color
-  `--env-link-font-color` - Generic link color
-  `--env-link-hover-font-color` - Generic link:hover color
-  `--env-border-color` - Generic border color
-  `--env-border-color-light` - Calculated from `--env-border-color`
-  `--env-page-background-color` - Not used at the moment
-  `--env-section-background-color` - Used for larger sections

## Background color <span class="env-badge env-badge--danger">Deprecated</span>

Since Sitevision 8.2 Background color is deprecated. Please use Block colors.

```html
<div class="example-color">
   <div class="env-bg-color--brand env-color--lightest">Brand</div>
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

## Color <span class="env-badge env-badge--danger">Deprecated</span>

Since Sitevision 8.2 Color is deprecated. Please use Block colors.

```html
<div class="example-color">
   <p class="env-text env-color--brand">Brand</p>
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

## Background color - Darker / Lighter <span class="env-badge env-badge--danger">Removed</span>

Since Sitevision 8.2 Background color - Darker / Lighter is no longer
included in Envision. Please use Block and Element colors.

`--env-bg-color--{color}--{value}`
