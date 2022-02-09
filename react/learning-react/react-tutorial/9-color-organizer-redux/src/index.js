import React from 'react'
import reactDOM from 'react-dom';
import App from './components/App';
import storeFactory from './store';

const store = storeFactory();

window.React = React;
window.store = store;

const render = () =>
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('react-container'),
  );

store.subscribe(render);
render();
