/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import { getSwipe } from './util/swipe';

import {
   getFocusable,
   getNode,
   getNodes,
   createElement,
   hide,
   isVisible,
   lockScroll,
   setStyle,
   unhide,
   uniqueId,
   unlockScroll,
   wrapElement,
} from './util/nodes';

import Util from './util/util';

const NAME = 'envImageviewer2';

const CLASSNAME = {
   BASE: 'env-image-viewer-2',
   ANIMATION: 'env-animation-in-progress',
   ITEM: 'env-image-viewer-2__viewer__item',
   ITEMS: 'env-image-viewer-2__viewer__items',
   LIGHTBOX: 'env-image-viewer-2__lightbox',
   BACKDROP_ANIMATION: 'env-image-viewer-2__lightbox__backdrop--in',
   BUTTON_ICON_BEFORE: 'env-button--icon-before',
   BUTTON_ICON_AFTER: 'env-button--icon-after',
};

const AUTOPLAY_STATE = {
   STOP: 'STOP',
   PAUSE: 'PAUSE',
   CONTINUE: 'PAUSE',
   PLAY: 'PLAY',
};

const TEMPLATE = {
   BACKDROP: `<div class="${CLASSNAME.LIGHTBOX}__backdrop"></div>`,

   LIGHTBOX: `<div class="${CLASSNAME.LIGHTBOX}">
      <div class="${CLASSNAME.LIGHTBOX}__panel"></div>
      <div class="${CLASSNAME.LIGHTBOX}__panel__header-gradient ${CLASSNAME.LIGHTBOX}__showOnActive"></div>
      <div class="${CLASSNAME.LIGHTBOX}__panel__footer-gradient ${CLASSNAME.LIGHTBOX}__showOnActive"></div>
      <div class="${CLASSNAME.LIGHTBOX}__image-container" aria-live="polite"></div>
      </div>`,

   SPINNER: `<div class="env-spinner env-spinner--fade-in"><div class="env-rect1"></div>
      <div class="env-rect2"></div><div class="env-rect3"></div>
      <div class="env-rect4"></div><div class="env-rect5"></div></div>`,
};

const ICON = {
   PLAY: 'arrow-fill-right',
   PAUSE: 'pause',
   PREV: 'arrow-left',
   NEXT: 'arrow-right',
   CLOSE: 'delete',
   ZOOM: 'zoom-in',
   DOWNLOAD: 'download',
};

const getButtonIcon = (iconName) => {
   return `<svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-${iconName}"></use>
      </svg>`;
};

const getButtonElement = (options) => {
   const defaults = {
      as: 'button',
      text: '',
      icon: '',
      className: '',
      controls: '',
      dataset: null,
   };
   options = Object.assign({}, defaults, options);
   options.controls = options.controls
      ? `aria-controls="${options.controls}"`
      : '';
   const buttonEl = createElement(`<${options.as} type="button"
      ${options.controls} class="env-button env-button--icon ${
      options.className
   }">
      ${options.text} ${getButtonIcon(options.icon)}</${options.as}>`);

   for (const key in options.dataset) {
      buttonEl.dataset[key] = options.dataset[key];
   }
   return buttonEl;
};

const SLIDER_VIEWER_TEMPLATE = `<div class="${CLASSNAME.BASE}__viewer"><div class="${CLASSNAME.ITEMS}"
         aria-live="off"></div></div>`;

const SLIDER_ITEM_TEMPLATE = `<div class="${CLASSNAME.ITEM}" role="group" aria-roledescription="slide"></div>`;

const SLIDER_CONTROLS_TEMPLATE = `<div class="${CLASSNAME.BASE}__viewer__controls"></div>`;

