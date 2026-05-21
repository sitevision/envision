// https://dev.to/bmsvieira/vanilla-js-slidedown-up-4dkn

const SPACING_PROPS = [
   'padding-top',
   'padding-bottom',
   'margin-top',
   'margin-bottom',
];

const TOGGLE_PROPS = [
   'height',
   'overflow',
   'transition-duration',
   'transition-property',
].concat(SPACING_PROPS);

const removeToggleProps = (target, props) => {
   props = props || TOGGLE_PROPS;
   props.forEach((prop) => {
      target.style.removeProperty(prop);
   });
};

const prepareSpacingProps = (target) => {
   target.style.setProperty('overflow', 'hidden');
   SPACING_PROPS.concat('height').forEach((prop) => {
      target.style.setProperty(prop, 0);
   });
};

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
   prepareSpacingProps(target);
   return window.setTimeout(() => {
      target.style.display = 'none';
      removeToggleProps(target);
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
   prepareSpacingProps(target);
   target.offsetHeight;
   target.style.boxSizing = 'border-box';
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = options.duration + 'ms';
   target.style.height = height + 'px';
   removeToggleProps(target, SPACING_PROPS);
   return window.setTimeout(() => {
      removeToggleProps(target);
      if (options.complete && options.complete instanceof Function) {
         options.complete.call();
      }
   }, options.duration);
};

export const cancelSlideToggle = (target, timer) => {
   if (timer) {
      window.clearTimeout(timer);
   }

   removeToggleProps(target);

   return null;
};
