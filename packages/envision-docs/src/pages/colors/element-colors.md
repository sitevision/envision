---
title: Element colors
---

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
        <h2 class="doc-heading-2">Primary & default</h2>
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
        <h2 class="doc-heading-2">Success</h2>
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
               <use href="/sitevision/envision-icons.svg#icon-delete"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--50">
    <div class="example-grid__box">
      <div class="example-element-header">
        <h2 class="doc-heading-2">Warning</h2>
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
               <use href="/sitevision/envision-icons.svg#icon-delete"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--50">
    <div class="example-grid__box">
      <div class="example-element-header">
        <h2 class="doc-heading-2">Danger</h2>
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
               <use href="/sitevision/envision-icons.svg#icon-delete"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="example-grid__col example-grid__col--50">
    <div class="example-grid__box">
      <div class="example-element-header">
        <h2 class="doc-heading-2">Info</h2>
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
               <use href="/sitevision/envision-icons.svg#icon-delete"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
