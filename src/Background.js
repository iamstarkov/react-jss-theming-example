import injectSheet from 'react-jss';
import React from 'react';

const Background = ({
  children,
  classes,
  className,
}) => (
  <div className={`${classes.bg} ${className}`}>
    {children}
  </div>
);

const styles = theme => ({
  bg: {
    extend: theme.background,
    color: theme.color,
    backgroundColor: theme.bgColor,
  },
});

export default injectSheet(styles)(Background);
