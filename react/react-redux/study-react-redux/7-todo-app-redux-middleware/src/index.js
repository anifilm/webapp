import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Todo from './components/Todo';

// 스토어 초기 상태 정의
const initialState = {
  task: '',
  tasks: [],
};

// 리듀서 정의
function tasksReducer(state=initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task]),
      };
    default:
      return state;
  }
}

// 로그 미들웨어
const logger = (store) => (next) => (action) => {
  // 액션 적용 전의 상태 출력
  console.log(store.getState());

  // 어떤 액션이 적용됐는지 출력
  console.log(action);

  const result = next(action);

  // 액션 적용 후의 상태 출력
  console.log(store.getState());
  console.log('------------------');

  // 특별히 값을 리턴할 필요가 없으므로 result를 그대로 리턴
  return result;
};

// 스토리지 미들웨어 (현재 상태를 로컬 스토리지에 저장)
const storageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
  return result;
};
// 로컬 스토리지에 저장된 내용을 불러옴
const savedState = JSON.parse(localStorage.getItem('app-state'));

// 스토어 생성
const store = createStore(
  tasksReducer,
  savedState ? savedState : tasksReducer(undefined, { type: 'Init' }),
  applyMiddleware(logger, storageMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
);
