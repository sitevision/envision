export namespace CLASSNAME {
    let BASE: string;
    let ANIMATING: string;
    let ITEM: string;
    let ITEMS: string;
    let LIGHTBOX: string;
    let ANIMATION: string;
    let BUTTON_ICON_BEFORE: string;
    let BUTTON_ICON_AFTER: string;
}
export namespace AUTOPLAY_STATE {
    let STOP: string;
    let PAUSE: string;
    let PLAY: string;
}
export namespace ICON {
    let PLAY_1: string;
    export { PLAY_1 as PLAY };
    let PAUSE_1: string;
    export { PAUSE_1 as PAUSE };
    export let PREV: string;
    export let NEXT: string;
    export let CLOSE: string;
    export let ZOOM: string;
    export let DOWNLOAD: string;
}
export namespace BUTTON_PLACEMENT {
    let TOP: string;
    let BOTTOM: string;
    let OVERLAY_TOP: string;
    let OVERLAY_BOTTOM: string;
}
export namespace SLIDESHOW_TYPE {
    let IMAGES: string;
    let HTML: string;
}
export function isOverlayPlacement(placement: any): boolean;
export function getButtonIcon(iconName: any): string;
export function getButtonElement(options: any): Element;
export namespace TEMPLATE {
    let LIGHTBOX_1: string;
    export { LIGHTBOX_1 as LIGHTBOX };
    export let SPINNER: string;
}
export namespace SLIDER_VIEWER_TEMPLATE {
    let images: string;
    let html: string;
}
export const SLIDER_ITEM_TEMPLATE: string;
export const SLIDER_CONTROLS_TEMPLATE: string;