const lang = {
   sv: {
      carousel: 'karusell',
      prev: 'Visa nästa',
      next: 'Visa föregående',
      pause: 'Stoppa',
      play: 'Starta',
      slideshow: 'automatiskt bläddring',
      zoom: 'Visa',
      largeImage: 'stor bild',
      close: 'Stäng',
      download: 'Ladda ner bild',
      image: 'Bild',
      of: 'av',
   },
   en: {
      carousel: 'carousel',
      prev: 'Previous',
      next: 'Next',
      pause: 'Stop',
      play: 'Start',
      slideshow: 'automatic slide show',
      zoom: 'Show',
      largeImage: 'large image',
      close: 'Close',
      download: 'Download image',
      image: 'Image',
      of: 'of',
   },
};

const defaults = {
   zoom: true,
   slides: null,
   buttons: {
      showText: false,
   },
   i18n: 'sv',
};

const slidesDefaults = {
   auto: 0,
   speed: 300,
   draggable: true,
   playing: false,
   overlay: true,
   buttons: {
      type: null,
      ghost: false,
      size: null,
   },
};

class Imageviewer2Lightbox {
   constructor(element, settings) {
      this.el = element;
      this.config = settings;

      this.images = [];
      getNodes('[data-zoom]', this.el).forEach((el) => {
         const href = el.href || el.dataset.href;
         if (el.href && !el.href.startsWith('#')) {
            el.dataset.href = href;
            el.href = '#0';
         }
         this.images.push(href);
      });

      this.bindThis();

      // If slideshow, show event is handled in Slider.
      if (!this.config.slides) {
         this.el?.addEventListener('click', this.show);
      }
   }

   getImageCount() {
      return this.images.length;
   }

   bindThis() {
      this.setFocus = this.setFocus.bind(this);
      this.show = this.show.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleKeydown = this.handleKeydown.bind(this);
      this.handleLightboxActive = this.handleLightboxActive.bind(this);
   }

   loadImage() {
      const imgContainer = getNode(
         `.${CLASSNAME.LIGHTBOX}__image-container`,
         this.lightbox
      );
      const lightboxBgPanel = getNode(
         `.${CLASSNAME.LIGHTBOX}__panel`,
         this.lightbox
      );
      imgContainer.innerHTML = TEMPLATE.SPINNER;
      const img = new Image();
      img.src = this.currentHref;
      img.classList.add(`${CLASSNAME.LIGHTBOX}__image`);
      img.onload = () => {
         this.downloadButton.href = img.src;
         setStyle(lightboxBgPanel, 'background-image', `url('${img.src}')`);
         imgContainer.replaceChildren(img);
      };
      this.setVisibleButtons();
      setTimeout(this.setFocus, 1);
   }

   setImageHref(e, i) {
      let href;
      if (i >= 0) {
         href = this.images[i];
         this.currentHref = href;
      } else if (
         e.target.closest('[data-zoom]') &&
         e.target.closest('[data-zoom]').dataset.href
      ) {
         href = e.target.closest('[data-zoom]').dataset.href;
         this.currentHref = href;
      }
   }

   show(e, i) {
      e.preventDefault();

      this.opener =
         e.target.closest('[data-zoom]') || e.target.closest('button');

      this.setImageHref(e, i);
      this.lightbox = createElement(TEMPLATE.LIGHTBOX);
      const showText = this.config.buttons.showText;

      if (this.images.length > 1) {
         this.lightbox.appendChild(
            getButtonElement({
               text: this.config.i18n.prev,
               icon: ICON.PREV,
               className: `${CLASSNAME.LIGHTBOX}__prev ${CLASSNAME.LIGHTBOX}__showOnActive`,
               dataset: { move: 'prev' },
            })
         );
         this.lightbox.appendChild(
            getButtonElement({
               text: this.config.i18n.next,
               icon: ICON.NEXT,
               className: `${CLASSNAME.LIGHTBOX}__next ${CLASSNAME.LIGHTBOX}__showOnActive`,
               dataset: { move: 'next' },
            })
         );
      }
      this.downloadButton = getButtonElement({
         text: this.config.i18n.download,
         icon: ICON.DOWNLOAD,
         className: `${CLASSNAME.LIGHTBOX}__download ${
            showText && CLASSNAME.BUTTON_ICON_BEFORE
         } ${CLASSNAME.LIGHTBOX}__showOnActive`,
         as: 'a',
      });
      this.downloadButton.setAttribute('download', '');
      this.downloadButton.removeAttribute('type');
      this.lightbox.appendChild(this.downloadButton);

      this.lightbox.appendChild(
         getButtonElement({
            text: this.config.i18n.close,
            icon: ICON.CLOSE,
            className: `${CLASSNAME.LIGHTBOX}__close  ${
               showText && CLASSNAME.BUTTON_ICON_BEFORE
            } ${CLASSNAME.LIGHTBOX}__showOnActive`,
            dataset: { close: '' },
         })
      );

      this.loadImage();

      document.body.appendChild(this.lightbox);

      lockScroll();
      this.showBackdrop();
      this.bindEvents();

      if (this.config.slides?.auto) {
         this.el.dispatchEvent(new Event('pause'));
      }
   }

