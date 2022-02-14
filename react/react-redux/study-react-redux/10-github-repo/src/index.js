import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import createStore from './store';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';

// history 인스턴스 생성
const history = createBrowserHistory();

// 스토어 생성
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
