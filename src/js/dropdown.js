const Dropdown = (($) => {

   const NAME = 'dropdown';
   const NO_CONFLICT = $.fn[NAME];
   const SV_DROPDOWN_OPEN = 'sv-dropdown--open';
   const TOGGLE_DROPDOWN = '[data-sv-dropdown]';
   const ESCAPE_KEY = 27;
   const SV_CLICK_EVENT = 'click.sv-dropdown';


   class Dropdown {

      constructor(element) {
         this.el = element;
         this.$el = $(element);
         this._isShown = false;
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

         this._isShown = true;

         $(document)
            .off(`${SV_CLICK_EVENT}-${this.$el.attr('id')}`)
            .on(`${SV_CLICK_EVENT}-${this.$el.attr('id')}`, (event) => {
               if ($(event.target) !== this.$el.attr('id')) {
                  this.hide();
               }
            });

         this._setEscapeAction();
      }

      hide() {
         this.$el
            .attr('aria-expanded', 'false')
            .removeClass(SV_DROPDOWN_OPEN)
            .find('.sv-dropdown--toggle').blur();

         this._isShown = false;

         $(document).off(`${SV_CLICK_EVENT}-${this.$el.attr('id')}`);
         this._setEscapeAction();
      }

      _setEscapeAction() {

         if (this._isShown) {
            this.$el
               .off(`keydown.sv-dropdown-${this.$el.attr('id')}`)
               .one(`keydown.sv-dropdown-${this.$el.attr('id')}`, (event) => {
                  if (event.which === ESCAPE_KEY) {
                     this.hide();
                  }
               });
         } else {
            this.$el.off(`keydown.sv-dropdown-${this.$el.attr('id')}`);
         }
      }

      static _jQuery(config) {
         return this.each(function() {
            let data = $(this).data('sv.dropdown');

            if (!data) {
               data = new Dropdown(this);
               $(this).data('sv.dropdown', data);
            }

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
      const $target = $($this.data('sv-target'));

      $target.dropdown();
   });

   return Dropdown;

})(jQuery);

export default Dropdown;

