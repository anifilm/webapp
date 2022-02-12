import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';

// 스토어 생성
const store = createStore(tasksReducer);

function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);
