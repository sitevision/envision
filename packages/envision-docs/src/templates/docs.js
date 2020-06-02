import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import { useCopyExample } from '../hooks/copyExample';

const filterMenuItems = (items) => {
   return items
      .map(({ node }) => ({
         id: node.id,
         title: node.frontmatter.title,
         slug: node.fields.slug,
      }))
      .reduce((accumulated, item) => {
         const pathItems = item.slug.split('/').filter((i) => i);
         let parent = accumulated[pathItems[0]];
         if (!parent) {
            parent = accumulated[pathItems[0]] = [];
         }

         parent.push(item);

         return accumulated;
      }, {});
};

export default function Template({
   data, // this prop will be injected by the GraphQL query below.
}) {
   const { markdownRemark, site, allMarkdownRemark } = data;
   const { frontmatter, html } = markdownRemark;
   const content = useRef(null);
   useCopyExample(content);

   return (
      <>
         <Header
            title={frontmatter.title}
            menuItems={site.siteMetadata.topMenuItems}
         />
         <div className="main-container">
            <Sidenav
               categories={site.siteMetadata.menuCategories}
               menuItems={filterMenuItems(allMarkdownRemark.edges)}
            ></Sidenav>
            <main>
               <h1>{frontmatter.title}</h1>
               <div
                  ref={content}
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
               />
            </main>
         </div>
         <Footer />
      </>
   );
}

export const pageQuery = graphql`
   query($slug: String!) {
      site {
         siteMetadata {
            topMenuItems {
               label
               to
            }
            menuCategories {
               title
               slug
            }
         }
      }
      markdownRemark(fields: { slug: { eq: $slug } }) {
         html
         frontmatter {
            title
         }
      }
      allMarkdownRemark {
         edges {
            node {
               id
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
`;

Template.propTypes = {
   data: PropTypes.shape({
      site: PropTypes.shape({
         siteMetadata: PropTypes.shape({
            topMenuItems: PropTypes.array,
            menuCategories: PropTypes.array,
         }),
      }),
      markdownRemark: PropTypes.shape({
         html: PropTypes.string,
         frontmatter: PropTypes.shape({
            title: PropTypes.string,
         }),
         fields: PropTypes.shape({
            slug: PropTypes.string,
         }),
      }),
      allMarkdownRemark: PropTypes.shape({
         edges: PropTypes.arrayOf(
            PropTypes.shape({
               node: PropTypes.shape({
                  id: PropTypes.string,
                  frontmatter: PropTypes.shape({
                     title: PropTypes.string,
                  }),
                  fields: PropTypes.shape({
                     slug: PropTypes.string,
                  }),
               }),
            })
         ),
      }),
   }),
};
