const cssTree = require('css-tree');

module.exports = function (content) {
   const options = this.getOptions();
   const tree = cssTree.parse(content);

   const emitFile = this.emitFile;

   const cssVars = {};

   cssTree.walk(tree, (node) => {
      if (node.type === 'Declaration' && node.property.startsWith('--env-')) {
         if (!Object.prototype.hasOwnProperty.call(cssVars, node.property)) {
            cssVars[node.property] = node.value.value.trim();
         }
      }
   });
   emitFile(options.filename, JSON.stringify(cssVars, null, 2));

   return content;
};
