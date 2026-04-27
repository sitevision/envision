/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} TooltipConfig
 * @property {string} [placement] - Preferred initial placement. Default: 'top'. Possible values: 'top', 'right', 'bottom', 'left', 'auto'. Possible value modifiers: '{value}-start', '{value}-end'
 * @property {number} [delay] - Milliseconds for delaying the tooltip opening and closing. Default: 200
 * @property {any[]} [modifiers] - Advanced positioning modifiers (Popper.js configuration)
 */

/**
 * @typedef {Object} TooltipInstance
 * @property {HTMLElement} container - The tooltip container element
 * @property {HTMLElement} el - The trigger element (child without role="tooltip")
 * @property {HTMLElement} tooltip - The tooltip element (child with role="tooltip")
 * @property {Required<TooltipConfig>} config - The configuration settings for this instance
 * @property {boolean} [isShowing] - Whether the tooltip is currently showing
 * @property {() => void} show - Show the tooltip
 * @property {() => void} hide - Hide the tooltip
 * @property {() => void} destroy - Destroy the tooltip instance and remove event listeners
 */

import { getNodes, setStyle, uniqueId } from './util/nodes';
import { getPopper } from './util/popper';

const NAME = 'envTooltip';
const TOOLTIP_CLASSNAME = 'env-tooltip';
const TOOLTIP_DISPLAY_MODIFER = `${TOOLTIP_CLASSNAME}--inline`;
const ARROW_SIZE = 6;
const DEFAULTS = {
   placement: 'top',
   delay: 200,
   modifiers: [
      {
         name: 'offset',
         options: {
            offset: [0, ARROW_SIZE],
         },
      },
      {
         name: 'flip',
         enabled: true,
      },
   ],
};

class Tooltip {
   constructor(element, options) {
      this.container = element;
      this.el = element.querySelector(':not([role="tooltip"])');
      this.tooltip = element.querySelector('[role="tooltip"]');
      if (!this.el || !this.tooltip) {
         return;
      }

      this.config = { ...DEFAULTS, ...this.container.dataset, ...options };

      this.container.classList.add(TOOLTIP_CLASSNAME);

      if (
         getComputedStyle(this.container).getPropertyValue('display') ===
         'inline'
      ) {
         // Inline container elements must be set to inline-block
         // for positioning to work.
         this.container.classList.add(TOOLTIP_DISPLAY_MODIFER);
      }

      uniqueId(this.tooltip);
      this.el.setAttribute('aria-describedby', this.tooltip.id);

      setStyle(this.tooltip, 'display', 'none');
      this.tooltip.innerHTML = this.tooltip.textContent;

      this.handleShowEvent = this.handleShowEvent.bind(this);
      this.handleHideEvent = this.handleHideEvent.bind(this);
      this.handleHoverIntent = this.handleHoverIntent.bind(this);
      this.handleKeyboardEvent = this.handleKeyboardEvent.bind(this);

      this.bindEvents();
   }

   handleShowEvent() {
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

   handleHideEvent() {
      if (this.showtimeout) {
         clearTimeout(this.showtimeout);
      }
      if (this.isShowing) {
         this.hidetimeout = setTimeout(() => {
            this.hide();
         }, this.config.delay);
      }
   }

   handleKeyboardEvent(e) {
      if (e.key === 'Escape') {
         this.hide();
      }
   }

   handleHoverIntent() {
      this.tooltip.removeEventListener('mouseenter', this.handleShowEvent);
      this.tooltip.addEventListener('mouseenter', this.handleShowEvent);
      this.tooltip.removeEventListener('mouseleave', this.handleHideEvent);
      this.tooltip.addEventListener('mouseleave', this.handleHideEvent);
   }

   bindEvents() {
      this.el.addEventListener('mouseenter', this.handleShowEvent);
      this.el.addEventListener('focusin', this.handleShowEvent);
      this.el.addEventListener('mouseleave', this.handleHoverIntent);
      this.el.addEventListener('focusout', this.handleHoverIntent);
      this.el.addEventListener('mouseleave', this.handleHideEvent);
      this.el.addEventListener('focusout', this.handleHideEvent);
   }

   hide() {
      setStyle(this.tooltip, 'display', 'none');
      this.isShowing = false;
      document.removeEventListener('keyup', this.handleKeyboardEvent);
   }

   show() {
      setStyle(this.tooltip, 'display', 'block');
      getPopper().then((createPopper) => {
         this._popper = createPopper(this.container, this.tooltip, {
            placement: this.config.placement,
            modifiers: this.config.modifiers,
         });
         this._popper.update();
         this.isShowing = true;
      });
      document.addEventListener('keyup', this.handleKeyboardEvent);
   }

   destroy() {
      this.hide();
      this._popper && this._popper.destroy();
      this._popper = undefined;
      this.isShowing = false;
      this.el.removeEventListener('mouseenter', this.handleShowEvent);
      this.el.removeEventListener('focusin', this.handleShowEvent);
      this.el.removeEventListener('mouseleave', this.handleHideEvent);
      this.el.removeEventListener('focusout', this.handleHideEvent);
      this.el.removeEventListener('mouseleave', this.handleHoverIntent);
      this.el.removeEventListener('focusout', this.handleHoverIntent);
   }

   static async _init(elements, settings) {
      elements = elements || `.${TOOLTIP_CLASSNAME}`;
      const nodes = getNodes(elements);
      if (nodes.length > 0) {
         await getPopper();
         return nodes.map((node) => {
            if (!node[NAME]) {
               node[NAME] = new Tooltip(node, settings);
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
}

if (typeof document !== 'undefined') {
   document.addEventListener('DOMContentLoaded', Tooltip._init);
}

/**
 * @param {string | HTMLElement | NodeList} [elements] - CSS selector, DOM node, or node list. Leave empty to initialize all new elements with class 'env-tooltip'
 * @param {TooltipConfig} [settings] - Configuration options
 * @returns {Promise<TooltipInstance[] | undefined>}
 */
export default async (elements, settings) => {
   return Tooltip._init(elements, settings);
};
