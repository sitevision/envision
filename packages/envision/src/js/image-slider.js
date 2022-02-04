/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import CssUtil from './util/css-util';
import Util from './util/util';
import { getNodes } from './util/nodes';

const DATA_KEY = 'env.image-slider';
const EVENT_KEY = `.${DATA_KEY}`;
const NAME = 'envImageslider';
const DATA_INITIALIZED = 'data-env-image-slider';
const DATA_API_KEY = '.data-api';
const ARROW_LEFT_KEYCODE = 37;
const ARROW_RIGHT_KEYCODE = 39;
const TOUCHEVENT_WAIT = 500;
const SLIDE_WIDTH_PX = 80;

const DEFAULTS = {
   buttons: true,
   imageSlider: false,
   interval: 5000,
   keyboard: true,
   pause: 'hover',
   slide: false,
   swipe: true,
   wrap: true,
};

const SELECTORS = {
   ACTIVE: '.env-image-slider__item--active',
   ACTIVE_DOT: '.env-is-active',
   ACTIVE_ITEM: '.env-image-slider__item--active.env-image-slider__item',
   DATA_SLIDE: '[data-move], [data-move-to], [data-image-slider-touch]',
   DATA_IMAGE_SLIDER: '[data-image-slider]',
   INDICATORS: '.env-image-slider__indicators',
   INNER: '.env-image-slider__inner',
   NEXT_PREV: '.env-image-slider--next, .env-image-slider--prev',
   ITEM: '.env-image-slider__item',
   THUMBNAILS: '.env-image-slider__thumbnails',
};

const ClassName = {
   ACTIVE: 'env-image-slider__item--active',
   ACTIVE_DOT: 'env-is-active',
   IMAGESLIDER: 'env-image-slider',
   LEFT: 'env-image-slider__item--left',
   NEXT: 'env-image-slider__item--next',
   PREV: 'env-image-slider__item--prev',
   RIGHT: 'env-image-slider__item--right',
   SLIDE: 'env-image-slider--slide',
};

const Direction = {
   LEFT: 'left',
   NEXT: 'next',
   PREV: 'prev',
   RIGHT: 'right',
};

