import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import classNames from 'classnames';
import styles from './styles';
import { withStyles } from '@material-ui/core';

function ToolbarLeft({ children, className, classes }) {
  return (
    <div className={classNames(classes.toolbarLeft, className)}>{children}</div>
  );
}

ToolbarLeft.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToolbarLeft);
