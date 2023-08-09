/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import { getNode, getNodes, setStyle } from './util/nodes';
import Util from './util/util';

const HANDLE_INDEX = 'rangeHandleIndex';
const HANDLES_SELECTOR = '.env-range-slider__handle';
const VALUE_HOLDERS_SELECTOR = '.env-range-slider__values__value';
const RANGE_SELECTOR = '.env-range-slider__range';
const NAME = 'envRangeSlider';

const EVENTS = {
   SLIDE: 'slide',
   STOP: 'slidestop',
};

const DEFAULTS = {
   min: 0,
   max: 100,
   step: 1,
   values: [0, 0],
   visibleValues: true,
};

class RangeSlider {
   constructor(element, config) {
      this.config = Util.extend(true, {}, DEFAULTS, config);

      this.el = element;
      this.handlesEl = getNodes(HANDLES_SELECTOR, this.el);
      this.rangeEl = getNode(RANGE_SELECTOR, this.el);

      if (this.config.visibleValues) {
         this.valueHoldersEl = getNodes(VALUE_HOLDERS_SELECTOR, this.el);
      }
   }

   initialize() {
      this._setupHandles();
      this._refreshRange();
      this._bindEvents();
   }

   values(values) {
      if (Array.isArray(values)) {
         for (let i = 0; i < values.length; i++) {
            this.config.values[i] = this._trimAlignValue(values[i]);
         }
         this._refreshRange();
      }
   }

   _setupHandles() {
      this.handlesEl.forEach((el, i) => {
         el.dataset[HANDLE_INDEX] = i;
      });
   }

   _refreshRange() {
      let lastValPercent;
      let valPercent;
      let val;

      this.handlesEl.forEach((handle, i) => {
         val = this._getValue(i);

         valPercent =
            ((val - this.config.min) / (this.config.max - this.config.min)) *
            100;

         setStyle(handle, 'left', `${valPercent}%`);

         if (i === 0) {
            setStyle(this.rangeEl, 'left', `${valPercent}%`);
         } else {
            setStyle(this.rangeEl, 'width', `${valPercent - lastValPercent}%`);
         }

         if (this.config.visibleValues) {
            this.valueHoldersEl[i].innerText = val;
         }

         lastValPercent = valPercent;
      });
   }

   _bindEvents() {
      this.handlesEl.forEach((el) => {
         el.removeEventListener('mousedown', this._initSlide);
         el.removeEventListener('touchstart', this._initSlide);
         el.removeEventListener('keydown', this._initKeySlide);
         el.removeEventListener('keyup', this._stopKeySlide);
         el.addEventListener('mousedown', this._initSlide.bind(this));
         el.addEventListener('touchstart', this._initSlide.bind(this));
         el.addEventListener('keydown', this._initKeySlide.bind(this));
         el.addEventListener('keyup', this._stopKeySlide.bind(this));
      });
   }

