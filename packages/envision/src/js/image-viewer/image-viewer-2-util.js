/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import { createElement } from '../util/nodes';

export const CLASSNAME = {
   BASE: 'env-image-viewer-2',
   ANIMATING: 'env-animation-in-progress',
   ITEM: 'env-image-viewer-2__viewer__item',
   ITEMS: 'env-image-viewer-2__viewer__items',
   LIGHTBOX: 'env-image-viewer-2__lightbox',
   ANIMATION: 'env-image-viewer-2__lightbox--in',
   BUTTON_ICON_BEFORE: 'env-button--icon-before',
   BUTTON_ICON_AFTER: 'env-button--icon-after',
};

export const AUTOPLAY_STATE = {
   STOP: 'STOP',
   PAUSE: 'PAUSE',
   CONTINUE: 'PAUSE',
   PLAY: 'PLAY',
};

export const ICON = {
   PLAY: 'arrow-fill-right',
   PAUSE: 'pause',
   PREV: 'arrow-left',
   NEXT: 'arrow-right',
   CLOSE: 'delete',
   ZOOM: 'zoom-in',
   DOWNLOAD: 'download',
};

export const getButtonIcon = (iconName) => {
   return `<svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-${iconName}"></use>
      </svg>`;
};

export const getButtonElement = (options) => {
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

export const TEMPLATE = {
   LIGHTBOX: `<dialog class="${CLASSNAME.LIGHTBOX}">
      <div class="${CLASSNAME.LIGHTBOX}__panel"></div>
      <div class="${CLASSNAME.LIGHTBOX}__panel__header-gradient ${CLASSNAME.LIGHTBOX}__showOnActive"></div>
      <div class="${CLASSNAME.LIGHTBOX}__panel__footer-gradient ${CLASSNAME.LIGHTBOX}__showOnActive"></div>
      <div class="${CLASSNAME.LIGHTBOX}__image-container" aria-live="polite"></div>
      </dialog>`,
   SPINNER: `<div class="env-spinner env-spinner--fade-in"><div class="env-rect1"></div>
      <div class="env-rect2"></div><div class="env-rect3"></div>
      <div class="env-rect4"></div><div class="env-rect5"></div></div>`,
};

export const SLIDER_VIEWER_TEMPLATE = `<div class="${CLASSNAME.BASE}__viewer"><div class="${CLASSNAME.ITEMS}"
         aria-live="off"></div></div>`;

export const SLIDER_ITEM_TEMPLATE = `<div class="${CLASSNAME.ITEM}" role="group" aria-roledescription="slide"></div>`;

export const SLIDER_CONTROLS_TEMPLATE = `<div class="${CLASSNAME.BASE}__viewer__controls"></div>`;
