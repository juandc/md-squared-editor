import React from 'react';
import PropTypes from 'prop-types';

function ButtonGroup({ children, className }) {
  return <div className={className}>{children}</div>;
}

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ButtonGroup;
