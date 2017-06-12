/**
 * --------------------------------------------------------------------------
 * Licensed under MIT <TODO add url>
 * --------------------------------------------------------------------------
 */

const Spinner = (($) => {

   const IDENTIFIER  = 'sv.spinner';
   const NAME        = 'spinner';
   const NO_CONFLICT = $.fn[NAME];
   const HIDE        = 'sv-spinner--hide';
   const TEMPLATE    = `<div class="sv-rect1"></div>
                        <div class="sv-rect2"></div>
                        <div class="sv-rect3"></div>
                        <div class="sv-rect4"></div>
                        <div class="sv-rect5"></div>`;

   class Spinner {

      constructor(element) {
         this.el = element;
         this.el.append(TEMPLATE);
      }

      hide() {
         this.el.addClass(HIDE);
      }

      show() {
         this.el.removeClass(HIDE);
      }

      destroy() {
         this.el.empty();
         this.el.removeData(IDENTIFIER);
      }

      static _jQuery(config) {
         return this.each(() => {
            const $this = $(this);
            let data = $this.data(IDENTIFIER);

            if (!data) {
               data = new Spinner(this, config);
               $this.data(IDENTIFIER, data);
            } else if (typeof config === 'string') {
               const method = data[config];

               if (!method) {
                  throw new Error(`Invalid method name "${config}"`);
               }

               method.call(data);
            }
         });
      }
   }

   $.fn[NAME] = Spinner._jQuery;
   $.fn[NAME].Constructor = Spinner;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Spinner._jQuery;
   };

   return Spinner;

})(jQuery);

export default Spinner;
