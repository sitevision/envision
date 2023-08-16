// https://dev.to/bmsvieira/vanilla-js-slidedown-up-4dkn

export const slideUp = (target, options) => {
   options = Object.assign(
      {
         duration: 300,
      },
      options
   );
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = options.duration + 'ms';
   const computed = getComputedStyle(target);
   if (computed.boxSizing === 'border-box') {
      target.style.height = target.offsetHeight + 'px';
   } else {
      const pt = parseFloat(computed.paddingTop);
      const pb = parseFloat(computed.paddingBottom);
      const bt = parseFloat(computed.borderTopWidth);
      const bb = parseFloat(computed.borderBottomWidth);
      target.style.height = target.offsetHeight - pt - pb - bt - bb + 'px';
   }
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      if (options.complete && options.complete instanceof Function) {
         options.complete.call();
      }
   }, options.duration);
};

export const slideDown = (target, options) => {
   options = Object.assign(
      {
         duration: 300,
      },
      options
   );
   target.style.removeProperty('display');
   let display = window.getComputedStyle(target).display;
   if (display === 'none') {
      display = 'block';
   }
   target.style.display = display;
   let height = target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   target.offsetHeight;
   target.style.boxSizing = 'border-box';
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = options.duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-top');
   target.style.removeProperty('padding-bottom');
   target.style.removeProperty('margin-top');
   target.style.removeProperty('margin-bottom');
   window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      if (options.complete && options.complete instanceof Function) {
         options.complete.call();
      }
   }, options.duration);
};
