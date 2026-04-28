// https://www.embla-carousel.com/

let _emblaCarouselCore;
let _emblaPluginAutoPlay;
let _emblaPluginAutoHeight;
let _emblaPluginFade;

export const getEmblaCarousel = async (flags = {}) => {
   if (!_emblaCarouselCore) {
      const { default: EmblaCarousel } = await import(
         /* webpackChunkName: "env-carousel" */ 'embla-carousel'
      );
      _emblaCarouselCore = EmblaCarousel;
   }

   if (flags.autoPlay && !_emblaPluginAutoPlay) {
      const { default: Autoplay } = await import(
         /* webpackChunkName: "env-carousel-autoplay" */ 'embla-carousel-autoplay'
      );
      _emblaPluginAutoPlay = Autoplay;
   }

   if (flags.autoHeight && !_emblaPluginAutoHeight) {
      const { default: AutoHeight } = await import(
         /* webpackChunkName: "env-carousel-autoheight" */ 'embla-carousel-auto-height'
      );
      _emblaPluginAutoHeight = AutoHeight;
   }

   if (flags.fade && !_emblaPluginFade) {
      const { default: Fade } = await import(
         /* webpackChunkName: "env-carousel-fade" */ 'embla-carousel-fade'
      );
      _emblaPluginFade = Fade;
   }

   return [
      _emblaCarouselCore,
      flags.autoPlay ? _emblaPluginAutoPlay : null,
      flags.autoHeight ? _emblaPluginAutoHeight : null,
      flags.fade ? _emblaPluginFade : null,
   ];
};
