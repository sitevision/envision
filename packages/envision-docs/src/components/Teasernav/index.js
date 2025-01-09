import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Link from '../Link';
// import classNames from 'classnames';
// import {
//    getCategorySlug,
//    getItemsExceptIndex,
// } from '../../hooks/navigationUtils';

const Teasernav = ({ menuItems, className = '', useIcon = false }) => {
   console.log('menuItems', menuItems);

   // const filteredMenuItems = {};
   // Object.keys(menuItems).forEach((category) => {
   //    filteredMenuItems[category] = getItemsExceptIndex(menuItems[category]);
   // });

   className = className ? className : '';

   return (
      <div className={classNames('teaserNav', className)}>
         <nav aria-label="Envision documentation">
            <ul className="env-cardholder-grid">
               {menuItems.map(({ title, description, spriteId, slug }) => (
                  <li
                     key={slug}
                     className="env-card env-shadow-small env-border"
                  >
                     <a href={slug} className="teaserNav__link">
                        {useIcon && (
                           <div className="env-card__header">
                              <div className="teaserNav__icon">
                                 <svg aria-hidden="true" className="env-icon">
                                    <use
                                       href={`/images/docs-navicons.svg#${
                                          spriteId
                                             ? spriteId
                                             : slug.split('/').slice(-2)[0]
                                       }`}
                                    ></use>
                                 </svg>
                              </div>
                           </div>
                        )}
                        <div className="env-card__body">
                           <h3 className="env-ui-text-sectionheading">
                              {title}
                              {/*<svg*/}
                              {/*   viewBox="0 0 14 13"*/}
                              {/*   className="env-icon env-icon--xx-small"*/}
                              {/*>*/}
                              {/*   <path d="M13.117 6.02601L7.81404 0.771844C7.54347 0.514224 7.18194 0.374173 6.80843 0.382292C6.43493 0.390412 6.07982 0.546043 5.8207 0.815177C5.5536 1.07573 5.39986 1.431 5.39277 1.80406C5.38567 2.17713 5.52579 2.53799 5.78279 2.80851L7.87904 4.82351C7.89958 4.84106 7.91387 4.86482 7.91973 4.8912C7.92559 4.91758 7.92272 4.94516 7.91154 4.96976C7.9018 4.995 7.88473 5.01674 7.86253 5.03219C7.84032 5.04763 7.814 5.05608 7.78695 5.05643H1.48737C1.16215 5.09058 0.863749 5.25232 0.657616 5.50618C0.451483 5.76004 0.354446 6.08529 0.387788 6.41059C0.387788 6.84934 0.631538 7.77018 1.47112 7.77018H7.79779C7.82422 7.77009 7.8501 7.77773 7.87223 7.79217C7.89437 7.8066 7.9118 7.8272 7.92237 7.85143C7.93684 7.87407 7.94453 7.90039 7.94453 7.92726C7.94453 7.95414 7.93684 7.98045 7.92237 8.00309L5.89654 10.0235C5.67301 10.2997 5.55943 10.6488 5.5776 11.0036C5.59578 11.3585 5.74443 11.6941 5.99501 11.946C6.24558 12.1979 6.5804 12.3484 6.93515 12.3685C7.28991 12.3885 7.63956 12.2768 7.91695 12.0548L13.1332 6.78976C13.232 6.68614 13.2857 6.54764 13.2826 6.40453C13.2796 6.26142 13.22 6.12534 13.117 6.02601Z" />*/}
                              {/*</svg>*/}
                           </h3>
                           {description && (
                              <p className="teaserNav__description env-text-body-03">
                                 {description}
                              </p>
                           )}
                        </div>
                        <span className="env-assistive-text">
                           sprite id:{' '}
                           {spriteId ? spriteId : slug.split('/').slice(-2)[0]}
                        </span>
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
};

Teasernav.propTypes = {
   className: PropTypes.string,
   menuItems: PropTypes.array,
   useIcon: PropTypes.bool,
};

export default Teasernav;
