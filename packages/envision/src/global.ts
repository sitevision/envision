/**
 * Envision UI TypeScript definitions
 * Documentation: https://envisionui.io/
 *
 * Provides globally available TypeScript definitions
 * for the Envision UI framework in Sitevision CMS.
 *
 * Configuration (tsconfig.json):
 *   {
 *     "compilerOptions": {
 *       "types": ["@sitevision/envision"]
 *     }
 *   }
 *
 * Usage:
 *   No imports needed! The types are globally available.
 *
 *   const select = await envision.select('.my-select', {
 *     maxItems: 1,
 *     placeholder: 'Select an option'
 *   });
 */

import type { AccordionInstance } from './js/accordion';
import type { CollapseInstance } from './js/collapse';
import type { DialogConfig, DialogInstance } from './js/modal-dialog';
import type { ImageViewer2Config, ImageViewer2Instance } from './js/image-viewer-2';
import type { PopoverConfig, PopoverInstance } from './js/popover';
import type { RangeSliderConfig, RangeSliderInstance } from './js/range-slider';
import type { SelectConfig, SelectInstance } from './js/select';
import type { TabsConfig, TabsInstance } from './js/tabs';
import type { TooltipConfig, TooltipInstance } from './js/tooltip';

export type {
   AccordionInstance,
   CollapseInstance,
   DialogConfig,
   DialogInstance,
   ImageViewer2Config,
   ImageViewer2Instance,
   PopoverConfig,
   PopoverInstance,
   RangeSliderConfig,
   RangeSliderInstance,
   SelectConfig,
   SelectInstance,
   TabsConfig,
   TabsInstance,
   TooltipConfig,
   TooltipInstance,
};

declare global {
   const envision: {
      /**
       * Initialize an Accordion component
       * @param selector - CSS selector, DOM node, or node list
       */
      accordion(
         selector: string | HTMLElement | NodeList
      ): Promise<AccordionInstance[] | undefined>;

      /**
       * Initialize a Collapse component
       * @param selector - CSS selector, DOM node, or node list
       */
      collapse(
         selector: string | HTMLElement | NodeList
      ): Promise<CollapseInstance[] | undefined>;

      /**
       * Initialize a Dialog component
       * @param element - DOM element (HTMLDialogElement)
       * @param config - Configuration options
       */
      dialog(
         element: HTMLDialogElement,
         config?: DialogConfig
      ): Promise<DialogInstance[] | undefined>;

      /**
       * Initialize an Image Viewer 2 component
       * @param selector - CSS selector, DOM node, or node list
       * @param config - Configuration options
       */
      imageViewer2(
         selector: string | HTMLElement | NodeList,
         config?: ImageViewer2Config
      ): Promise<ImageViewer2Instance[] | undefined>;

      /**
       * Initialize a Popover component
       * @param selector - CSS selector, DOM node, or node list
       * @param config - Configuration options
       */
      popover(
         selector: string | HTMLElement | NodeList,
         config?: PopoverConfig
      ): Promise<PopoverInstance[] | undefined>;

      /**
       * Initialize a Range Slider component
       * @param selector - CSS selector, DOM node, or node list
       * @param config - Configuration options
       */
      rangeSlider(
         selector: string | HTMLElement | NodeList,
         config?: RangeSliderConfig
      ): Promise<RangeSliderInstance[] | undefined>;

      /**
       * Initialize a Tag Select component
       * @param selector - CSS selector, DOM node, or node list
       * @param config - Configuration options
       */
      select(
         selector: string | HTMLElement | NodeList,
         config?: SelectConfig
      ): Promise<SelectInstance[] | undefined>;

      /**
       * Initialize a Tabs component
       * @param selector - CSS selector, DOM node, or node list
       * @param config - Configuration options
       */
      tabs(
         selector: string | HTMLElement | NodeList,
         config?: TabsConfig
      ): Promise<TabsInstance[] | undefined>;

      /**
       * Initialize a Tooltip component
       * @param selector - CSS selector, DOM node, or node list. Leave empty to initialize all new elements with class 'env-tooltip'
       * @param config - Configuration options
       */
      tooltip(
         selector?: string | HTMLElement | NodeList,
         config?: TooltipConfig
      ): Promise<TooltipInstance[] | undefined>;
   };
}
