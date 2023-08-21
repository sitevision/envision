/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import { createElement, getNode, uniqueId, wrapElement } from '../util/nodes';
import {
   AUTOPLAY_STATE,
   CLASSNAME,
   getButtonElement,
   getButtonIcon,
   ICON,
   SLIDER_CONTROLS_TEMPLATE,
   SLIDER_ITEM_TEMPLATE,
   SLIDER_VIEWER_TEMPLATE,
} from './image-viewer-2-util';

export default class Imageviewer2Slider {
   #el;
   #lightbox;
   #config;
   #autoplayState;
   #slider;
   #sliderEl;
   #viewerEl;
   #autoplayButtonEl;

   constructor(element, settings, lightbox, Swipe) {
      this.#el = element;
      this.#config = settings;
      this.#lightbox = lightbox;

      this.bindThis();

      this.setupSlider();
      this.setupSliderControls();

      // a prefers-reduced-motion user setting must always override autoplay
      const prefersReducedMotion = window.matchMedia(
         '(prefers-reduced-motion: reduce)'
      ).matches;

      this.#config.slides.auto =
         !prefersReducedMotion && this.#config.slides.auto > 0
            ? this.#config.slides.auto
            : 0;
      this.#autoplayState = this.#config.slides.auto
         ? AUTOPLAY_STATE.PLAY
         : AUTOPLAY_STATE.STOP;

      this.setSliderAriaLive();
      this.setPlayButton();

      if (this.#config.slides.overlay) {
         this.#el.classList.add(`${CLASSNAME.BASE}--overlay`);
      }

      this.#slider = new Swipe(this.#viewerEl, {
         speed: prefersReducedMotion ? 1 : this.#config.slides.speed,
         draggable: this.#config.slides.draggable,
         auto: this.#config.slides.auto, // 0 = av
         stopPropagation: true,
         transitionEnd: this.#handleTransitionEnd,
      });

      if (this.#config.slides.auto && this.#config.slides.playing === false) {
         this.#setAutoplay(AUTOPLAY_STATE.STOP);
      }

      this.#setSlideMarkup(
         this.#viewerEl,
         this.#viewerEl.querySelector(`.${CLASSNAME.ITEM}`)
      );

      // API
      this.prev = this.#slider.prev;
      this.next = this.#slider.next;
      this.goTo = this.#slider.slide;
      this.getPos = this.#slider.getPos;
   }

   bindThis() {
      this.#setAutoplay = this.#setAutoplay.bind(this);
      this.#handleAutoplayButton = this.#handleAutoplayButton.bind(this);
      this.#prev = this.#prev.bind(this);
      this.#next = this.#next.bind(this);
      this.#handleFocus = this.#handleFocus.bind(this);
      this.#handleBlur = this.#handleBlur.bind(this);
      this.#handleTransitionEnd = this.#handleTransitionEnd.bind(this);
      this.#handleLightboxZoom = this.#handleLightboxZoom.bind(this);
      this.#handlePauseEvent = this.#handlePauseEvent.bind(this);
   }

   setupSlider() {
      this.#el.classList.add(CLASSNAME.BASE);
      if (this.#el.tagName !== 'SECTION') {
         this.#el.setAttribute('role', 'region');
      }
      this.#el.setAttribute(
         'aria-roledescription',
         this.#config.i18n.roledescription
      );

      this.#viewerEl = createElement(SLIDER_VIEWER_TEMPLATE);
      this.#sliderEl = getNode(`.${CLASSNAME.ITEMS}`, this.#viewerEl);
      uniqueId(this.#sliderEl);

      const slideCount = this.#el.children.length;

      for (let i = this.#el.children.length - 1; i >= 0; i--) {
         // Wrap and move all items inside slider
         const childNode = wrapElement(
            this.#el.children[i],
            SLIDER_ITEM_TEMPLATE
         );
         childNode.setAttribute(
            'aria-label',
            `${this.#config.i18n.image} ${i + 1} ${
               this.#config.i18n.of
            } ${slideCount}`
         );
         this.#sliderEl.prepend(childNode);
      }

      this.#el.replaceChildren(this.#viewerEl);
   }

   getSliderButtonClassNames() {
      let className = `${CLASSNAME.BASE}__viewer__controls__button`;
      if (!this.#config.slides.overlay) {
         if (this.#config.slides.buttons?.type) {
            className = `env-button--${
               this.#config.slides.buttons.type
            } ${className}`;
         }
         if (this.#config.slides.buttons?.ghost) {
            className = `env-button--ghost ${className}`;
         }
      }
      if (this.#config.slides.buttons?.size) {
         className = `env-button--${
            this.#config.slides.buttons.size
         } ${className}`;
      }
      return className;
   }

   setupSliderControls() {
      const containerEl = createElement(SLIDER_CONTROLS_TEMPLATE);
      const className = this.getSliderButtonClassNames();
      const showText = this.#config.buttons.showText;
      const prevBtn = getButtonElement({
         text: this.#config.i18n.prev,
         icon: ICON.PREV,
         className: `${className} ${
            showText ? CLASSNAME.BUTTON_ICON_BEFORE : ''
         }`,
         controls: this.#sliderEl.id,
      });
      const nextBtn = getButtonElement({
         text: this.#config.i18n.next,
         icon: ICON.NEXT,
         className: `${className} ${
            showText ? CLASSNAME.BUTTON_ICON_AFTER : ''
         }`,
         controls: this.#sliderEl.id,
      });
      if (this.#viewerEl.querySelectorAll(`.${CLASSNAME.ITEM}`)?.length > 1) {
         containerEl.appendChild(prevBtn);
         containerEl.appendChild(nextBtn);
      }

      if (this.#config.slides.auto) {
         this.#autoplayButtonEl = getButtonElement({
            text: `${
               this.#config.i18n.pause
            } <span class="env-assistive-text">${
               this.#config.i18n.slideshow
            }</span>`,
            icon: ICON.PLAY,
            className: `${className} ${
               showText ? CLASSNAME.BUTTON_ICON_BEFORE : ''
            }`,
         });
         if (
            this.#viewerEl.querySelectorAll(`.${CLASSNAME.ITEM}`)?.length > 1
         ) {
            containerEl.prepend(this.#autoplayButtonEl);
         }
      }

      let zoomBtn;
      if (this.#lightbox?.getImageCount() > 0) {
         zoomBtn = getButtonElement({
            text: `${this.#config.i18n.zoom} <span class="env-assistive-text">${
               this.#config.i18n.largeImage
            }</span>`,
            icon: ICON.ZOOM,
            className: `${className} ${
               showText && CLASSNAME.BUTTON_ICON_BEFORE
            }`,
         });
         containerEl.prepend(zoomBtn);
      }
      this.bindEvents(prevBtn, nextBtn, zoomBtn);
      this.#el.prepend(containerEl);
   }

   #setAutoplay = (state) => {
      if (state === AUTOPLAY_STATE.PAUSE) {
         if (this.#autoplayState !== AUTOPLAY_STATE.STOP) {
            this.#autoplayState = AUTOPLAY_STATE.PAUSE;
            this.#slider.stop();
         }
      } else if (state === AUTOPLAY_STATE.CONTINUE) {
         if (
            this.#autoplayState !== AUTOPLAY_STATE.STOP &&
            this.#config.slides.auto
         ) {
            this.#autoplayState = AUTOPLAY_STATE.PLAY;
            this.#slider.restart();
         }
      } else if (state === AUTOPLAY_STATE.STOP) {
         this.#autoplayState = AUTOPLAY_STATE.STOP;
         this.#slider.stop();
      } else if (state === AUTOPLAY_STATE.PLAY && this.#config.slides.auto) {
         this.#autoplayState = AUTOPLAY_STATE.PLAY;
         this.#slider.restart();
      }
      this.setPlayButton();
      this.setSliderAriaLive();
   };

   #next = () => {
      this.#slider.next();
      this.#setAutoplay(AUTOPLAY_STATE.PAUSE);
   };

   #prev = () => {
      this.#slider.prev();
      this.#setAutoplay(AUTOPLAY_STATE.PAUSE);
   };

   #setSlideMarkup(viewerEl, currentSlideEl) {
      viewerEl.querySelectorAll('a, button, input').forEach((el) => {
         if (el.getAttribute('tabindex') !== '-1') {
            el.setAttribute('tabindex', '-1');
            el.dataset.tabindex = 'true';
         }
      });
      currentSlideEl.querySelectorAll('[data-tabindex]').forEach((el) => {
         el.removeAttribute('tabindex');
         el.dataset.tabindex = 'true';
      });
      const assistiveText = `${
         currentSlideEl.querySelector('img')?.alt
      } ${currentSlideEl.textContent.trim()}`;
      if (assistiveText) {
         viewerEl.querySelector(`.${CLASSNAME.BASE}__assistive`).textContent =
            assistiveText;
      }
   }

   setSliderAriaLive() {
      const ariaLive =
         this.#config.slides.auto && this.#autoplayState === AUTOPLAY_STATE.PLAY
            ? 'off'
            : 'polite';
      this.#viewerEl.setAttribute('aria-live', ariaLive);
   }

   setPlayButton() {
      if (!this.#autoplayButtonEl) {
         return;
      }
      if (this.#autoplayState === AUTOPLAY_STATE.PLAY) {
         this.#autoplayButtonEl.innerHTML = `${
            this.#config.i18n.pause
         } <span class="env-assistive-text">${
            this.#config.i18n.slideshow
         }</span>${getButtonIcon(ICON.PAUSE)}`;
      } else {
         this.#autoplayButtonEl.innerHTML = `${
            this.#config.i18n.play
         } <span class="env-assistive-text">${
            this.#config.i18n.slideshow
         }</span>${getButtonIcon(ICON.PLAY)}`;
      }
   }

   #handleAutoplayButton = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.#autoplayState !== AUTOPLAY_STATE.PLAY) {
         this.#setAutoplay(AUTOPLAY_STATE.PLAY);
      } else {
         this.#setAutoplay(AUTOPLAY_STATE.STOP);
      }
   };

   #handlePauseEvent = () => {
      this.#setAutoplay(AUTOPLAY_STATE.PAUSE);
   };

   #handleTransitionEnd = (index, elem) => {
      this.#setSlideMarkup(this.#viewerEl, elem);
   };

   #handleFocus = (e) => {
      if (
         e.target.tagName !== 'BUTTON' &&
         this.#el.contains(document.activeElement)
      ) {
         this.#setAutoplay(AUTOPLAY_STATE.PAUSE);
      }
   };

   #handleBlur = (e) => {
      if (e.target.tagName !== 'BUTTON' && !this.#el.contains(e.target)) {
         this.#setAutoplay(AUTOPLAY_STATE.CONTINUE);
      }
   };

   #handleLightboxZoom = () => {
      this.#lightbox?.show(this.#slider.getPos());
   };

   pause() {
      // API Method
      this.#setAutoplay(AUTOPLAY_STATE.STOP);
   }

   play() {
      // API Method
      this.#setAutoplay(AUTOPLAY_STATE.PLAY);
   }

   bindEvents(prevBtn, nextBtn, zoomBtn) {
      this.#autoplayButtonEl?.addEventListener(
         'click',
         this.#handleAutoplayButton
      );
      prevBtn.addEventListener('click', this.#prev);
      nextBtn.addEventListener('click', this.#next);

      zoomBtn?.addEventListener('click', this.#handleLightboxZoom);

      if (this.#config.slides.auto) {
         this.#el.addEventListener('focus', this.#handleFocus, true);
         this.#el.addEventListener('blur', this.#handleBlur, true);
         this.#el.addEventListener('pause', this.#handlePauseEvent);
      }
   }
}
