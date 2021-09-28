let Popper;
export const getPopper = async () => {
   if (Popper) {
      return Popper;
   }
   const { default: DynamicPopper } = await import(
      /* webpackChunkName: "popper" */ 'popper.js'
   );
   Popper = DynamicPopper;
   return Popper;
};
