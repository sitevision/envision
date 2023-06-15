import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import classNames from 'classnames';

const Sidenav = ({ categories, menuItems }) => {
   return (
      <nav className="sidenav">
         {categories.map(({ title, slug }) => (
            <div key={slug}>
               <Link to={menuItems[slug][0].slug}>{title}</Link>
               <ul>
                  {menuItems[slug].map(
                     ({ id, title, slug, deprecated, since }) => (
                        <li key={id}>
                           <Link
                              to={slug}
                              className={classNames('doc-link-secondary', {
                                 ['doc-link-secondary--new']: since,
                                 ['doc-link-secondary--deprecated']: deprecated,
                              })}
                              activeClassName="active"
                           >
                              {title}
                              {deprecated && (
                                 <span className="env-badge env-badge--danger">
                                    Deprecated
                                 </span>
                              )}
                              {since && (
                                 <span className="env-badge env-badge--success">
                                    New
                                 </span>
                              )}
                           </Link>
                        </li>
                     )
                  )}
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
