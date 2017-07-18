import React from 'react';
import { ThemeProvider, JssProvider } from 'react-jss';

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
    <JssProvider>      
      <Background>
        <div>
          <Button>Hello</Button>
        </div>
      </Background>
    </JssProvider>
  </ThemeProvider>
);

export default App;
