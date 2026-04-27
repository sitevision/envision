declare function _default(elements: string | HTMLElement | NodeList, settings?: RangeSliderConfig): Promise<RangeSliderInstance[] | undefined>;
export default _default;
export type RangeSliderEventDetail = {
    /**
     * - Array of current slider values [min, max]
     */
    values: number[];
};
export type RangeSliderConfig = {
    /**
     * - The minimum value of the slider. Default: 0
     */
    min?: number;
    /**
     * - The maximum value of the slider. Default: 100
     */
    max?: number;
    /**
     * - The size of every step between min and max. Default: 1
     */
    step?: number;
    /**
     * - Values to initialize the slider with. Default: [0, 0]
     */
    values?: number[];
    /**
     * - If values should be visible below the handles. Default: true
     */
    visibleValues?: boolean;
    /**
     * -
     */
    slide?: (event: Event, data: RangeSliderEventDetail) => void;
};
export type RangeSliderInstance = {
    /**
     * - The slider container element
     */
    el: HTMLElement;
    /**
     * - The configuration settings for this instance
     */
    config: Required<RangeSliderConfig>;
    /**
     * - Array of handle elements
     */
    handlesEl: HTMLElement[];
    /**
     * - The range indicator element
     */
    rangeEl: HTMLElement;
    /**
     * - Array of value display elements (if visibleValues is true)
     */
    valueHoldersEl?: HTMLElement[];
    /**
     * - Set the values for the range
     */
    values: (values: number[]) => void;
};
