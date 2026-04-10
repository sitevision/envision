/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
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