   #offset(el) {
      const box = el.getBoundingClientRect();
      const docEl = document.documentElement;
      return {
         top: box.top + window.scrollY - docEl.clientTop,
         left: box.left + window.scrollX - docEl.clientLeft,
      };
   }

   _initSlide(e) {
      const position = this._getPosition(e);
      const normValue = this._normValueFromMouse(position);
      let distance = this.config.max - this.config.min + 1;

      let closestHandleEl;
      let index;
      let val;
      let thisDistance;

      if (e.type === 'touchstart') {
         document.addEventListener('touchmove', this._handleSlide.bind(this));
         document.addEventListener('touchend', this._stopSlide.bind(this), {
            once: true,
         });
      } else {
         document.addEventListener('mousemove', this._handleSlide.bind(this));
         document.addEventListener('mouseup', this._stopSlide.bind(this), {
            once: true,
         });
      }

      this.handlesEl.forEach((handle, i) => {
         val = this._getValue(i);
         thisDistance = Math.abs(normValue - val);
         if (
            distance > thisDistance ||
            (distance === thisDistance &&
               (i === this._lastChangedValue || val === this.config.min))
         ) {
            distance = thisDistance;
            closestHandleEl = handle;
            index = i;
         }
      });

      this._handleIndex = index;

      closestHandleEl.focus();

      const offset = this.#offset(closestHandleEl);
      const boundingClientRect = closestHandleEl.getBoundingClientRect();
      const compStyle = getComputedStyle(closestHandleEl);

      this._clickOffset = {
         left: position.x - offset.left - boundingClientRect.width / 2,
         top:
            position.y -
            offset.top -
            boundingClientRect.height / 2 -
            (parseInt(compStyle.borderTopWidth, 10) || 0) -
            (parseInt(compStyle.borderBottomWidth, 10) || 0) +
            (parseInt(compStyle.marginTop, 10) || 0),
      };
      this._slide(e, index, normValue);
   }

   _handleSlide(e) {
      const normValue = this._normValueFromMouse(this._getPosition(e));
      this._slide(e, this._handleIndex, normValue);
      return false;
   }

   _slide(e, index, newVal) {
      const otherVal = this._getValue(index ? 0 : 1);
      const currentValue = this._getValue(index);
      const newValues = this._getValues();
      newVal =
         index === 0 ? Math.min(otherVal, newVal) : Math.max(otherVal, newVal);
      newValues[index] = newVal;

      if (newVal === currentValue) {
         return;
      }

      this._trigger(EVENTS.SLIDE, e, {
         values: newValues,
      });

      this._setValue(index, newVal);
   }

   _stopSlide(e) {
      document.removeEventListener('mousemove', this._handleSlide);
      document.removeEventListener('touchmove', this._handleSlide);
      this._trigger(EVENTS.STOP, e, {
         values: this._getValues(),
      });
      this._handleIndex = null;
      this._clickOffset = null;
      return false;
   }

   _initKeySlide(e) {
      switch (e.key) {
         case 'ArrowUp':
         case 'ArrowRight':
         case 'ArrowDown':
         case 'ArrowLeft':
            e.preventDefault();
            if (!this._keySliding) {
               this._keySliding = true;
            }
            break;
         default:
            return;
      }

      const index = parseInt(e.target.dataset[HANDLE_INDEX], 10);
      const curVal = this._getValue(index);
      let newVal;

      switch (e.key) {
         case 'ArrowUp':
         case 'ArrowRight':
            if (curVal === this.config.max) {
               return;
            }
            newVal = this._trimAlignValue(curVal + this.config.step);
            break;
         case 'ArrowDown':
         case 'ArrowLeft':
            if (curVal === this.config.min) {
               return;
            }
            newVal = this._trimAlignValue(curVal - this.config.step);
            break;
         default:
      }

      this._slide(e, index, newVal);
   }

   _stopKeySlide(e) {
      if (this._keySliding) {
         this._keySliding = false;
         this._trigger(EVENTS.STOP, e, {
            values: this._getValues(),
         });
      }
   }

   _normValueFromMouse(position) {
      const pixelTotal = this.el.offsetWidth;
      const valueTotal = this.config.max - this.config.min;
      const pixelMouse =
         position.x -
         this.#offset(this.el).left -
         (this._clickOffset ? this._clickOffset.left : 0);
      let percentMouse = pixelMouse / pixelTotal;

      if (percentMouse > 1) {
         percentMouse = 1;
      }

      if (percentMouse < 0) {
         percentMouse = 0;
      }

      const valueMouse = this.config.min + percentMouse * valueTotal;

      return this._trimAlignValue(valueMouse);
   }

   _getPosition(e) {
      const pos = {};

      if (e.originalEvent?.touches) {
         const touches = e.originalEvent.touches[0];
         pos.x = touches.pageX;
         pos.y = touches.pageY;
      } else {
         pos.x = e.pageX;
         pos.y = e.pageY;
      }

      return pos;
   }

   _trimAlignValue(val) {
      if (val <= this.config.min) {
         return this.config.min;
      }

      if (val >= this.config.max) {
         return this.config.max;
      }

      const step = this.config.step;
      const valModStep = (val - this.config.min) % step;
      let alignValue = val - valModStep;
      if (Math.abs(valModStep) * 2 >= step) {
         alignValue += valModStep > 0 ? step : -step;
      }
      return parseFloat(alignValue.toFixed(5));
   }

   _getValues() {
      return this.config.values.slice();
   }

   _getValue(index) {
      return this.config.values[index];
   }

   _setValue(index, newValue) {
      this.config.values[index] = this._trimAlignValue(newValue);
      this._refreshRange();
   }

   _trigger(type, e, data) {
      const el = this.el[0];
      const callback = this.config[type];

      const evt = new CustomEvent(e.type, { bubbles: false, detail: data });

      this.el.dispatchEvent(evt);

      if (callback) {
         callback.call(el, evt);
      }
   }

   static _init(elements, settings, ...args) {
      const nodes = getNodes(elements);
      if (nodes.length > 0) {
         return nodes.map((node) => {
            if (!node[NAME]) {
               node[NAME] = new RangeSlider(node, settings);
               node[NAME].initialize();
            }
            if (typeof settings === 'string') {
               if (!node[NAME][settings]) {
                  throw new Error(`No method named "${settings}"`);
               }
               node[NAME][settings].call(node[NAME], ...args);
            }
            return node[NAME];
         });
      }
   }

   static _jQueryInterface(settings, ...args) {
      Util.consoleWarning('jQuery', NAME);
      return this.each(() => {
         const nodes = getNodes(this);
         nodes.forEach((node) => {
            RangeSlider._init(node, settings, ...args);
         });
      });
   }
}

if (typeof document !== 'undefined') {
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = RangeSlider._jQueryInterface;
   $.fn[NAME].Constructor = RangeSlider;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return RangeSlider._jQueryInterface;
   };
}

export default async (elements, settings) => {
   return RangeSlider._init(elements, settings);
};
