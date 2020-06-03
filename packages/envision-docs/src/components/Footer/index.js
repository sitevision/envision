import React from 'react';
import Helmet from 'react-helmet';

const Footer = () => {
   return (
      <>
         <div className="footer-wrapper">
            <footer className="footer">
               <a href="https://www.sitevision.se/">© SiteVision</a>
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

export default Footer;
