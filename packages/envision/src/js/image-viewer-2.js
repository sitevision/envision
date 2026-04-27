/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} ImageViewer2ButtonConfig
 * @property {'primary' | 'secondary' | 'danger' | 'success' | null} [type] - Type of button styling
 * @property {boolean} [ghost] - Use ghost button styling
 * @property {'small' | 'large' | null} [size] - Button size
 */

/**
 * @typedef {Object} ImageViewer2SlidesConfig
 * @property {number} [auto] - Auto rotation interval in milliseconds. 0 = auto rotation not available. Default: 0
 * @property {number} [speed] - Slide speed in milliseconds. Default: 300
 * @property {boolean} [draggable] - Slides listen to mouse drag events in addition to touch events. Default: true
 * @property {boolean} [playing] - If auto > 0, this will start auto rotation automatically. Default: false
 * @property {boolean} [overlay] - Control buttons and caption should overlay the slides. Default: true
 * @property {ImageViewer2ButtonConfig} [buttons] - Control button appearance
 */

/**
 * @typedef {Object} ImageViewer2I18n
 * @property {string} [roledescription]
 * @property {string} [prev]
 * @property {string} [next]
 * @property {string} [pause]
 * @property {string} [play]
 * @property {string} [slideshow]
 * @property {string} [zoom]
 * @property {string} [largeImage]
 * @property {string} [close]
 * @property {string} [download]
 * @property {string} [image]
 * @property {string} [of]
 */

/**
 * @typedef {Object} ImageViewer2Config
 * @property {boolean | ImageViewer2SlidesConfig} [slides] - Initialize a slideshow with default or custom options. Default: false
 * @property {{ download?: boolean; showText?: boolean }} [buttons] - Lightbox button options
 * @property {'sv' | 'en' | 'no' | ImageViewer2I18n} [i18n] - Translation of buttons aria-label and aria-roledescription
 */

/**
 * @typedef {Object} ImageViewer2SliderInstance
 * @property {() => void} pause - Pause slider automatic rotation
 * @property {() => void} play - Start slider automatic rotation if available
 * @property {() => void} next - Show next image
 * @property {() => void} prev - Show previous image
 * @property {(index: number, speed?: number) => void} goTo - Set slider to image at position index
 * @property {() => number} getPos - Get index for current image
 */

/**
 * @typedef {Object} ImageViewer2LightboxInstance
 * @property {(index?: number) => void} show - Show lightbox starting at index. Defaults to index 0
 * @property {() => void} close - Close the lightbox
 */

/**
 * @typedef {Object} ImageViewer2Instance
 * @property {HTMLElement} el - The container element
 * @property {ImageViewer2Config} config - The configuration settings for this instance
 * @property {ImageViewer2LightboxInstance} lightbox - Lightbox instance (always available)
 * @property {ImageViewer2SliderInstance} [slider] - Slider instance (only available if slides config is set)
 */

import { getSwipe } from './util/swipe';
import { getNodes } from './util/nodes';
import Util from './util/util';
import Imageviewer2Lightbox from './image-viewer/image-viewer-2-lightbox';
import Imageviewer2Slider from './image-viewer/image-viewer-2-slider';

const NAME = 'envImageviewer2';

const lang = {
   sv: {
      roledescription: 'karusell',
      prev: 'Visa föregående',
      next: 'Visa nästa',
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
      roledescription: 'carousel',
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
   no: {
      roledescription: 'karusell',
      prev: 'Forrige',
      next: 'Neste',
      pause: 'Stopp',
      play: 'Start',
      slideshow: 'automatisk lysbildeserie',
      zoom: 'Vis',
      largeImage: 'stort bilde',
      close: 'Lukk',
      download: 'Last ned bilde',
      image: 'Bilde',
      of: 'av',
   },
};

const defaults = {
   slides: false,
   buttons: {
      download: true,
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

class Imageviewer2 {
   constructor(element, settings) {
      this.el = element;
      this.config = settings;

      this.lightbox = new Imageviewer2Lightbox(this.el, this.config);

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
   let slideOptions = options?.slides;
   if (slideOptions === true) {
      slideOptions = {};
   }

   // Remove unwanted settings
   options = Util.normalizeOptions(options, defaults);

   // Merge user settings with envision and user defaults
   let settings = Util.extend(true, {}, defaults, options);
   if (slideOptions) {
      settings.slides = Util.extend(true, {}, slidesDefaults, slideOptions);
   }

   // Handle language option
   // May be set to string 'sv', 'en' - use lang variable
   // or set to object with custom text.
   settings.i18n = Util.getLanguageOptions(settings?.i18n, lang, node);

   Util.normalizeOptions(settings.i18n, lang.sv);

   return settings;
};

/**
 * @param {string | HTMLElement | NodeList} elements - CSS selector, DOM node, or node list
 * @param {ImageViewer2Config} [options] - Configuration options
 * @returns {Promise<ImageViewer2Instance[] | undefined>}
 */
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
