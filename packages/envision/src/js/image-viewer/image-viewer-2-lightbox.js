/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import {
   createElement,
   getFocusable,
   getNode,
   getNodes,
   hide,
   isVisible,
   lockScroll,
   setStyle,
   resetDisplay,
   unlockScroll,
} from '../util/nodes';

import {
   TEMPLATE,
   CLASSNAME,
   getButtonElement,
   ICON,
} from './image-viewer-2-util';

export default class Imageviewer2Lightbox {
   #el;
   #config;
   #lightbox;
   #images;
   #currentSrc;
   #downloadButton;

   constructor(element, settings) {
      this.#el = element;
      this.#config = settings;
      this.#images = [];

      getNodes('[data-zoom]', this.#el).forEach((el) => {
         this.#images.push(this.#getImageData(el));
      });

      this.bindThis();

      // If slideshow, show event is handled in Slider.
      if (!this.#config.slides) {
         this.#el?.addEventListener('click', this.#handleClick);
      }
   }

   #getImageData(el) {
      const src = el.href || el.dataset.href;
      if (el.href && !el.href.startsWith('#')) {
         el.dataset.href = src;
         el.href = '#0';
      }
      let altEl;
      let alt = '';
      if (el.hasAttribute('alt') || el.dataset.alt) {
         altEl = el;
      } else {
         altEl = el.querySelector('[alt], [data-alt]');
      }
      if (altEl && altEl.dataset.alt) {
         alt = altEl.dataset.alt;
      } else if (altEl && altEl.hasAttribute('alt')) {
         alt = altEl.getAttribute('alt');
      }
      return {
         src: src,
         alt: alt,
      };
   }

   getImageCount() {
      return this.#images.length;
   }

   bindThis() {
      this.#setFocus = this.#setFocus.bind(this);
      this.#handleClick = this.#handleClick.bind(this);
      this.#handleClickInside = this.#handleClickInside.bind(this);
      this.#handleKeydown = this.#handleKeydown.bind(this);
      this.#handleLightboxActive = this.#handleLightboxActive.bind(this);
   }

   loadImage() {
      const imgContainer = getNode(
         `.${CLASSNAME.LIGHTBOX}__image-container`,
         this.#lightbox
      );
      const lightboxBgPanel = getNode(
         `.${CLASSNAME.LIGHTBOX}__panel`,
         this.#lightbox
      );
      imgContainer.innerHTML = TEMPLATE.SPINNER;
      const imgEl = new Image();
      const imageData = this.#images.find(
         (item) => item.src === this.#currentSrc
      );
      imgEl.src = imageData.src;
      imgEl.alt = imageData.alt;
      imgEl.classList.add(`${CLASSNAME.LIGHTBOX}__image`);
      imgEl.onload = () => {
         if (this.#config.buttons.download) {
            this.#downloadButton.href = imgEl.src;
         }
         setStyle(lightboxBgPanel, 'background-image', `url('${imgEl.src}')`);
         imgContainer.replaceChildren(imgEl);
      };
      this.setVisibleButtons();
      setTimeout(this.#setFocus, 1);
   }

   createLightbox() {
      this.#lightbox = createElement(TEMPLATE.LIGHTBOX);
      const showText = this.#config.buttons.showText;

      if (this.#images.length > 1) {
         this.#lightbox.appendChild(
            getButtonElement({
               text: this.#config.i18n.prev,
               icon: ICON.PREV,
               className: `${CLASSNAME.LIGHTBOX}__prev ${CLASSNAME.LIGHTBOX}__showOnActive`,
               dataset: { move: 'prev' },
            })
         );
         this.#lightbox.appendChild(
            getButtonElement({
               text: this.#config.i18n.next,
               icon: ICON.NEXT,
               className: `${CLASSNAME.LIGHTBOX}__next ${CLASSNAME.LIGHTBOX}__showOnActive`,
               dataset: { move: 'next' },
            })
         );
      }
      if (this.#config.buttons.download) {
         this.#downloadButton = getButtonElement({
            text: this.#config.i18n.download,
            icon: ICON.DOWNLOAD,
            className: `${CLASSNAME.LIGHTBOX}__download ${
               showText && CLASSNAME.BUTTON_ICON_BEFORE
            } ${CLASSNAME.LIGHTBOX}__showOnActive`,
            as: 'a',
         });
         this.#downloadButton.setAttribute('download', '');
         this.#downloadButton.removeAttribute('type');
         this.#lightbox.appendChild(this.#downloadButton);
      }
      this.#lightbox.appendChild(
         getButtonElement({
            text: this.#config.i18n.close,
            icon: ICON.CLOSE,
            className: `${CLASSNAME.LIGHTBOX}__close  ${
               showText && CLASSNAME.BUTTON_ICON_BEFORE
            } ${CLASSNAME.LIGHTBOX}__showOnActive`,
            dataset: { close: '' },
         })
      );
   }

   fadeIn() {
      this.#lightbox.addEventListener(
         'transitionend',
         (e) => {
            e.currentTarget?.classList.remove(CLASSNAME.ANIMATING);
         },
         { once: true }
      );
      this.#lightbox.classList.add(CLASSNAME.ANIMATION, CLASSNAME.ANIMATING);
   }

   showLightbox() {
      if (!this.#lightbox) {
         this.createLightbox();
         this.bindEvents();
      }
      document.body.appendChild(this.#lightbox);
      this.loadImage();
      lockScroll();
      this.#lightbox.showModal();
      this.fadeIn();

      if (this.#config.slides?.auto) {
         this.#el.dispatchEvent(new Event('pause'));
      }
   }

   show(i) {
      // API Method
      i = i || 0;
      if (i < 0 || i > this.#images.length - 1) {
         i = 0;
      }
      this.#currentSrc = this.#images[i].src;
      this.showLightbox();
   }

   #handleClick = (e) => {
      e.preventDefault();
      if (
         e.target.closest('[data-zoom]') &&
         e.target.closest('[data-zoom]').dataset.href
      ) {
         this.#currentSrc = e.target.closest('[data-zoom]').dataset.href;
      }
      this.showLightbox();
   };

   close() {
      // API Method
      const fadeOutCallback = () => {
         this.#lightbox.close();
         this.#lightbox.remove();
         unlockScroll();
      };
      this.#lightbox.addEventListener('transitionend', fadeOutCallback, {
         once: true,
      });
      this.#lightbox.classList.remove(CLASSNAME.ANIMATION);
   }

   getCurrentIndex() {
      const i = this.#images.findIndex(
         (image) => image.src === this.#currentSrc
      );
      return i >= 0 ? i : 0;
   }

   goTo(i) {
      this.#currentSrc = this.#images[i].src;
      this.loadImage();
   }

   #next() {
      let i = this.getCurrentIndex();
      i++;
      if (i >= this.#images.length) {
         i = this.#images.length - 1;
         this.#currentSrc = this.#images[i].src;
      } else {
         this.goTo(i);
      }
   }

   #prev = () => {
      let i = this.getCurrentIndex();
      i--;
      if (i < 0) {
         this.#currentSrc = this.#images[0].src;
      } else {
         this.goTo(i);
      }
   };

   #setFocus = () => {
      const activeEl = document.activeElement;
      if (!this.#lightbox.contains(activeEl) || !isVisible(activeEl)) {
         const focusable = getFocusable(this.#lightbox);
         focusable[0] && focusable[0].focus();
      }
   };

   setVisibleButtons() {
      const i = this.getCurrentIndex();
      const n = this.#images.length;

      if (n === 1 || (i === 0 && n > 1)) {
         hide(getNode('[data-move="prev"]', this.#lightbox));
      } else {
         resetDisplay(getNode('[data-move="prev"]', this.#lightbox));
      }
      if (n === 1 || (i === n - 1 && n > 1)) {
         hide(getNode('[data-move="next"]', this.#lightbox));
      } else {
         resetDisplay(getNode('[data-move="next"]', this.#lightbox));
      }
   }

   #handleClickInside = (e) => {
      if (e.target.isEqualNode(e.currentTarget)) {
         // Click outside panel on ::backdrop
         this.close();
         return;
      }

      const target = e.target.closest('button');
      if (!target) {
         return;
      }
      let i = this.getCurrentIndex();
      if (target.dataset.move) {
         if (target.dataset.move === 'prev') {
            i--;
         } else {
            i++;
         }
         if (i < 0) {
            i = 0;
         }
         if (i >= this.#images.length - 1) {
            i = this.#images.length - 1;
         }

         this.goTo(i);
      }

      if ('close' in target.dataset) {
         this.close();
      }
   };

   #handleKeydown = (e) => {
      if (/input|textarea/i.test(e.target.tagName)) {
         return;
      }
      const focusable = getFocusable(this.#lightbox);
      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      switch (e.key) {
         case 'ArrowLeft':
            e.preventDefault();
            this.#prev();
            break;
         case 'ArrowRight':
            e.preventDefault();
            this.#next();
            break;
         case 'Escape':
            e.preventDefault();
            if (!this.#lightbox.classList.contains(CLASSNAME.ANIMATING)) {
               this.close();
            }
            break;
         case 'Tab':
            if (e.shiftKey) {
               if (e.target === firstElement) {
                  e.preventDefault();
                  lastElement.focus();
               }
            } else if (e.target === lastElement) {
               e.preventDefault();
               firstElement.focus();
            }
            break;
         default:
            return;
      }
   };

   #handleLightboxActive = (e) => {
      this.#lightbox.classList.toggle(
         `${CLASSNAME.LIGHTBOX}--active`,
         e.type !== 'mouseleave'
      );
   };

   bindEvents() {
      this.#lightbox.addEventListener('click', this.#handleClickInside);
      this.#lightbox.addEventListener('keydown', this.#handleKeydown);
      this.#lightbox.addEventListener('mouseenter', this.#handleLightboxActive);
      this.#lightbox.addEventListener('mouseleave', this.#handleLightboxActive);
      this.#lightbox.addEventListener('keydown', this.#handleLightboxActive);
   }
}
