import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';

const filterMenuItems = (items) => {
   return items
      .map(({ node }) => ({
         id: node.id,
         title: node.frontmatter.title,
         deprecated: node.frontmatter.deprecated,
         since: node.frontmatter.since,
         beta: node.frontmatter.beta,
         dashboard: node.frontmatter.dashboard,
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
const BaseTemplate = ({
   title,
   deprecated,
   since,
   beta,
   dashboard,
   topMenuItems,
   menuCategories,
   menuItems,
   children,
}) => {
   const bodyClass = dashboard
      ? 'env-dashboard-theme'
      : window.localStorage.getItem('env-theme');
   return (
      <>
         <Header title={title} bodyClass={bodyClass} menuItems={topMenuItems} />
         <div className={'main-container'}>
            <main>
               <h1 className="doc-heading-1 doc-heading-1--main">{title}</h1>
               {(since || beta || deprecated) && (
                  <h2 className="doc-heading-2 doc-heading-2--main">
                     {deprecated && (
                        <span className="env-badge env-badge--danger">
                           Deprecated
                        </span>
                     )}
                     {since && (
                        <span className="env-badge env-badge--info">
                           Since {since}
                        </span>
                     )}
                     {beta && (
                        <span className="env-badge env-badge--warning">
                           Beta
                        </span>
                     )}
                  </h2>
               )}
               {children}
            </main>
            <Sidenav
               categories={menuCategories}
               menuItems={filterMenuItems(menuItems)}
            ></Sidenav>
         </div>
         <Footer menuItems={topMenuItems} />
      </>
   );
};

BaseTemplate.propTypes = {
   title: PropTypes.string,
   deprecated: PropTypes.bool,
   since: PropTypes.string,
   beta: PropTypes.bool,
   dashboard: PropTypes.bool,
   topMenuItems: PropTypes.array,
   menuCategories: PropTypes.array,
   menuItems: PropTypes.array,
   children: PropTypes.node,
};

export default BaseTemplate;
