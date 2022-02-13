import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import createStore from './store';
import createBrowserHistory from 'history/createBrowserHistory';

import TodoApp from './containers/TodoApp';
import Error from './components/Error';

// history 인스턴스 생성
const history = createBrowserHistory();

// 스토어 생성
const store = createStore(history);

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        {/* 라우팅하기 */}
        <Route path="/" component={TodoApp} />
        <Route path="/error" component={Error} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
