export function svRemarkClassNames() {
   // Loosely based on gatsby-remark-classes
   // https://github.com/chrisg86/gatsby-remark-classes/tree/main

   const CLASS_MAP = {
      heading: 'doc-heading', // Handled separately to add depth
      paragraph: 'doc-p',
      blockquote: 'doc-blockquote',
      emphasis: 'doc-em',
      strong: 'doc-strong',
      inlineCode: 'doc-code',
      link: 'doc-link',
      list: 'doc-list',
      listItem: 'doc-list__item',
      image: 'doc-image',
      table: 'doc-table',
   };

   const applyClassesToNode = (node, classes) => {
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.className = node.data.hProperties.className || [];
      node.data.hProperties.className.push(classes);
      return node;
   };

   const applyClasses = (node) => {
      if (node.children && node.children.length) {
         node.children.forEach(applyClasses);
      }
      if (node.type === 'heading') {
         applyClassesToNode(node, `${CLASS_MAP.heading}-${node.depth}`);
      } else {
         if (Object.hasOwnProperty.call(CLASS_MAP, node.type)) {
            applyClassesToNode(node, CLASS_MAP[node.type]);
         }
      }
      return node;
   };

   return function (tree) {
      tree.children.forEach(applyClasses);
   };
}
