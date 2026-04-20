/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import { getNodes } from './util/nodes';

const NAME = 'envRange';
const RANGE_CLASSNAME = 'env-range';

// Chrome browser does not support customizing the filled part of the track.
// These variables are used in CSS to set the color as a gradient.
const CSS_VAR_INITIALIZED = '--rng-js';
const CSS_VAR_VALUE = '--rng-val';
const CSS_VAR_PROGRESS = '--rng-progress';

class Range {
   constructor(element) {
      element.style.setProperty(CSS_VAR_INITIALIZED, 1);

      this.#updateRangeProgress(element);

      element.addEventListener('input', () => {
         this.#updateRangeProgress(element);
      });

      // Markers disappears when using custom styles and datalist
      // can not be styled in Safari, so we will add empty elements
      // as replacement.
      const list = element.getAttribute('list');
      const datalistEl = list ? document.getElementById(list) : null;

      if (datalistEl?.tagName === 'DATALIST') {
         this.#addCustomMarkers(element, datalistEl);
      }
   }

   #addCustomMarkers(element, datalistEl) {
      const markers = document.createElement('div');
      markers.className = `${RANGE_CLASSNAME}__markers`;
      const min = Number(element.min || 0);
      const max = Number(element.max || 100);
      const range = max - min;
      const markerPositions = new Set();

      Array.from(datalistEl.options).forEach((option) => {
         const value = Number(option.value);

         if (
            !Number.isFinite(value) ||
            range <= 0 ||
            value < min ||
            value > max
         ) {
            return;
         }

         const position = ((value - min) / range) * 100;
         const positionKey = position.toFixed(4);

         if (markerPositions.has(positionKey)) {
            return;
         }

         const marker = document.createElement('span');
         markerPositions.add(positionKey);
         marker.dataset.value = String(value);
         marker.style.setProperty('left', `${position}%`);
         markers.appendChild(marker);
      });

      if (markers.childElementCount > 0) {
         element.parentNode.insertBefore(markers, element.nextSibling);
      }
   }

   #updateRangeProgress(element) {
      const min = Number(element.min || 0);
      const max = Number(element.max || 100);
      const value = Number(element.value);
      const progress = max > min ? ((value - min) / (max - min)) * 100 : 0;

      element.style.setProperty(CSS_VAR_VALUE, value);
      element.style.setProperty(CSS_VAR_PROGRESS, `${progress}%`);
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
