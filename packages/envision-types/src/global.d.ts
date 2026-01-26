/**
 * Global Envision object declaration
 * This declares the globally available envision object in the Sitevision CMS
 */

declare namespace Envision {
  interface EnvisionGlobal {
    /**
     * Initialize an Accordion component
     * @param selector - CSS selector, DOM node, or node list
     * @returns Promise that resolves to array of AccordionInstance
     */
    accordion(
      selector: string | HTMLElement | NodeList
    ): Promise<AccordionInstance[]>;

    /**
     * Initialize a Collapse component
     * @param selector - CSS selector, DOM node, or node list
     * @returns Promise that resolves to array of CollapseInstance
     */
    collapse(
      selector: string | HTMLElement | NodeList
    ): Promise<CollapseInstance[]>;

    /**
     * Initialize a Dialog component
     * @param element - DOM element (HTMLDialogElement)
     * @param config - Configuration options
     * @returns Promise that resolves to array of DialogInstance
     */
    dialog(
      element: HTMLElement | NodeList,
      config?: DialogConfig
    ): Promise<DialogInstance[]>;

    /**
     * Initialize an Image Viewer 2 component
     * @param selector - CSS selector, DOM node, or node list
     * @param config - Configuration options
     * @returns Promise that resolves to array of ImageViewer2Instance
     */
    imageViewer2(
      selector: string | HTMLElement | NodeList,
      config?: ImageViewer2Config
    ): Promise<ImageViewer2Instance[]>;

    /**
     * Initialize a Popover component
     * @param selector - CSS selector, DOM node, or node list
     * @param config - Configuration options
     * @returns Promise that resolves to array of PopoverInstance
     */
    popover(
      selector: string | HTMLElement | NodeList,
      config?: PopoverConfig
    ): Promise<PopoverInstance[]>;

    /**
     * Initialize a Range Slider component
     * @param selector - CSS selector, DOM node, or node list
     * @param config - Configuration options
     * @returns Promise that resolves to array of RangeSliderInstance
     */
    rangeSlider(
      selector: string | HTMLElement | NodeList,
      config?: RangeSliderConfig
    ): Promise<RangeSliderInstance[]>;

    /**
     * Initialize a Tag Select component
     * @param selector - CSS selector, DOM node, or node list
     * @param config - Configuration options
     * @returns Promise that resolves to array of SelectInstance
     */
    select(
      selector: string | HTMLElement | NodeList,
      config?: SelectConfig
    ): Promise<SelectInstance[]>;

    /**
     * Initialize a Tabs component
     * @param selector - CSS selector, DOM node, or node list
     * @param config - Configuration options
     * @returns Promise that resolves to array of TabsInstance
     */
    tabs(
      selector: string | HTMLElement | NodeList,
      config?: TabsConfig
    ): Promise<TabsInstance[]>;

    /**
     * Initialize a Tooltip component
     * @param selector - CSS selector, DOM node, or node list. Leave empty to initialize all new elements with class 'env-tooltip'
     * @param config - Configuration options
     * @returns Promise that resolves to array of TooltipInstance
     */
    tooltip(
      selector?: string | HTMLElement | NodeList,
      config?: TooltipConfig
    ): Promise<TooltipInstance[]>;
  }
}

declare const envision: Envision.EnvisionGlobal;
