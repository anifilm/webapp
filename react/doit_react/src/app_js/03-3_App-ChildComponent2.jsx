import React, { Component } from 'react';
import ChildComponent2 from './chap03/03-3/ChildComponent2';

class App extends Component {
  render() {
    return (
      <div>
        <ChildComponent2
          objValue={{ age: '20살' }}
          requiredStringValue="문자"
        />
      </div>
    );
  }
}

export default App;
