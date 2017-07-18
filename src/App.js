import React from 'react';
import { ThemeProvider } from 'react-jss';

import Button from './Button';
import Background from './Background';

const theme = {
  button: {},
  background: {},
  color: 'tomato',
  bgColor: '#fafafa',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Background>
      <div>
        <Button>Hello</Button>
      </div>
    </Background>
  </ThemeProvider>
);

export default App;
