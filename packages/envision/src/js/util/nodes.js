export const getNodes = function (elements) {
   const nodes = [];
   if (typeof elements === 'string') {
      let domNodes = document.querySelectorAll(elements);
      if (domNodes && domNodes.length > 0) {
         // NodeList
         for (let i = 0; i < domNodes.length; i++) {
            nodes.push(domNodes[i]);
         }
      }
   } else if (typeof elements === 'object') {
      if (elements.nodeType === 1) {
         // Single element
         nodes.push(elements);
      } else if (elements.length > 0) {
         // NodeList
         for (let i = 0; i < elements.length; i++) {
            nodes.push(elements[i]);
         }
      }
   }
   return nodes;
};
