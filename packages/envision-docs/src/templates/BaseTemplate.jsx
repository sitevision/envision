import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import classNames from 'classnames';
import Mobilenav from '../components/Mobilenav';
import Icons from '../components/Icons';
import Teasernav from '../components/Teasernav';
import {
   filterMenuItems,
   getCategoryMenuItems,
   getCategoryTop,
   getTopLevelMenuItems,
} from '../hooks/navigationUtils';
import { useLocation } from '@reach/router';
import StartPageTemplate from './StartPageTemplate';

const BaseTemplate = ({
   template,
   title,
   deprecated,
   since,
   beta,
   info,
   dashboard,
   description,
   menuCategories,
   menuItems,
   children,
   indexing,
   icons,
}) => {
   const mainClassName = dashboard ? 'env-dashboard-theme' : '';

   const location = useLocation();

   const filteredCategories = menuCategories.filter((category) => {
      return !category.hideInMenus;
   });

   const allMenuItems = filterMenuItems(
      menuItems,
      filteredCategories,
      location
   );

   let startpageMenuItems;
   let categoryMenuItems, sidebarMenuTop;

   if (template === 'startpage') {
      startpageMenuItems = getTopLevelMenuItems(
         allMenuItems,
         filteredCategories
      );
   } else if (template === 'navigation' || template === 'page') {
      categoryMenuItems = getCategoryMenuItems(allMenuItems, menuCategories);
      sidebarMenuTop = getCategoryTop(allMenuItems, menuCategories);
   }

   let bannerType = null;

   if (deprecated) {
      bannerType = 'deprecated';
   } else if (beta) {
      // Note! Beta banner does not work at the moment. beta must be re-added to MarkdownRemark.
      bannerType = 'beta';
   }

   return (
      <div className={classNames('layout')}>
         <div
            style={{ display: 'none' }}
            dangerouslySetInnerHTML={{
               __html: `<!-- Template: ${template} Path: ${location.pathname} -->`,
            }}
         />
         <Header
            title={title}
            description={description}
            indexing={indexing}
            menuItems={filteredCategories}
         />
         {bannerType && <Banner bannerType={bannerType} info={info}></Banner>}
         {template === 'startpage' ? (
            <>
               <StartPageTemplate
                  startpageMenuItems={startpageMenuItems}
                  mainClassName={mainClassName}
                  menuCategories={filteredCategories}
               >
                  {children}
               </StartPageTemplate>
            </>
         ) : (
            <div className="body">
               <main id="content" className={classNames('main', mainClassName)}>
                  <div className="content-wrapper">
                     {title && (
                        <h1 className="doc-main-heading">
                           {title}
                           {since && (
                              <span className="doc-badge doc-badge--info">
                                 Since {since}
                              </span>
                           )}
                        </h1>
                     )}
                     {icons && <Icons icons={icons}></Icons>}
                     {children}
                     {template === 'navigation' && (
                        <Teasernav
                           headingsAs={'h2'}
                           ariaLabel={`${title} submenu`}
                           menuItems={categoryMenuItems}
                           iconFile="/images/docs-component-navicons.svg"
                        ></Teasernav>
                     )}
                  </div>
               </main>
               {(template === 'navigation' || template === 'page') && (
                  <Sidenav
                     topItem={sidebarMenuTop}
                     categories={filteredCategories}
                     menuItems={categoryMenuItems}
                  ></Sidenav>
               )}
            </div>
         )}
         <Footer />
         <Mobilenav
            categories={filteredCategories}
            menuItems={allMenuItems}
         ></Mobilenav>
      </div>
   );
};

BaseTemplate.propTypes = {
   template: PropTypes.string,
   title: PropTypes.string,
   deprecated: PropTypes.bool,
   since: PropTypes.string,
   beta: PropTypes.bool,
   info: PropTypes.bool,
   description: PropTypes.string,
   dashboard: PropTypes.bool,
   menuCategories: PropTypes.array,
   icons: PropTypes.array,
   menuItems: PropTypes.array,
   children: PropTypes.node,
   indexing: PropTypes.bool,
};

export default BaseTemplate;
