import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const Sidenav = ({ categories, menuItems }) => {
   return (
      <nav className="sidenav">
         {categories.map(({ title, slug }) => (
            <div key={slug}>
               <Link to={menuItems[slug][0].slug}>{title}</Link>
               <ul>
                  {menuItems[slug].map(({ id, title, slug, deprecated }) => (
                     <li key={id}>
                        <Link
                           to={slug}
                           className={
                              !deprecated
                                 ? 'doc-link-secondary'
                                 : 'doc-link-secondary doc-link-secondary--deprecated'
                           }
                           activeClassName="active"
                        >
                           {title}
                           {deprecated && (
                              <span className="env-badge env-badge--danger">
                                 Deprecated
                              </span>
                           )}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         ))}
      </nav>
   );
};

Sidenav.propTypes = {
   categories: PropTypes.array,
   menuItems: PropTypes.object,
};

export default Sidenav;
