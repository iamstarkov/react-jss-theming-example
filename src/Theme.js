import React from 'react';
import {
  ThemeProvider,
  JssProvider,
  jss,
} from 'react-jss';

const theme = {
  button: {},
  background: {},
};

/**
 * A React Component to supply a custom jss instance for our components and the theme.
 */
export default function Theme(props) {
  return (
    <ThemeProvider theme={theme}>
      <JssProvider jss={jss}>
        {props.children}
      </JssProvider>
    </ThemeProvider>
  );
}
