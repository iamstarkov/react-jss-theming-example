import React, { Component } from 'react';

import Theme from './Theme';
import Button from './Button';
import Background from './Background';

class App extends Component {
  render() {
    return (
      <Theme>
        <Background>
          <div>
            <Button>Hello</Button>
          </div>
        </Background>
      </Theme>
    );
  }
}

export default App;
