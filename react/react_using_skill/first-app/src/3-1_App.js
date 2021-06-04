import React, { Component } from 'react';
import './App.css';

/* 클래스형 컴포넌트 */
class App extends Component {
  render() {
    const name = '리액트';
    return <div className="react">{name}</div>;
  }
}

export default App;
