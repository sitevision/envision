/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import CssUtil from './util/css-util';
import Util from './util/util';
import {
   getNode,
   getNodes,
   uniqueId,
   setStyle,
   setAttributes,
} from './util/nodes';

const NAME = 'envImageslider';
const TOUCHEVENT_WAIT = 500;
const SLIDE_WIDTH_PX = 80;

const lang = {
   sv: {
      prev: 'Föregående',
      next: 'Nästa',
   },
   en: {
      prev: 'Previous',
      next: 'Next',
   },
};

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
   ACTIVE__CHILD: '.env-image-slider__item--active > *',
   ACTIVE_DOT: '.env-is-active',
   ACTIVE_ITEM: '.env-image-slider__item--active.env-image-slider__item',
   DATA_SLIDE: '[data-move], [data-move-to]',
   SLIDER_DATA_ATTRIBUTE: `[data-image-slider]`,
   INDICATORS: '.env-image-slider__indicators',
   INDICATOR_ITEMS: '.env-image-slider__indicators > *',
   INNER: '.env-image-slider__inner',
   NEXT_PREV: '.env-image-slider--next, .env-image-slider--prev',
   ITEM: '.env-image-slider__item',
   THUMBNAILS: '.env-image-slider__thumbnails',
   THUMBNAIL__ITEMS: '.env-image-slider__thumbnails > *',
};

const ClassName = {
   ACTIVE: 'env-image-slider__item--active',
   ACTIVE_DOT: 'env-is-active',
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
   KEYDOWN: 'keydown',
   MOUSEENTER: 'mouseenter',
   MOUSELEAVE: 'mouseleave',
   SLID: 'slid',
   SLIDE: 'slide',
   JQSLID: `slid.env.image-slider`, // Deprecated
   JQSLIDE: `slide.env.image-slider`, // Deprecated
   TOUCHEND: 'touchend',
   TOUCHMOVE: 'touchmove',
   TOUCHSTART: 'touchstart',
};

class Imageslider {
   #images;
   #indicatorsElement;
   #thumbnailElement;
   #interval;
   #isSliding;
   #activeElement;
   #config;