   showBackdrop() {
      this.backdrop = createElement(TEMPLATE.BACKDROP);

      this.backdrop.addEventListener(
         'animationend',
         (e) => {
            e.currentTarget?.classList.remove(CLASSNAME.ANIMATION);
         },
         { once: true }
      );

      document.body.appendChild(this.backdrop);

      this.backdrop.classList.add(
         CLASSNAME.BACKDROP_ANIMATION,
         CLASSNAME.ANIMATION
      );
   }

   hide() {
      const removeBackdropCallback = () => {
         this.backdrop.remove();
         this.lightbox.remove();
         this.lightbox = null;
         unlockScroll();
      };

      this.backdrop.addEventListener('transitionend', removeBackdropCallback, {
         once: true,
      });
      this.backdrop.classList.remove(CLASSNAME.BACKDROP_ANIMATION);

      this.opener && this.opener.focus();
   }

   getCurrentIndex() {
      const i = this.images.indexOf(this.currentHref);
      return i >= 0 ? i : 0;
   }

   goTo(i) {
      this.currentHref = this.images[i];
      this.loadImage();
   }

   next() {
      let i = this.getCurrentIndex();
      i++;
      if (i >= this.images.length) {
         i = this.images.length - 1;
         this.currentHref = this.images[i];
      } else {
         this.goTo(i);
      }
   }

   prev() {
      let i = this.getCurrentIndex();
      i--;
      if (i < 0) {
         this.currentHref = this.images[0];
      } else {
         this.goTo(i);
      }
   }

   setFocus() {
      const activeEl = document.activeElement;
      if (!this.lightbox.contains(activeEl) || !isVisible(activeEl)) {
         const focusable = getFocusable(this.lightbox);
         focusable[0] && focusable[0].focus();
      }
   }

   setVisibleButtons() {
      const i = this.getCurrentIndex();
      const n = this.images.length;

      if (n === 1 || (i === 0 && n > 1)) {
         hide(getNode('[data-move="prev"]', this.lightbox));
      } else {
         unhide(getNode('[data-move="prev"]', this.lightbox));
      }
      if (n === 1 || (i === n - 1 && n > 1)) {
         hide(getNode('[data-move="next"]', this.lightbox));
      } else {
         unhide(getNode('[data-move="next"]', this.lightbox));
      }
   }

   handleClick(e) {
      if (!this.lightbox.contains(e.target)) {
         this.hide();
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
         if (i >= this.images.length - 1) {
            i = this.images.length - 1;
         }

         this.goTo(i);
      }

      if ('close' in target.dataset) {
         this.hide();
      }
   }

   handleKeydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) {
         return;
      }
      const focusable = getFocusable(this.lightbox);
      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      switch (e.key) {
         case 'ArrowLeft':
            e.preventDefault();
            this.prev();
            break;
         case 'ArrowRight':
            e.preventDefault();
            this.next();
            break;
         case 'Escape':
            e.preventDefault();
            if (!this.backdrop.classList.contains(CLASSNAME.ANIMATION)) {
               this.hide();
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
   }

   handleLightboxActive(e) {
      this.lightbox.classList.toggle(
         `${CLASSNAME.LIGHTBOX}--active`,
         e.type !== 'mouseleave'
      );
   }

   bindEvents() {
      this.lightbox.addEventListener('click', this.handleClick);
      this.backdrop.addEventListener('click', this.handleClick);
      this.lightbox.addEventListener('keydown', this.handleKeydown);
      this.lightbox.addEventListener('mouseenter', this.handleLightboxActive);
      this.lightbox.addEventListener('mouseleave', this.handleLightboxActive);
      this.lightbox.addEventListener('keydown', this.handleLightboxActive);
   }
}

class Imageviewer2Slider {
   constructor(element, settings, lightbox, Swipe) {
      this.el = element;
      this.config = settings;
      this.lightbox = lightbox;

      this.bindThis();

      this.setupSlider();
      this.setupSliderControls();

      // a prefers-reduced-motion user setting must always override autoplay
      const prefersReducedMotion = window.matchMedia(
         '(prefers-reduced-motion: reduce)'
      ).matches;

      this.config.slides.auto =
         !prefersReducedMotion && this.config.slides.auto > 0
            ? this.config.slides.auto
            : 0;
      this.autoplayState = this.config.slides.auto
         ? AUTOPLAY_STATE.PLAY
         : AUTOPLAY_STATE.STOP;

      this.setSliderAriaLive();
      this.setPlayButton();

      if (this.config.slides.overlay) {
         this.el.classList.add(`${CLASSNAME.BASE}--overlay`);
      }

      this.slider = new Swipe(this.viewerEl, {
         speed: prefersReducedMotion ? 1 : this.config.slides.speed,
         draggable: this.config.slides.draggable,
         auto: this.config.slides.auto, // 0 = av
         stopPropagation: true,
         transitionEnd: this.handleTransitionEnd,
      });

      if (this.config.slides.auto && this.config.slides.playing === false) {
         this.setAutoplay(AUTOPLAY_STATE.STOP);
      }

      this.setSlideTabindex(
         this.viewerEl,
         this.viewerEl.querySelector(`.${CLASSNAME.ITEM}`)
      );
   }

   bindThis() {
      this.setAutoplay = this.setAutoplay.bind(this);
      this.handleAutoplayButton = this.handleAutoplayButton.bind(this);
      this.prev = this.prev.bind(this);
      this.next = this.next.bind(this);
      this.handleFocus = this.handleFocus.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
      this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
      this.handleLightboxZoom = this.handleLightboxZoom.bind(this);
      this.handlePauseEvent = this.handlePauseEvent.bind(this);
   }

   setupSlider() {
      this.el.classList.add(CLASSNAME.BASE);
      this.el.setAttribute('role', 'region');
      this.el.setAttribute('aria-roledescription', this.config.i18n.carousel);

      this.viewerEl = createElement(SLIDER_VIEWER_TEMPLATE);
      this.sliderEl = getNode(`.${CLASSNAME.ITEMS}`, this.viewerEl);
      uniqueId(this.sliderEl);

      const slideCount = this.el.children.length;

      for (let i = this.el.children.length - 1; i >= 0; i--) {
         // Wrap and move all items inside slider
         const childNode = wrapElement(
            this.el.children[i],
            SLIDER_ITEM_TEMPLATE
         );
         childNode.setAttribute(
            'aria-label',
            `${this.config.i18n.image} ${i + 1} ${
               this.config.i18n.of
            } ${slideCount}`
         );
         this.sliderEl.prepend(childNode);
      }

      this.el.replaceChildren(this.viewerEl);
   }

