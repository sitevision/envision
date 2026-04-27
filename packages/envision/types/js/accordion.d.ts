declare function _default(elements: string | HTMLElement | NodeList, settings: any): Promise<AccordionInstance[] | undefined>;
export default _default;
export type AccordionInstance = {
    /**
     * - The accordion content element
     */
    el: HTMLElement;
    /**
     * - The parent container element if specified via data-parent
     */
    parentEl: HTMLElement | null;
    /**
     * - The toggler button/link element
     */
    togglerEl: HTMLElement | null;
    /**
     * - Animation speed in milliseconds
     */
    speed: number;
    /**
     * - Toggles the accordion between expanded and collapsed states
     */
    toggle: () => void;
    /**
     * - Expands the accordion content
     */
    show: () => void;
    /**
     * - Collapses the accordion content
     */
    hide: () => void;
};
