/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import { getNodes, uniqueId } from './util/nodes';
import { getPopper } from './util/popper';
import Util from './util/util';

const NAME = 'envPopover';
const POPOVER_CLASSNAME = 'env-popover';
const ARROW_CLASSNAME = 'env-popover__arrow';
const HEADER_CLASSNAME = 'env-popover__header';
const TITLE_CLASSNAME = 'env-popover__header__title';
const CONTENT_CLASSNAME = 'env-popover__content';
const MENU_CLASSNAME = 'env-popover__menu';
const TOOLTIP_CLASSNAME = 'env-popover--tooltip';
const ARROW_SIZE = 10;

const DEFAULTS = {
   clickOutside: false,
   constraints: [],
   container: 'body',
   content: '',
   delay: 0,
   escapeContent: true,
   placement: 'top',
   template: (
      containerModifier,
      contentClassName
   ) => `<div class="${POPOVER_CLASSNAME} ${containerModifier}" role="tooltip">
   <div class="${ARROW_CLASSNAME}"></div>
   <div class="${HEADER_CLASSNAME}">
   <h4 class="env-ui-text-overline ${TITLE_CLASSNAME}"></h4>
   </div>
   <div class="${contentClassName}"></div>
   </div>`,
   title: '',
   trigger: 'click',
   type: null,
};

class Popover {
   constructor(element, config) {
      this.el = element;
      this.config = { ...DEFAULTS, ...this.el.dataset, ...config };
      this.bindEvents();
   }

   handleClick() {
      if (this.isShowing) {
         this.hide();
      } else {
         this.show();
      }
   }

