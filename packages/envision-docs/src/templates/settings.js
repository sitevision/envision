import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useCopyExample } from '../hooks/copyExample';
import BaseTemplate from './BaseTemplate';
import ThemePicker from '../components/ThemePicker';

export default function Template({
   data, // this prop will be injected by the GraphQL query below.
}) {
   const { markdownRemark, site, allMarkdownRemark } = data;
   const { frontmatter, html } = markdownRemark;
   const content = useRef(null);
   useCopyExample(content);

   return (
      <BaseTemplate
         title={frontmatter.title}
         topMenuItems={site.siteMetadata.topMenuItems}
         menuItems={allMarkdownRemark.edges}
         menuCategories={site.siteMetadata.menuCategories}
      >
         <div ref={content} dangerouslySetInnerHTML={{ __html: html }} />
         <ThemePicker></ThemePicker>
      </BaseTemplate>
   );
}

export const pageQuery = graphql`
   query ($slug: String!) {
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
   data: PropTypes.object,
};