   getSliderButtonClassNames() {
      let className = `${CLASSNAME.BASE}__viewer__controls__button`;
      if (!this.config.slides.overlay) {
         if (this.config.slides.buttons.type) {
            className = `env-button--${this.config.slides.buttons.type} ${className}`;
         }
         if (this.config.slides.buttons.ghost) {
            className = `env-button--ghost ${className}`;
         }
      }
      if (this.config.slides.buttons.size) {
         className = `env-button--${this.config.slides.buttons.size} ${className}`;
      }
      return className;
   }

   setupSliderControls() {
      const containerEl = createElement(SLIDER_CONTROLS_TEMPLATE);
      const className = this.getSliderButtonClassNames();
      const showText = this.config.buttons.showText;
      const prevBtn = getButtonElement({
         text: this.config.i18n.prev,
         icon: ICON.PREV,
         className: `${className} ${
            showText ? CLASSNAME.BUTTON_ICON_BEFORE : ''
         }`,
         controls: this.sliderEl.id,
      });
      const nextBtn = getButtonElement({
         text: this.config.i18n.next,
         icon: ICON.NEXT,
         className: `${className} ${
            showText ? CLASSNAME.BUTTON_ICON_AFTER : ''
         }`,
         controls: this.sliderEl.id,
      });
      containerEl.appendChild(prevBtn);
      containerEl.appendChild(nextBtn);
      let zoomBtn;
      if (this.config.slides.auto) {
         this.autoplayButtonEl = getButtonElement({
            text: `${this.config.i18n.pause} <span class="env-assistive-text">${this.config.i18n.slideshow}</span>`,
            icon: ICON.PLAY,
            className: `${className} ${
               showText ? CLASSNAME.BUTTON_ICON_BEFORE : ''
            }`,
         });
         containerEl.prepend(this.autoplayButtonEl);
      }

      if (this.config.zoom && this.lightbox?.getImageCount() > 0) {
         zoomBtn = getButtonElement({
            text: `${this.config.i18n.zoom} <span class="env-assistive-text">${this.config.i18n.largeImage}</span>`,
            icon: ICON.ZOOM,
            className: `${className} ${
               showText && CLASSNAME.BUTTON_ICON_BEFORE
            }`,
         });
         containerEl.prepend(zoomBtn);
      }
      this.bindEvents(prevBtn, nextBtn, zoomBtn);
      this.el.prepend(containerEl);
   }

   setAutoplay(state) {
      if (state === AUTOPLAY_STATE.PAUSE) {
         if (this.autoplayState !== AUTOPLAY_STATE.STOP) {
            this.autoplayState = AUTOPLAY_STATE.PAUSE;
            this.slider.stop();
         }
      } else if (state === AUTOPLAY_STATE.CONTINUE) {
         if (
            this.autoplayState !== AUTOPLAY_STATE.STOP &&
            this.config.slides.auto
         ) {
            this.autoplayState = AUTOPLAY_STATE.PLAY;
            this.slider.restart();
         }
      } else if (state === AUTOPLAY_STATE.STOP) {
         this.autoplayState = AUTOPLAY_STATE.STOP;
         this.slider.stop();
      } else if (state === AUTOPLAY_STATE.PLAY && this.config.slides.auto) {
         this.autoplayState = AUTOPLAY_STATE.PLAY;
         this.slider.restart();
      }
      this.setPlayButton();
      this.setSliderAriaLive();
   }

   next() {
      this.slider.next();
      this.setAutoplay(AUTOPLAY_STATE.PAUSE);
   }

   prev() {
      this.slider.prev();
      this.setAutoplay(AUTOPLAY_STATE.PAUSE);
   }

   setSlideTabindex(sliderEl, currentSlideEl) {
      sliderEl.querySelectorAll('a, button, input').forEach((el) => {
         if (el.getAttribute('tabindex') !== '-1') {
            el.setAttribute('tabindex', '-1');
            el.dataset.tabindex = 'true';
         }
      });
      currentSlideEl.querySelectorAll('[data-tabindex]').forEach((el) => {
         el.removeAttribute('tabindex');
         el.dataset.tabindex = 'true';
      });
   }

