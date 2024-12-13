/* globals require: false, exports: false */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { redirects } = require('./redirects');

exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage, createRedirect } = actions;

   redirects.forEach(({ fromPath, toPath, isPermanent }) =>
      createRedirect({ fromPath, toPath, isPermanent })
   );

   const result = await graphql(`
      {
         allMarkdownRemark(limit: 1000) {
            edges {
               node {
                  frontmatter {
                     title
                     template
                     extra {
                        icons
                     }
                  }
                  fields {
                     slug
                  }
               }
            }
         }
      }
   `);

   // Handle errors
   if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
   }

   const docsTemplate = path.resolve(`src/templates/docs.js`);
   const iconsTemplate = path.resolve(`src/templates/icons.js`);

   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
         path: node.fields.slug,
         component:
            node.frontmatter.template === 'icons'
               ? iconsTemplate
               : docsTemplate,
         context: {
            title: node.frontmatter.title,
            slug: node.fields.slug,
            extra: node.frontmatter.extra,
         },
      });
   });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
   if (node.internal.type === 'MarkdownRemark') {
      const slug = createFilePath({ node, getNode, basePath: 'pages' });
      actions.createNodeField({
         node,
         name: 'slug',
         value: slug,
      });
   }
};
