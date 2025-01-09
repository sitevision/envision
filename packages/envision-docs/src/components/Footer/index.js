import React from 'react';
import Helmet from 'react-helmet';
import Link from '../Link';

const Footer = () => {
   const envisionMenuItems = [
      {
         text: 'Envision on GitHub',
         url: 'https://github.com/sitevision/envision',
      },
   ];

   const developerMenuItems = [
      {
         text: 'Sitevision Developer Community',
         url: 'https://developer.sitevision.se/',
      },
   ];

   const sitevisionMenuItems = [
      {
         text: 'About Sitevision',
         url: 'https://www.sitevision.se/en/startpage/sitevision/about-sitevision',
      },
      {
         text: 'Contact us',
         url: 'https://www.sitevision.se/en/startpage/sitevision/contact-us',
      },
      {
         text: 'Become one of us',
         url: 'https://www.sitevision.se/en/startpage/sitevision/become-one-of-us',
      },
      {
         text: 'Privacy Statement',
         url: 'https://www.sitevision.se/en/startpage/sitevision/privacy-statement',
      },
      {
         text: 'Pressroom',
         url: 'https://www.sitevision.se/en/startpage/sitevision/pressroom',
      },
   ];

   return (
      <>
         <footer className="footer">
            <div className="container">
               <nav aria-label="Main" className="footer-nav">
                  <div className="footer-nav-col">
                     <Link className="logo" href="/">
                        <svg
                           className="env-icon doc-svg-logo"
                           aria-label="To start page"
                        >
                           <use href="/images/docs-logo.svg#logo"></use>
                        </svg>
                     </Link>
                  </div>
                  <div className="footer-nav-col">
                     <h2 className="footer-nav-col__header">Envision</h2>
                     <ul className="env-list">
                        {envisionMenuItems.map(({ text, url }) => (
                           <li key={url}>
                              <Link href={url}>{text}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="footer-nav-col">
                     <h2 className="footer-nav-col__header">Developer</h2>
                     <ul className="env-list">
                        {developerMenuItems.map(({ text, url }) => (
                           <li
                              className="env-nav__item env-m-vertical--medium"
                              key={url}
                           >
                              <Link href={url}>{text}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="footer-nav-col">
                     <h2 className="footer-nav-col__header">Sitevision</h2>
                     <ul className="env-list">
                        {sitevisionMenuItems.map(({ text, url }) => (
                           <li
                              className="env-nav__item env-m-vertical--medium"
                              key={url}
                           >
                              <Link href={url}>{text}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
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

export default Footer;
