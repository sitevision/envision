/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import {
   getNextFocusable,
   getNodes,
   hide,
   resetDisplay,
   uniqueId,
} from './util/nodes';
import { getPopper } from './util/popper';

const ENV_DROPDOWN_OPEN = 'env-is-open';
const TOGGLE_DROPDOWN = '[data-dropdown]';
const TARGET_ATTR = 'data-target';
const INDEX_ATTR = 'data-env-dropdown-index';
const PLACEMENT_BODY_ATTR = 'data-dropdown-placement-body';
const ENV_DROPDOWN_MENU = '.env-dropdown__menu';
const NAME = 'envDropdown';
const DATA_INITIALIZED = 'data-env-dropdown';

class Dropdown {
   constructor(container, menu, button) {
      this.button = button;
      this.container = container;
      this.placeholder = document.createElement('span');
      this.menu = menu;
      this.menuitems = getNodes('.env-dropdown__item', this.menu);

      uniqueId(this.button);
      uniqueId(this.menu);

      this.button.setAttribute('aria-haspopup', 'true');
      this.button.setAttribute('aria-controls', this.menu.id);

      this.menu.insertAdjacentElement('beforebegin', this.placeholder);
      this.menu.setAttribute('aria-labelledby', this.button.id);
      this.menu.setAttribute('role', 'menu');

      this.menuitems.forEach((el, i) => {
         const li = el.closest('li');
         el.setAttribute(INDEX_ATTR, i);
         el.setAttribute('role', 'menuitem');
         if (el !== li && this.menu.contains(el.closest('li'))) {
            // If menuitem has a enveloping LI element it should have role=none
            li.setAttribute('role', 'none');
         }
      });

      this.placementBody = this.button.hasAttribute(PLACEMENT_BODY_ATTR);

      this.handleButtonClick = this.handleButtonClick.bind(this);
      this.handleButtonKeyDown = this.handleButtonKeyDown.bind(this);
      this.handleMenuKeyDown = this.handleMenuKeyDown.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
      this.handleOutsideKeyUp = this.handleOutsideKeyUp.bind(this);

      this._bindEventsOnInit();
   }

   handleButtonClick() {
      if (this.container.classList.contains(ENV_DROPDOWN_OPEN)) {
         this.hide();
      } else {
         this.show();
      }
   }

   handleButtonKeyDown(e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === ' ') {
         e.preventDefault();
         this.show(e.key === 'ArrowUp' ? this.menuitems.length - 1 : 0);
      }
   }

   show(focusIndex) {
      focusIndex = focusIndex || 0;
      this.container.classList.add(ENV_DROPDOWN_OPEN);
      this.button.setAttribute('aria-expanded', 'true');
      if (this.placementBody) {
         document.body.appendChild(this.menu);
      }
      resetDisplay(this.menu);
      this._bindMenuEvents();
      getPopper().then((createPopper) => {
         this._popper = createPopper(this.container, this.menu, {
            placement: 'bottom-start',
            modifiers: {
               name: 'flip',
               enabled: false,
            },
         });
         this._popper.update();
         setTimeout(() => {
            this.menuitems[focusIndex].focus();
         }, 1);
      });
   }

   hide() {
      this.container.classList.remove(ENV_DROPDOWN_OPEN);
      this.button.setAttribute('aria-expanded', 'false');
      this._unbindMenuEvents();
      hide(this.menu);
      if (this.placementBody) {
         this.placeholder.insertAdjacentElement('afterend', this.menu);
      }
   }

   _bindEventsOnInit() {
      this.button.addEventListener('click', this.handleButtonClick);
      this.button.addEventListener('keydown', this.handleButtonKeyDown);
   }

   _bindMenuEvents() {
      this._unbindMenuEvents();
      document.addEventListener('click', this.handleOutsideClick);
      document.addEventListener('keydown', this.handleMenuKeyDown);
      document.addEventListener('keyup', this.handleOutsideKeyUp);
   }

   _unbindMenuEvents() {
      document.removeEventListener('click', this.handleOutsideClick);
      document.removeEventListener('keydown', this.handleMenuKeyDown);
      document.removeEventListener('keyup', this.handleOutsideKeyUp);
   }

   handleOutsideClick(e) {
      const el = e.target;
      if (!this.button.contains(el) && !this.menu.contains(el)) {
         this.hide();
      }
   }

   handleOutsideKeyUp(e) {
      const el = e.target;
      if (!this.button.contains(el) && !this.menu.contains(el)) {
         this.hide();
      }
   }

   handleMenuKeyDown(e) {
      const el = e.target;
      const menuItemCount = this.menuitems.length;

      if (e.key === 'Escape') {
         this.hide();
         this.button.focus();
      } else if (this.menu.contains(el) && menuItemCount > 0) {
         const current = parseInt(el.getAttribute(INDEX_ATTR), 10);

         if (e.key === ' ' && el.tagName !== 'BUTTON') {
            e.preventDefault();
            const menuItemEl = el.closest('[role=menuitem]');
            menuItemEl && menuItemEl.click();
         } else if (e.key === 'Tab') {
            if (e.shiftKey) {
               e.preventDefault();
               this.button.focus();
            } else if (this.placementBody) {
               e.preventDefault();
               const nextFocusable = getNextFocusable(this.button);
               nextFocusable.focus();
            }
            this.hide();
         } else if (e.key === 'Home') {
            e.preventDefault();
            this.menuitems[0].focus();
         } else if (e.key === 'End') {
            e.preventDefault();
            this.menuitems[this.menuitems.length - 1].focus();
         } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = current > 0 ? current - 1 : this.menuitems.length - 1;
            this.menuitems[prev].focus();
         } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const next = current < this.menuitems.length - 1 ? current + 1 : 0;
            this.menuitems[next].focus();
         }
      }
   }
}

const initialize = async (e) => {
   const button = e.target.closest(TOGGLE_DROPDOWN);
   if (button) {
      const container = e.target.closest(button.getAttribute(TARGET_ATTR));
      const menu = container.querySelector(ENV_DROPDOWN_MENU);
      if (container && container.id) {
         if (!container[NAME]) {
            container[NAME] = true;
            await getPopper();
            container[NAME] = new Dropdown(container, menu, button);
            if (menu) {
               menu.setAttribute(DATA_INITIALIZED, 'true');
               hide(menu);
            }
         }
      }
   }
};

if (document) {
   document.addEventListener('focusin', initialize);
}

export default Dropdown;
