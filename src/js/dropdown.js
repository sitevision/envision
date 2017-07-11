/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

const Dropdown = (($) => {

   const NAME = 'dropdown';
   const NO_CONFLICT = $.fn[NAME];
   const SV_DROPDOWN_OPEN = 'sv-is-open';
   const TOGGLE_DROPDOWN = '[data-dropdown]';
   const ESCAPE_KEY = 27;
   const SV_CLICK_EVENT = 'click.sv-dropdown';
   const SV_KEYDOWN_EVENT = 'keydown.sv-dropdown';

   class Dropdown {

      constructor(element) {
         this.el = element;
         this.$el = $(element);
         this._id = this.el.id;
      }

      toggle() {
         if (this.$el.hasClass(SV_DROPDOWN_OPEN)) {
            this.hide();
         } else {
            this.show();
         }
      }

      show() {
         this.$el
            .attr('aria-expanded', 'true')
            .addClass(SV_DROPDOWN_OPEN)
            .focus();

         this._bindEvents();
      }

      hide() {
         this.$el
            .attr('aria-expanded', 'false')
            .removeClass(SV_DROPDOWN_OPEN)
            .find('.sv-dropdown--toggle').blur();

         this._unbindEvents();
      }

      _bindEvents() {
         const SV_CLICK = `${SV_CLICK_EVENT}-${this.el.id}`;
         const SV_KEYDOWN = `${SV_KEYDOWN_EVENT}-${this.el.id}`;
         $(document)
            .off(SV_CLICK)
            .on(SV_CLICK, (event) => {
               if (!$(event.target).hasClass('sv-dropdown__menu')) {
                  this.hide();
               }
            });

         this.$el
            .off(SV_KEYDOWN)
            .one(SV_KEYDOWN, (event) => {
               if (event.which === ESCAPE_KEY) {
                  this.hide();
               }
            });
      }

      _unbindEvents() {
         $(document).off(`${SV_CLICK_EVENT}-${this.el.id}`);
         this.$el.off(`${SV_KEYDOWN_EVENT}-${this.el.id}`);
      }

      static _jQuery(config) {
         return this.each(function() {
            const $this = $(this);
            let data = $this.data('sv.dropdown');

            if (!data) {
               data = new Dropdown(this);
               $this.data('sv.dropdown', data);
            }

            if (typeof config === 'string') {
               const method = data[config];
               if (method === undefined) {
                  throw new Error(`No method named "${config}"`);
               }
               method.call(data);
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
      const $target = $($this.data('target'));

      $target.dropdown();
   });

   return Dropdown;

})(jQuery);

export default Dropdown;
