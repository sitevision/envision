/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
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
