import React from 'react';
import './App.css';

import MyComponent from './MyComponent';

const App = () => {
  const name = '리액트';
  return (
    <div>
      <div className="react">{name}</div>
      <MyComponent name={name} />
    </div>
  );
};

export default App;
