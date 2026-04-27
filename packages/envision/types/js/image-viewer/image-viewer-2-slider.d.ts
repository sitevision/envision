export default class Imageviewer2Slider {
    constructor(element: any, settings: any, lightbox: any, [EmblaCarousel, Autoplay, AutoHeight, Fade]: [any, any, any, any]);
    pause: () => void;
    play: () => void;
    prev: () => any;
    next: () => any;
    goTo: (index: any, instant: any) => void;
    getPos: () => any;
    setupSlider(): void;
    getSliderButtonClassNames(): string;
    setupSliderControls(): void;
    setSliderAriaLive(): void;
    setPlayButton(): void;
    bindEvents(prevBtn: any, nextBtn: any, zoomBtn: any): void;
    #private;
}
