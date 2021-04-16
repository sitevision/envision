import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Link from '../Link';

const Footer = ({ menuItems }) => {
   return (
      <>
         <div className="footer-wrapper">
            <footer className="footer">
               <a href="https://www.sitevision.se/">© Sitevision</a>
               <nav className="footer-nav">
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
            </footer>
         </div>
         <Helmet>
            <script type="text/javascript">
               {`var _paq = _paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setDoNotTrack", true]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//uistats.sitevision.se/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '8']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();`}
            </script>
         </Helmet>
      </>
   );
};

Footer.propTypes = {
   menuItems: PropTypes.array,
};

export default Footer;
