import React, { Component } from 'react';
import ChildProperty from './ChildProperty';

class App extends Component {
  render() {
    return (
      <div>
        <ChildProperty>
          <div><span>자식 노드</span></div>
        </ChildProperty>
      </div>
    );
  }
}

export default App;
