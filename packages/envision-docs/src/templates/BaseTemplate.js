import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import classNames from 'classnames';

const filterMenuItems = (items) => {
   return items
      .map(({ node }) => ({
         id: node.id,
         title: node.frontmatter.title,
         deprecated: node.frontmatter.deprecated,
         since: node.frontmatter.since,
         beta: node.frontmatter.beta,
         dashboard: node.frontmatter.dashboard,
         indexing: node.frontmatter.indexing,
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
   info,
   dashboard,
   topMenuItems,
   menuCategories,
   menuItems,
   children,
   indexing,
}) => {
   const mainClassName = dashboard ? 'env-dashboard-theme' : '';
   let bannerType = null;

   if (deprecated) {
      bannerType = 'deprecated';
   } else if (beta) {
      bannerType = 'beta';
   } else if (since) {
      bannerType = 'since';
      info = since;
   }
   return (
      <div className="layout">
         <Header
            title={title}
            dashboard={dashboard}
            indexing={indexing}
            menuItems={topMenuItems}
         />
         {bannerType && <Banner bannerType={bannerType} info={info}></Banner>}
         <div className="body">
            <main className={classNames('main', mainClassName)}>
               <div className="content-wrapper">
                  <h1 className="doc-main-heading">{title}</h1>
                  {children}
               </div>
            </main>
            <Sidenav
               categories={menuCategories}
               menuItems={filterMenuItems(menuItems)}
            ></Sidenav>
         </div>
         <Footer menuItems={topMenuItems} />
      </div>
   );
};

BaseTemplate.propTypes = {
   title: PropTypes.string,
   deprecated: PropTypes.bool,
   since: PropTypes.string,
   beta: PropTypes.bool,
   info: PropTypes.bool,
   dashboard: PropTypes.bool,
   topMenuItems: PropTypes.array,
   menuCategories: PropTypes.array,
   menuItems: PropTypes.array,
   children: PropTypes.node,
   indexing: PropTypes.bool,
};

export default BaseTemplate;
