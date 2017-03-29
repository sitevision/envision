import Util from './util';

const Modal = (($) => {

   const NAME = 'modal';
   const NO_CONFLICT = $.fn[NAME];
   const SELECTOR = '[data-sv-modal]';
   const DISMISS_SELECTOR = '[data-sv-modal-dismiss]';
   const MODIFIER_BASE = 'sv-modal--';
   const BACKDROP = 'sv-modal__backdrop';
   const BACKDROP_ANIMATION = 'sv-modal__backdrop--in';
   const SHOW = 'show';
   const ESCAPE_KEY = 27;
   const ANIMATION = 'sv-animation-in-progress';
   const ANIMATION_END = 'animationend';
   const FOCUSIN = 'focusin.sv-modal';

   class Modal {

      constructor(element) {
         this.el = element;
         this.$el = $(element);
         this._isShown = false;
         this._focus = false;
         this._bindEvents();
      }

      _bindEvents() {
         this.$el.on('click', DISMISS_SELECTOR, (event) => this.hide(event));
      }

      show() {
         this._showBackdrop();
         this.$el.outerWidth();

         this.$el
            .addClass(MODIFIER_BASE + SHOW)
            .removeAttr('aria-hidden')
            .css('opacity', 1);

         this._isShown = true;

         if (!this._focus) {
            this._focus = true;
            this.el.focus();
         }

         this._setEscapeKey();
         this._focusModal();
      }

      hide() {
         const hideModalCallback = () => {
            this.$el.removeClass(MODIFIER_BASE + SHOW);
         };

         const removeBackdropCallback = () => {
            this.$backdrop.remove();
         };

         this.$el
            .one(Util.whenTransitionEnd(), hideModalCallback)
            .attr('aria-hidden', 'true')
            .css('opacity', 0)
            .off('click');

         this.$backdrop
            .one(Util.whenTransitionEnd(), removeBackdropCallback)
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
            .off(FOCUSIN) // guard against infinite focus loop
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
            .one(ANIMATION_END, this._whenAnimationEnds)
            .addClass(`${BACKDROP_ANIMATION} ${ANIMATION}`);
      }

      _whenAnimationEnds(e) {
         const $target = $(e.currentTarget);
         $target.removeClass(ANIMATION);
      }

      static _jQuery() {
         return this.each(() => {
            const data = new Modal(this);
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

      const $this = $(this);
      const $target = $($this.data('sv-target'));

      $target.modal();
   });

   return Modal;

})(jQuery);

export default Modal;
