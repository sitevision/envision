import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Link from '../Link';

const Footer = ({ menuItems }) => {
   return (
      <>
         <footer className="footer">
            <div className="container">
               <img
                  src="/images/sitevision-developer-logo-light.svg"
                  alt="Envision"
                  width="191"
                  height="27"
               />
               <nav aria-label="Main" className="footer-nav">
                  <ul className="env-list">
                     {menuItems.map(({ label, to }) => (
                        <li
                           className="env-nav__item env-m-vertical--medium"
                           key={label}
                        >
                           <Link to={to}>{label}</Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            </div>
         </footer>
         <Helmet>
            <script>
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
