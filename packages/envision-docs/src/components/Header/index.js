import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Link from '../Link';
import ThemePicker from '../ThemePicker';

const Header = ({ title, dashboard, menuItems, indexing }) => {
   return (
      <>
         <Helmet>
            <html lang="en" className="sv-js" />
            <meta charset="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <title>{`${title}${
               title ? ' \u00B7 ' : ''
            }Envision by Sitevision`}</title>
            <link
               rel="icon"
               type="image/png"
               href="/images/envision_logo.webp"
               sizes="32x32"
            />
            {indexing === false && <meta name="robots" content="noindex" />}
         </Helmet>
         <header className="header">
            <div className="container">
               <a className="logo" href="/">
                  <picture>
                     <source
                        media="(prefers-color-scheme: light)"
                        srcSet="/images/sitevision-developer-logo-dark.svg"
                     />
                     <source
                        media="(prefers-color-scheme: dark)"
                        srcSet="/images/sitevision-developer-logo-light.svg"
                     />
                     <img
                        src="/images/sitevision-developer-logo-dark.svg"
                        alt="Envision"
                        width="234"
                        height="31"
                     />
                  </picture>
               </a>
               <nav aria-label="Main">
                  <ul className="env-nav env-nav--menubar env-nav--border">
                     {menuItems.map(({ label, to }) => (
                        <li className="env-nav__item" key={label}>
                           <Link to={to} className="env-nav__link">
                              {label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
               {!dashboard && <ThemePicker></ThemePicker>}
               <div className="mobile-nav-button">
                  <a
                     href="#navigation"
                     className="env-button env-button--link env-button--icon"
                  >
                     <svg className="env-icon env-icon--xx-small">
                        <use xlinkHref="/sitevision/envision-icons.svg#icon-menu-line"></use>
                     </svg>
                     Menu
                  </a>
               </div>
            </div>
         </header>
      </>
   );
};

Header.propTypes = {
   title: PropTypes.string,
   dashboard: PropTypes.bool,
   menuItems: PropTypes.array,
   indexing: PropTypes.bool,
};

export default Header;
