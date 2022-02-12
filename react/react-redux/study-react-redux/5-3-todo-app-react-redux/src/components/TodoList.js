import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    // tasks 내부의 todo를 todoItem 컴포넌트로 넣기
    // list 변수에는 TodoItem 요소가 배열로 들어 있음
    const list = this.props.tasks.map((todo) => {
      return <TodoItem {...todo} key={todo.id} />;
    });

    return (
      <div className="TodoList">
        <ul>{list}</ul>
      </div>
    );
  }
}

export default TodoList;