   setSliderAriaLive() {
      const ariaLive =
         this.config.slides.auto && this.autoplayState === AUTOPLAY_STATE.PLAY
            ? 'off'
            : 'polite';
      this.sliderEl.setAttribute('aria-live', ariaLive);
   }

   setPlayButton() {
      if (!this.autoplayButtonEl) {
         return;
      }
      if (this.autoplayState === AUTOPLAY_STATE.PLAY) {
         this.autoplayButtonEl.innerHTML = `${
            this.config.i18n.pause
         } <span class="env-assistive-text">${
            this.config.i18n.slideshow
         }</span>${getButtonIcon(ICON.PAUSE)}`;
      } else {
         this.autoplayButtonEl.innerHTML = `${
            this.config.i18n.play
         } <span class="env-assistive-text">${
            this.config.i18n.slideshow
         }</span>${getButtonIcon(ICON.PLAY)}`;
      }
   }

   handleAutoplayButton(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.autoplayState !== AUTOPLAY_STATE.PLAY) {
         this.setAutoplay(AUTOPLAY_STATE.PLAY);
      } else {
         this.setAutoplay(AUTOPLAY_STATE.STOP);
      }
   }

   handlePauseEvent() {
      this.setAutoplay(AUTOPLAY_STATE.PAUSE);
   }

   handleTransitionEnd(index, elem) {
      this.setSlideTabindex(this.viewerEl, elem);
   }

   handleFocus(e) {
      if (
         e.target.tagName !== 'BUTTON' &&
         this.el.contains(document.activeElement)
      ) {
         this.setAutoplay(AUTOPLAY_STATE.PAUSE);
      }
   }

   handleBlur(e) {
      if (e.target.tagName !== 'BUTTON' && !this.el.contains(e.target)) {
         this.setAutoplay(AUTOPLAY_STATE.CONTINUE);
      }
   }

   handleLightboxZoom(e) {
      this.lightbox?.show(e, this.slider.getPos());
   }

   bindEvents(prevBtn, nextBtn, zoomBtn) {
      this.autoplayButtonEl?.addEventListener(
         'click',
         this.handleAutoplayButton
      );
      prevBtn.addEventListener('click', this.prev);
      nextBtn.addEventListener('click', this.next);

      zoomBtn?.addEventListener('click', this.handleLightboxZoom);

      if (this.config.slides.auto) {
         this.el.addEventListener('focus', this.handleFocus, true);
         this.el.addEventListener('blur', this.handleBlur, true);
         this.el.addEventListener('pause', this.handlePauseEvent);
      }
   }
}

class Imageviewer2 {
   constructor(element, settings) {
      this.el = element;
      this.config = settings;

      if (this.config.zoom) {
         this.lightbox = new Imageviewer2Lightbox(this.el, this.config);
      }

      if (this.config.slides) {
         getSwipe().then((Swipe) => {
            this.slider = new Imageviewer2Slider(
               this.el,
               this.config,
               this.lightbox,
               Swipe
            );
         });
      }
   }
}

const getSettings = (options, node) => {
   if (options?.slides === true) {
      options.slides = Object.assign({}, slidesDefaults);
   }

   // Remove unwanted settings
   options = Util.normalizeOptions(options, defaults);

   // Merge user settings with envision and user defaults
   let settings = Util.extend(true, {}, defaults, options);

   // Handle language option
   // May be set to string 'sv', 'en' - use lang variable
   // or set to object with custom text.
   settings.i18n = Util.getLanguageOptions(settings?.i18n, lang, node);

   Util.normalizeOptions(settings.i18n, lang.sv);

   return settings;
};

export default async (elements, options) => {
   const nodes = getNodes(elements);
   if (nodes.length > 0) {
      await getSwipe();
      return nodes.map((node) => {
         if (!node[NAME]) {
            node[NAME] = new Imageviewer2(node, getSettings(options, node));
         }
         return node[NAME];
      });
   }
};
