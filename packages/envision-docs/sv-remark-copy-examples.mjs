export function svRemarkCopyExamples() {
   // Meta attributes on code blocks
   // ------------------------------
   // resizeable => make example resizeable in CSS
   // noexpand => code block always shown att full size (not expandable)
   // nocode => show example, hide code block
   // noexample => show code block, hide example
   //
   // Usage example in Markdown:
   // ```html resizeable noexpand
   //   <div>Example</div>
   // ```

   return function (tree) {
      const addAt = (i, value) => {
         tree.children.splice(i, 0, {
            type: 'html',
            value: value,
         });
      };

      for (let i = 0; i < tree.children.length; i++) {
         const node = tree.children[i];

         const meta = node.meta ? node.meta.split(' ') : [];

         if (node.type !== 'code') {
            continue;
         }

         let exampleElClassName = 'doc-code-example';
         let codeWrapperElClassName = 'doc-code-block';

         if (meta.includes('resizeable')) {
            exampleElClassName += ' doc-code-example--resizeable';
         }

         if (!meta.includes('noexpand')) {
            codeWrapperElClassName += ' doc-code-block--expandable';
         }

         if (meta.includes('nocode')) {
            // Replace code block with example HTML
            tree.children[i] = {
               type: 'html',
               value: `<div class="${exampleElClassName}">${node.value}</div>`,
            };
         } else if (meta.includes('noexample') || node.lang !== 'html') {
            // Add no-index comments around example and wrap it in a DIV.
            addAt(
               i,
               `<!--sv-no-index--><div class="${codeWrapperElClassName}">`
            );
            addAt(i + 2, `</div><!--/sv-no-index-->`);
            // Bump i to skip over the nodes we just added
            i += 2;
         } else {
            // Add example code as HTML before code block
            addAt(i, `<div class="${exampleElClassName}">${node.value}</div>`);
            // Code block is now at index i + 1
            // Add no-index comments around example and wrap it in a DIV.
            addAt(
               i + 1,
               `<!--sv-no-index--><div class="${codeWrapperElClassName}">`
            );
            addAt(i + 3, `</div><!--/sv-no-index-->`);
            // Bump i to skip over the nodes we just added
            i += 3;
         }
      }
   };
}
