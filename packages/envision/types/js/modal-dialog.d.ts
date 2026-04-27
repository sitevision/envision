declare function _default(elements: HTMLDialogElement | string, action?: DialogConfig | string): Promise<DialogInstance[] | undefined>;
export default _default;
export type DialogConfig = {
    /**
     * - A selector or DOM Node to assign event listener for opening the dialog. Default: null
     */
    opener?: string | HTMLElement | null;
    /**
     * - Click on backdrop (outside dialog) should close the dialog (not available for alertdialog). Default: true
     */
    backdropClick?: boolean;
    /**
     * - Move dialog in DOM as immediate child of body. Allowed values: 'body'. Default: null
     */
    placement?: "body" | null;
};
export type DialogInstance = {
    /**
     * - The dialog element. Provides access to native dialog properties like 'open' and 'returnValue'
     */
    el: HTMLDialogElement;
    /**
     * - The configuration options for this instance
     */
    options: DialogConfig;
    /**
     * - Show the dialog using HTMLDialogElement.showModal()
     */
    show: (event?: Event) => void;
    /**
     * - Close the dialog
     */
    close: () => void;
};
