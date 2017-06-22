/**
 * --------------------------------------------------------------------------
 * Licensed under MIT <TODO add url>
 * --------------------------------------------------------------------------
 */

/* global Tether */

const Popover = (($) => {

   const NAME = 'thePopover';
   const IDENTIFIER = 'sv.popover';
   const EVENT_NAMESPACE = `.${IDENTIFIER}`;
   const NO_CONFLICT = $.fn[NAME];
   const CLASS_PREFIX = 'sv-tether';

   const attachmentMapping = {
      top: 'bottom center',
      bottom: 'top center',
      left: 'middle right',
      right: 'middle left'
   };

   const offsetMapping = {
      top: '10 0',
      bottom: '-10 0',
      left: '0 10',
      right: '0 -10'
   };

   const DEFAULTS = {
      constraints: [],
      container: 'body',
      content: '',
      escapeContent: true,
      customOffset: undefined,
      placement: 'top',
      template: `<div class="sv-popover" role="tooltip">
                  <div class="sv-popover__arrow"></div>
                  <div class="sv-popover__header">
                     <h3 class="sv-popover__header__title"></h3>
                  </div>
                  <div class="sv-popover__content"></div>
               </div>`,
      title: '',
      trigger: 'click'
   };

   class Popover {

      constructor(element, config) {
         this.el = element;
         this.$el = $(this.el);
         this.config = $.extend({}, DEFAULTS, this.$el.data(), config);

         this.bindEvents();
      }

      bindEvents() {
         const triggers = this.config.trigger.split(' ');

         triggers.forEach((trigger) => {
            if (trigger === 'click') {
               this.$el.on(this.config.trigger + EVENT_NAMESPACE, () => {
                  if (this.isShowing) {
                     this.hide();
                  } else {
                     this.show();
                  }
               });
            } else {
               const hoverTrigger = trigger === 'hover';
               const inEvent = hoverTrigger ? 'mouseenter' : 'focusin';
               const outEvent = hoverTrigger ? 'mouseleave' : 'focusout';

               this.$el
                  .on(inEvent + EVENT_NAMESPACE, () => {
                     if (!this.isShowing) {
                        this.show();
                     }
                  })
                  .on(outEvent + EVENT_NAMESPACE, () => {
                     if (this.isShowing) {
                        this.hide();
                     }
                  });
            }
         });
      }

      getPopoverElement() {
         return this.$popoverElement = this.$popoverElement || $(this.config.template);
      }

      setText($popoverElement, selector, text) {
         $popoverElement.find(selector)[this.config.escapeContent ? 'text' : 'html'](text);
      }

      setTitle($popoverElement) {
         this.setText($popoverElement, '.sv-popover__header__title', this.config.title);
      }

      setContent($popoverElement) {
         this.setText($popoverElement, '.sv-popover__content', this.config.content);
      }

      setArrowPosition($popoverElement) {
         $popoverElement.find('.sv-popover__arrow')
            .addClass(`sv-popover__arrow--${this.config.placement}`);
      }

      _getOffset() {
         return this.config.customOffset || offsetMapping[this.config.placement];
      }

      hide() {
         const $popoverElement = this.getPopoverElement();

         $popoverElement.detach();
         this.isShowing = false;
      }

      show() {
         const $popoverElement = this.getPopoverElement();

         this.setTitle($popoverElement);
         this.setContent($popoverElement);
         this.setArrowPosition($popoverElement);

         $('body').append($popoverElement);

         this._tether = new Tether({
            attachment        : attachmentMapping[this.config.placement],
            element           : $popoverElement,
            target            : this.el,
            classes           : {
               element: false,
               enabled: false
            },
            classPrefix       : CLASS_PREFIX,
            offset            : this._getOffset(),
            constraints       : this.config.constraints,
            addTargetClasses  : false
         });

         this._tether.position();

         this.isShowing = true;
      }

      destroy() {
         this.hide();

         this.$popoverElement = undefined;
         this._tether = undefined;
         this.isShowing = false;
         this.$el.removeData(IDENTIFIER);
      }

      static _jQuery(config) {
         return this.each(function() {
            const $this = $(this);
            let data = $this.data(IDENTIFIER);

            if (!data && /destroy|hide/.test(config)) {
               return;
            }

            if (!data) {
               data = new Popover(this, typeof config === 'object' ? config : null);
               $this.data(IDENTIFIER, data);
            }

            if (typeof config === 'string') {
               const method = data[config];

               if (!method) {
                  throw new Error(`Invalid method name "${config}"`);
               }

               method.call(data);
            }
         });
      }
   }

   $.fn[NAME] = Popover._jQuery;
   $.fn[NAME].Constructor = Popover;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Popover._jQuery;
   };

   return Popover;

})(jQuery);

export default Popover;
