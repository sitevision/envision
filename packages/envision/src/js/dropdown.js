/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import { getNodes, hide, resetDisplay } from './util/nodes';
import { getPopper } from './util/popper';

const ENV_DROPDOWN_OPEN = 'env-is-open';
const TOGGLE_DROPDOWN = '[data-dropdown]';
const TARGET_ATTR = 'data-target';
const INDEX_ATTR = 'data-env-dropdown-index';
const PLACEMENT_BODY_ATTR = 'data-dropdown-placement-body';
const ENV_DROPDOWN_MENU = '.env-dropdown__menu';
const NAME = 'envDropdown';

class Dropdown {
   constructor(container, menu, button) {
      this.button = button;
      this.container = container;
      this.placeholder = document.createElement('span');
      this.menu = menu;
      this.menuitems = getNodes('.env-dropdown__item', this.menu);
      this.menu.insertAdjacentElement('beforebegin', this.placeholder);
      this.placementBody = this.button.hasAttribute(PLACEMENT_BODY_ATTR);

      this.menuitems.forEach((el, i) => {
         el.setAttribute(INDEX_ATTR, i);
      });

      this.handleClick = this.handleClick.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleKeyUp = this.handleKeyUp.bind(this);
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
      if (this.placementBody) {
         document.body.appendChild(this.menu);
      }
      resetDisplay(this.menu);
      this._bindEvents();
      getPopper().then((createPopper) => {
         this._popper = createPopper(this.container, this.menu, {
            placement: 'bottom-start',
            modifiers: {
               name: 'flip',
               enabled: false,
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
      if (this.placementBody) {
         this.placeholder.insertAdjacentElement('afterend', this.menu);
      }
   }

   _bindEvents() {
      this._unbindEvents();
      document.addEventListener('click', this.handleClick);
      document.addEventListener('keydown', this.handleKeyDown);
      document.addEventListener('keyup', this.handleKeyUp);
   }

   _unbindEvents() {
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('keydown', this.handleKeyDown);
      document.removeEventListener('keyup', this.handleKeyUp);
   }

   handleClick() {
      this.hide();
   }

   handleKeyUp(e) {
      const el = e.target;
      if (!this.button.contains(el) && !this.menu.contains(el)) {
         this.hide();
      }
   }

   handleKeyDown(e) {
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
         if (e.key === 'Tab' && !e.shiftKey && current === menuItemCount - 1) {
            this.button.focus();
            this.hide();
         } else if (e.key === 'Tab' && e.shiftKey && current === 0) {
            e.preventDefault();
            this.button.focus();
         } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = this.menu.querySelector(
               `[${INDEX_ATTR} ="${current - 1}"]`
            );
            prev && prev.focus();
         } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const next = this.menu.querySelector(
               `[${INDEX_ATTR} ="${current + 1}"]`
            );
            next && next.focus();
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
         if (container[NAME]) {
            container[NAME].toggle();
         } else {
            await getPopper();
            container[NAME] = new Dropdown(container, menu, button);
            if (menu) {
               hide(menu);
            }
            container[NAME].toggle();
         }
      }
   }
};

if (document) {
   document.addEventListener('click', initialize);
}

export default Dropdown;
