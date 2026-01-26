/**
 * Collapse component TypeScript definitions
 * Documentation: https://envisionui.io/components/collapse
 */

declare namespace Envision {
  interface CollapseInstance {
    /** The collapse content element */
    readonly el: HTMLElement;
    /** The toggler button/link element */
    readonly togglerEl: HTMLElement | null;
    /** Animation speed in milliseconds */
    readonly speed: number;

    /** Toggles the collapse between expanded and collapsed states */
    toggle(): void;
    /** Expands the collapse content */
    show(): void;
    /** Collapses the content */
    hide(): void;
  }
}
