import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';

const Link = ({ href, children, ...rest }) => {
   if (/^http/.test(href) || /^#/.test(href)) {
      return (
         <a href={href} {...rest}>
            {children}
         </a>
      );
   }

   return (
      <GatsbyLink to={href} {...rest}>
         {children}
      </GatsbyLink>
   );
};

Link.propTypes = {
   href: PropTypes.string,
   children: PropTypes.node,
};

export default Link;
