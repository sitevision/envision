import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Link from '../Link';

const Header = ({ title, menuItems }) => {
   return (
      <>
         <Helmet>
            <html lang="en" className="sv-js" />
            <meta charset="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <title>{`${title} \u00B7 Envision by Sitevision`}</title>
            <link
               rel="icon"
               type="image/png"
               href="/images/envision_logo.png"
               sizes="32x32"
            />
         </Helmet>
         <div className="sv-header">
            <header className="header">
               <a className="logo" href="/">
                  <img
                     className="logo__img"
                     src="/images/sitevision-envision-logo.svg"
                     alt="Envision"
                  />
               </a>
               <nav className="header-nav">
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
