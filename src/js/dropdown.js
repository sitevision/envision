/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

const Dropdown = (($) => {

   const NAME = 'envDropdown';
   const NO_CONFLICT = $.fn[NAME];
   const ENV_DROPDOWN_OPEN = 'env-is-open';
   const TOGGLE_DROPDOWN = '[data-dropdown]';
   const ESCAPE_KEY = 27;
   const ENV_CLICK_EVENT = 'click.env-dropdown';
   const ENV_KEYDOWN_EVENT = 'keydown.env-dropdown';

   class Dropdown {

      constructor(element) {
         this.el = element;
         this.$el = $(element);
         this._id = this.el.id;
      }

      toggle() {
         if (this.$el.hasClass(ENV_DROPDOWN_OPEN)) {
            this.hide();
         } else {
            this.show();
         }
      }

      show() {
         this.$el
            .attr('aria-expanded', 'true')
            .addClass(ENV_DROPDOWN_OPEN)
            .focus();

         this._bindEvents();
      }

      hide() {
         this.$el
            .attr('aria-expanded', 'false')
            .removeClass(ENV_DROPDOWN_OPEN)
            .find('.env-dropdown--toggle').blur();

         this._unbindEvents();
      }

      _bindEvents() {
         const ENV_CLICK = `${ENV_CLICK_EVENT}-${this.el.id}`;
         const ENV_KEYDOWN = `${ENV_KEYDOWN_EVENT}-${this.el.id}`;
         $(document)
            .off(ENV_CLICK)
            .on(ENV_CLICK, (event) => {
               if (!$(event.target).hasClass('env-dropdown__menu')) {
                  this.hide();
               }
            });

         this.$el
            .off(ENV_KEYDOWN)
            .one(ENV_KEYDOWN, (event) => {
               if (event.which === ESCAPE_KEY) {
                  this.hide();
               }
            });
      }

      _unbindEvents() {
         $(document).off(`${ENV_CLICK_EVENT}-${this.el.id}`);
         this.$el.off(`${ENV_KEYDOWN_EVENT}-${this.el.id}`);
      }

      static _jQuery(config) {
         return this.each(function() {
            const $this = $(this);
            let data = $this.data('env.dropdown');

            if (!data) {
               data = new Dropdown(this);
               $this.data('env.dropdown', data);
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

      $target.envDropdown();
   });

   return Dropdown;

})(jQuery);

export default Dropdown;
