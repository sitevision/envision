/* globals require: false, exports: false */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions;

   const result = await graphql(`
      {
         allMarkdownRemark(limit: 1000) {
            edges {
               node {
                  frontmatter {
                     title
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
   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
         path: node.fields.slug,
         component: docsTemplate,
         context: {
            title: node.frontmatter.title,
            slug: node.fields.slug,
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

exports.onCreateWebpackConfig = ({ actions }) => {
   const { setWebpackConfig } = actions;
   setWebpackConfig({
      externals: {
         jquery: 'jQuery',
      },
   });
};
