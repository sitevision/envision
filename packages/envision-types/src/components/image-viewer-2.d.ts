/**
 * Image Viewer 2 component TypeScript definitions
 * Documentation: https://envisionui.io/components/image-viewer-2
 */

declare namespace Envision {
  interface ImageViewer2ButtonConfig {
    /** Type of button styling. Allowed values: null, 'primary', 'secondary', 'danger', 'success' */
    type?: 'primary' | 'secondary' | 'danger' | 'success' | null;
    /** Use ghost button styling */
    ghost?: boolean;
    /** Button size. Allowed values: null, 'small', 'large' */
    size?: 'small' | 'large' | null;
  }

  interface ImageViewer2SlidesConfig {
    /** Auto rotation interval in milliseconds. 0 = auto rotation not available. Default: 0 */
    auto?: number;
    /** Slide speed in milliseconds. Default: 300 */
    speed?: number;
    /** Slides listen to mouse drag events in addition to touch events. Default: true */
    draggable?: boolean;
    /** If auto > 0, this will start auto rotation automatically. Default: false */
    playing?: boolean;
    /** Control buttons and caption should overlay the slides. Default: true */
    overlay?: boolean;
    /** Control button appearance */
    buttons?: ImageViewer2ButtonConfig;
  }

  interface ImageViewer2Config {
    /** Initialize a slideshow with default or custom options. Default: false */
    slides?: boolean | ImageViewer2SlidesConfig;
    /** Lightbox button options */
    buttons?: {
      /** Show/hide download button. Default: true */
      download?: boolean;
      /** Visible text in close/download buttons. Default: false */
      showText?: boolean;
    };
    /** Translation of buttons aria-label and aria-roledescription */
    i18n?: 'sv' | 'en' | 'no' | {
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
  }

  interface ImageViewer2SliderInstance {
    /** Pause slider automatic rotation */
    pause(): void;
    /** Start slider automatic rotation if available */
    play(): void;
    /** Show next image */
    next(): void;
    /** Show previous image */
    prev(): void;
    /** Set slider to image at position index. Use speed to control how fast image is shown */
    goTo(index: number, speed?: number): void;
    /** Get index for current image */
    getPos(): number;
  }

  interface ImageViewer2LightboxInstance {
    /** Show lightbox starting at index. Defaults to index 0 */
    show(index?: number): void;
    /** Close the lightbox */
    close(): void;
  }

  interface ImageViewer2Instance {
    /** The container element */
    readonly el: HTMLElement;
    /** The configuration settings for this instance */
    readonly config: ImageViewer2Config;
    /** Lightbox instance (always available) */
    readonly lightbox: ImageViewer2LightboxInstance;
    /** Slider instance (only available if slides config is set) */
    readonly slider?: ImageViewer2SliderInstance;
  }
}
