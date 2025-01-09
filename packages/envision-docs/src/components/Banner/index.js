import React from 'react';

import PropTypes from 'prop-types';

const Banner = ({ bannerType, info }) => {
   return (
      <>
         <section role="status" className={`banner banner--${bannerType}`}>
            {bannerType === 'deprecated' && (
               <div className="container">
                  <div className="icon">
                     <svg className="env-icon env-icon--large">
                        <use href="/images/docs-images.svg#exclamation"></use>
                     </svg>
                     Deprecated
                  </div>
                  The documentation you are viewing is for a deprecated version
                  of an Envision component.
               </div>
            )}
            {bannerType === 'beta' && (
               <div className="container">
                  <div className="icon">
                     <svg className="env-icon env-icon--large">
                        <use href="/images/docs-images.svg#under-construction"></use>
                     </svg>
                     Beta
                  </div>
                  The documentation you are viewing is for a beta version of an
                  Envision component. It is stable but may be subject to change.
               </div>
            )}
            {bannerType === 'since' && (
               <div className="container">
                  <div className="icon">
                     <svg className="env-icon env-icon--large">
                        <use href="/images/docs-images.svg#exclamation"></use>
                     </svg>
                     Since {info}
                  </div>
                  This component was recently added to Envision.
               </div>
            )}
         </section>
      </>
   );
};

Banner.propTypes = {
   bannerType: PropTypes.string,
   info: PropTypes.string,
};

export default Banner;
