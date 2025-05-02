import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const Sidenav = ({ topItem, menuItems }) => {
   if (!topItem || !menuItems) {
      return null;
   }

   return (
      <div className="sidenav" id="navigation">
         <h2 className="sidenav__heading">
            <Link href={topItem.slug}>{topItem.title}</Link>
         </h2>
         <nav aria-label="Envision documentation">
            <ul className="sidenav__items">
               {menuItems.map(
                  ({ title, slug, deprecated, since, isCurrentPage }) => (
                     <li key={slug} className="sidenav__item">
                        <Link
                           href={slug}
                           className="sidenav__item__link"
                           aria-current={isCurrentPage ? 'page' : null}
                        >
                           {title}
                           {deprecated && (
                              <span className="doc-badge doc-badge--danger">
                                 Deprecated
                              </span>
                           )}
                           {since && (
                              <span className="doc-badge doc-badge--success">
                                 New
                              </span>
                           )}
                        </Link>
                     </li>
                  )
               )}
            </ul>
         </nav>
      </div>
   );
};

Sidenav.propTypes = {
   topItem: PropTypes.object,
   menuItems: PropTypes.array,
};

export default Sidenav;
