const Dropdown = (($) => {

   const NAME = 'dropdown';
   const NO_CONFLICT = $.fn[NAME];
   const SV_DROPDOWN_OPEN = 'sv-dropdown--open';
   const TOGGLE_DROPDOWN = '[data-sv-dropdown]';
   const ESCAPE_KEY = 27;

   class Dropdown {

      constructor(element) {
         this.el = element;
         this.$el = $(element);
         this._isShown = false;
         this._bindEvents();
      }

      _bindEvents() {
         $(document).one('click', (event) => {
            if (!$(event.target).closest('.sv-dropdown').length || this._isShown) {
               this.hide();
            }
         });
      }

      toggle() {
         if (this.$el.hasClass(SV_DROPDOWN_OPEN)) {
            this.hide();
         } else {
            this.show();
         }
      }

      show() {
         this._isShown = true;
         this.$el.attr('aria-expanded', 'true');
         this.$el.addClass(SV_DROPDOWN_OPEN);
         this.$el.focus();
         this._setEscapeAction();
      }

      hide() {
         $(':focus').blur();
         this.$el.attr('aria-expanded', 'false');
         this._isShown = false;
         this.$el.removeClass(SV_DROPDOWN_OPEN);
         this._setEscapeAction();
      }

      _setEscapeAction() {
         if (this._isShown) {
            this.$el.on('keydown', (event) => {
               if (event.which === ESCAPE_KEY) {
                  this.hide();
               }
            });
         } else if (!this._isShown) {
            this.$el.off('keydown');
         }
      }

      static _jQuery(config) {
         return this.each(function() {
            const data = new Dropdown(this);

            if (typeof config === 'string') {
               if (data[config] === undefined) {
                  throw new Error(`No method named "${config}"`);
               }
               data[config]();
               return;
            }

            data.toggle();
         });
      }
   }

   $.fn[NAME] = Dropdown._jQuery;
   $.fn[NAME].Constructor = Dropdown;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Dropdown._jQuery;
   };

   $(document).on('click', TOGGLE_DROPDOWN, function(e) {
      e.preventDefault();

      const $this = $(this);
      const $parentNode = $($this[0].parentNode);

      $parentNode.dropdown();
   });

   return Dropdown;

})(jQuery);

export default Dropdown;
