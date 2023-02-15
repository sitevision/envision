let Popper;
export const getPopper = async () => {
   if (Popper) {
      return Popper;
   }
   const { createPopper } = await import(
      /* webpackChunkName: "popper" */ '@popperjs/core'
   );
   Popper = createPopper;
   return Popper;
};
