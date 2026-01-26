/**
 * Range Slider component TypeScript definitions
 * Documentation: https://envisionui.io/forms/range-slider
 */

declare namespace Envision {
  interface RangeSliderEventDetail {
    /** Array of current slider values [min, max] */
    values: number[];
  }

  interface RangeSliderConfig {
    /** The minimum value of the slider. Default: 0 */
    min?: number;
    /** The maximum value of the slider. Default: 100 */
    max?: number;
    /** The size of every step between min and max. Default: 1 */
    step?: number;
    /** Values to initialize the slider with. Default: [0, 0] */
    values?: number[];
    /** If values should be visible below the handles. Default: true */
    visibleValues?: boolean;
    /** @deprecated Use 'input' event listener instead */
    slide?: (event: Event, data: RangeSliderEventDetail) => void;
    /** @deprecated Use 'change' event listener instead */
    slidestop?: (event: Event, data: RangeSliderEventDetail) => void;
  }

  interface RangeSliderInstance {
    /** The slider container element */
    readonly el: HTMLElement;
    /** The configuration settings for this instance */
    readonly config: Required<RangeSliderConfig>;
    /** Array of handle elements */
    readonly handlesEl: HTMLElement[];
    /** The range indicator element */
    readonly rangeEl: HTMLElement;
    /** Array of value display elements (if visibleValues is true) */
    readonly valueHoldersEl?: HTMLElement[];

    /**
     * Set the values for the range
     * @param values - Array of values to set [min, max]
     */
    values(values: number[]): void;
  }
}