   constructor(element, config) {
      this.el = element;
      this.isPaused = false;
      this.#images = getNodes(SELECTORS.ITEM, this.el);
      this.#indicatorsElement = getNode(SELECTORS.INDICATORS, this.el);
      this.#thumbnailElement = getNode(SELECTORS.THUMBNAILS, this.el);
      this.#isSliding = false;
      this.#interval = null;
      this.#activeElement = null;

      typeof this.el.dataset.imageSlider === 'undefined' &&
         this.el.setAttribute('data-image-slider', '');

      this.settings(config);

      if (this.#images.length > 1 && config.buttons) {
         this._addSlideButtons();
      }

      this.#images.forEach((image, i) => {
         image.setAttribute('data-env-imageslider-index', i);
      });

      this._bindEvents();
   }

   next() {
      if (!this.#isSliding) {
         this._slide(Direction.NEXT);
      }
   }

   prev() {
      if (!this.#isSliding) {
         this._slide(Direction.PREV);
      }
   }

   nextWhenVisible() {
      if (!document.hidden) {
         this.next();
      }
   }

   pause(e) {
      if (!e) {
         this.isPaused = true;
      }

      clearInterval(this.#interval);
      this.#interval = null;
   }

   cycle(e) {
      if (!e) {
         this.isPaused = false;
      }

      if (this.#interval) {
         clearInterval(this.#interval);
         this.#interval = null;
      }

      if (this.#config.interval && !this.isPaused) {
         this.#interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
               this
            ),
            this.#config.interval
         );
      }
   }

   goTo(index) {
      this.#activeElement = getNode(SELECTORS.ACTIVE_ITEM, this.el);

      const activeIndex = this._getItemIndex(this.#activeElement);

      if (index > this.#images.length - 1 || index < 0) {
         return;
      }

      if (this.#isSliding) {
         return;
      }

      if (activeIndex === index) {
         this.pause();
         this.cycle();
         return;
      }

      const direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this.#images[index]);
   }

   startTouchSlide(e) {
      this.touchstartx = e.touches[0].pageX;
   }

   moveTouchSlide(e) {
      this.touchmovex = e.touches[0].pageX;
      this.movex = -(this.touchstartx - this.touchmovex);
      this.moved = false;

      const activeItem = getNode(SELECTORS.ACTIVE__CHILD, this.el);

      setStyle(activeItem, 'transform', `translate3d(${this.movex}px, 0, 0)`);

      if (this.movex > SLIDE_WIDTH_PX) {
         this.prev();
         this.moved = true;
         setTimeout(() => {
            setStyle(activeItem, 'transform', `translate3d(0, 0, 0)`);
         }, TOUCHEVENT_WAIT);
      } else if (this.movex < -SLIDE_WIDTH_PX) {
         this.next();
         this.moved = true;
         setTimeout(() => {
            setStyle(activeItem, 'transform', `translate3d(0, 0, 0)`);
         }, TOUCHEVENT_WAIT);
      }
   }

   endTouchSlide() {
      if (!this.moved) {
         setStyle(
            getNode(SELECTORS.ACTIVE__CHILD, this.el),
            'transform',
            'translate3d(0, 0, 0)'
         );
      }
   }

   dispose() {
      this.el = this.el.cloneNode(true);
      delete this.el[NAME];
      delete this.el.envImagesliderJQ;
      this.el = null;
      this.#images = null;
      this.#interval = null;
      this.isPaused = null;
      this.#isSliding = null;
      this.#activeElement = null;
      this.#indicatorsElement = null;
      this.#thumbnailElement = null;
   }

   settings(config) {
      this.#config = Util.extend(
         {},
         DEFAULTS,
         this.el.dataset,
         Util.isPlainObject(this.#config) ? this.#config : {},
         config
      );
   }

   _addSlideButtons() {
      const sliderId = this.el.id;
      const container = getNode(SELECTORS.INNER, this.el);
      const prevButton = document.createElement('button');
      setAttributes(prevButton, {
         type: 'button',
         class: 'env-image-slider--prev',
         'data-move': 'prev',
         'data-target': `#${sliderId}`,
      });
      prevButton.innerHTML = `<svg class="env-image-slider__previous-icon env-icon env-icon-small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-arrow-left"></use></svg>
               <span class="env-assistive-text">${
                  this.#config.i18n.prev
               }</span>`;

      const nextButton = document.createElement('button');
      setAttributes(nextButton, {
         type: 'button',
         class: 'env-image-slider--next',
         'data-move': 'next',
         'data-target': `#${sliderId}`,
      });
      nextButton.innerHTML = `<svg class="env-image-slider__previous-icon env-icon env-icon-small">
               <use xlink:href="/sitevision/envision-icons.svg#icon-arrow-right"></use></svg>
               <span class="env-assistive-text">${
                  this.#config.i18n.next
               }</span>`;

      container.appendChild(prevButton);
      container.appendChild(nextButton);
   }

   _getItemByDirection(direction, activeElement) {
      const isNextDirection = direction === Direction.NEXT;
      const activeIndex = this._getItemIndex(activeElement);
      const lastImageIndex = this.#images.length - 1;
      const isGoingToWrap =
         (!isNextDirection && activeIndex === 0) ||
         (isNextDirection && activeIndex === lastImageIndex);

      if (isGoingToWrap && !this.#config.wrap) {
         return activeElement;
      }

      const delta = isNextDirection ? 1 : -1;
      const itemIndex = (activeIndex + delta) % this.#images.length;

      return itemIndex === -1
         ? this.#images[lastImageIndex]
         : this.#images[itemIndex];
   }

   _bindEvents() {
      this.el.addEventListener('click', (e) => this._click(e));

      if (this.#config.keyboard) {
         this.el.addEventListener(Events.KEYDOWN, (e) => this._keydown(e));
      }

      if (
         this.#config.pause === 'hover' &&
         this.#config.imageSlider === 'cycle'
      ) {
         this.el.addEventListener(Events.MOUSEENTER, (e) => this.pause(e));
         this.el.addEventListener(Events.MOUSELEAVE, (e) => this.cycle(e));

         if (CssUtil.isTouch()) {
            this.el.addEventListener(Events.TOUCHEND, () => {
               this.pause();
               if (this.touchTimeout) {
                  clearTimeout(this.touchTimeout);
               }
               this.touchTimeout = setTimeout(
                  (e) => this.cycle(e),
                  TOUCHEVENT_WAIT,
                  this.#config.interval
               );
            });
         }
      }
      if (this.#config.swipe) {
         this._bindTouchSlider();
      }
   }

   _bindTouchSlider() {
      const container = getNode(SELECTORS.INNER, this.el);

      container.addEventListener(Events.TOUCHSTART, (e) => {
         this.startTouchSlide(e);
      });

      container.addEventListener(Events.TOUCHMOVE, (e) => {
         this.moveTouchSlide(e);
      });

      container.addEventListener(Events.TOUCHEND, (e) => {
         this.endTouchSlide(e);
      });
   }

   _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) {
         return;
      }

      switch (e.key) {
         case 'ArrowLeft':
            e.preventDefault();
            this.prev();
            break;
         case 'ArrowRight':
            e.preventDefault();
            this.next();
            break;
         default:
            return;
      }
   }

   _click(e) {
      const clickTarget = e.target.closest(SELECTORS.DATA_SLIDE);

      if (!clickTarget) {
         return;
      }

      let dataSet = clickTarget.dataset;

      if (!dataSet.target || !document.querySelector(dataSet.target)) {
         return;
      }

      const targetEl = document.querySelector(dataSet.target);

      if (!targetEl || typeof targetEl.dataset.imageSlider === 'undefined') {
         return;
      }

      if (dataSet.moveTo) {
         const slideIndex = parseInt(dataSet.moveTo, 10);
         this.settings({ interval: false });
         this.goTo(slideIndex);
      } else if (
         dataSet.move === Direction.PREV ||
         dataSet.move === Direction.NEXT
      ) {
         this[dataSet.move]();
      }

      e.preventDefault();
   }

   _getItemIndex(element) {
      return parseInt(element.dataset.envImagesliderIndex, 10);
   }

   _triggerSlideEvent(targetElement, eventDirectionName) {
      const targetIndex = this._getItemIndex(targetElement);
      const fromIndex = this._getItemIndex(
         getNode(SELECTORS.ACTIVE_ITEM, this.el)
      );
      let slideEvent;

      // TODO: Delete if/else when jQuery dependency is removed
      if (this.el.envImagesliderJQ) {
         // Deprecated
         slideEvent = $.Event(Events.JQSLIDE, {
            targetElement,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex,
         });
         $(this.el).trigger(slideEvent);
         slideEvent.defaultPrevented = slideEvent.isDefaultPrevented();
      } else {
         slideEvent = new CustomEvent(Events.SLIDE, {
            bubbles: true,
            cancelable: true,
            detail: {
               direction: eventDirectionName,
               from: fromIndex,
               to: targetIndex,
            },
         });
         targetElement.dispatchEvent(slideEvent);
      }
      return slideEvent;
   }

   _setActiveIndicatorElement(element) {
      if (this.#indicatorsElement) {
         const active = getNode(SELECTORS.ACTIVE_DOT, this.#indicatorsElement);
         const nextIndicator = getNodes(
            SELECTORS.INDICATOR_ITEMS,
            this.#indicatorsElement
         )[this._getItemIndex(element)];
         active && active.classList.remove(ClassName.ACTIVE_DOT);
         nextIndicator && nextIndicator.classList.add(ClassName.ACTIVE_DOT);
      } else if (this.#thumbnailElement) {
         const active = getNode(SELECTORS.ACTIVE, this.#thumbnailElement);
         const nextIndicator = getNodes(
            SELECTORS.ACTIVE,
            this.#thumbnailElement
         )[this._getItemIndex(element)];
         active && active.classList.remove(ClassName.ACTIVE);
         nextIndicator && nextIndicator.classList.add(ClassName.ACTIVE);
      }
   }

   _slide(direction, element) {
      const activeElement = getNode(SELECTORS.ACTIVE_ITEM, this.el);
      const activeElementIndex = this._getItemIndex(activeElement);
      const nextElement = getNode(
         element ||
            (activeElement &&
               this._getItemByDirection(direction, activeElement))
      );
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

      if (nextElement && nextElement.classList.contains(ClassName.ACTIVE)) {
         this.#isSliding = false;
         return;
      }

      const slideEvent = this._triggerSlideEvent(
         nextElement,
         eventDirectionName
      );

      if (slideEvent.defaultPrevented) {
         return;
      }

      if (!activeElement || !nextElement) {
         return;
      }

      this.#isSliding = true;

      this._setActiveIndicatorElement(nextElement);

      let slidEvent;

      // TODO: Delete if/else when jQuery dependency is removed
      if (this.el.envImagesliderJQ) {
         // Deprecated
         slidEvent = $.Event(Events.JQSLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex,
         });
         slidEvent.defaultPrevented = slideEvent.isDefaultPrevented();
      } else {
         slidEvent = new CustomEvent(Events.SLID, {
            bubbles: true,
            cancelable: true,
            detail: {
               relatedTarget: nextElement,
               direction: eventDirectionName,
               from: activeElementIndex,
               to: nextElementIndex,
            },
         });
      }

      if (this.el.classList.contains(ClassName.SLIDE)) {
         nextElement.classList.add(orderClassName);

         CssUtil.reflow(nextElement);

         activeElement.classList.add(directionalClassName);
         nextElement.classList.add(directionalClassName);

         activeElement.addEventListener(
            'transitionend',
            () => {
               nextElement.classList.remove(
                  directionalClassName,
                  orderClassName
               );
               nextElement.classList.add(ClassName.ACTIVE);

               activeElement.classList.remove(
                  ClassName.ACTIVE,
                  orderClassName,
                  directionalClassName
               );

               this.#isSliding = false;

               if (this.el.envImagesliderJQ) {
                  $(this.el).trigger(slidEvent);
               } else {
                  this.el.dispatchEvent(slidEvent);
               }
            },
            { once: true }
         );
      } else {
         activeElement.classList.remove(ClassName.ACTIVE);
         nextElement.classList.add(ClassName.ACTIVE);

         this.#isSliding = false;

         // TODO: Delete if/else when jQuery dependency is removed
         if (this.el.envImagesliderJQ) {
            $(this.el).trigger(slideEvent);
         } else {
            this.el.dispatchEvent(slideEvent);
         }
      }
   }

   static _init(elements, settings, isJQuery) {
      const nodes = getNodes(elements);

      if (nodes.length > 0) {
         const sliders = nodes.map((node) => {
            uniqueId(node);
            let config;

            if (typeof settings === 'object') {
               config = {
                  ...DEFAULTS,
                  ...node.dataset,
                  ...settings,
                  i18n: Util.getLanguageOptions(settings?.i18n, lang, node),
               };
            } else {
               config = {
                  ...DEFAULTS,
                  ...node.dataset,
                  i18n: Util.getLanguageOptions({}, lang, node),
               };
            }

            if (!node[NAME]) {
               node.envImagesliderJQ = isJQuery;
               node[NAME] = new Imageslider(node, config);
            } else {
               node[NAME].settings(
                  Util.extend({}, { ...node.dataset, ...settings })
               );
            }

            const action =
               typeof settings === 'string' ? settings : config.move;

            if (typeof settings === 'number') {
               node[NAME].goTo(settings);
            } else if (typeof action === 'string') {
               if (node[NAME][action] === undefined) {
                  throw new Error(`No method named "${action}"`);
               }
               node[NAME][action]();
            }

            if (config.interval && config.imageSlider === 'cycle') {
               node[NAME].pause();
               node[NAME].cycle();
            }
            return node[NAME];
         });
         return sliders;
      }
   }

   static _jQueryInterface(config) {
      Util.consoleWarning('jQuery', NAME);
      return this.each(() => {
         const nodes = getNodes(this);
         nodes.forEach((node) => {
            Imageslider._init(node, config, true);
         });
      });
   }
}

if (typeof document !== 'undefined') {
   window.addEventListener('load', () => {
      const imageSliders = getNodes(SELECTORS.SLIDER_DATA_ATTRIBUTE);
      if (imageSliders.length > 0) {
         Imageslider._init(imageSliders);
      }
   });

   // Deprecated
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = Imageslider._jQueryInterface;
   $.fn[NAME].Constructor = Imageslider;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Imageslider._jQueryInterface;
   };
}

export default async (elements, settings) => {
   return Imageslider._init(elements, settings);
};
