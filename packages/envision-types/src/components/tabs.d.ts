/**
 * Tabs component TypeScript definitions
 * Documentation: https://envisionui.io/components/tab
 */

declare namespace Envision {
  interface TabsConfig {
    /** Index of the initially active tab. Default: 0 */
    active?: number;
  }

  interface TabActivatedEventDetail {
    /** The activated tab element */
    tab: HTMLElement;
    /** The associated panel element */
    panel: HTMLElement | null;
  }

  interface TabsInstance {
    /** The tabs container element */
    readonly el: HTMLElement;
    /** Array of tab elements */
    readonly tabs: HTMLElement[];
    /** Map of panel elements keyed by tab ID */
    readonly panels: Record<string, HTMLElement | null>;
    /** The currently active tab element */
    readonly activeTab?: HTMLElement;
    /** The configuration settings for this instance */
    readonly config: Required<TabsConfig>;

    /**
     * Activate a tab by index
     * @param index - Zero-based index of the tab to activate
     */
    activate(index: number): void;

    /**
     * Destroy the tabs instance and remove event listeners
     */
    destroy(): void;
  }
}
