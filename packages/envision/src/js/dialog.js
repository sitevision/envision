/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import { getFocusable, getNodes, lockScroll, unlockScroll } from './util/nodes';
import Util from './util/util';

const CLASSNAME = {
   USE_ANIMATION: 'env-dialog--fade',
   ANIMATION: 'env-dialog--in',
};

export default class Dialog {
   #opener;
   #initialized;
   #modalEventsBound;
   #elementPlaceholder;

   constructor(element, options) {
      this.options = options;

      if (!this.#initialized) {
         this._bindThis();
         this.el = element;
         this.el.classList.add(CLASSNAME.USE_ANIMATION);
         this.el.classList.remove(CLASSNAME.ANIMATION);
         this.#elementPlaceholder = document.createElement('span');
         this.#elementPlaceholder.dataset.envDialogPlaceholder = '';
         if (options.opener) {
            this.#opener = getNodes(options.opener);
            this._bindOpenEvent();
         }
         this.#initialized = true;
      }
   }

   _bindThis() {
      this.show = this.show.bind(this);
      this.close = this.close.bind(this);
      this.#handleClick = this.#handleClick.bind(this);
   }

   _fadeIn() {
      this.el.classList.add(CLASSNAME.ANIMATION);
   }

   _bindModalEvents() {
      this.el.addEventListener('close', this.close);
      this.el.addEventListener('click', this.#handleClick, { capture: false });
      this.el.addEventListener('keydown', this.#handleKeydown);
      this.#modalEventsBound = true;
   }

   _bindOpenEvent() {
      this.#opener.map((el) => {
         el.addEventListener('click', this.show);
      }, this);
   }

   #handleKeydown = (e) => {
      if (/input|textarea/i.test(e.target.tagName)) {
         return;
      }
      const focusable = getFocusable(this.el);
      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (
         e.key === 'Escape' &&
         this.el.getAttribute('role') === 'alertdialog'
      ) {
         e.preventDefault();
      } else if (e.key === 'Tab') {
         if (e.shiftKey) {
            if (e.target === firstElement) {
               e.preventDefault();
               lastElement.focus();
            }
         } else if (e.target === lastElement) {
            e.preventDefault();
            firstElement.focus();
         }
      }
   };

   #handleClick = (e) => {
      // Never close alertdialog on click outside
      if (
         this.options.backdropClick &&
         e.target.isEqualNode(this.el) &&
         this.el.getAttribute('role') !== 'alertdialog'
      ) {
         this.close();
      }
   };

   //----- API Methods -----

   show(e) {
      if (e) {
         e.preventDefault();
      }
      this.el.after(this.#elementPlaceholder);
      document.body.append(this.el);
      lockScroll();
      this.el.showModal();
      this._fadeIn();
      if (!this.#modalEventsBound) {
         this._bindModalEvents();
      }
   }

   close() {
      if (this.el.classList.contains(CLASSNAME.ANIMATION)) {
         this.el.classList.remove(CLASSNAME.ANIMATION);
         this.el.close();
         this.#elementPlaceholder.after(this.el);
         this.#elementPlaceholder.remove();
         unlockScroll();
      }
   }
}

const dialogDefaults = {
   opener: null,
   backdropClick: true,
};

export const getDialogSettings = (options) => {
   // Remove unwanted settings
   options = Util.normalizeOptions(options, dialogDefaults);
   // Merge user settings with envision and user defaults
   return Util.extend(true, {}, dialogDefaults, options);
};
