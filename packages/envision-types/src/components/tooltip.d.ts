/**
 * Tooltip component TypeScript definitions
 * Documentation: https://envisionui.io/components/tooltip
 */

declare namespace Envision {
  interface TooltipConfig {
    /**
     * Preferred initial placement. Default: 'top'
     * Possible values: 'top', 'right', 'bottom', 'left', 'auto'
     * Possible value modifiers: '{value}-start', '{value}-end'
     */
    placement?: string;
    /** Milliseconds for delaying the tooltip opening and closing. Default: 200 */
    delay?: number;
    /** Advanced positioning modifiers (Popper.js configuration) */
    modifiers?: any[];
  }

  interface TooltipInstance {
    /** The tooltip container element */
    readonly container: HTMLElement;
    /** The trigger element (child without role="tooltip") */
    readonly el: HTMLElement;
    /** The tooltip element (child with role="tooltip") */
    readonly tooltip: HTMLElement;
    /** The configuration settings for this instance */
    readonly config: Required<TooltipConfig>;
    /** Whether the tooltip is currently showing */
    readonly isShowing?: boolean;

    /** Show the tooltip */
    show(): void;
    /** Hide the tooltip */
    hide(): void;
    /** Destroy the tooltip instance and remove event listeners */
    destroy(): void;
  }
}
