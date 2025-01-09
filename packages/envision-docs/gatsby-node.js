/* globals require: false, exports: false */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { redirects } = require('./redirects.js');

exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage, createRedirect } = actions;

   redirects.forEach(({ fromPath, toPath, isPermanent }) => {
      createRedirect({ fromPath, toPath, isPermanent });
   });

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
   // const navigationTemplate = path.resolve(`src/templates/navigation.js`);
   // const iconsTemplate = path.resolve(`src/templates/icons.js`);

   // console.log('111', result.data.allMarkdownRemark.edges);

   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // let component;
      //
      // switch (node.frontmatter.template) {
      //    case 'navigation':
      //       component = navigationTemplate;
      //       break;
      //    case 'icons':
      //       component = iconsTemplate;
      //       break;
      //    default:
      //       component = docsTemplate;
      // }

      // console.log(node);

      createPage({
         path: node.fields.slug,
         component: docsTemplate,
         context: {
            title: node.frontmatter.title,
            slug: node.fields.slug,
            extra: node.frontmatter.extra,
         },
      });
   });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
   // console.log(node);
   if (node.internal.type === 'MarkdownRemark') {
      const slug = createFilePath({ node, getNode, basePath: 'pages' });
      actions.createNodeField({
         node,
         name: 'slug',
         value: slug,
      });
   }
};
