import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import classNames from 'classnames';
import Mobilenav from '../components/Mobilenav';
import Teasernav from '../components/Teasernav';

const filterMenuItems = (items) => {
   // console.log(items);
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

const NavigationTemplate = ({
   title,
   deprecated,
   since,
   beta,
   info,
   dashboard,
   // topMenuItems,
   menuCategories,
   menuItems,
   children,
   indexing,
}) => {
   const win = typeof window !== 'undefined' && window;
   const darkMode =
      win && win.sessionStorage.getItem('color-scheme') === 'dark';
   const mainClassName = dashboard ? 'env-dashboard-theme' : '';
   const layoutClassName = !dashboard && darkMode ? 'doc-dark-mode' : '';
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
      <div className={classNames('layout', layoutClassName)}>
         <Header
            title={title}
            dashboard={dashboard}
            indexing={indexing}
            // menuItems={topMenuItems}
         />
         {bannerType && <Banner bannerType={bannerType} info={info}></Banner>}
         <div className="body">
            <main className={classNames('main', mainClassName)}>
               <div className="content-wrapper">
                  <h1 className="doc-main-heading">NAV / {title}</h1>
                  {children}
               </div>
               <Teasernav
                  categories={menuCategories}
                  menuItems={filterMenuItems(menuItems)}
               ></Teasernav>
            </main>
            <Mobilenav
               categories={menuCategories}
               menuItems={filterMenuItems(menuItems)}
            ></Mobilenav>
         </div>
         <Footer />
      </div>
   );
};

NavigationTemplate.propTypes = {
   title: PropTypes.string,
   deprecated: PropTypes.bool,
   since: PropTypes.string,
   beta: PropTypes.bool,
   info: PropTypes.bool,
   dashboard: PropTypes.bool,
   // topMenuItems: PropTypes.array,
   menuCategories: PropTypes.array,
   menuItems: PropTypes.array,
   children: PropTypes.node,
   indexing: PropTypes.bool,
};

export default NavigationTemplate;
