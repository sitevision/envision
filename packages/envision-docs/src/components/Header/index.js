import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Link from '../Link';

const Header = ({ title, menuItems }) => {
   return (
      <>
         <Helmet>
            <meta charset="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>{`${title} \u00B7 Envision by SiteVision`}</title>

            <link
               rel="icon"
               type="image/png"
               href="/images/envision_logo.png"
               sizes="32x32"
            />
         </Helmet>
         <div className="env-w-100 sv-header">
            <header className="header env-p-top--small env-p-bottom--small">
               <div className="logo env-m-left--medium">
                  <a href="https://www.sitevision.se">
                     <img src="/images/sitevision_logo.png" alt="SiteVision" />
                  </a>
               </div>
               <nav className="header-nav env-m-right--medium">
                  <ul
                     className="env-nav env-nav--menubar env-nav--border"
                     role="menubar"
                  >
                     {menuItems.map(({ label, to }) => (
                        <li
                           className="env-nav__item"
                           key={label}
                           role="menuitem"
                        >
                           <Link to={to} activeClassName="active">
                              {label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            </header>
         </div>
      </>
   );
};

Header.propTypes = {
   title: PropTypes.string,
   menuItems: PropTypes.array,
};

export default Header;
