import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useCopyExample } from '../hooks/copyExample';
import { useDashboardExample } from '../hooks/dashboardExample';
import { useExpandCode } from '../hooks/expandCode';
import BaseTemplate from './BaseTemplate';

export default function Template({
   data, // this prop will be injected by the GraphQL query below.
}) {
   const { markdownRemark, site, allMarkdownRemark } = data;
   const { frontmatter, html } = markdownRemark;
   const icons = frontmatter.extra?.icons;
   const template = frontmatter.template ? frontmatter.template : 'page';
   const content = useRef(null);
   useCopyExample(content);
   useExpandCode(content);
   useDashboardExample(content);

   return (
      <BaseTemplate
         template={template}
         title={frontmatter.title}
         deprecated={frontmatter.deprecated}
         since={frontmatter.since}
         beta={frontmatter.beta}
         dashboard={frontmatter.dashboard}
         description={frontmatter.description}
         indexing={frontmatter.indexing}
         menuItems={allMarkdownRemark.edges}
         menuCategories={site.siteMetadata.menuCategories}
         icons={icons}
      >
         <div ref={content} dangerouslySetInnerHTML={{ __html: html }} />
      </BaseTemplate>
   );
}

// beta and description must be readded when they are to be used

export const pageQuery = graphql`
   query ($slug: String!) {
      site {
         siteMetadata {
            menuCategories {
               title
               slug
               spriteId
               description
            }
         }
      }
      markdownRemark(fields: { slug: { eq: $slug } }) {
         html
         frontmatter {
            template
            title
            deprecated
            since
            dashboard
            indexing
            extra {
               icons
            }
         }
      }
      allMarkdownRemark {
         edges {
            node {
               id
               frontmatter {
                  template
                  title
                  deprecated
                  since
                  dashboard
                  indexing
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
