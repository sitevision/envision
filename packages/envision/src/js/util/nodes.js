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

const PREV_ATTR = 'data-env-prev-style';

export const resetStyle = function (node, prop) {
   // Restore style for an element set by setStyle
   const prevVal = node.getAttribute(`${PREV_ATTR}-${prop}-val`);
   if (prevVal) {
      node.style.setProperty(
         prop,
         prevVal,
         node.getAttribute(`${PREV_ATTR}-${prop}-prio`)
      );
   } else {
      node.style.removeProperty(prop);
   }
   node.removeAttribute(`${PREV_ATTR}-${prop}-val`);
   node.removeAttribute(`${PREV_ATTR}-${prop}-prio`);
};

export const setStyle = function (node, prop, val, prio) {
   // Will set property in style attribute for an element
   // and save any existing values in data attribute.
   // Use resetStyle to restore.
   if (node.style.getPropertyValue(prop)) {
      const propVal = node.style.getPropertyValue(prop);
      if (propVal) {
         node.setAttribute(`${PREV_ATTR}-${prop}-val`, propVal);
         node.setAttribute(
            `${PREV_ATTR}-${prop}-prio`,
            node.style.getPropertyPriority(prop)
         );
      }
   }
   node.style.setProperty(prop, val, prio);
};

export const lockScroll = function () {
   setStyle(document.body, 'overflow-x', '');
   setStyle(document.body, 'overflow-y', '');
   setStyle(document.body, 'overflow', 'hidden', 'important');
};

export const unlockScroll = function () {
   ['overflow', 'overflow-x', 'overflow-y'].forEach((p) => {
      resetStyle(document.body, p);
   });
};

export const hide = function (elements) {
   getNodes(elements).forEach((node) => {
      setStyle(node, 'display', 'none', 'important');
   });
};

export const unhide = function (elements) {
   getNodes(elements).forEach((node) => {
      resetStyle(node, 'display');
   });
};

export const uniqueId = (() => {
   let i = 0;
   const PREFIX = 'env-';
   const getId = () => {
      i += 1;
      return PREFIX + i;
   };
   return (elements) => {
      getNodes(elements).forEach((node) => {
         if (!node.id) {
            let id = getId();
            while (document.getElementById(id)) {
               id = getId();
            }
            node.id = id;
         }
      });
   };
})();
