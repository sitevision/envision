/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import CssUtil from './util/css-util';
import { getNodes } from './util/nodes';

const ANIMATION = 'env-animation-in-progress';
const BACKDROP = 'env-modal-dialog__backdrop';
const BACKDROP_ANIMATION = 'env-modal-dialog__backdrop--in';
const DATA_KEY = 'env.modal-dialog';
const DISMISS_SELECTOR = '[data-modal-dialog-dismiss]';
const ESCAPE_KEY = 27;
const FOCUSIN = 'focusin.env-modal-dialog';
const MODIFIER_BASE = 'env-modal-dialog--';
const ALERT_MODIFIER_BASE = 'env-modal-alert--';
const NAME = 'envDialog';
const DATA_INITIALIZED = 'data-env-modal-dialog';
const SELECTORS = {
   MODAL_DIALOG: '[data-modal-dialog]',
   MODAL_ALERT: '[data-modal-alert]',
};
const SHOW = 'show';
const TAB_KEY = 9;

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
      this.el = element;
      this.$el = $(element);
      this._isShown = false;
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

      $('body').css('overflow', 'hidden');

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
         $('body').css('overflow', '');
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
      this.$el.on('click', DISMISS_SELECTOR, (event) => this.hide(event));

      $(document)
         .off(FOCUSIN)
         .one(FOCUSIN, (event) => {
            if (
               document !== event.target &&
               this.el !== event.target &&
               !this.$el.has(event.target).length
            ) {
               this.$el.trigger('focus');
            }
         });

      const focusableElements = this.$el.find(FOCUSABLE_ELEMENTS_SELECTOR);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      this.$el.on('keydown', (e) => {
         if (e.which === TAB_KEY) {
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

         if (e.which === ESCAPE_KEY) {
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

      this.$el.on('mousedown', (event) => {
         if (this.$backdrop.hasClass(ANIMATION)) {
            return;
         }

         if (event.target !== event.currentTarget) {
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

   static _jQuery(action) {
      return this.each(() => {
         const $this = $(this);
         let data = $this.data(DATA_KEY);

         if (!data) {
            data = new ModalDialog(this);
            $this.data(DATA_KEY, data);
         }

         if (typeof action === 'string') {
            const method = data[action];
            if (method === undefined) {
               throw new Error(`No method named "${action}"`);
            }
            method.call(data);
            return;
         }

         data.show();
      });
   }
}

if (typeof document !== 'undefined') {
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = ModalDialog._jQuery;
   $.fn[NAME].Constructor = ModalDialog;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return ModalDialog._jQuery;
   };

   $(document).on(
      'click',
      SELECTORS.MODAL_ALERT + ',' + SELECTORS.MODAL_DIALOG,
      function (e) {
         e.preventDefault();

         const $target = $($(this).data('target'));

         $target[NAME]();
      }
   );
}

export default async (elements) => {
   const nodes = getNodes(elements);
   if (nodes.length > 0) {
      const modals = nodes
         .filter((node) => node.getAttribute(DATA_INITIALIZED) !== 'true')
         .map((node) => {
            const modal = new ModalDialog(node);
            node.setAttribute(DATA_INITIALIZED, 'true');
            return modal;
         });
      return modals;
   }
};
