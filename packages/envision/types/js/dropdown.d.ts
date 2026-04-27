export default Dropdown;
declare class Dropdown {
    constructor(container: any, menu: any, button: any);
    button: any;
    container: any;
    placeholder: HTMLSpanElement;
    menu: any;
    menuitems: any[];
    openInBody: boolean;
    handleButtonClick(): void;
    handleButtonKeyDown(e: any): void;
    handleMenuKeyDown(e: any): void;
    handleOutsideClick(e: any): void;
    handleOutsideKeyUp(e: any): void;
    show(focusIndex: any): void;
    _popper: any;
    hide(): void;
    _bindEventsOnInit(): void;
    _bindMenuEvents(): void;
    _unbindMenuEvents(): void;
}
