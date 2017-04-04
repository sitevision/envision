import Util from './util';

const Modal = (($) => {

   const NAME = 'modal';
   const DATA_KEY = 'sv.modal';
   const NO_CONFLICT = $.fn[NAME];
   const SELECTOR = '[data-sv-modal]';
   const DISMISS_SELECTOR = '[data-sv-modal-dismiss]';
   const MODIFIER_BASE = 'sv-modal--';
   const BACKDROP = 'sv-modal__backdrop';
   const BACKDROP_ANIMATION = 'sv-modal__backdrop--in';
   const SHOW = 'show';
   const ESCAPE_KEY = 27;
   const ANIMATION = 'sv-animation-in-progress';
   const FOCUSIN = 'focusin.sv-modal';

   const METHODS = [
      'show',
      'hide',
      'toggle'
   ];

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
         this._focus = false;
      }

      toggle() {
         return this._isShown ? this.hide() : this.show();
      }

      show() {
         if (this._isShown) {
            return;
         }

         this.$el.outerWidth();

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
         this.$el.on('click', DISMISS_SELECTOR, (event) => this.hide(event));

         this._isShown = true;

         if (!this._focus) {
            this._focus = true;
            this.el.focus();
         }

         this._setEscapeKey();
         this._focusModal();
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
            .off('click', DISMISS_SELECTOR);

         this.$backdrop
            .one(Util.getTranstionEndEvent(), removeBackdropCallback)
            .removeClass(BACKDROP_ANIMATION);

         this._focus = false;
         this._isShown = false;
         this._setEscapeKey();
      }

      _setEscapeKey() {
         if (this._isShown) {
            this.$el.on('keydown', (event) => {
               if (this.$backdrop.hasClass(ANIMATION)) {
                  return;
               }
               if (event.which === ESCAPE_KEY) {
                  this.hide();
               }
            });
         } else {
            this.$el.off('keydown');
         }
      }

      _focusModal() {
         $(document)
            .off(FOCUSIN)
            .on(FOCUSIN, (event) => {
               if (document !== event.target &&
                  this.$el[0] !== event.target &&
                  !this.$el.has(event.target).length) {
                  this.el.focus();
               }
            });
      }

      _showBackdrop() {
         this.$backdrop = $('<div/>', {
            class: BACKDROP
         });

         this.$backdrop.appendTo(document.body);

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

         this.$backdrop
            .one(Util.getAnimationEndEvent(), this._removeBackdropAnimation)
            .addClass(`${BACKDROP_ANIMATION} ${ANIMATION}`);
      }

      _removeBackdropAnimation(e) {
         const $target = $(e.currentTarget);
         $target.removeClass(ANIMATION);
      }

      static _jQuery(action) {
         return this.each(() => {
            const $element = $(this);
            let data = $element.data(DATA_KEY);

            if (!data) {
               data = new Modal(this);
               $element.data(DATA_KEY, data);
            }

            if (typeof action === 'string') {
               if (METHODS.includes(action)) {
                  if (action === 'show') {
                     data.show();
                  } else if (action === 'toggle') {
                     data.toggle();
                  } else if (action === 'hide') {
                     data.hide();
                  }
               } else {
                  throw new Error(`No method named "${action}"`);
               }
            } else {
               data.show();
            }
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

      const $this = $(this);
      const $target = $($this.data('sv-target'));

      $target.modal();
   });

   return Modal;

})(jQuery);

export default Modal;