const Events = {
   CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`,
   KEYDOWN: `keydown${EVENT_KEY}`,
   LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
   MOUSEENTER: `mouseenter${EVENT_KEY}`,
   MOUSELEAVE: `mouseleave${EVENT_KEY}`,
   SLID: `slid${EVENT_KEY}`,
   SLIDE: `slide${EVENT_KEY}`,
   TOUCHEND: `touchend${EVENT_KEY}`,
   TOUCHMOVE: `touchmove${EVENT_KEY}`,
   TOUCHSTART: `touchstart${EVENT_KEY}`,
};

class Imageslider {
   constructor(element, config) {
      this.$el = $(element);
      this.$images = this.$el.find(SELECTORS.ITEM);

      this._isSliding = false;
      this._isPaused = false;
      this._interval = null;

      this._activeElement = null;
      this._indicatorsElement = this.$el.find(SELECTORS.INDICATORS)[0];
      this._thumbnailElements = this.$el.find(SELECTORS.THUMBNAILS)[0];
      this.config = $.extend({}, DEFAULTS, this.$el.data(), config);

      if (this.$images.length > 1 && config.buttons) {
         this._addSlideButtons();
      }

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
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
               this
            ),
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

      const direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this.$images[index]);
      return;
   }

   startTouchSlide(event) {
      this.touchstartx = event.originalEvent.touches[0].pageX;
   }

   moveTouchSlide(event) {
      this.touchmovex = event.originalEvent.touches[0].pageX;

      this.movex = -(this.touchstartx - this.touchmovex);

      this.moved = false;
      const activeItem = this.$el.find(SELECTORS.ACTIVE).children();
      activeItem.css('transform', `translate3d(${this.movex}px, 0, 0)`);

      if (this.movex > SLIDE_WIDTH_PX) {
         this.prev();
         this.moved = true;
         setTimeout(() => {
            activeItem.css('transform', 'translate3d(0, 0, 0)');
         }, TOUCHEVENT_WAIT);
      } else if (this.movex < -SLIDE_WIDTH_PX) {
         this.next();
         this.moved = true;
         setTimeout(() => {
            activeItem.css('transform', 'translate3d(0, 0, 0)');
         }, TOUCHEVENT_WAIT);
      }
   }

   endTouchSlide() {
      if (!this.moved) {
         this.$el
            .find(SELECTORS.ACTIVE)
            .children()
            .css('transform', 'translate3d(0, 0, 0)');
      }
   }

   dispose() {
      this.$el.off(EVENT_KEY).removeData(DATA_KEY);

      this.$el = null;
      this.$images = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
      this._thumbnailElements = null;
   }

   _addSlideButtons() {
      const sliderId = this.$el[0].id;
      const buttonHTML = `<button type="button" class="env-image-slider--prev" data-move="prev" data-target="#${sliderId}">
               <svg class="env-image-slider__previous-icon env-icon env-icon-small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-arrow-left"></use>
               </svg>
               <span class="env-assistive-text">Previous</span>
            </button>
            <button type="button" class="env-image-slider--next" data-move="next" data-target="#${sliderId}">
               <svg class="env-image-slider__next-icon env-icon env-icon-small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-arrow-right"></use>
               </svg>
               <span class="env-assistive-text">Next</span>
            </button>`;
      $(`#${sliderId}`).find(SELECTORS.INNER).append(buttonHTML);
   }

   _getItemByDirection(direction, activeElement) {
      const isNextDirection = direction === Direction.NEXT;
      const activeIndex = this._getItemIndex(activeElement);
      const lastImageIndex = this.$images.length - 1;
      const isGoingToWrap =
         (!isNextDirection && activeIndex === 0) ||
         (isNextDirection && activeIndex === lastImageIndex);

      if (isGoingToWrap && !this.config.wrap) {
         return activeElement;
      }

      const delta = isNextDirection ? 1 : -1;
      const itemIndex = (activeIndex + delta) % this.$images.length;

      return itemIndex === -1
         ? this.$images[lastImageIndex]
         : this.$images[itemIndex];
   }

   _bindEvents() {
      if (this.config.keyboard) {
         this.$el.on(Events.KEYDOWN, (event) => this._keydown(event));
      }

      if (
         this.config.pause === 'hover' &&
         this.config.imageSlider === 'cycle'
      ) {
         this.$el
            .on(Events.MOUSEENTER, (event) => this.pause(event))
            .on(Events.MOUSELEAVE, (event) => this.cycle(event));
         if (CssUtil.isTouch()) {
            this.$el.on(Events.TOUCHEND, () => {
               this.pause();
               if (this.touchTimeout) {
                  clearTimeout(this.touchTimeout);
               }
               this.touchTimeout = setTimeout(
                  (event) => this.cycle(event),
                  TOUCHEVENT_WAIT,
                  this.config.interval
               );
            });
         }
      }
      if (this.config.swipe) {
         this._bindTouchSlider();
      }
   }

   _bindTouchSlider() {
      const container = this.$el.find(SELECTORS.INNER);
      container.on(Events.TOUCHSTART, (event) => {
         this.startTouchSlide(event);
      });

      container.on(Events.TOUCHMOVE, (event) => {
         this.moveTouchSlide(event);
      });

      container.on(Events.TOUCHEND, () => {
         this.endTouchSlide(event);
      });
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
      return this.$images.index(element);
   }

   _triggerSlideEvent(targetElement, eventDirectionName) {
      const targetIndex = this._getItemIndex(targetElement);
      const fromIndex = this._getItemIndex(
         this.$el.find(SELECTORS.ACTIVE_ITEM)[0]
      );
      const slideEvent = $.Event(Events.SLIDE, {
         targetElement,
         direction: eventDirectionName,
         from: fromIndex,
         to: targetIndex,
      });

      this.$el.trigger(slideEvent);

      return slideEvent;
   }

   _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
         $(this._indicatorsElement)
            .find(SELECTORS.ACTIVE_DOT)
            .removeClass(ClassName.ACTIVE_DOT);

         const nextIndicator =
            this._indicatorsElement.children[this._getItemIndex(element)];

         if (nextIndicator) {
            $(nextIndicator).addClass(ClassName.ACTIVE_DOT);
         }
      } else if (this._thumbnailElements) {
         $(this._thumbnailElements)
            .find(SELECTORS.ACTIVE)
            .removeClass(ClassName.ACTIVE);

         const nextIndicator =
            this._thumbnailElements.children[this._getItemIndex(element)]
               .firstElementChild;

         if (nextIndicator) {
            $(nextIndicator).addClass(ClassName.ACTIVE);
         }
      }
   }

   _slide(direction, element) {
      const activeElement = this.$el.find(SELECTORS.ACTIVE_ITEM)[0];
      const activeElementIndex = this._getItemIndex(activeElement);
      const nextElement =
         element ||
         (activeElement && this._getItemByDirection(direction, activeElement));
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

      const $nextElement = $(nextElement);

      if (nextElement && $nextElement.hasClass(ClassName.ACTIVE)) {
         this._isSliding = false;
         return;
      }

      const slideEvent = this._triggerSlideEvent(
         nextElement,
         eventDirectionName
      );

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
         to: nextElementIndex,
      });

      const $activeElement = $(activeElement);

      if (this.$el.hasClass(ClassName.SLIDE)) {
         $nextElement.addClass(orderClassName);

         CssUtil.reflow(nextElement);

         $activeElement.addClass(directionalClassName);
         $nextElement.addClass(directionalClassName);

         $activeElement.one('transitionend', () => {
            $nextElement
               .removeClass(`${directionalClassName} ${orderClassName}`)
               .addClass(ClassName.ACTIVE);

            $activeElement.removeClass(
               `${ClassName.ACTIVE} ${orderClassName} ${directionalClassName}`
            );

            this._isSliding = false;

            this.$el.trigger(slidEvent);
         });
      } else {
         $activeElement.removeClass(ClassName.ACTIVE);
         $nextElement.addClass(ClassName.ACTIVE);

         this._isSliding = false;
         this.$el.trigger(slideEvent);
      }
   }

   static _jQueryInterface(config) {
      return this.each(() => {
         const $this = $(this);
         let data = $this.data(DATA_KEY);

         const _config = $.extend({}, DEFAULTS, $this.data());

         if (typeof config === 'object') {
            $.extend(_config, config);
         }

         const action = typeof config === 'string' ? config : _config.move;

         if (!data) {
            data = new Imageslider(this, _config);
            $this.data(DATA_KEY, data);
         }

         if (typeof config === 'number') {
            data.goTo(config);
         } else if (typeof action === 'string') {
            if (data[action] === undefined) {
               throw new Error(`No method named "${action}"`);
            }
            data[action]();
         } else if (_config.interval && _config.imageSlider === 'cycle') {
            data.pause();
            data.cycle();
         }
      });
   }

   static _dataApiClickHandler(event) {
      // 'this' is current clicked element i.e. slide-right, slide-left or a indicator/thumbnail.
      const selector = Util.getSelectorFromElement(this);

      if (!selector) {
         return;
      }

      const $target = $(selector).eq(0);

      if (!$target.length || !$target.hasClass(ClassName.IMAGESLIDER)) {
         return;
      }

      const config = $.extend({}, $target.data(), $(this).data());
      const slideIndex = this.getAttribute('data-move-to');

      if (slideIndex) {
         config.interval = false;
      }

      Imageslider._jQueryInterface.call($target, config);

      if (slideIndex) {
         $target.data(DATA_KEY).goTo(slideIndex);
      }

      event.preventDefault();
   }
}

