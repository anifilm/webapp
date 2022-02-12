import React, { Component } from 'react';
import './App.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        //{ id: 1, title: 'Todo 1번째' },
        //{ id: 2, title: 'Todo 2번째' },
        { id: 0, title: '기본값' },
      ],
      uniqueId: 1,
    };
    //this.addTodo = this.addTodo.bind(this);
    //this.resetTodo = this.resetTodo.bind(this);
  }

  addTodo = (title) => {
    const { tasks, uniqueId } = this.state;
    tasks.push({
      title,
      id: uniqueId,
    });
    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }

  resetTodo = () => {
    this.setState({
      tasks: [],
    });
  }

  render() {
    /* TODO: 이후에 상태로 관리한다.
    const tasks = [
      { id: 1, title: 'Todo 1번째' },
      { id: 2, title: 'Todo 2번째' },
    ];*/
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>초기화</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
