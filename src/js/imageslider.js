/**
 * --------------------------------------------------------------------------
 * Licensed under MIT <TODO add url>
 * --------------------------------------------------------------------------
 */

import Util from './util';

const Imageslider = (($) => {

   const DATA_KEY = 'sv.image-slider';
   const EVENT_KEY = `.${DATA_KEY}`;
   const NAME = 'imageslider';
   const DATA_API_KEY = '.data-api';
   const INNER_SLIDER = '.sv-image-slider__inner';
   const NO_CONFLICT = $.fn[NAME];
   const ARROW_LEFT_KEYCODE = 37;
   const ARROW_RIGHT_KEYCODE = 39;
   const TOUCHEVENT_WAIT = 500;

   const DEFAULTS = {
      interval    : 2000,
      keyboard    : true,
      slide       : false,
      pause       : 'hover',
      wrap        : true
   };

   const SELECTORS = {
      ACTIVE               : '.sv-image-slider__item--active',
      ACTIVE_ITEM          : '.sv-image-slider__item--active.sv-image-slider__item',
      ITEM                 : '.sv-image-slider__item',
      NEXT_PREV            : '.sv-image-slider--next, .sv-image-slider--prev',
      INDICATORS           : '.sv-image-slider__indicators',
      THUMBNAILS           : '.sv-image-slider__thumbnails',
      DATA_SLIDE           : '[data-slide], [data-slide-to]',
      DATA_IMAGE_SLIDER    : '[data-image-slider]'
   };

   const ClassName = {
      IMAGESLIDER : 'sv-image-slider',
      ACTIVE      : 'sv-image-slider__item--active',
      NEXT        : 'sv-image-slider__item--next',
      RIGHT       : 'sv-image-slider__item--right',
      PREV        : 'sv-image-slider__item--prev',
      LEFT        : 'sv-image-slider__item--left',
      SLIDE       : 'sv-image-slider--slide'
   };
   const Direction = {
      NEXT     : 'next',
      PREV     : 'prev',
      LEFT     : 'left',
      RIGHT    : 'right'
   };

   const Events = {
      SLID           : `slid${EVENT_KEY}`,
      SLIDE          : `slide${EVENT_KEY}`,
      LOAD_DATA_API  : `load${EVENT_KEY}${DATA_API_KEY}`,
      CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`,
      MOUSEENTER     : `mouseenter${EVENT_KEY}`,
      MOUSELEAVE     : `mouseleave${EVENT_KEY}`,
      TOUCHEND       : `touchend${EVENT_KEY}`,
      KEYDOWN        : `keydown${EVENT_KEY}`
   };

   class Imageslider {

      constructor(element, config) {
         this.el                 = element;
         this.$el                = $(element);
         this.$images            = this.$el.find(INNER_SLIDER).children();

         this._isSliding         = false;
         this._isPaused          = false;
         this._interval          = null;

         this._activeElement     = null;
         this._wrap              = true;
         this._indicatorsElement = this.$el.find(SELECTORS.INDICATORS)[0];
         this._thumbnailElements = this.$el.find(SELECTORS.THUMBNAILS)[0];
         this.config             = $.extend({}, DEFAULTS, this.$el.data(), config);

         this._bindEvents();
      }

      next() {
         if (!this._isSliding) {
            this._slide(Direction.NEXT);
         }
      }

      prev() {
         if (!this._isSliding) {
            this._slide(Direction.PREV);
         }
      }

      nextWhenVisible() {
         if (!document.hidden) {
            this.next();
         }
      }

      pause(event) {
         if (!event) {
            this._isPaused = true;
         }

         clearInterval(this._interval);
         this._interval = null;
      }

      cycle(event) {
         if (!event) {
            this._isPaused = false;
         }

         if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
         }

         if (this.config.interval && !this._isPaused) {
            this._interval = setInterval(
               (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
               this.config.interval
            );
         }
      }

      goTo(index) {
         this._activeElement = this.$el.find(SELECTORS.ACTIVE_ITEM)[0];

         const activeIndex = this._getItemIndex(this._activeElement);


         if (index > this.$images.length - 1 || index < 0) {
            return;
         }

         if (this._isSliding) {
            return;
         }

         if (activeIndex === index) {
            this.pause();
            this.cycle();
            return;
         }

         const direction = index > activeIndex ?
            Direction.NEXT :
            Direction.PREV;

         this._slide(direction, this.$images[index]);
         return;
      }

      dispose() {
         this.$el.off(EVENT_KEY);
         $.removeData(this.el, DATA_KEY);

         this.el                 = null;
         this.$images            = null;
         this._interval          = null;
         this._isPaused          = null;
         this._isSliding         = null;
         this._activeElement     = null;
         this._indicatorsElement = null;
         this._thumbnailElements = null;
      }

      _getItemByDirection(direction, activeElement) {
         const isNextDirection = direction === Direction.NEXT;
         const isPrevDirection = direction === Direction.PREV;
         const activeIndex = this._getItemIndex(activeElement);
         const lastImageIndex = this.$images.length - 1;
         const isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastImageIndex;

         if (isGoingToWrap && !this._wrap) {
            return activeElement;
         }

         const delta     = direction === Direction.PREV ? -1 : 1;
         const itemIndex = (activeIndex + delta) % this.$images.length;

         return itemIndex === -1 ?
         this.$images[this.$images.length - 1] : this.$images[itemIndex];
      }

      _bindEvents() {
         if (this.config.keyboard) {
            this.$el
               .on(Events.KEYDOWN, (event) => this._keydown(event));
         }

         if (this.config.pause === 'hover') {
            this.$el
               .on(Events.MOUSEENTER, (event) => this.pause(event))
               .on(Events.MOUSELEAVE, (event) => this.cycle(event));
            if ('ontouchstart' in document.documentElement) {
               this.$el
                  .on(Events.TOUCHEND, () => {
                     this.pause();
                     if (this.touchTimeout) {
                        clearTimeout(this.touchTimeout);
                     }
                     this.touchTimeout = setTimeout((event) => this.cycle(event), TOUCHEVENT_WAIT, this.config.interval);
                  });
            }
         }
      }

      _keydown(event) {
         if (/input|textarea/i.test(event.target.tagName)) {
            return;
         }

         switch (event.which) {
                  case ARROW_LEFT_KEYCODE:
                     event.preventDefault();
                     this.prev();
                     break;
                  case ARROW_RIGHT_KEYCODE:
                     event.preventDefault();
                     this.next();
                     break;
                  default:
                     return;
         }
      }

      _getItemIndex(element) {
         this.$images = $.makeArray($(element).parent().find(SELECTORS.ITEM));
         return this.$images.indexOf(element);
      }

      _triggerSlideEvent(targetElement, eventDirectionName) {
         const targetIndex = this._getItemIndex(targetElement);
         const fromIndex = this._getItemIndex(this.$el.find(SELECTORS.ACTIVE_ITEM)[0]);
         const slideEvent = $.Event(Events.SLIDE, {
            targetElement,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
         });

         this.$el.trigger(slideEvent);

         return slideEvent;
      }

      _setActiveIndicatorElement(element) {
         if (this._indicatorsElement) {
            $(this._indicatorsElement)
               .find(SELECTORS.ACTIVE)
               .removeClass(ClassName.ACTIVE);

            const nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

            if (nextIndicator) {
               $(nextIndicator).addClass(ClassName.ACTIVE);
            }
         } else if (this._thumbnailElements) {
            $(this._thumbnailElements)
               .find(SELECTORS.ACTIVE)
               .removeClass(ClassName.ACTIVE);

            const nextIndicator = this._thumbnailElements.children[this._getItemIndex(element)].firstElementChild;

            if (nextIndicator) {
               $(nextIndicator).addClass(ClassName.ACTIVE);
            }
         }
      }

      _slide(direction, element) {
         const activeElement = this.$el.find(SELECTORS.ACTIVE_ITEM)[0];
         const activeElementIndex = this._getItemIndex(activeElement);
         const nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
         const nextElementIndex = this._getItemIndex(nextElement);

         let directionalClassName;
         let orderClassName;
         let eventDirectionName;

         if (direction === Direction.NEXT) {
            directionalClassName = ClassName.LEFT;
            orderClassName = ClassName.NEXT;
            eventDirectionName = Direction.LEFT;
         } else {
            directionalClassName = ClassName.RIGHT;
            orderClassName = ClassName.PREV;
            eventDirectionName = Direction.RIGHT;
         }

         if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
            this._isSliding = false;
            return;
         }

         const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

         if (slideEvent.isDefaultPrevented()) {
            return;
         }

         if (!activeElement || !nextElement) {
            return;
         }

         this._isSliding = true;

         this._setActiveIndicatorElement(nextElement);

         const slidEvent = $.Event(Events.SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
         });

         if (this.$el.hasClass(ClassName.SLIDE)) {

            $(nextElement).addClass(orderClassName);

            Util.reflow(nextElement); //  Used to force reflow

            $(activeElement).addClass(directionalClassName);
            $(nextElement).addClass(directionalClassName);

            $(activeElement)
               .one(Util.getTransitionEndEvent(), () => {

                  $(nextElement)
                     .removeClass(`${directionalClassName} ${orderClassName}`)
                     .addClass(ClassName.ACTIVE);

                  $(activeElement)
                     .removeClass(`${ClassName.ACTIVE} ${orderClassName} ${directionalClassName}`);

                  this._isSliding = false;

                  this.$el.trigger(slidEvent);
               });

         } else {
            $(activeElement).removeClass(ClassName.ACTIVE);
            $(nextElement).addClass(ClassName.ACTIVE);

            this._isSliding = false;
            this.$el.trigger(slideEvent);
         }
      }

      static _jQueryInterface(config) {
         return this.each(() => {
            let data = $(this).data(DATA_KEY);

            const _config = $.extend({}, DEFAULTS, $(this).data());

            if (typeof config === 'object') {
               $.extend(_config, config);
            }

            const action = typeof config === 'string' ? config : _config.slide;


            if (!data) {
               data = new Imageslider(this);
               $(this).data(DATA_KEY, data);
            }

            if (typeof config === 'number') {
               data.goTo(config);
            } else if (typeof action === 'string') {
               if (data[action] === undefined) {
                  throw new Error(`No method named "${action}"`);
               }
               data[action]();
            } else if (_config.interval && _config.imageCycle) {
               data.pause();
               data.cycle();
            }
         });
      }

      static _dataApiClickHandler(event) {
         const selector = Util.getSelectorFromElement(this);

         if (!selector) {
            return;
         }

         const target = $(selector)[0];

         if (!target || !$(target).hasClass(ClassName.IMAGESLIDER)) {
            return;
         }

         const config     = $.extend({}, $(target).data(), $(this).data());
         const slideIndex = this.getAttribute('data-slide-to');

         if (slideIndex) {
            config.interval = false;
         }

         Imageslider._jQueryInterface.call($(target), config);

         if (slideIndex) {
            $(target).data(DATA_KEY).goTo(slideIndex);
         }

         event.preventDefault();
      }
  }

   $(document)
      .on(Events.CLICK_DATA_API, SELECTORS.DATA_SLIDE, Imageslider._dataApiClickHandler);

   $(window).on(Events.LOAD_DATA_API, () => {
      const $imageSliders = $(SELECTORS.DATA_IMAGE_SLIDER);
      $imageSliders.each((i, slider) => {
         const $slider = $(slider);
         Imageslider._jQueryInterface.call($slider, $slider.data());
      });
   });

   $.fn[NAME]             = Imageslider._jQueryInterface;
   $.fn[NAME].Constructor = Imageslider;
   $.fn[NAME].noConflict  = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Imageslider._jQueryInterface;
   };

   return Imageslider;

})(jQuery);

export default Imageslider;
