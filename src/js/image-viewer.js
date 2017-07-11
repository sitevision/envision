/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import Util from './util';

const Imageviewer = (($) => {

   const ANIMATION = 'sv-animation-in-progress';
   const BACKDROP = 'sv-image-viewer__backdrop';
   const BACKDROP_ANIMATION = 'sv-image-viewer__backdrop--in';
   const DATA_KEY = 'sv.image-viewer';
   const EVENT_KEY = `.${DATA_KEY}`;
   const NAME = 'imageviewer';
   const DATA_API_KEY = '.data-api';
   const NO_CONFLICT = $.fn[NAME];
   const ESCAPE_KEY = 27;
   const ARROW_LEFT_KEYCODE = 37;
   const ARROW_RIGHT_KEYCODE = 39;
   const SPINNER_TEMPLATE = `<div class="sv-spinner">
                                <div class="sv-rect1"></div>
                                <div class="sv-rect2"></div>
                                <div class="sv-rect3"></div>
                                <div class="sv-rect4"></div>
                                <div class="sv-rect5"></div>
                             </div>`;

   const SELECTORS = {
      ACTIVE_DOT           : '.sv-image-viewer__indicators--active',
      DATA_MOVE_TO         : '[data-move-to]',
      DATA_MOVE            : '[data-move]',
      DATA_IMAGE_VIEWER    : '[data-image-viewer]',
      IMAGES               : '.sv-image-viewer__images',
      INDICATORS           : '.sv-image-viewer__indicators',
      DATA_SLIDE_TO        : '[data-slide-to]',
      SPINNER              : '.sv-spinner'
   };

   const ClassName = {
      ACTIVE_DOT     : 'sv-image-viewer__indicators--active',
      HIDDEN         : 'sv-image-viewer--hidden',
      SPINNER_HIDE   : 'sv-spinner--hide'
   };

   const Events = {
      CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`,
      TOUCHEND       : `touchend${EVENT_KEY}`,
      TOUCHMOVE      : `touchmove${EVENT_KEY}`,
      TOUCHSTART     : `touchstart${EVENT_KEY}`
   };

   class Imageviewer {

      constructor(element, $image) {
         this.$el = $(element);
         this.$images = this.$el.find(SELECTORS.IMAGES);
         this._isShown = false;

         this.config = $.extend({}, this.$el.data());
         this.config.index = this.$images.index($image[0]);
      }

      next() {
         this.show(this._getNextItemIndex());
      }

      prev() {
         this.show(this._getPrevItemIndex());
      }

      show(index) {
         this.config.index = Number(index);
         const image = $(this.$images[index])[0];
         const href = image.getAttribute('href');

         if (this._isShown) {
            $(SELECTORS.SPINNER).removeClass(ClassName.SPINNER_HIDE);
            this.$btnContainer.addClass(ClassName.HIDDEN);

            const $downloadingImage = this._loadImage(href);

            this.$imgContainer.html($downloadingImage);
            this._setActiveIndicatorElement();
         } else {
            this.$modal = $('<div/>', {
               class: 'sv-image-viewer__modal'
            });

            this.$btnContainer = $('<div/>', {
               class: 'sv-image-viewer__dialog'
            });

            this.$imgContainer = $('<div/>', {
               class: 'sv-image-viewer__modal-container'
            });

            this.$modal.append(this.$btnContainer);
            this.$btnContainer.append(this.$imgContainer);
            this.$modal.appendTo(document.body);

            this.$btnContainer.append(this._getIndicators());

            if (this.$images.length > 1) {
               this.$btnContainer.append(this._getButtons());
            }

            this.$btnContainer.addClass(ClassName.HIDDEN);
            const $downloadingImage = this._loadImage(href);

            this.$imgContainer.html($downloadingImage);

            this._isShown = true;

            this._bindContainerEvents();
            this._bindEvents();
            this._showBackdrop();

            $(SPINNER_TEMPLATE).prependTo(this.$modal);
         }
      }

      hide() {
         const removeBackdropCallback = () => {
            this.$backdrop.remove();
            this.$modal.remove();
            this.$btnContainer.remove();
            this.$imgContainer.remove();
         };

         this.$backdrop
            .one(Util.getTransitionEndEvent(), removeBackdropCallback)
            .removeClass(BACKDROP_ANIMATION);

         this._isShown = false;
      }

      _loadImage(href) {
         const $downloadingImage = $('<img>');

         $downloadingImage
            .addClass('sv-image-viewer__img')
            .attr({
               tabindex: '-1',
               src: href
            })
            .on('load', () => {

               if ($downloadingImage.width() < $downloadingImage.height()) {
                  $downloadingImage.css({
                     'max-height': '800px',
                     width: 'auto'
                  });
               }

               $(SELECTORS.SPINNER).addClass(ClassName.SPINNER_HIDE);
               this.$btnContainer.removeClass(ClassName.HIDDEN);
               this.$imgContainer.children()[0].focus();
            });

         return $downloadingImage;
      }

      _bindContainerEvents() {
         this.$btnContainer.on(Events.CLICK_DATA_API, SELECTORS.DATA_MOVE, (e) => {
            e.preventDefault();

            if ($(e.currentTarget).data('move') === 'next') {
               this.next();
            } else {
               this.prev();
            }
         });

         this.$btnContainer.on(Events.CLICK_DATA_API, SELECTORS.DATA_MOVE_TO, (e) => {
            const viewerIndex = e.currentTarget.getAttribute('data-move-to');

            if (viewerIndex) {
               this.show(viewerIndex);
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
         return `<ol class="sv-image-viewer__indicators">
                  ${indicatorItems}
               </ol>`;
      }

      _getIndicatorItems() {
         const activeElementIndex = this.config.index;

         return this.$images.map((index) => {
            const isActive = index === activeElementIndex;
            return `<li data-move-to="${index}">
                     <span class="${isActive ? 'sv-image-viewer__indicators--active ' : ''} sv-icon--dot-small sv-icon--large"></span>
                     </li>`;
         })
         .get()
         .join('');
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

      _bindEvents() {
         this.$imgContainer
            .on('keydown', (event) => this._keydown(event));
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

      _getNextItemIndex() {
         return this.config.index === this.$images.length - 1 ? 0 : this.config.index + 1;
      }

      _getPrevItemIndex() {
         return this.config.index === 0 ? this.$images.length - 1 : this.config.index - 1;
      }

      _setActiveIndicatorElement() {
         this._indicatorsElement = this.$btnContainer.find(SELECTORS.INDICATORS)[0];
         if (this.$images.length > 0) {
            this.$btnContainer
               .find(SELECTORS.ACTIVE_DOT)
               .removeClass(ClassName.ACTIVE_DOT);

            const indicator = this.$btnContainer.find(SELECTORS.INDICATORS).children()[this.config.index];

            if (indicator) {
               $(indicator).children()
                  .addClass(ClassName.ACTIVE_DOT);
            }
         }
      }

      static _jQuery($image) {
         return this.each(() => {
            const data = new Imageviewer(this, $image);
            data.show(data.config.index);
         });
      }
   }

   $(document)
      .on(Events.CLICK_DATA_API, SELECTORS.DATA_IMAGE_VIEWER, function(e) {
         e.preventDefault();
         const $target = $(e.target);

         if (!$target.is('img')) {
            return;
         }

         $(this).imageviewer($target.parent());
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

