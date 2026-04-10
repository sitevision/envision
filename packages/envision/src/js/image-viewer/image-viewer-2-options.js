import Util from '../util/util';
import { BUTTON_PLACEMENT } from './image-viewer-2-util';
import { LANG } from './image-viewer-2-i18n';

const defaults = {
   slides: false,
   buttons: {
      download: true,
      showText: false,
   },
   i18n: 'sv',
};

// Deprecated in 2026.02.1: speed, overlay
const slidesDefaults = {
   auto: false,
   playing: false,
   transition: 'slide', // Added in 2026.02.1, replaces "speed"
   draggable: true,
   buttons: {
      placement: 'overlay-top', // Added in 2026.02.1, replaces "overlay"
      type: null,
      ghost: false,
      size: null,
   },
   autoHeight: false, // Added in 2026.02.1
   type: 'images', // Added in 2026.02.1. Unofficial, undocumented.
};

const convertLegacySlideOptions = (options) => {
   const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
   ).matches;

   // Autoplay
   // --------
   // Only allow autoplay and autostart if a
   // prefers-reduced-motion user setting is not set.
   options.auto =
      !prefersReducedMotion &&
      Number.isInteger(options.auto) &&
      options.auto > 0
         ? options.auto
         : 0;

   options.playing =
      !prefersReducedMotion && options.auto > 0 && options.playing;

   // Legacy overlay option
   // ---------------------
   // Convert legacy overlay option to buttons.placement
   if (typeof options.overlay == 'boolean' && !options.buttons?.placement) {
      options.buttons = { ...options.buttons }; //, {
      Object.assign(options.buttons, {
         placement: options.overlay
            ? BUTTON_PLACEMENT.OVERLAY_TOP
            : BUTTON_PLACEMENT.TOP,
      });
   }
   delete options.overlay;

   // Legacy speed option
   // -------------------
   // Convert legacy speed option to transition option
   if (!options.transition && Number.isInteger(options.speed)) {
      if (options.speed < 75) {
         options.transition = 'none';
      } else if (options.speed < 300) {
         options.transition = 'slide';
      } else if (options.speed > 900) {
         options.transition = 'slideSlow';
      } else {
         options.transition = 'slide';
      }
   }
   delete options.speed;

   // Force transition to non or fade if prefers-reduced-motion is set.
   if (prefersReducedMotion) {
      options.transition =
         options.transition === 'none' ? options.transition : 'fade';
   }

   // Duration values are fixed and set based on transition type.
   // We do not allow users to set custom duration values.
   if (options.transition === 'none') {
      options.duration = 0;
   } else if (options.transition === 'slideSlow') {
      options.duration = 50;
   } else {
      options.duration = 20;
   }

   // Add forced settings loop
   options.loop = true;

   return options;
};

const convertLegacyI18nOptions = (i18n) => {
   i18n.roledescription = (() => {
      const value = i18n.roledescription;
      if (value && typeof value === 'object' && !Array.isArray(value)) {
         return value;
      }
      // Handle legacy string format
      return {
         slideshow: value,
         slide: 'slide',
      };
   })();
   return i18n;
};

export const getSettings = (options, node) => {
   // Remove unwanted settings
   options = Util.normalizeOptions(options, defaults);

   // Convert legacy slide options to new format
   let slideOptions = options?.slides ? options?.slides : false;
   if (slideOptions !== false) {
      slideOptions = slideOptions === true ? {} : { ...slideOptions };
      slideOptions = convertLegacySlideOptions(slideOptions);
   }

   // Merge user settings with envision and user defaults
   let settings = Util.extend(true, {}, defaults, options);
   if (slideOptions) {
      settings.slides = Util.extend(true, {}, slidesDefaults, slideOptions);
   }

   // Handle language option
   // May be set to string 'sv', 'en' - use lang variable
   // or set to object with custom text.
   settings.i18n = Util.getLanguageOptions(settings?.i18n, LANG, node);
   settings.i18n = convertLegacyI18nOptions(settings.i18n);

   Util.normalizeOptions(settings.i18n, LANG.sv);

   return settings;
};
