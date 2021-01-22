/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import jQuery from 'jquery';
import Popper from 'popper.js';

const Popover = (($) => {

   const NAME = 'envPopover';
   const IDENTIFIER = 'env.popover';
   const EVENT_NAMESPACE = `.${IDENTIFIER}`;
   const NO_CONFLICT = $.fn[NAME];

   const attachmentMapping = {
      top: 'top',
      bottom: 'bottom',
      left: 'left',
      right: 'right'
   };

   const DEFAULTS = {
      clickOutside: false,
      constraints: [],
      container: 'body',
      content: '',
      delay: 0,
      escapeContent: true,
      placement: 'top',
      template: `<div class="env-popover" role="tooltip">
                  <div class="env-popover__arrow"></div>
                  <div class="env-popover__header">
                     <h4 class="env-text env-popover__header__title"></h4>
                  </div>
                  <div class="env-popover__content"></div>
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
                     if (this.config.delay > 0) {
                        if (this.hidetimeout) {
                           clearTimeout(this.hidetimeout);
                        }
                        if (this.showtimeout) {
                           clearTimeout(this.showtimeout);
                        }
                        if (!this.isShowing) {
                           this.showtimeout = setTimeout(() => {
                              this.show();
                           },
                           this.config.delay);
                        }
                     } else if (!this.isShowing) {
                        this.show();
                     }
                  })
                  .on(outEvent + EVENT_NAMESPACE, () => {
                     if (this.config.delay > 0) {
                        this.hoverPopover();
                        if (this.showtimeout) {
                           clearTimeout(this.showtimeout);
                        }
                        if (this.isShowing) {
                           this.hidetimeout = setTimeout(() => {
                              this.hide();
                           },
                           this.config.delay);
                        }
                     } else if (this.isShowing) {
                        this.hide();
                     }
                  });
            }
         });
      }

      hoverPopover() {
         const $popoverElement = this.getPopoverElement();

         $popoverElement
            .off('mouseenter')
            .on('mouseenter', () => {
               if (this.hidetimeout) {
                  clearTimeout(this.hidetimeout);
               }
               if (this.showtimeout) {
                  clearTimeout(this.showtimeout);
               }
               if (!this.isShowing) {
                  this.showtimeout = setTimeout(() => {
                     this.show();
                  },
                  this.config.delay);
               }
            });
         $popoverElement
            .off('mouseleave')
            .on('mouseleave', () => {
               if (this.showtimeout) {
                  clearTimeout(this.showtimeout);
               }
               if (this.isShowing) {
                  this.hidetimeout = setTimeout(() => {
                     this.hide();
                  },
                  this.config.delay);
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
         this.setText($popoverElement, '.env-popover__header__title', this.config.title);
      }

      setContent($popoverElement) {
         this.setText($popoverElement, '.env-popover__content', this.config.content);
      }

      updateConfig(config) {
         Object.assign(this.config, config);
         return this;
      }

      render() {
         const $popoverElement = this.getPopoverElement();

         this.setTitle($popoverElement);
         this.setContent($popoverElement);
         this.setArrowPosition($popoverElement);
      }

      setArrowPosition($popoverElement) {
         $popoverElement.find('.env-popover__arrow')
            .addClass(`env-popover__arrow--${this.config.placement}`);
      }

      hide() {
         const $popoverElement = this.getPopoverElement();

         $popoverElement.detach();

         if (this.config.clickOutside) {
            $('body').off(this.config.trigger + EVENT_NAMESPACE);
         }

         this.isShowing = false;
      }

      _cleanTipClass() {
         this.$popoverElement
            .find('.env-popover__arrow')
            .removeClass((index, oldClassNames) => {
               const modifier = oldClassNames.replace(/env-popover__arrow/g, '').trim();

               return `env-popover__arrow${modifier}`;
            });
      }

      _handlePopperPlacementChange(data) {
         this._cleanTipClass();
         this._addAttachmentClass(attachmentMapping[data.placement]);
      }

      _addAttachmentClass(className) {
         this.$popoverElement
            .find('.env-popover__arrow')
            .addClass(`env-popover__arrow--${className}`);
      }

      show() {
         this.render();

         const $popoverElement = this.getPopoverElement();

         $('body').append($popoverElement);

         this._popper = new Popper(this.el, $popoverElement[0], {
            placement         : attachmentMapping[this.config.placement],
            modifiers         : {
               flip: {
                  behavior: 'flip'
               },
               arrow: {
                  element: '.env-popover__arrow'
               }
            },
            onCreate: (data) => {
               if (data.originalPlacement !== data.placement) {
                  this._handlePopperPlacementChange(data);
               }
            },
            onUpdate: (data) => {
               this._handlePopperPlacementChange(data);
            }
         });

         this._popper.update();

         if (this.config.clickOutside) {
            $('body').on(this.config.trigger + EVENT_NAMESPACE, this.clickOutsideHandler.bind(this));
         }

         this.isShowing = true;
      }

      destroy() {
         this.hide();

         if (this._popper) {
            this._popper.destroy();
         }

         this.$popoverElement = undefined;
         this._popper = undefined;
         this.isShowing = false;
         this.$el.off();
         this.$el.removeData(IDENTIFIER);
      }

      clickOutsideHandler(e) {
         const target = e.target;
         const $target = $(target);

         if (this.isShowing && !this.el.contains(target) && !$target.closest(this.$popoverElement).length) {
            this.hide();
         }
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
