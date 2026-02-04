/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import {
   createElement,
   getFocusable,
   getNode,
   setStyle,
   uniqueId,
   wrapElement,
} from '../util/nodes';
import {
   AUTOPLAY_STATE,
   CLASSNAME,
   getButtonElement,
   getButtonIcon,
   ICON,
   SLIDESHOW_TYPE,
   SLIDER_CONTROLS_TEMPLATE,
   SLIDER_ITEM_TEMPLATE,
   SLIDER_VIEWER_TEMPLATE,
   isOverlayPlacement,
} from './image-viewer-2-util';

export default class Imageviewer2Slider {
   #el;
   #lightbox;
   #config;
   #autoplayState;
   #autoplayPreviousInteractionEvent;
   #slider;
   #sliderEl;
   #viewerEl;
   #autoplayButtonEl;

   constructor(
      element,
      settings,
      lightbox,
      [EmblaCarousel, Autoplay, AutoHeight, Fade]
   ) {
      this.#el = element;
      this.#config = settings;
      this.#lightbox = lightbox;

      if (!EmblaCarousel) {
         return;
      }

      this.setupSlider();
      this.setupSliderControls();

      const plugins = [];

      // Add conditional plugins

      if (this.#config.slides.auto && Autoplay instanceof Function) {
         this.#autoplayPreviousInteractionEvent = null;
         this.#autoplayState = this.#config.slides.auto
            ? AUTOPLAY_STATE.PLAY
            : AUTOPLAY_STATE.STOP;
         plugins.push(
            Autoplay({
               delay: this.#config.slides.auto,
               defaultInteraction: false,
            })
         );
      }

      if (this.#config.slides.autoHeight) {
         if (AutoHeight) {
            plugins.push(AutoHeight());
         }
      }

      if (this.#config.slides.transition === 'fade' && Fade) {
         plugins.push(Fade());
      }

      this.setSliderAriaLive();

      this.#slider = EmblaCarousel(
         this.#viewerEl,
         this.#config.slides,
         plugins
      );

