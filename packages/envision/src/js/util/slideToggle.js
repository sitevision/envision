// https://dev.to/bmsvieira/vanilla-js-slidedown-up-4dkn

export const slideUp = (target, options) => {
   options = Object.assign(
      {
         duration: 300,
      },
      options
   );
   target.style.transitionProperty =
      'height, margin-block-start, margin-block-end, padding-block-start, padding-block-end';
   target.style.transitionDuration = options.duration + 'ms';
   const computed = getComputedStyle(target);
   const getComputedNumber = (logicalProp, fallbackProp) => {
      const logicalValue = parseFloat(computed.getPropertyValue(logicalProp));
      if (!Number.isNaN(logicalValue)) {
         return logicalValue;
      }
      const fallbackValue = parseFloat(computed[fallbackProp]);
      return Number.isNaN(fallbackValue) ? 0 : fallbackValue;
   };
   if (computed.boxSizing === 'border-box') {
      target.style.height = target.offsetHeight + 'px';
   } else {
      const pt = getComputedNumber('padding-block-start', 'paddingTop');
      const pb = getComputedNumber('padding-block-end', 'paddingBottom');
      const bt = getComputedNumber(
         'border-block-start-width',
         'borderTopWidth'
      );
      const bb = getComputedNumber(
         'border-block-end-width',
         'borderBottomWidth'
      );
      target.style.height = target.offsetHeight - pt - pb - bt - bb + 'px';
   }
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingBlockStart = 0;
   target.style.paddingBlockEnd = 0;
   target.style.marginBlockStart = 0;
   target.style.marginBlockEnd = 0;
   window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-block-start');
      target.style.removeProperty('padding-block-end');
      target.style.removeProperty('margin-block-start');
      target.style.removeProperty('margin-block-end');
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
   target.style.paddingBlockStart = 0;
   target.style.paddingBlockEnd = 0;
   target.style.marginBlockStart = 0;
   target.style.marginBlockEnd = 0;
   target.offsetHeight;
   target.style.boxSizing = 'border-box';
   target.style.transitionProperty =
      'height, margin-block-start, margin-block-end, padding-block-start, padding-block-end';
   target.style.transitionDuration = options.duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-block-start');
   target.style.removeProperty('padding-block-end');
   target.style.removeProperty('margin-block-start');
   target.style.removeProperty('margin-block-end');
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
