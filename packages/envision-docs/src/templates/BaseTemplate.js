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
   topMenuItems,
   menuCategories,
   menuItems,
   children,
}) => {
   return (
      <>
         <Header title={title} menuItems={topMenuItems} />
         <div className="main-container">
            <Sidenav
               categories={menuCategories}
               menuItems={filterMenuItems(menuItems)}
            ></Sidenav>
            <main>
               <h1>{title}</h1>
               {children}
            </main>
         </div>
         <Footer />
      </>
   );
};

BaseTemplate.propTypes = {
   title: PropTypes.string,
   topMenuItems: PropTypes.array,
   menuCategories: PropTypes.array,
   menuItems: PropTypes.array,
   children: PropTypes.node,
};

export default BaseTemplate;
