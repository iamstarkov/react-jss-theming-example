import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
/**
 * A material design button.
 *
 * @class
 * @extends PureComponent
 */
export class Button extends PureComponent {
  static styles({ button: theme }) {
    console.log('Button style function');

    return {
      button: {
        composes: 'button',
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
    };
  }

  render() {
    const {
      disabled,
      classes,
      className,
      children,
      noink,
      raised,
      onPress,
      ...props
    } = this.props;

    console.log(classes);

    return (
      <button className={classes.button}>
        {children}
      </button>
    );
  }
}

export default injectSheet(Button.styles)(Button);
