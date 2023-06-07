// https://github.com/lyfeyaj/swipe

let _swipe;
export const getSwipe = async () => {
   if (_swipe) {
      return _swipe;
   }
   const { default: Swipe } = await import(
      /* webpackChunkName: "swipejs" */ 'swipejs'
   );
   _swipe = Swipe;
   return _swipe;
};