if (typeof document !== 'undefined') {
   $(document).on(
      Events.CLICK_DATA_API,
      SELECTORS.DATA_SLIDE,
      Imageslider._dataApiClickHandler
   );

   $(window).on(Events.LOAD_DATA_API, () => {
      const $imageSliders = $(SELECTORS.DATA_IMAGE_SLIDER);
      $imageSliders.each((i, slider) => {
         const $slider = $(slider);
         Imageslider._jQueryInterface.call($slider, $slider.data());
      });
   });

   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = Imageslider._jQueryInterface;
   $.fn[NAME].Constructor = Imageslider;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Imageslider._jQueryInterface;
   };
}

export default async (elements, settings) => {
   const nodes = getNodes(elements);

   if (nodes.length > 0) {
      const sliders = nodes
         .filter((node) => node.getAttribute(DATA_INITIALIZED) !== 'true')
         .map((node) => {
            let config;
            if (typeof settings === 'object') {
               config = { ...DEFAULTS, ...node.dataset, ...settings };
            } else {
               config = { ...DEFAULTS, ...node.dataset };
            }
            const slider = new Imageslider(node, config);
            node.setAttribute(DATA_INITIALIZED, 'true');
            if (config.interval && config.imageSlider === 'cycle') {
               slider.pause();
               slider.cycle();
            }
            return slider;
         });
      return sliders;
   }
};
