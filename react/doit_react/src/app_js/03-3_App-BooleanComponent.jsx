import React, { Component } from 'react';
import BooleanComponent from './chap03/03-3/BooleanComponent';

class App extends Component {
  render() {
    return (
      <div>
        <div><b>지루할 때:</b><BooleanComponent bored /></div>
        <div><b>즐거울 때:</b><BooleanComponent /></div>
      </div>
    );
  }
}

export default App;
