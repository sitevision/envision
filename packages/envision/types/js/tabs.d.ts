declare function _default(elements: string | HTMLElement | NodeList, settings?: TabsConfig, argument: any): Promise<TabsInstance[] | undefined>;
export default _default;
export type TabsConfig = {
    /**
     * - Index of the initially active tab. Default: 0
     */
    active?: number;
};
export type TabActivatedEventDetail = {
    /**
     * - The activated tab element
     */
    tab: HTMLElement;
    /**
     * - The associated panel element
     */
    panel: HTMLElement | null;
};
export type TabsInstance = {
    /**
     * - The tabs container element
     */
    el: HTMLElement;
    /**
     * - Array of tab elements
     */
    tabs: HTMLElement[];
    /**
     * - Map of panel elements keyed by tab ID
     */
    panels: Record<string, HTMLElement | null>;
    /**
     * - The currently active tab element
     */
    activeTab?: HTMLElement;
    /**
     * - The configuration settings for this instance
     */
    config: Required<TabsConfig>;
    /**
     * - Activate a tab by index
     */
    activate: (index: number) => void;
    /**
     * - Destroy the tabs instance and remove event listeners
     */
    destroy: () => void;
};
