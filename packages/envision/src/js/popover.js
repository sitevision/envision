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
const FOCUSTRAP_CLASSNAME = 'env-popover__focustrap';
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
   <span class="env-assistive-text ${FOCUSTRAP_CLASSNAME}" tabindex="0"></span>
   <div class="${ARROW_CLASSNAME}"></div>
   <div class="${HEADER_CLASSNAME}">
   <h4 class="env-ui-text-sectionheading ${TITLE_CLASSNAME}"></h4>
   </div>
   <div class="${contentClassName}"></div>
   <span class="env-assistive-text ${FOCUSTRAP_CLASSNAME}" tabindex="0"></span>
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

   createTriggerFocusTrapElement() {
      if (!this.triggerFocusTrapElement) {
         this.triggerFocusTrapElement = document.createElement('span');
         this.triggerFocusTrapElement.className = 'env-assistive-text';
         this.triggerFocusTrapElement.setAttribute('tabindex', '0');
         this.triggerFocusTrapElement.addEventListener(
            'focus',
            this.handleTriggerFocusTrap
         );
      }
      return this.triggerFocusTrapElement;
   }

   getFocusableElements(element) {
      return Array.from(
         element.querySelectorAll(
            `a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]):not(.${FOCUSTRAP_CLASSNAME})`
         )
      );
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
         const popoverElement = this.getPopoverElement();
         if (popoverElement.contains(e.target)) {
            setTimeout(() => this.el.focus(), 0);
         }
      }
   }

   /**
    * When the focus trap after trigger element is focused, move focus to the first focusable element in the popover
    */
   handleTriggerFocusTrap() {
      const popoverElement = this.getPopoverElement();
      const focusableElements = this.getFocusableElements(popoverElement);
      if (focusableElements.length > 0) {
         focusableElements[0].focus();
      }
   }

   handlePopoverFocusTrapStart() {
      this.el.focus();
   }

   /**
    * When the focus trap at end of popover is focused, move focus to the next element after the trigger
    */
   handlePopoverFocusTrapEnd() {
      const focusableElements = this.getFocusableElements(document).filter(
         (el) =>
            !el.closest(`.${POPOVER_CLASSNAME}`) &&
            el !== this.triggerFocusTrapElement
      );
      const triggerIndex = focusableElements.indexOf(this.el);
      if (triggerIndex !== -1 && triggerIndex < focusableElements.length - 1) {
         focusableElements[triggerIndex + 1].focus();
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
      this.handleTriggerFocusTrap = this.handleTriggerFocusTrap.bind(this);
      this.handlePopoverFocusTrapStart =
         this.handlePopoverFocusTrapStart.bind(this);
      this.handlePopoverFocusTrapEnd =
         this.handlePopoverFocusTrapEnd.bind(this);

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

   getPopoverFocusTrapElements() {
      const popoverElement = this.getPopoverElement();
      return popoverElement.querySelectorAll(`.${FOCUSTRAP_CLASSNAME}`);
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

      if (
         this.triggerFocusTrapElement &&
         this.triggerFocusTrapElement.parentNode
      ) {
         this.triggerFocusTrapElement.remove();
      }

      popoverElement.remove();

      if (this.config.clickOutside) {
         document.body.removeEventListener('click', this.clickOutsideHandler);
      }
      document.removeEventListener('keydown', this.handleKeyboardEvent);
      this.isShowing = false;
   }

   show() {
      this.render();
      const popoverElement = this.getPopoverElement();
      const [popoverFocusTrapElementStart, popoverFocusTrapElementEnd] =
         this.getPopoverFocusTrapElements();
      this.el.setAttribute('aria-describedby', this.popoverElement.id);

      const triggerFocusTrapElement = this.createTriggerFocusTrapElement();
      if (this.el.nextSibling) {
         this.el.parentNode.insertBefore(
            triggerFocusTrapElement,
            this.el.nextSibling
         );
      } else {
         this.el.parentNode.appendChild(triggerFocusTrapElement);
      }

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

         document.addEventListener('keydown', this.handleKeyboardEvent);
         popoverFocusTrapElementStart?.addEventListener(
            'focus',
            this.handlePopoverFocusTrapStart
         );
         popoverFocusTrapElementEnd?.addEventListener(
            'focus',
            this.handlePopoverFocusTrapEnd
         );

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
