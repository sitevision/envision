import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import ThemePicker from '../ThemePicker';

const Sidenav = ({ categories, menuItems }) => {
   return (
      <nav className="sidenav">
         {categories.map(({ title, slug }) => (
            <div key={slug}>
               <Link to={menuItems[slug][0].slug}>{title}</Link>
               <ul>
                  {menuItems[slug].map(({ id, title, slug }) => (
                     <li key={id}>
                        <Link
                           to={slug}
                           className="env-link-secondary"
                           activeClassName="active"
                        >
                           {title}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         ))}
         <ThemePicker></ThemePicker>
      </nav>
   );
};

Sidenav.propTypes = {
   categories: PropTypes.array,
   menuItems: PropTypes.object,
};

export default Sidenav;
