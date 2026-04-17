/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import { getNodes } from './util/nodes';

const NAME = 'envRange';
const RANGE_CLASSNAME = 'env-range';

const CSS_VAR_INITIALIZED = '--rng-js';
const CSS_VAR_VALUE = '--rng-val';

class Range {
   constructor(element) {
      // Chrome browser does not support customizing the filled part of the track.
      // These variables are used in CSS to set the color as a gradient.
      element.style.setProperty(CSS_VAR_INITIALIZED, 1);
      element.style.setProperty(CSS_VAR_VALUE, Number(element.value));
      //
      element.addEventListener('input', () => {
         element.style.setProperty(CSS_VAR_VALUE, Number(element.value));
      });

      // Markers disappears when using custom styles and datalist
      // can not be styled in Safari, so we will add empty elements
      // as replacement.
      const list = element.getAttribute('list');
      const el = list ? document.getElementById(list) : null;

      if (el?.tagName === 'DATALIST') {
         const markers = document.createElement('div');
         markers.className = `${RANGE_CLASSNAME}__markers`;

         Array.from(el.options).forEach(() => {
            markers.appendChild(document.createElement('i'));
         });

         element.parentNode.insertBefore(markers, element.nextSibling);
      }
   }

   static _init() {
      const nodes = getNodes(`.${RANGE_CLASSNAME}[type="range"]`);
      if (nodes.length > 0) {
         nodes.map((node) => {
            if (!node[NAME]) {
               new Range(node);
               node[NAME] = true;
            }
         });
      }
   }
}

if (typeof document !== 'undefined') {
   document.addEventListener('DOMContentLoaded', Range._init);
}

export default () => {
   return Range._init();
};
