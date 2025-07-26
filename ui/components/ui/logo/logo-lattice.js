import React from 'react';
import PropTypes from 'prop-types';

const LogoLattice = ({ width = '100%', color = 'var(--color-text-default)', className, ariaLabel }) => (
  <svg width={width} fill={color} className={className} aria-label={ariaLabel} viewBox="0 0 2546 491" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2460 15V30H2488H2516V140V25... (truncated for brevity) ...976.78ZM73-1.99C88-1.99 88-7.35-.4-.3 .4-.7 .8-.3 .6-.2l-... (truncated for brevity) ...A.6Z"/>
  </svg>
);

LogoLattice.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string
};

export default LogoLattice;
