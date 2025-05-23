import React, { useRef } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Link from '../Link';
import ThemePicker from '../ThemePicker';

const Header = ({ title, description, menuItems, indexing }) => {
   const [showMobileNav, setShowMobileNav] = React.useState(false);
   const mobileNavToggler = useRef(null);

   React.useEffect(() => {
      const mobileNav = document.querySelector('.mobileNav');
      const closeButton = document.querySelector('.mobileNav__close');
      const handleClose = () => {
         setShowMobileNav(false);
         mobileNav.classList.remove('show');
         document.body.style.removeProperty('overflow');
      };

      closeButton && closeButton.addEventListener('click', handleClose);

      return () => {
         closeButton && closeButton.removeEventListener('click', handleClose);
      };
   }, []);

   React.useEffect(() => {
      const mobileNav = document.querySelector('.mobileNav');

      const isVisible = function (element) {
         return !!(
            element.offsetWidth ||
            element.offsetHeight ||
            element.getClientRects().length
         );
      };

      const getFocusable = function (root) {
         const SELECTOR = [
            'a[href]',
            'input:not([disabled])',
            'button:not([disabled])',
         ].join(',');
         const allFocusable = root.querySelectorAll(SELECTOR);
         const visibleFocusable = [];
         for (let i = 0; i < allFocusable.length; i++) {
            if (isVisible(allFocusable[i])) {
               visibleFocusable.push(allFocusable[i]);
            }
         }
         return visibleFocusable;
      };

      const handleKeyDown = (e) => {
         if (e.key === 'Escape') {
            setShowMobileNav(false);
            mobileNav.classList.remove('show');
            document.body.style.removeProperty('overflow');
            e.preventDefault();
         } else if (e.key === 'Tab') {
            const focusable = getFocusable(mobileNav);
            const firstElement = focusable[0];
            const lastElement = focusable[focusable.length - 1];
            if (e.shiftKey) {
               if (e.target === firstElement) {
                  e.preventDefault();
                  lastElement.focus();
               }
            } else if (e.target === lastElement) {
               e.preventDefault();
               firstElement.focus();
            }
         }
      };

      if (showMobileNav) {
         document.body.addEventListener('keydown', handleKeyDown);
      } else {
         document.body.style.removeProperty('overflow');
      }

      return () => {
         document.body.removeEventListener('keydown', handleKeyDown);
      };
   }, [showMobileNav]);

   const toggleMobileNav = React.useMemo(() => {
      return () => {
         const mobileNav = document.querySelector('.mobileNav');

         if (!showMobileNav) {
            mobileNav.classList.add('show');
            document.body.style.setProperty('overflow-x', '');
            document.body.style.setProperty('overflow-y', '');
            document.body.style.setProperty('overflow', 'hidden', 'important');
         } else {
            mobileNav.classList.remove('show');
            document.body.style.removeProperty('overflow');
         }
         setShowMobileNav(!showMobileNav);
      };
   }, [showMobileNav]);

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
            {description && <meta name="description" content={description} />}
            {indexing === false && <meta name="robots" content="noindex" />}
         </Helmet>
         <header className="header">
            <a href="#content" className="doc-skip-link">
               Skip to main content
            </a>
            <div className="container">
               <Link className="logo" href="/">
                  <span className="env-assistive-text">To start page</span>
                  <svg className="env-icon doc-svg-logo" aria-hidden="true">
                     <use href="/images/docs-logo.svg#logo"></use>
                  </svg>
               </Link>
               <nav aria-label="Main menu">
                  <ul className="env-nav env-nav--menubar env-nav--border">
                     {menuItems.map(({ title, slug }) => (
                        <li className="env-nav__item" key={slug}>
                           <Link href={`/${slug}/`} className="env-nav__link">
                              {title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
               <ThemePicker></ThemePicker>
               <div className="mobile-nav-button">
                  <button
                     ref={mobileNavToggler}
                     aria-expanded={showMobileNav}
                     onClick={toggleMobileNav}
                     className="env-button env-button--link env-button--icon"
                  >
                     <svg className="env-icon env-icon--xx-small">
                        <use href="/sitevision/envision-icons.svg#icon-menu-line"></use>
                     </svg>
                     Menu
                  </button>
               </div>
            </div>
         </header>
      </>
   );
};

Header.propTypes = {
   title: PropTypes.string,
   description: PropTypes.string,
   menuItems: PropTypes.array,
   indexing: PropTypes.bool,
};

export default Header;
