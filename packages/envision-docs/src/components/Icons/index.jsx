import React from 'react';
import PropTypes from 'prop-types';

const Icons = ({ icons }) => {
   return (
      <>
         <div className="icons-demo">
            <ul className="env-list env-list--horizontal--fixed env-list--horizontal--fixed--6">
               {icons.map((icon) => (
                  <li key={icon} className="env-list__item" title={icon}>
                     <svg className="env-icon">
                        <use
                           href={`/sitevision/envision-icons.svg#${icon}`}
                        ></use>
                     </svg>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

Icons.propTypes = {
   icons: PropTypes.array,
};

export default Icons;
