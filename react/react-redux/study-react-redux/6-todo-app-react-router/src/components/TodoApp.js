import React from 'react';

export default function TodoApp({ task, tasks, inputTask, addTask, redirectToError }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => inputTask(e.target.value)}
      />
      <input
        type="button"
        value="추가"
        onClick={() => addTask(task)}
      />
      <ul>
        {tasks.map(function (item, index) {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button onClick={() => redirectToError()} >오류 페이지</button>
    </div>
  );
}
