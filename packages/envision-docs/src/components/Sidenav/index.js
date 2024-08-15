import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import classNames from 'classnames';

const Sidenav = ({ categories, menuItems }) => {
   return (
      <div className="sidenav" id="navigation">
         <nav aria-label="Envision documentation">
            <ul className="env-nav env-nav--sidenav">
               {categories.map(({ title, slug }) => (
                  <li key={slug} className="env-nav__item">
                     <Link
                        to={menuItems[slug][0].slug}
                        className="env-nav__link level-1"
                     >
                        {title}
                     </Link>
                     <ul className="env-nav env-nav--sidenav">
                        {menuItems[slug].map(
                           ({ id, title, slug, deprecated, since }) => (
                              <li key={id} className="env-nav__item">
                                 <Link
                                    to={slug}
                                    className={classNames(
                                       'env-nav__link level-2',
                                       {
                                          ['new']: since,
                                          ['deprecated']: deprecated,
                                       }
                                    )}
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
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
};

Sidenav.propTypes = {
   categories: PropTypes.array,
   menuItems: PropTypes.object,
};

export default Sidenav;
