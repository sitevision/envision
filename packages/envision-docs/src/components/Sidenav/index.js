import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
// import classNames from 'classnames';
// import {
//    getCategorySlug,
//    getItemsExceptIndex,
// } from '../../hooks/navigationUtils';

const Sidenav = ({ topItem, menuItems }) => {
   // const filteredMenuItems = {};
   // Object.keys(menuItems).forEach((category) => {
   //    filteredMenuItems[category] = getItemsExceptIndex(menuItems[category]);
   // });

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
               {/*{categories.map(*/}
               {/*   ({ title, slug, subcategories, hasCurrentPage }) => (*/}
               {/*      <li*/}
               {/*         key={slug}*/}
               {/*         className={classNames('env-nav__item', {*/}
               {/*            ['env-nav__item--hasChildren']:*/}
               {/*               filteredMenuItems[slug].length > 0,*/}
               {/*         })}*/}
               {/*      >*/}
               {/*         <Link*/}
               {/*            href={getCategorySlug(title, slug, menuItems[slug])}*/}
               {/*            className="env-nav__link level-1"*/}
               {/*         >*/}
               {/*            {subcategories ? 'S' : 'F'}*/}
               {/*            {title}*/}
               {/*         </Link>*/}
               {/*         {filteredMenuItems[slug].length > 0 && (*/}
               {/*            <a*/}
               {/*               role="button"*/}
               {/*               className={classNames(*/}
               {/*                  'env-button',*/}
               {/*                  'env-button--icon',*/}
               {/*                  'env-button--link',*/}
               {/*                  'env-button--icon-small'*/}
               {/*               )}*/}
               {/*               href={`#submenu-${slug}`}*/}
               {/*               data-env-collapse=""*/}
               {/*               aria-expanded="false"*/}
               {/*               aria-controls={`submenu-${slug}`}*/}
               {/*            >*/}
               {/*               <svg className="env-icon">*/}
               {/*                  <use href="/sitevision/envision-icons.svg#icon-angle-down"></use>*/}
               {/*               </svg>*/}
               {/*            </a>*/}
               {/*         )}*/}
               {/*         <ul*/}
               {/*            className={classNames(*/}
               {/*               'env-collapse',*/}
               {/*               'env-nav',*/}
               {/*               'env-nav--sidenav',*/}
               {/*               { ['env-collapse--show']: hasCurrentPage }*/}
               {/*            )}*/}
               {/*            id={`submenu-${slug}`}*/}
               {/*         >*/}
               {/*            {filteredMenuItems[slug].map(*/}
               {/*               ({*/}
               {/*                  id,*/}
               {/*                  title,*/}
               {/*                  slug,*/}
               {/*                  deprecated,*/}
               {/*                  since,*/}
               {/*                  isCurrentPage,*/}
               {/*               }) => (*/}
               {/*                  <li key={id} className="env-nav__item">*/}
               {/*                     <Link*/}
               {/*                        href={slug}*/}
               {/*                        aria-current={*/}
               {/*                           isCurrentPage ? 'page' : null*/}
               {/*                        }*/}
               {/*                        className={classNames(*/}
               {/*                           'env-nav__link level-2',*/}
               {/*                           {*/}
               {/*                              ['new']: since,*/}
               {/*                              ['deprecated']: deprecated,*/}
               {/*                           }*/}
               {/*                        )}*/}
               {/*                     >*/}
               {/*                        {title}*/}
               {/*                        {deprecated && (*/}
               {/*                           <span className="doc-badge doc-badge--danger">*/}
               {/*                              Deprecated*/}
               {/*                           </span>*/}
               {/*                        )}*/}
               {/*                        {since && (*/}
               {/*                           <span className="doc-badge doc-badge--success">*/}
               {/*                              New*/}
               {/*                           </span>*/}
               {/*                        )}*/}
               {/*                     </Link>*/}
               {/*                  </li>*/}
               {/*               )*/}
               {/*            )}*/}
               {/*         </ul>*/}
               {/*      </li>*/}
               {/*   )*/}
               {/*)}*/}
            </ul>
         </nav>
      </div>
   );
};

Sidenav.propTypes = {
   // categories: PropTypes.array,
   topItem: PropTypes.object,
   menuItems: PropTypes.array,
};

export default Sidenav;