   handleInEvent() {
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
            }, this.config.delay);
         }
      } else if (!this.isShowing) {
         this.show();
      }
   }

   handleOutEvent() {
      if (this.config.delay > 0) {
         this.bindPopoverEvents();
         if (this.showtimeout) {
            clearTimeout(this.showtimeout);
         }
         if (this.isShowing) {
            this.hidetimeout = setTimeout(() => {
               this.hide();
            }, this.config.delay);
         }
      } else if (this.isShowing) {
         this.hide();
      }
   }

   handleKeyboardEvent(e) {
      if (e.key === 'Escape') {
         this.hide();
      }
   }

   bindEvents() {
      const triggers = this.config.trigger.split(' ');

      this.handleClick = this.handleClick.bind(this);
      this.handleInEvent = this.handleInEvent.bind(this);
      this.handleOutEvent = this.handleOutEvent.bind(this);
      this.handlePopoverMouseEnter = this.handlePopoverMouseEnter.bind(this);
      this.handlePopoverMouseLeave = this.handlePopoverMouseLeave.bind(this);
      this.clickOutsideHandler = this.clickOutsideHandler.bind(this);
      this.handleKeyboardEvent = this.handleKeyboardEvent.bind(this);

      triggers.forEach((trigger) => {
         if (trigger === 'click') {
            this.el.addEventListener('click', this.handleClick);
         } else {
            const hoverTrigger = trigger === 'hover';
            const inEvent = hoverTrigger ? 'mouseenter' : 'focusin';
            const outEvent = hoverTrigger ? 'mouseleave' : 'focusout';
            this.el.addEventListener(inEvent, this.handleInEvent);
            this.el.addEventListener(outEvent, this.handleOutEvent);
         }
      });
   }

   removeEvents() {
      const triggers = this.config.trigger.split(' ');
      triggers.forEach((trigger) => {
         if (trigger === 'click') {
            this.el.removeEventListener('click', this.handleClick);
         } else {
            const hoverTrigger = trigger === 'hover';
            const inEvent = hoverTrigger ? 'mouseenter' : 'focusin';
            const outEvent = hoverTrigger ? 'mouseleave' : 'focusout';
            this.el.removeEventListener(inEvent, this.handleInEvent);
            this.el.removeEventListener(outEvent, this.handleOutEvent);
         }
      });
   }

   handlePopoverMouseEnter() {
      if (this.hidetimeout) {
         clearTimeout(this.hidetimeout);
      }
      if (this.showtimeout) {
         clearTimeout(this.showtimeout);
      }
      if (!this.isShowing) {
         this.showtimeout = setTimeout(() => {
            this.show();
         }, this.config.delay);
      }
   }

   handlePopoverMouseLeave() {
      if (this.showtimeout) {
         clearTimeout(this.showtimeout);
      }
      if (this.isShowing) {
         this.hidetimeout = setTimeout(() => {
            this.hide();
         }, this.config.delay);
      }
   }

   clickOutsideHandler(e) {
      const target = e.target;

      if (
         this.isShowing &&
         !this.el.contains(target) &&
         !target.closest(`.${POPOVER_CLASSNAME}`)
      ) {
         this.hide();
      }
   }

   bindPopoverEvents() {
      const popoverElement = this.getPopoverElement();

      popoverElement.removeEventListener(
         'mouseenter',
         this.handlePopoverMouseEnter
      );
      popoverElement.addEventListener(
         'mouseenter',
         this.handlePopoverMouseEnter,
         { once: true }
      );

      popoverElement.removeEventListener(
         'mouseleave',
         this.handlePopoverMouseLeave
      );
      popoverElement.addEventListener(
         'mouseleave',
         this.handlePopoverMouseLeave,
         { once: true }
      );
   }

   getPopoverTemplate() {
      const containerModifier =
         this.config.type === 'tooltip' ? TOOLTIP_CLASSNAME : '';
      const contentClassName =
         this.config.type === 'menu' ? MENU_CLASSNAME : CONTENT_CLASSNAME;

      if (typeof this.config.template === 'function') {
         this.config.template = this.config.template(
            containerModifier,
            contentClassName
         );
      }

      return this.config.template;
   }

   getPopoverElement() {
      if (!this.popoverElement) {
         const tmp = document.createElement('div');
         tmp.innerHTML = this.getPopoverTemplate();
         this.popoverElement = tmp.firstChild;
         uniqueId(this.popoverElement);
      }
      return this.popoverElement;
   }

   setText(popoverElement, className, text) {
      if (this.config.escapeContent) {
         popoverElement.querySelector(`.${className}`).textContent = text;
      } else {
         popoverElement.querySelector(`.${className}`).innerHTML = text;
      }
   }

   setTitle(popoverElement) {
      if (this.config.title) {
         this.setText(popoverElement, TITLE_CLASSNAME, this.config.title);
      } else {
         const header = this.popoverElement.querySelector(
            `.${HEADER_CLASSNAME}`
         );
         header && header.remove();
      }
   }

   setContent(popoverElement) {
      if (this.config.content instanceof HTMLElement) {
         this.config.content = this.config.content.innerHTML;
      }
      this.setText(
         popoverElement,
         this.config.type === 'menu' ? MENU_CLASSNAME : CONTENT_CLASSNAME,
         this.config.content
      );
   }

   updateConfig(config) {
      Object.assign(this.config, config);
      return this;
   }

   render() {
      const popoverElement = this.getPopoverElement();
      this.setTitle(popoverElement);
      this.setContent(popoverElement);
   }

   hide() {
      const popoverElement = this.getPopoverElement();
      this.el.removeAttribute('aria-describedby');
      popoverElement.remove();

      if (this.config.clickOutside) {
         document.body.removeEventListener('click', this.clickOutsideHandler);
      }
      document.removeEventListener('keyup', this.handleKeyboardEvent);
      this.isShowing = false;
   }

   show() {
      this.render();
      const popoverElement = this.getPopoverElement();
      this.el.setAttribute('aria-describedby', this.popoverElement.id);

      document.body.appendChild(popoverElement);

      getPopper().then((createPopper) => {
         this._popper = createPopper(this.el, popoverElement, {
            placement: this.config.placement,
            modifiers: [
               {
                  name: 'offset',
                  options: {
                     offset: [0, ARROW_SIZE],
                  },
               },
               {
                  name: 'arrow',
                  options: {
                     element: `.${ARROW_CLASSNAME}`,
                  },
               },
            ],
         });
         this._popper.update();

         if (this.config.clickOutside) {
            document.body.addEventListener('click', this.clickOutsideHandler);
         }

         document.addEventListener('keyup', this.handleKeyboardEvent);

         this.isShowing = true;
      });
   }

   destroy() {
      this.hide();

      if (this._popper) {
         this._popper.destroy();
      }

      this._popper = undefined;
      this.isShowing = false;
      this.removeEvents();
   }

   static async _init(elements, settings) {
      const nodes = getNodes(elements);

      if (nodes.length > 0) {
         await getPopper();

         return nodes.map((node) => {
            if (!node[NAME]) {
               node[NAME] = new Popover(node, settings);
            }

            if (typeof settings === 'string') {
               if (!node[NAME][settings]) {
                  throw new Error(`No method named "${settings}"`);
               }
               node[NAME][settings].call(node[NAME]);
            }

            return node[NAME];
         });
      }
   }

   static _jQueryInterface(settings) {
      Util.consoleWarning('jQuery', NAME);
      return this.each(() => {
         const nodes = getNodes(this);
         nodes.forEach((node) => {
            Popover._init(node, settings);
         });
      });
   }
}

if (typeof document !== 'undefined') {
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = Popover._jQueryInterface;
   $.fn[NAME].Constructor = Popover;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Popover._jQueryInterface;
   };
}

export default async (elements, settings) => {
   return Popover._init(elements, settings);
};