      if (this.#config.slides.auto) {
         this.#setAutoplay(
            this.#config.slides.playing
               ? AUTOPLAY_STATE.PLAY
               : AUTOPLAY_STATE.STOP
         );
      }

      this.#setSlideMarkup(this.#viewerEl, 0);

      // Make visible after initialized
      setStyle(this.#viewerEl, 'visibility', 'visible');

      // Public API functions
      this.pause = () => this.#setAutoplay(AUTOPLAY_STATE.PAUSE);
      this.play = () => this.#setAutoplay(AUTOPLAY_STATE.PLAY);
      this.prev = () => this.#slider?.goToPrev?.();
      this.next = () => this.#slider?.goToNext?.();
      this.goTo = (index, instant) => {
         if (Number.isInteger(instant)) {
            // Handle legacy speed parameter
            instant = instant <= 0;
         }
         this.#slider?.goTo?.(index, instant);
      };
      this.getPos = () => this.#slider?.selectedSnap?.() ?? 0;
   }

   setupSlider() {
      this.#el.classList.add(CLASSNAME.BASE);
      this.#config.slides.transition &&
         this.#el.classList.add(
            `${CLASSNAME.BASE}--transition-${this.#config.slides.transition}`
         );
      if (this.#el.tagName !== 'SECTION') {
         this.#el.setAttribute('role', 'region');
      }
      this.#el.setAttribute(
         'aria-roledescription',
         this.#config.i18n.roledescription.slideshow
      );
      if (isOverlayPlacement(this.#config.slides.buttons.placement)) {
         this.#el.classList.add(`${CLASSNAME.BASE}--overlay`);
         this.#el.classList.add(
            `${CLASSNAME.BASE}--${this.#config.slides.buttons.placement}`
         );
      }

      if (this.#config.slides.type === SLIDESHOW_TYPE.IMAGES) {
         this.#viewerEl = createElement(
            SLIDER_VIEWER_TEMPLATE[SLIDESHOW_TYPE.IMAGES]
         );
      } else {
         this.#viewerEl = createElement(
            SLIDER_VIEWER_TEMPLATE[SLIDESHOW_TYPE.HTML]
         );
      }

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
         childNode.setAttribute(
            'aria-roledescription',
            this.#config.i18n.roledescription.slide
         );
         this.#sliderEl.prepend(childNode);
      }

      this.#el.replaceChildren(this.#viewerEl);
   }

   getSliderButtonClassNames() {
      let className = `${CLASSNAME.BASE}__viewer__controls__button`;
      if (!this.#config.slides.buttons?.placement?.startsWith('overlay')) {
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
            text: `${this.#config.i18n.play} <span class="env-assistive-text">${
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
      if (
         this.#config.slides.type === SLIDESHOW_TYPE.IMAGES &&
         this.#lightbox?.getImageCount() > 0
      ) {
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

      if (this.#config.slides.buttons.placement === 'top') {
         this.#el.prepend(containerEl);
      } else {
         this.#el.append(containerEl);
      }

      setTimeout(() => {
         this.bindEvents(prevBtn, nextBtn, zoomBtn);
      }, 1);
   }

   #setAutoplay = (state) => {
      const autoplay = this.#slider.plugins().autoplay;

      if (
         state === AUTOPLAY_STATE.PAUSE &&
         this.#autoplayState !== AUTOPLAY_STATE.STOP
      ) {
         this.#autoplayState = AUTOPLAY_STATE.PAUSE;
         autoplay?.pause();
      } else if (state === AUTOPLAY_STATE.STOP) {
         this.#autoplayState = AUTOPLAY_STATE.STOP;
         autoplay?.stop();
      } else if (state === AUTOPLAY_STATE.PLAY && this.#config.slides.auto) {
         this.#autoplayState = AUTOPLAY_STATE.PLAY;
         autoplay?.play();
      }

      this.setPlayButton();
      this.setSliderAriaLive();
   };

   #next = () => {
      this.#slider.goToNext();
      this.#setAutoplay(AUTOPLAY_STATE.PAUSE);
   };

   #prev = () => {
      this.#slider.goToPrev();
      this.#setAutoplay(AUTOPLAY_STATE.PAUSE);
   };

   #setSlideMarkup(viewerEl, currentSlideIndex) {
      // Set tabindex for focusable elements
      // Add assistive text for image slideshow

      const currentSlideEl = viewerEl.querySelectorAll(`.${CLASSNAME.ITEM}`)[
         currentSlideIndex
      ];
      const allFocusable = getFocusable(viewerEl);

      allFocusable.forEach((el) => {
         const tabIndex =
            el.dataset.envImageViewer2Tabindex ||
            el.getAttribute('tabindex') ||
            '0';
         if (tabIndex !== '-1') {
            el.setAttribute('tabindex', '-1');
         }
         el.dataset.envImageViewer2Tabindex = tabIndex;
      });

      const currentFocusable = getFocusable(currentSlideEl);

      currentFocusable.forEach((el) => {
         const tabIndex = el.dataset.envImageViewer2Tabindex || '0';
         el.setAttribute('tabindex', tabIndex);
      });

      if (this.#config.slides.type === SLIDESHOW_TYPE.IMAGES) {
         const assistiveText = `${
            currentSlideEl.querySelector('img')?.alt
         } ${currentSlideEl.textContent.trim()}`;
         if (assistiveText) {
            viewerEl.querySelector(
               `.${CLASSNAME.BASE}__assistive`
            ).textContent = assistiveText;
         }
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
      const currentIcon =
         this.#autoplayButtonEl.querySelector(`[data-icon]`)?.dataset.icon;

      if (
         this.#autoplayState === AUTOPLAY_STATE.PLAY &&
         currentIcon !== ICON.PAUSE
      ) {
         this.#autoplayButtonEl.innerHTML = `${
            this.#config.i18n.pause
         } <span class="env-assistive-text">${
            this.#config.i18n.slideshow
         }</span>${getButtonIcon(ICON.PAUSE)}`;
      } else if (currentIcon !== ICON.PLAY) {
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

   #handleInteraction = (interaction) => {
      if (this.#config.slides.draggable) {
         if (
            interaction === 'pointerdown' &&
            this.#autoplayState === AUTOPLAY_STATE.PLAY
         ) {
            this.#setAutoplay(AUTOPLAY_STATE.PAUSE);
         }
      } else {
         if (interaction === 'click') {
            this.#setAutoplay(AUTOPLAY_STATE.STOP);
            this.#autoplayPreviousInteractionEvent = interaction;
         } else if (
            interaction === 'mouseenter' &&
            this.#autoplayState === AUTOPLAY_STATE.PLAY
         ) {
            this.#setAutoplay(AUTOPLAY_STATE.PAUSE);
            this.#autoplayPreviousInteractionEvent = interaction;
         } else if (
            interaction === 'mouseleave' &&
            this.#autoplayPreviousInteractionEvent === 'mouseenter' &&
            this.#autoplayState === AUTOPLAY_STATE.PAUSE
         ) {
            this.#setAutoplay(AUTOPLAY_STATE.PLAY);
            this.#autoplayPreviousInteractionEvent = interaction;
         }
      }
   };

   #handleClickEvent = () => {
      this.#handleInteraction('click');
   };

   #handleInteractionEvent = (api, apiEvt) => {
      const interaction = apiEvt?.detail?.interaction;
      this.#handleInteraction(interaction);
   };

   #handleFocus = (e) => {
      if (
         this.#config.slides.auto &&
         this.#autoplayState === AUTOPLAY_STATE.PLAY &&
         this.#viewerEl.contains(e.target)
      ) {
         this.#setAutoplay(AUTOPLAY_STATE.PAUSE);
      }
   };

   #handleSlidesInView = (api, apiEvt) => {
      this.#setSlideMarkup(
         this.#viewerEl,
         apiEvt?.detail?.slidesInView[0] || 0
      );
   };

   #handleLightboxZoom = () => {
      this.#lightbox?.show(this.getPos());
   };

   bindEvents(prevBtn, nextBtn, zoomBtn) {
      this.#autoplayButtonEl?.addEventListener(
         'click',
         this.#handleAutoplayButton
      );
      prevBtn.addEventListener('click', this.#prev);
      nextBtn.addEventListener('click', this.#next);

      zoomBtn?.addEventListener('click', this.#handleLightboxZoom);

      if (this.#config.slides.auto) {
         this.#viewerEl.addEventListener('focus', this.#handleFocus, true);
         this.#viewerEl.addEventListener('click', this.#handleClickEvent, true);
         this.#slider.on('slidesinview', this.#handleSlidesInView);
         this.#slider.on('autoplay:interaction', this.#handleInteractionEvent);
      }
   }
}
