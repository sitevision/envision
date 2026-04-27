export default class Dialog {
    constructor(element: any, options: any);
    options: any;
    el: any;
    _bindThis(): void;
    show(e: any): void;
    close(): void;
    _fadeIn(): void;
    _bindModalEvents(): void;
    _bindOpenEvent(): void;
    #private;
}
export function getDialogSettings(options: any): {};
