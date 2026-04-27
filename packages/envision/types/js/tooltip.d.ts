declare function _default(elements?: string | HTMLElement | NodeList, settings?: TooltipConfig): Promise<TooltipInstance[] | undefined>;
export default _default;
export type TooltipConfig = {
    /**
     * - Preferred initial placement. Default: 'top'. Possible values: 'top', 'right', 'bottom', 'left', 'auto'. Possible value modifiers: '{value}-start', '{value}-end'
     */
    placement?: string;
    /**
     * - Milliseconds for delaying the tooltip opening and closing. Default: 200
     */
    delay?: number;
    /**
     * - Advanced positioning modifiers (Popper.js configuration)
     */
    modifiers?: any[];
};
export type TooltipInstance = {
    /**
     * - The tooltip container element
     */
    container: HTMLElement;
    /**
     * - The trigger element (child without role="tooltip")
     */
    el: HTMLElement;
    /**
     * - The tooltip element (child with role="tooltip")
     */
    tooltip: HTMLElement;
    /**
     * - The configuration settings for this instance
     */
    config: Required<TooltipConfig>;
    /**
     * - Whether the tooltip is currently showing
     */
    isShowing?: boolean;
    /**
     * - Show the tooltip
     */
    show: () => void;
    /**
     * - Hide the tooltip
     */
    hide: () => void;
    /**
     * - Destroy the tooltip instance and remove event listeners
     */
    destroy: () => void;
};
