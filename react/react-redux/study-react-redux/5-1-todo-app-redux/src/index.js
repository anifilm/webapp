import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

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

// 스토어 생성
const store = createStore(tasksReducer);

// 액션
const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task,
  },
});
// 액션
const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task,
  },
});
//store.dispatch(addTask('스토어 공부하기'));
console.log(store.getState());

function TodoApp({ store }) {
  const { task, tasks } = store.getState();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => store.dispatch(inputTask(e.target.value))}
      />
      <input
        type="button"
        value="추가"
        onClick={() => store.dispatch(addTask(task))}
      />
      <ul>
        {tasks.map(function (item, index) {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);
