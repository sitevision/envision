const cssTree = require('css-tree');

module.exports = function (content) {
   const tree = cssTree.parse(content);

   const emitFile = this.emitFile;

   const cssVars = {};
   cssTree.walk(tree, (node) => {
      if (node.type === 'Declaration' && node.property.startsWith('--')) {
         cssVars[node.property] = node.value.value;
      }
   });
   emitFile('css-vars.json', JSON.stringify(cssVars, null, 2));

   return content;
};
