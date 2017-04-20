/**
 * --------------------------------------------------------------------------
 * Licensed under MIT <TODO add url>
 * --------------------------------------------------------------------------
 */

import Util from './util';

const Modal = (($) => {

   const ANIMATION = 'sv-animation-in-progress';
   const BACKDROP = 'sv-modal__backdrop';
   const BACKDROP_ANIMATION = 'sv-modal__backdrop--in';
   const DATA_KEY = 'sv.modal';
   const DISMISS_SELECTOR = '[data-modal-dismiss]';
   const ESCAPE_KEY = 27;
   const FOCUSIN = 'focusin.sv-modal';
   const MODIFIER_BASE = 'sv-modal--';
   const NAME = 'modal';
   const NO_CONFLICT = $.fn[NAME];
   const SELECTOR = '[data-modal]';
   const SHOW = 'show';
   const TAB_KEY = 9;

   const FOCUSABLE_ELEMENTS_SELECTOR = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

   const EVENTS = {
      HIDE: 'hide.sv-modal',
      HIDDEN: 'hidden.sv-modal',
      SHOW: 'show.sv-modal',
      SHOWN: 'shown.sv-modal'
   };

   class Modal {

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

         this.$el.outerWidth(); // Used to force reflow

         const showEvent = $.Event(EVENTS.SHOW, {});

         this.$el.trigger(showEvent);

         const shownEvent = $.Event(EVENTS.SHOWN, {});

         this.$el
            .one(Util.getTranstionEndEvent(), () => {
               this.$el.trigger(shownEvent);
            })
            .addClass(MODIFIER_BASE + SHOW)
            .removeAttr('aria-hidden')
            .css('opacity', 1);

         this._showBackdrop();

         this._isShown = true;
         this.el.focus();

         this._bindEvents();
      }

      hide() {
         if (!this._isShown) {
            return;
         }

         const hideModalCallback = () => {
            this.$el.removeClass(MODIFIER_BASE + SHOW);

            const hiddenEvent = $.Event(EVENTS.HIDDEN, {});
            this.$el.trigger(hiddenEvent);
         };

         const removeBackdropCallback = () => {
            this.$backdrop.remove();
         };

         const hideEvent = $.Event(EVENTS.HIDE, {});

         this.$el.trigger(hideEvent);

         this.$el
            .one(Util.getTranstionEndEvent(), hideModalCallback)
            .attr('aria-hidden', 'true')
            .css('opacity', 0)
            .removeClass(MODIFIER_BASE + SHOW)
            .off('click', DISMISS_SELECTOR);

         this.$backdrop
            .one(Util.getTranstionEndEvent(), removeBackdropCallback)
            .removeClass(BACKDROP_ANIMATION);

         this._isShown = false;
         this._unbindEvents();
      }

      _bindEvents() {
         this.$el.on('click', DISMISS_SELECTOR, (event) => this.hide(event));

         $(document)
            .off(FOCUSIN)
            .one(FOCUSIN, (event) => {
               if (document !== event.target &&
                  this.el !== event.target &&
                  !this.$el.has(event.target).length) {
                  this.el.focus();
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

      _unbindEvents() {
         this.$el.off('click keydown');
         $(document).off(FOCUSIN);
      }

      _showBackdrop() {
         this.$backdrop = $('<div/>', {
            class: BACKDROP
         });

         this.$el.on('click', (event) => {
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
            .one(Util.getAnimationEndEvent(), this._removeBackdropAnimation)
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
               data = new Modal(this);
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

   $.fn[NAME] = Modal._jQuery;
   $.fn[NAME].Constructor = Modal;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Modal._jQuery;
   };

   $(document).on('click', SELECTOR, function(e) {
      e.preventDefault();

      const $target = $($(this).data('target'));

      $target.modal();
   });

   return Modal;

})(jQuery);

export default Modal;
