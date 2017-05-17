/**
 * --------------------------------------------------------------------------
 * Licensed under MIT <TODO add url>
 * --------------------------------------------------------------------------
 */

const RangeSlider = (($) => {

   const HANDLE_INDEX = 'range-handle-index';
   const HANDLES_SELECTOR = '.sv-range-slider__handle';
   const HANDLE_VALUE_HOLDERS_SELECTOR = '.sv-range-slider__value';
   const RANGE_SELECTOR = '.sv-range-slider__range';
   const IDENTIFIER = 'sv.range-slider';
   const NAME = 'rangeSlider';
   const NO_CONFLICT = $.fn[NAME];
   const KEY_RIGHT = 39;
   const KEY_LEFT = 37;
   const KEY_DOWN = 40;
   const KEY_UP = 38;

   const EVENTS = {
      SLIDE: 'slide',
      STOP: 'slidestop'
   };

   const DEFAULTS = {
      min: 0,
      max: 100,
      step: 1,
      values: [0, 0],
      visibleValues: true
   };

   class RangeSlider {

      constructor(element, config) {
         this.config = $.extend({}, DEFAULTS, config);
         this.$document = $(document);
         this.el = element;
         this.$el = $(element);
         this.handles = this.$el.find(HANDLES_SELECTOR);
         this.$range = this.$el.find(RANGE_SELECTOR);

         if (this.config.visibleValues) {
            this.handleValueHolders = this.$el.find(HANDLE_VALUE_HOLDERS_SELECTOR);
         }

         this.handleEvents = {
            mousedown: this._initSlide.bind(this),
            touchstart: this._initSlide.bind(this),
            keydown: this._initKeySlide.bind(this),
            keyup: this._stopKeySlide.bind(this)
         };
      }

      initialize() {
         this._setupHandles();
         this._refreshRange();
         this._bindEvents();
      }

      values(values) {
         if ($.isArray(values)) {
            for (let i = 0; i < values.length; i += 1) {
               this.config.values[i] = this._trimAlignValue(values[i]);
            }
            this._refreshRange();
         }

         return this._getValues();
      }

      _setupHandles() {
         this.handles.each((i, handle) => {
            $(handle).data(HANDLE_INDEX, i);
         });
      }

      _refreshRange() {
         let lastValPercent;
         let valPercent;
         let val;

         this.handles.each((i, handle) => {
            val = this._getValue(i);
            /* eslint-disable no-magic-numbers */
            valPercent = (val - this.config.min) / (this.config.max - this.config.min) * 100;
            /* eslint-enable no-magic-numbers */
            $(handle).css('left', `${valPercent}%`);

            if (i === 0) {
               this.$range.css('left', `${valPercent}%`);

               if (this.config.visibleValues) {
                  this.handleValueHolders
                  .eq(i)
                  .css('left', `${valPercent}%`)
                  .text(val);
               }

            } else {
               this.$range.css('width', `${valPercent - lastValPercent}%`);

               if (this.config.visibleValues) {
                  this.handleValueHolders
                  .eq(i)
                  .css('left', `${valPercent}%`)
                  .text(val);
               }
            }

            lastValPercent = valPercent;
         });
      }

      _bindEvents() {
         this.handles.off();
         this.handles.on(this.handleEvents);
      }

      _initSlide(e) {
         this.$document.on(`mousemove.${IDENTIFIER} touchmove.${IDENTIFIER}`, this._handleSlide.bind(this));
         this.$document.one(`mouseup.${IDENTIFIER} touchend.${IDENTIFIER}`, this._stopSlide.bind(this));

         const position = {
            x: e.pageX,
            y: e.pageY
         };
         const normValue = this._normValueFromMouse(position);
         let distance = this.config.max - this.config.min + 1;
         let $closestHandle;
         let index;

         this.handles.each((i, handle) => {
            const val = this._getValue(i);
            const thisDistance = Math.abs(normValue - val);
            if (distance > thisDistance ||
               distance === thisDistance &&
                  (i === this._lastChangedValue || val === this.config.min)) {
               distance = thisDistance;
               $closestHandle = $(handle);
               index = i;
            }
         });

         this._handleIndex = index;

         $closestHandle.trigger('focus');

         const offset = $closestHandle.offset();
         /* eslint-disable no-magic-numbers */
         this._clickOffset = {
            left: event.pageX - offset.left - $closestHandle.width() / 2,
            top: event.pageY - offset.top -
               $closestHandle.height() / 2 -
               (parseInt($closestHandle.css('borderTopWidth'), 10) || 0) -
               (parseInt($closestHandle.css('borderBottomWidth'), 10) || 0) +
               (parseInt($closestHandle.css('marginTop'), 10) || 0)
         };
         /* eslint-enable no-magic-numbers */

         this._slide(e, index, normValue);
      }

      _handleSlide(e) {
         const position = {
            x: e.pageX,
            y: e.pageY
         };
         const normValue = this._normValueFromMouse(position);

         this._slide(e, this._handleIndex, normValue);

         return false;
      }

      _slide(e, index, newVal) {
         const otherVal = this._getValue(index ? 0 : 1);
         const currentValue = this._getValue(index);
         const newValues = this._getValues();
         newVal =  index === 0 ? Math.min(otherVal, newVal) : Math.max(otherVal, newVal);
         newValues[index] = newVal;

         if (newVal === currentValue) {
            return;
         }

         this._trigger(EVENTS.SLIDE, e, {
            values: newValues
         });

         this._setValue(index, newVal);
      }

      _stopSlide(e) {
         this.$document.off(`mousemove.${IDENTIFIER}`);

         this._trigger(EVENTS.STOP, e, {
            values: this._getValues()
         });

         this._handleIndex = null;
         this._clickOffset = null;

         return false;
      }

      _initKeySlide(e) {
         switch (e.keyCode) {
                  case KEY_UP:
                  case KEY_DOWN:
                  case KEY_LEFT:
                  case KEY_RIGHT:
                     e.preventDefault();
                     if (!this._keySliding) {
                        this._keySliding = true;
                     }
                     break;
                  default:
                     return;
         }

         const index = $(e.target).data(HANDLE_INDEX);
         const curVal = this._getValue(index);
         let newVal;

         switch (event.keyCode) {
                  case KEY_UP:
                  case KEY_RIGHT:
                     if (curVal === this.config.max) {
                        return;
                     }
                     newVal = this._trimAlignValue(curVal + this.config.step);
                     break;
                  case KEY_DOWN:
                  case KEY_LEFT:
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
               values: this._getValues()
            });
         }
      }

      _normValueFromMouse(position) {
         const pixelTotal = this.el.outerWidth();
         const valueTotal = this.config.max - this.config.min;
         const pixelMouse = position.x - this.el.offset().left - (this._clickOffset ? this._clickOffset.left : 0);
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
         /* eslint-disable no-magic-numbers */
         if (Math.abs(valModStep) * 2 >= step) {
            alignValue += valModStep > 0 ? step : -step;
         }

         return parseFloat(alignValue.toFixed(5));
         /* eslint-enable no-magic-numbers */
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
         const cb = this.config[type];

         e = $.Event(e);
         e.type = type;
         e.target = el;
         this.$el.trigger(e, data);

         if (cb) {
            cb.call(el, e, data);
         }
      }

      static _jQuery(config, ...args) {
         return this.each(() => {
            const $this = $(this);
            let rangeSlider = $this.data(IDENTIFIER);

            if (!rangeSlider) {
               rangeSlider = new RangeSlider(this, config);
               $this.data(IDENTIFIER, rangeSlider);
            }
            window.console.log(...args);
            if (typeof config === 'string') {
               const method = rangeSlider[config];
               if (method === undefined) {
                  throw new Error(`No method named "${config}"`);
               }
               method.call(rangeSlider, ...args);
               return;
            }

            rangeSlider.initialize();
         });
      }
   }

   $.fn[NAME] = RangeSlider._jQuery;
   $.fn[NAME].Constructor = RangeSlider;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return RangeSlider._jQuery;
   };

   return RangeSlider;

})(jQuery);

export default RangeSlider;
