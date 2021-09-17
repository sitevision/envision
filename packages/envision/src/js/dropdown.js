/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import { getNodes, hide, unhide } from './util/nodes';

const ENV_DROPDOWN_OPEN = 'env-is-open';
const TOGGLE_DROPDOWN = '[data-dropdown]';
const TARGET_ATTR = 'data-target';
const INDEX_ATTR = 'data-env-dropdown-index';
const ENV_DROPDOWN_MENU = '.env-dropdown__menu';
const DATA_INITIALIZED = 'data-env-dropdown';

const dropdowns = {};

let Popper;
const getPopper = async () => {
   if (Popper) {
      return Popper;
   }

   const { default: DynamicPopper } = await import(
      /* webpackChunkName: "popper" */ 'popper.js'
   );
   Popper = DynamicPopper;
   return Popper;
};

class Dropdown {
   constructor(container, menu, button) {
      this.button = button;
      this.container = container;
      this.placeholder = document.createElement('span');
      this.menu = menu;
      this.menuitems = getNodes('.env-dropdown__item', this.menu);
      this.menu.insertAdjacentElement('beforebegin', this.placeholder);

      this.menuitems.forEach((el, i) => {
         el.setAttribute(INDEX_ATTR, i);
      });

      this._handleClick = (() => {
         this.hide();
      }).bind(this);

      this._handleKeyDown = ((e) => {
         const el = e.target;
         const menuItemCount = this.menuitems.length;

         if (e.key === 'Escape') {
            this.hide();
         } else if (this.button.contains(el) && menuItemCount > 0) {
            if ((e.key === 'Tab' && !e.shiftKey) || e.key === 'ArrowDown') {
               this.menuitems[0].focus();
               e.preventDefault();
            }
         } else if (this.menu.contains(el) && menuItemCount > 0) {
            const current = parseInt(el.getAttribute(INDEX_ATTR), 10);
            if (
               e.key === 'Tab' &&
               !e.shiftKey &&
               current === menuItemCount - 1
            ) {
               this.button.focus();
               this.hide();
            } else if (e.key === 'Tab' && e.shiftKey && current === 0) {
               e.preventDefault();
               this.button.focus();
            } else if (e.key === 'ArrowUp') {
               e.preventDefault();
               const prev = this.menu.querySelector(
                  '[' + INDEX_ATTR + '="' + (current - 1) + '"]'
               );
               prev && prev.focus();
            } else if (e.key === 'ArrowDown') {
               e.preventDefault();
               const next = this.menu.querySelector(
                  '[' + INDEX_ATTR + '="' + (current + 1) + '"]'
               );
               next && next.focus();
            }
         }
      }).bind(this);

      this._handleKeyUp = ((e) => {
         const el = e.target;
         if (!this.button.contains(el) && !this.menu.contains(el)) {
            this.hide();
         }
      }).bind(this);
   }

   toggle() {
      if (this.container.classList.contains(ENV_DROPDOWN_OPEN)) {
         this.hide();
      } else {
         this.show();
      }
   }

   show() {
      this.container.classList.add(ENV_DROPDOWN_OPEN);
      this.button.setAttribute('aria-expanded', 'true');
      document.body.appendChild(this.menu);
      unhide(this.menu);
      this._bindEvents();
      getPopper().then((Popper) => {
         this._popper = new Popper(this.container, this.menu, {
            placement: 'bottom-start',
            modifiers: {
               flip: {
                  enabled: false,
               },
            },
         });
         this._popper.update();
      });
   }

   hide() {
      this.container.classList.remove(ENV_DROPDOWN_OPEN);
      this.button.setAttribute('aria-expanded', 'false');
      this._unbindEvents();
      hide(this.menu);
      this.placeholder.insertAdjacentElement('afterend', this.menu);
   }

   _bindEvents() {
      this._unbindEvents();
      document.addEventListener('click', this._handleClick);
      document.addEventListener('keydown', this._handleKeyDown);
      document.addEventListener('keyup', this._handleKeyUp);
   }

   _unbindEvents() {
      document.removeEventListener('click', this._handleClick);
      document.removeEventListener('keydown', this._handleKeyDown);
      document.removeEventListener('keyup', this._handleKeyUp);
   }
}

if (document) {
   document.addEventListener('click', async (e) => {
      const button = e.target.closest(TOGGLE_DROPDOWN);
      if (button) {
         const container = e.target.closest(button.getAttribute(TARGET_ATTR));
         const menu = container.querySelector(ENV_DROPDOWN_MENU);
         if (container && container.id) {
            if (container.getAttribute(DATA_INITIALIZED) === 'true') {
               dropdowns[container.id].toggle();
            } else if (container.getAttribute(DATA_INITIALIZED) !== 'true') {
               await getPopper();
               dropdowns[container.id] = new Dropdown(container, menu, button);
               container.setAttribute(DATA_INITIALIZED, 'true');
               if (menu) {
                  menu.setAttribute(DATA_INITIALIZED, 'true');
                  hide(menu);
               }
               dropdowns[container.id].toggle();
            }
         }
      }
   });
}

export default Dropdown;
