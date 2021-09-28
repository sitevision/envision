export const getNodes = function (elements, root) {
   const nodes = [];
   root = root || document;
   if (typeof elements === 'string') {
      let domNodes = root.querySelectorAll(elements);
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
   // Returns an array of 0-n nodes
   return nodes;
};

export const getNode = function (elements, root) {
   // Returns a node or undefined
   return getNodes(elements, root)[0];
};

export const hide = function (elements) {
   getNodes(elements).forEach((node) => {
      node.style.setProperty('display', 'none', 'important');
   });
};

export const unhide = function (elements) {
   getNodes(elements).forEach((node) => {
      node.style.removeProperty('display');
   });
};
