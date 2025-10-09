export const uniqueId = (() => {
   let i = 0;
   const PREFIX = 'env-';
   const getId = () => {
      i += 1;
      return PREFIX + i;
   };
   return (node) => {
      if (!node.id) {
         let id = getId();
         while (document.getElementById(id)) {
            id = getId();
         }
         node.id = id;
      }
   };
})();
