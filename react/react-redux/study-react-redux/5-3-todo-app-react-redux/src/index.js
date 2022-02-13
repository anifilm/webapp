import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

// 스토어 생성
const store = createStore(tasksReducer);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
