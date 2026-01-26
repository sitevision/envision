/**
 * Popover component TypeScript definitions
 * Documentation: https://envisionui.io/components/popover
 */

declare namespace Envision {
  interface PopoverConfig {
    /** Close popover on click outside. Default: false */
    clickOutside?: boolean;
    /** Positioning constraints (legacy, not documented) */
    constraints?: any[];
    /** Container element for the popover. Default: 'body' */
    container?: string | HTMLElement;
    /** Popover content. Default: '' */
    content?: string | HTMLElement;
    /** Milliseconds for delaying the popover closing. Default: 0 */
    delay?: number;
    /** Treat option content as text or HTML. If popover content is HTML, set to false. Default: true */
    escapeContent?: boolean;
    /** Preferred initial placement. Default: 'top' */
    placement?: 'top' | 'right' | 'bottom' | 'left';
    /** Custom template function for popover HTML */
    template?: (containerModifier: string, contentClassName: string, containerRole: string) => string;
    /** Popover title. Default: '' */
    title?: string;
    /** Single event or multiple space separated events for opening the popover. Default: 'click' */
    trigger?: string;
    /** Popover styling. Allowed values: 'menu', 'tooltip', null. Default: null */
    type?: 'menu' | 'tooltip' | null;
  }

  interface PopoverInstance {
    /** The trigger element */
    readonly el: HTMLElement;
    /** The configuration settings for this instance */
    readonly config: Required<PopoverConfig>;
    /** Whether the popover is currently showing */
    readonly isShowing?: boolean;

    /** Show the popover */
    show(): void;
    /** Hide the popover */
    hide(): void;
    /** Update configuration options */
    updateConfig(config: Partial<PopoverConfig>): void;
    /** Re-render the popover */
    render(): void;
    /** Destroy the popover instance and remove event listeners */
    destroy(): void;
  }
}
