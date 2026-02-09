/**
 * Dialog component TypeScript definitions
 * Documentation: https://envisionui.io/components/dialog
 */

declare namespace Envision {
  interface DialogConfig {
    /** A selector as a string or a DOM Node to assign event listener for opening the dialog. Default: null */
    opener?: string | HTMLElement | null;
    /** Click on backdrop (outside dialog) should close the dialog (not available for alertdialog). Default: true */
    backdropClick?: boolean;
    /** Dialog window should be moved in the DOM and open as an immediate child of body. Allowed values: 'body'. Default: null */
    placement?: 'body' | null;
  }

  interface DialogInstance {
    /**
     * The dialog element (HTMLDialogElement)
     * Provides access to native dialog properties like 'open' and 'returnValue'
     */
    readonly el: HTMLDialogElement;
    /** The configuration options for this instance */
    readonly options: DialogConfig;

    /**
     * Show the dialog
     * Uses HTMLDialogElement.showModal() to display the dialog in the top layer
     */
    show(event?: Event): void;

    /**
     * Close the dialog
     */
    close(): void;
  }
}
