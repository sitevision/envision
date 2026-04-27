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

import { getEmblaCarousel } from './util/emblaCarousel';
import { getNodes } from './util/nodes';
import { getSettings } from './image-viewer/image-viewer-2-options';

import Imageviewer2Lightbox from './image-viewer/image-viewer-2-lightbox';
import Imageviewer2Slider from './image-viewer/image-viewer-2-slider';

const NAME = 'envImageviewer2';

class Imageviewer2 {
   constructor(element, settings) {
      this.el = element;
      this.config = settings;

      if (getNodes('[data-zoom]', this.el).length > 0) {
         this.lightbox = new Imageviewer2Lightbox(this.el, this.config);
      }

      if (this.config.slides) {
         const plugins = {
            autoPlay: this.config.slides.auto > 0,
            autoHeight: this.config.slides.autoHeight === true,
            fade: this.config.slides.transition === 'fade',
         };

         this.ready = getEmblaCarousel(plugins).then(
            ([EmblaCarousel, Autoplay, AutoHeight, Fade]) => {
               this.slider = new Imageviewer2Slider(
                  this.el,
                  this.config,
                  this.lightbox,
                  [EmblaCarousel, Autoplay, AutoHeight, Fade]
               );
               return this;
            }
         );
      } else {
         this.ready = Promise.resolve(this);
      }
   }
}

/**
 * @param {string | HTMLElement | NodeList} elements - CSS selector, DOM node, or node list
 * @param {ImageViewer2Config} [options] - Configuration options
 * @returns {Promise<ImageViewer2Instance[] | undefined>}
 */
export default async (elements, options) => {
   const nodes = getNodes(elements);
   if (nodes.length > 0) {
      const instances = nodes.map((node) => {
         if (!node[NAME]) {
            node[NAME] = new Imageviewer2(node, getSettings(options, node));
         }
         return node[NAME];
      });

      await Promise.all(instances.map((instance) => instance.ready));
      instances.forEach((instance) => {
         delete instance.ready;
      });

      return instances;
   }
};
