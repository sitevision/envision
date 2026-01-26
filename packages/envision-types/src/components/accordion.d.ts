/**
 * Accordion component TypeScript definitions
 * Documentation: https://envisionui.io/components/accordion
 */

declare namespace Envision {
  interface AccordionInstance {
    /** The accordion content element */
    readonly el: HTMLElement;
    /** The parent container element if specified via data-parent */
    readonly parentEl: HTMLElement | null;
    /** The toggler button/link element */
    readonly togglerEl: HTMLElement | null;
    /** Animation speed in milliseconds */
    readonly speed: number;

    /** Toggles the accordion between expanded and collapsed states */
    toggle(): void;
    /** Expands the accordion content */
    show(): void;
    /** Collapses the accordion content */
    hide(): void;
  }
}
