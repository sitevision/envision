import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link';

const Teasernav = ({
   className = '',
   headingsAs: Tag = 'h2',
   ariaLabel,
   menuItems,
   iconFile,
}) => {
   className = className ? className : '';

   return (
      <div className={classNames('teaserNav', className)}>
         <nav aria-label={ariaLabel}>
            <ul className="env-cardholder-grid">
               {menuItems.map(({ title, description, spriteId, slug }) => (
                  <li
                     key={slug}
                     className="env-card env-shadow-small env-border"
                  >
                     <Link href={slug} className="teaserNav__link">
                        {iconFile && (
                           <div className="env-card__header">
                              <div className="teaserNav__icon">
                                 <svg aria-hidden="true" className="env-icon">
                                    <use
                                       href={`${iconFile}#${
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
                           <Tag className="env-ui-text-sectionheading">
                              {title}
                           </Tag>
                           {description && (
                              <p className="teaserNav__description env-text-body-03">
                                 {description}
                              </p>
                           )}
                        </div>
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
};

Teasernav.propTypes = {
   className: PropTypes.string,
   ariaLabel: PropTypes.string,
   headingsAs: PropTypes.string,
   menuItems: PropTypes.array,
   iconFile: PropTypes.string,
};

export default Teasernav;
