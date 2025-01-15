import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Teasernav from '../components/Teasernav';

const StartPageTemplate = ({ mainClassName, startpageMenuItems, ...props }) => {
   return (
      <div className="start-body">
         <main className={classNames('main', mainClassName)}>
            <div className="start-hero env-container">
               <div className="start-hero__body env-dynamic-font env-dynamic-font--downscale env-dynamic-font--scale-1_5">
                  <h2 className="start-hero__heading">
                     Create Sitevision like components and modules the easy way
                     with Envision.
                  </h2>
                  <p className="start-hero__text">
                     At Sitevision, we believe in making the complex simple.
                     That’s why we created Envision — an open-source,
                     easy-to-use CSS and component framework that streamlines
                     your work with HTML, CSS, and JavaScript.
                  </p>
               </div>
            </div>
            <Teasernav
               iconFile="/images/docs-navicons.svg"
               className="teaserNav--start"
               menuItems={startpageMenuItems}
            ></Teasernav>
            <div className="start-content">
               <div className="start-content__body">{props.children}</div>
            </div>
         </main>
      </div>
   );
};

StartPageTemplate.propTypes = {
   children: PropTypes.object,
   mainClassName: PropTypes.string,
   startpageMenuItems: PropTypes.array,
};

export default StartPageTemplate;
