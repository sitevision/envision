declare function _default(elements: string | HTMLElement | NodeList, options?: ImageViewer2Config): Promise<ImageViewer2Instance[] | undefined>;
export default _default;
export type ImageViewer2ButtonConfig = {
    /**
     * - Type of button styling
     */
    type?: "primary" | "secondary" | "danger" | "success" | null;
    /**
     * - Use ghost button styling
     */
    ghost?: boolean;
    /**
     * - Button size
     */
    size?: "small" | "large" | null;
};
export type ImageViewer2SlidesConfig = {
    /**
     * - Auto rotation interval in milliseconds. 0 = auto rotation not available. Default: 0
     */
    auto?: number;
    /**
     * - Slide speed in milliseconds. Default: 300
     */
    speed?: number;
    /**
     * - Slides listen to mouse drag events in addition to touch events. Default: true
     */
    draggable?: boolean;
    /**
     * - If auto > 0, this will start auto rotation automatically. Default: false
     */
    playing?: boolean;
    /**
     * - Control buttons and caption should overlay the slides. Default: true
     */
    overlay?: boolean;
    /**
     * - Control button appearance
     */
    buttons?: ImageViewer2ButtonConfig;
};
export type ImageViewer2I18n = {
    roledescription?: string;
    prev?: string;
    next?: string;
    pause?: string;
    play?: string;
    slideshow?: string;
    zoom?: string;
    largeImage?: string;
    close?: string;
    download?: string;
    image?: string;
    of?: string;
};
export type ImageViewer2Config = {
    /**
     * - Initialize a slideshow with default or custom options. Default: false
     */
    slides?: boolean | ImageViewer2SlidesConfig;
    /**
     * - Lightbox button options
     */
    buttons?: {
        download?: boolean;
        showText?: boolean;
    };
    /**
     * - Translation of buttons aria-label and aria-roledescription
     */
    i18n?: "sv" | "en" | "no" | ImageViewer2I18n;
};
export type ImageViewer2SliderInstance = {
    /**
     * - Pause slider automatic rotation
     */
    pause: () => void;
    /**
     * - Start slider automatic rotation if available
     */
    play: () => void;
    /**
     * - Show next image
     */
    next: () => void;
    /**
     * - Show previous image
     */
    prev: () => void;
    /**
     * - Set slider to image at position index
     */
    goTo: (index: number, speed?: number) => void;
    /**
     * - Get index for current image
     */
    getPos: () => number;
};
export type ImageViewer2LightboxInstance = {
    /**
     * - Show lightbox starting at index. Defaults to index 0
     */
    show: (index?: number) => void;
    /**
     * - Close the lightbox
     */
    close: () => void;
};
export type ImageViewer2Instance = {
    /**
     * - The container element
     */
    el: HTMLElement;
    /**
     * - The configuration settings for this instance
     */
    config: ImageViewer2Config;
    /**
     * - Lightbox instance (always available)
     */
    lightbox: ImageViewer2LightboxInstance;
    /**
     * - Slider instance (only available if slides config is set)
     */
    slider?: ImageViewer2SliderInstance;
};
