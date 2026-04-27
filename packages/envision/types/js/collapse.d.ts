declare function _default(elements: string | HTMLElement | NodeList, settings: any): Promise<CollapseInstance[] | undefined>;
export default _default;
export type CollapseInstance = {
    /**
     * - The collapse content element
     */
    el: HTMLElement;
    /**
     * - The toggler button/link element
     */
    togglerEl: HTMLElement | null;
    /**
     * - Animation speed in milliseconds
     */
    speed: number;
    /**
     * - Toggles the collapse between expanded and collapsed states
     */
    toggle: () => void;
    /**
     * - Expands the collapse content
     */
    show: () => void;
    /**
     * - Collapses the content
     */
    hide: () => void;
};
