/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import CssUtil from './util/css-util';
import { getNodes, lockScroll, unlockScroll } from './util/nodes';
import Util from './util/util';

import Dialog, { getDialogSettings } from './dialog';

const ANIMATION = 'env-animation-in-progress';
const BACKDROP = 'env-modal-dialog__backdrop';
const BACKDROP_ANIMATION = 'env-modal-dialog__backdrop--in';
const DISMISS_SELECTOR = '[data-modal-dialog-dismiss]';
const PLACEMENT_BODY_ATTR = 'data-modal-dialog-placement-body';
const FOCUSIN = 'focusin.env-modal-dialog';
const MODIFIER_BASE = 'env-modal-dialog--';
const ALERT_MODIFIER_BASE = 'env-modal-alert--';
const NAME = 'envDialog';
const SELECTORS = {
   MODAL_DIALOG: '[data-modal-dialog]',
   MODAL_ALERT: '[data-modal-alert]',
};
const SHOW = 'show';

const FOCUSABLE_ELEMENTS_SELECTOR =
   'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

const EVENTS = {
   HIDE: 'hide.env-modal-dialog',
   HIDDEN: 'hidden.env-modal-dialog',
   SHOW: 'show.env-modal-dialog',
   SHOWN: 'shown.env-modal-dialog',
};

class ModalDialog {
   constructor(element) {
      this.$el = $(element);
      this.el = this.$el.get(0);
      this.$body = $(document.body);
      this.$placeholder = $('<span />');
      this._isShown = false;
      this.placementBody = this.el.hasAttribute(PLACEMENT_BODY_ATTR);
      this.$el.after(this.$placeholder);
   }

   toggle() {
      return this._isShown ? this.hide() : this.show();
   }

   show() {
      if (this._isShown) {
         return;
      }

      CssUtil.reflow(this.el); // Used to force reflow

      const showEvent = $.Event(EVENTS.SHOW, {});

      lockScroll();

      if (this.placementBody) {
         this.$body.append(this.$el);
      }

      this.$el.trigger(showEvent);

      const shownEvent = $.Event(EVENTS.SHOWN, {});

      this.$el
         .one('transitionend', () => {
            this.$el.trigger(shownEvent);
         })
         .addClass(this._getModifierBase() + SHOW)
         .removeAttr('aria-hidden')
         .css('opacity', 1);

      this._showBackdrop();

      this._isShown = true;
      this.$el.trigger('focus');

      this._bindEvents();
   }

   hide() {
      if (!this._isShown) {
         return;
      }

      const hideModalCallback = () => {
         this.$el.removeClass(this._getModifierBase() + SHOW);
         const hiddenEvent = $.Event(EVENTS.HIDDEN, {});
         this.$el.trigger(hiddenEvent);
      };

      const removeBackdropCallback = () => {
         this.$backdrop.remove();
         unlockScroll();
         if (this.placementBody) {
            this.$placeholder.before(this.$el);
         }
      };

      const hideEvent = $.Event(EVENTS.HIDE, {});

      this.$el.trigger(hideEvent);

      this.$el
         .one('transitionend', hideModalCallback)
         .attr('aria-hidden', 'true')
         .css('opacity', 0)
         .off('click', DISMISS_SELECTOR);

      this.$backdrop
         .one('transitionend', removeBackdropCallback)
         .removeClass(BACKDROP_ANIMATION);

      this._isShown = false;
      this._unbindEvents();
   }

   _bindEvents() {
      this.$el.on('click', DISMISS_SELECTOR, (e) => this.hide(e));

      $(document)
         .off(FOCUSIN)
         .one(FOCUSIN, (e) => {
            if (
               document !== e.target &&
               this.el !== e.target &&
               !this.$el.has(e.target).length
            ) {
               this.$el.trigger('focus');
            }
         });

      const focusableElements = this.$el.find(FOCUSABLE_ELEMENTS_SELECTOR);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      this.$el.on('keydown', (e) => {
         if (e.key === 'Tab') {
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

         if (e.key === 'Escape') {
            this.hide();
         }
      });
   }

   _getModifierBase() {
      return this.$el.hasClass('env-modal-alert')
         ? ALERT_MODIFIER_BASE
         : MODIFIER_BASE;
   }

   _unbindEvents() {
      this.$el.off('click keydown');
      $(document).off(FOCUSIN);
   }

   _showBackdrop() {
      this.$backdrop = $('<div/>', {
         class: BACKDROP,
      });

      this.$el.on('mousedown', (e) => {
         if (this.$backdrop.hasClass(ANIMATION)) {
            return;
         }

         if (e.target !== e.currentTarget) {
            return;
         }

         if (!this._isShown) {
            return;
         }

         this.hide();
      });

      this.$backdrop.appendTo(document.body);

      this.$backdrop
         .one('animationend', this._removeBackdropAnimation)
         .addClass(`${BACKDROP_ANIMATION} ${ANIMATION}`);
   }

   _removeBackdropAnimation(e) {
      $(e.currentTarget).removeClass(ANIMATION);
   }

   static _init(elements, options) {
      const nodes = getNodes(elements);
      if (nodes.length > 0) {
         return nodes.map((node) => {
            if (
               node.tagName === 'DIALOG' &&
               node.classList.contains('env-dialog')
            ) {
               // New dialog component
               if (!node[NAME]) {
                  node[NAME] = new Dialog(node, getDialogSettings(options));
               }
               return node[NAME];
            } else {
               if (!node[NAME]) {
                  node[NAME] = new ModalDialog(node);
               }
               if (typeof options === 'string') {
                  if (!node[NAME][options]) {
                     throw new Error(`No method named "${options}"`);
                  }
                  node[NAME][options].call(node[NAME]);
               }
               return node[NAME];
            }
         });
      }
   }

   static _jQueryInterface(action) {
      Util.consoleWarning('jQuery', NAME);
      return this.each(() => {
         const nodes = getNodes(this);
         nodes.forEach((node) => {
            ModalDialog._init(node, action);
         });
      });
   }
}

if (typeof document !== 'undefined') {
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = ModalDialog._jQueryInterface;
   $.fn[NAME].Constructor = ModalDialog;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return ModalDialog._jQueryInterface;
   };

   document.addEventListener('click', (e) => {
      const el = e.target.closest(
         SELECTORS.MODAL_ALERT + ',' + SELECTORS.MODAL_DIALOG
      );
      if (!el) {
         return;
      }
      e.preventDefault();
      const selector = el.dataset.target;
      ModalDialog._init(document.querySelector(selector), 'show');
   });
}

export default async (elements, action) => {
   return ModalDialog._init(elements, action);
};
