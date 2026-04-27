export default class Imageviewer2Lightbox {
    constructor(element: any, settings: any);
    getImageCount(): number;
    bindThis(): void;
    loadImage(): void;
    createLightbox(): void;
    fadeIn(): void;
    showLightbox(): void;
    show(i: any): void;
    close(): void;
    getCurrentIndex(): number;
    goTo(i: any): void;
    setVisibleButtons(): void;
    bindEvents(): void;
    #private;
}
