import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import classNames from 'classnames';
import {
   getCategorySlug,
   getItemsExceptIndex,
} from '../../hooks/navigationUtils';

const Mobilenav = ({ categories, menuItems }) => {
   const filteredMenuItems = {};
   Object.keys(menuItems).forEach((category) => {
      filteredMenuItems[category] = getItemsExceptIndex(menuItems[category]);
   });

   return (
      <dialog className="mobileNav">
         <div className="mobileNav__header">
            <h2 className="env-ui-text-sectionheading">
               Envision documentation
            </h2>
            <button className="mobileNav__close env-button env-button--ssecondary env-button--icon env-button--icon-small">
               <svg className="env-icon env-icon--medium">
                  <use href="/sitevision/envision-icons.svg#icon-delete"></use>
               </svg>
            </button>
         </div>
         <nav aria-label="Envision documentation">
            <ul className="env-nav env-nav--sidenav">
               {categories.map(({ title, slug, hasCurrentPage }) => (
                  <li
                     key={slug}
                     className={classNames('env-nav__item', {
                        ['env-nav__item--hasChildren']:
                           filteredMenuItems[slug].length > 0,
                     })}
                  >
                     <Link
                        href={getCategorySlug(title, slug, menuItems[slug])}
                        className="env-nav__link level-1"
                     >
                        {title}
                     </Link>
                     {filteredMenuItems[slug].length > 0 && (
                        <Link
                           role="button"
                           className={classNames(
                              'env-button',
                              'env-button--icon',
                              'env-button--link',
                              'env-button--icon-small'
                           )}
                           href={`#mobile-submenu-${slug}`}
                           data-env-collapse=""
                           aria-expanded="false"
                           aria-controls={`mobile-submenu-${slug}`}
                        >
                           <svg className="env-icon">
                              <use href="/sitevision/envision-icons.svg#icon-angle-down"></use>
                           </svg>
                        </Link>
                     )}
                     <ul
                        className={classNames(
                           'env-collapse',
                           'env-nav',
                           'env-nav--sidenav',
                           { ['env-collapse--show']: hasCurrentPage }
                        )}
                        id={`mobile-submenu-${slug}`}
                     >
                        {filteredMenuItems[slug].map(
                           ({
                              id,
                              title,
                              slug,
                              deprecated,
                              since,
                              isCurrentPage,
                           }) => (
                              <li key={id} className="env-nav__item">
                                 <Link
                                    href={slug}
                                    aria-current={isCurrentPage ? 'page' : null}
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
      </dialog>
   );
};

Mobilenav.propTypes = {
   categories: PropTypes.array,
   menuItems: PropTypes.object,
};

export default Mobilenav;
