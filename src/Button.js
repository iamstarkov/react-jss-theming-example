import React from 'react';
import injectSheet from 'react-jss';
/**
 * A material design button.
 *
 * @class
 * @extends PureComponent
 */
const Button = ({
  disabled,
  classes,
  className,
  children,
  noink,
  raised,
  onPress,
}) => (
  <button className={classes.button}>
    {children}
  </button>
);

const styles = theme => ({
  button: {
    extend: theme.button,
    userSelect: 'none',
    display: 'inline-block',
    position: 'relative',
    zIndex: 0,
    boxSizing: 'border-box',
    textTransform: 'uppercase',
    textAlign: 'center',
    outline: 0,
    border: 0,
    borderRadius: 2,
    margin: '0 8px',
    cursor: 'pointer',
    height: theme.height,
    minWidth: theme.minWidth,
    color: theme.color,
    backgroundColor: theme.bgColor,

    '&[aria-disabled=true]': {
      cursor: 'auto',
      pointerEvents: 'none',
      color: theme.disabledColor,
      backgroundColor: theme.disabledBgColor,
    },

    '&.button--raised': { backgroundColor: theme.raisedBgColor },

    '&[aria-disabled=true].button--raised': { backgroundColor: theme.raisedAndDisabledBgColor },
  },
})

export default injectSheet(styles)(Button);
