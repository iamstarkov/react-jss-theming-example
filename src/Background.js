import injectSheet from 'react-jss';
import React from 'react';

function Background({
  children,
  classes,
  className,
}) {
  return (
    <div className={`${classes.root} ${className}`}>
      {children}
    </div>
  );
}

const styles = ({ background: theme }) => {
  return {
    root: {
      composes: 'background',
      color: theme.color,
      backgroundColor: theme.backgroundColor,
    },
  };
};

export default injectSheet(styles)(Background);