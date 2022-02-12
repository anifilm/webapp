import React from 'react';
import { inputTask, addTask } from '../actions/tasks';

export default function TodoApp({ store }) {
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
