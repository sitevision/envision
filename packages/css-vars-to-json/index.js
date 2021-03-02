const cssTree = require('css-tree');
const loaderUtils = require('loader-utils');

module.exports = function (content) {
   const options = loaderUtils.getOptions(this);
   const tree = cssTree.parse(content);

   const emitFile = this.emitFile;

   const cssVars = {};
   cssTree.walk(tree, (node) => {
      if (node.type === 'Declaration' && node.property.startsWith('--')) {
         cssVars[node.property] = node.value.value.trim();
      }
   });
   emitFile(options.filename, JSON.stringify(cssVars, null, 2));

   return content;
};
