/**
 * --------------------------------------------------------------------------
 * Licensed under MIT <TODO add url>
 * --------------------------------------------------------------------------
 */

import Util from './util';

const Imageviewer = (($) => {

   const ANIMATION = 'sv-animation-in-progress';
   const BACKDROP = 'sv-modal__backdrop';
   const BACKDROP_ANIMATION = 'sv-modal__backdrop--in';
   const DATA_KEY = 'sv.image-viewer';
   const EVENT_KEY = `.${DATA_KEY}`;
   const NAME = 'imageviewer';
   const DATA_API_KEY = '.data-api';
   const NO_CONFLICT = $.fn[NAME];
   const ESCAPE_KEY = 27;
   const ARROW_LEFT_KEYCODE = 37;
   const ARROW_RIGHT_KEYCODE = 39;
   const TOUCHEVENT_WAIT = 500;
   const SLIDE_WIDTH_PX = 80;

   const DEFAULTS = {
      keyboard: true,
      slide: false,
      swipe: true,
      wrap: true
   };

   const SELECTORS = {
      ACTIVE               : '.sv-image-viewer__item--active',
      ACTIVE_DOT           : '.sv-image-viewer__indicators--active',
      ACTIVE_ITEM          : '.sv-image-viewer__item--active.sv-image-viewer__item',
      DATA_SLIDE_TO        : '[data-slide-to]',
      DATA_MOVE_TO         : '[data-move-to]',
      DATA_MOVE            : '[data-move]',
      DATA_IMAGE_VIEWER    : '[data-image-viewer], [data-move-to]',
      CLOSE_BTN            : '.sv-image-viewer__close-btn',
      INDICATORS           : '.sv-image-viewer__indicators',
      INNER                : '.sv-image-viewer__inner',
      ITEM                 : '.sv-image-viewer__item',
      NEXT_PREV            : '.sv-image-viewer--next, .sv-image-viewer--prev'
   };

   const ClassName = {
      ACTIVE         : 'sv-image-viewer__item--active',
      ACTIVE_DOT     : 'sv-image-viewer__indicators--active',
      LEFT           : 'sv-image-viewer__item--left',
      NEXT           : 'sv-image-viewer__item--next',
      PREV           : 'sv-image-viewer__item--prev',
      RIGHT          : 'sv-image-viewer__item--right',
      SLIDE          : 'sv-image-viewer--slide'
   };

   const Direction = {
      LEFT  : 'left',
      NEXT  : 'next',
      PREV  : 'prev',
      RIGHT : 'right'
   };

   const Events = {
      CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`,
      SLID           : `slid${EVENT_KEY}`,
      SLIDE          : `slide${EVENT_KEY}`,
      TOUCHEND       : `touchend${EVENT_KEY}`,
      TOUCHMOVE      : `touchmove${EVENT_KEY}`,
      TOUCHSTART     : `touchstart${EVENT_KEY}`
   };

   class Imageviewer {

      constructor(element, config) {
         this.$el = $(element);
         this.$images = this.$el.find(SELECTORS.ITEM);

         this.$popup = this.$el.clone();
         this.$popupImages = this.$popup.children();
         this._isSliding = false;

         this._isShown = false;

         this.config = $.extend({}, DEFAULTS, this.$popup.data(), config);
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

      show() {
         if (this._isShown) {
            return;
         }

         Util.reflow(this.$popup);

         this.$modal = $('<div/>', {
            class: 'sv-image-viewer__modal'
         });

         this.$container = $('<div/>', {
            class: 'sv-image-viewer__modal-container'
         });

         this.$modal.append(this.$container);
         this.$modal.appendTo(document.body);

         if (this.$popupImages.length > 1) {
            this.$popup.append(this._getButtons());
         }

         this.$container.append(this._getIndicators());

         this._bindContainerEvents();

         this.$popup.append(this._getCloseButton());
         this.$popup.appendTo(this.$container)
            .addClass('sv-image-viewer__inner__dialog');
         this._showBackdrop();

         if (this.config.moveTo) {
            this.$popup.removeClass(ClassName.SLIDE);
            this.goTo(this.config.moveTo);
            this.$popup.addClass(ClassName.SLIDE);
         }

         this._isShown = true;

         this._bindEvents();

         this.$popup.find(SELECTORS.ACTIVE).children().focus();
      }

      hide() {
         const removeBackdropCallback = () => {
            this.$backdrop.remove();
            this.$modal.remove();
            this.$popup.remove();
            this.$container.remove();
         };

         this.$modal.removeClass('sv-image-viewer__modal');

         this._unbindEvents();

         this.$backdrop
            .one(Util.getTransitionEndEvent(), removeBackdropCallback)
            .removeClass(BACKDROP_ANIMATION);
         this._isShown = false;
      }

      goTo(index) {
         this._activeElement = this.$popup.find(SELECTORS.ACTIVE_ITEM)[0];

         const activeIndex = this._getItemIndex(this._activeElement);

         if (index > this.$images.length - 1 || index < 0) {
            return;
         }

         if (this._isSliding) {
            return;
         }

         const direction = index > activeIndex ?
            Direction.NEXT :
            Direction.PREV;

         this._slide(direction, this.$popupImages[index]);
         return;
      }

      // Mobile slide
      startTouchSlide(event) {
         this.touchstartx =  event.originalEvent.touches[0].pageX;
      }

      moveTouchSlide(event) {
         this.touchmovex =  event.originalEvent.touches[0].pageX;

         this.movex = -(this.touchstartx - this.touchmovex);

         this.moved = false;
         const activeItem = this.$popup.find(SELECTORS.ACTIVE).children();
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
            this.$popup.find(SELECTORS.ACTIVE)
            .children()
            .css('transform', 'translate3d(0, 0, 0)');
         }
      }

      _bindContainerEvents() {
         this.$container.on(Events.CLICK_DATA_API, SELECTORS.DATA_MOVE, (e) => {
            e.preventDefault();

            if ($(e.currentTarget).data('move') === 'next') {
               this.next();
            } else {
               this.prev();
            }
         });

         this.$container.on(Events.CLICK_DATA_API, SELECTORS.DATA_SLIDE_TO, (e) => {
            const viewerIndex = e.currentTarget.getAttribute('data-slide-to');

            if (viewerIndex) {
               this.goTo(viewerIndex);
            }
         });
      }

      _getButtons() {
         const buttonHTML = `<a class="sv-image-viewer--prev" role="button" data-move="prev">
               <span class="sv-image-viewer__prev-icon sv-icon--arrow-left"></span>
               <span class="sv-assistive-text">Previous</span>
            </a>
            <a class="sv-image-viewer--next" role="button" data-move="next">
               <span class="sv-image-viewer__next-icon sv-icon--arrow-right"></span>
               <span class="sv-assistive-text">Next</span>
            </a>`;

         return buttonHTML;
      }

      _getIndicators() {
         const indicatorItems = this._getIndicatorItems();
         const indicatorsHTML = `<ol class="sv-image-viewer__indicators">
            ${indicatorItems}
         </ol>`;

         return indicatorsHTML;
      }

      _getIndicatorItems() {
         let html = '';
         const activeElement = this.$popup.find(SELECTORS.ACTIVE_ITEM)[0];
         const activeElementIndex = this._getItemIndex(activeElement);

         for (let i = 0; i < this.$popupImages.length; i++) {
            if (activeElementIndex !== i) {
               html += `<li data-slide-to="${i}">
                  <span class="sv-icon--dot-small sv-icon--large"></span>
               </li>`;
            } else {
               html += `<li data-slide-to="${i}">
                  <span class="sv-image-viewer__indicators--active sv-icon--dot-small sv-icon--large"></span>
               </li>`;
            }
         }

         return html;
      }

      _getCloseButton() {
         const html = '<span class="sv-image-viewer__close-btn sv-icon--deleted sv-icon--large"></span>';
         return html;
      }

      _showBackdrop() {
         this.$backdrop = $('<div/>', {
            class: BACKDROP
         });

         this.$modal.on(Events.CLICK_DATA_API, (event) => {

            if (this.$backdrop.hasClass(ANIMATION)) {
               return;
            }

            if (event.target !== event.currentTarget) {
               return;
            }

            if (!this._isShown) {
               return;
            }

            this.hide();
         });

         this.$backdrop.appendTo(document.body);

         this.$backdrop
            .one(Util.getAnimationEndEvent(), this._removeBackdropAnimation)
            .addClass(`${BACKDROP_ANIMATION} ${ANIMATION}`);
      }

      _removeBackdropAnimation(e) {
         $(e.currentTarget).removeClass(ANIMATION);
      }

      _getItemByDirection(direction, activeElement) {
         const isNextDirection = direction === Direction.NEXT;
         const activeIndex = this._getItemIndex(activeElement);
         const lastImageIndex = this.$popupImages.length - 1;
         const isGoingToWrap = (!isNextDirection && activeIndex === 0) || (isNextDirection && activeIndex === lastImageIndex);

         if (isGoingToWrap && !this.config.wrap) {
            return activeElement;
         }

         const delta = isNextDirection ? 1 : -1;
         const itemIndex = (activeIndex + delta) % this.$popupImages.length;

         return itemIndex === -1 ?
            this.$popupImages[lastImageIndex] : this.$popupImages[itemIndex];
      }

      _bindEvents() {
         if (this.config.keyboard) {
            this.$popup
               .on('keydown', (event) => this._keydown(event));
         }
         if (this.config.swipe && Util.isTouch()) {
            this._bindTouchSlider();
         }

         this.$popup
            .on(Events.CLICK_DATA_API, SELECTORS.CLOSE_BTN, () => {
               this.hide();
            });
      }

      _bindTouchSlider() {
         const container = this.$popup;
         container.on(Events.TOUCHSTART,  (event) => {
            this.startTouchSlide(event);
         });

         container.on(Events.TOUCHMOVE, (event) => {
            this.moveTouchSlide(event);
         });

         container.on(Events.TOUCHEND, () => {
            this.endTouchSlide(event);
         });
      }


      _unbindEvents() {
         this.$popup.off('click keydown');
         this.$modal.off('click');
         this.$container.off('click keydown');
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
            case ESCAPE_KEY:
               event.preventDefault();
               if (!this.$backdrop.hasClass(ANIMATION)) {
                  this.hide();
               }
               break;
            default:
               return;
         }
      }

      _getItemIndex(element) {
         return this.$popupImages.index(element);
      }

      _triggerSlideEvent(targetElement, eventDirectionName) {
         const targetIndex = this._getItemIndex(targetElement);
         const fromIndex = this._getItemIndex(this.$popup.find(SELECTORS.ACTIVE_ITEM)[0]);
         const slideEvent = $.Event(Events.SLIDE, {
            targetElement,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
         });

         this.$popup.trigger(slideEvent);

         return slideEvent;
      }

      _setActiveIndicatorElement(element) {
         this._indicatorsElement = this.$container.find(SELECTORS.INDICATORS)[0];
         if (this._indicatorsElement) {
            $(this._indicatorsElement)
               .find(SELECTORS.ACTIVE_DOT)
               .removeClass(ClassName.ACTIVE_DOT);

            const nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)].firstElementChild;

            if (nextIndicator) {
               $(nextIndicator).addClass(ClassName.ACTIVE_DOT);
            }
         }
      }

      _slide(direction, element) {
         const activeElement = this.$popup.find(SELECTORS.ACTIVE_ITEM)[0];
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

         const $nextElement = $(nextElement);

         if (nextElement && $nextElement.hasClass(ClassName.ACTIVE)) {
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

         const $activeElement = $(activeElement);

         if (this.$popup.hasClass(ClassName.SLIDE)) {

            $nextElement.addClass(orderClassName);

            Util.reflow(nextElement);

            $activeElement.addClass(directionalClassName);
            $nextElement.addClass(directionalClassName);

            $activeElement
               .one(Util.getTransitionEndEvent(), () => {

                  $nextElement
                     .removeClass(`${directionalClassName} ${orderClassName}`)
                     .addClass(ClassName.ACTIVE);

                  $activeElement
                     .removeClass(`${ClassName.ACTIVE} ${orderClassName} ${directionalClassName}`);

                  this._isSliding = false;

                  this.$popup.trigger(slidEvent);
                  this.$popup.find(SELECTORS.ACTIVE).children().focus();
               });
         } else {
            $activeElement.removeClass(ClassName.ACTIVE);
            $nextElement.addClass(ClassName.ACTIVE);

            this._isSliding = false;
            this.$popup.trigger(slideEvent);
            this.$popup.find(SELECTORS.ACTIVE).children().focus();
         }
      }

      static _jQuery(config) {
         return this.each(() => {
            const $this = $(this);

            const _config = $.extend({}, DEFAULTS, $this.data());

            if (typeof config === 'object') {
               $.extend(_config, config);
            }

            const action = typeof config === 'string' ? config : 'show';

            const data = new Imageviewer(this, _config);

            if (typeof action === 'string') {
               if (data[action] === undefined) {
                  throw new Error(`No method named "${action}"`);
               }
               data[action]();
            }
         });
      }
   }

   $(document)
      .on(Events.CLICK_DATA_API, SELECTORS.DATA_IMAGE_VIEWER, function(e) {
         e.preventDefault();

         let $target;
         if (this.hasAttribute('data-image-viewer') && !$(e.target).hasClass('sv-image-viewer__thumbnail')) {
            $target = $(e.currentTarget).find(SELECTORS.INNER);
         } else if (this.getAttribute('data-move-to')) {
            $target = $(e.currentTarget).parent().siblings(SELECTORS.INNER);
         }

         if (!$target) {
            return;
         }

         const config = $.extend({}, $target.data(), $(this).data());

         $target.imageviewer(config);
      });

   $.fn[NAME] = Imageviewer._jQuery;
   $.fn[NAME].Constructor = Imageviewer;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Imageviewer._jQuery;
   };

   return Imageviewer;

})(jQuery);

export default Imageviewer;

