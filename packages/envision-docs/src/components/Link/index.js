import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';

const Link = ({ to, children, ...rest }) => {
   if (/^http/.test(to)) {
      return <a href={to}>{children}</a>;
   }

   return (
      <GatsbyLink to={to} {...rest}>
         {children}
      </GatsbyLink>
   );
};

Link.propTypes = {
   to: PropTypes.string,
   children: PropTypes.node,
};

export default Link;
