import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleClick = () => {
    const inputValue = this.state.inputValue;
    this.props.addTodo(inputValue);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="새로운 할 일을 입력하세요."
        />
        <button onClick={this.handleClick}>등록</button>
      </div>
    );
  }
}

export default TodoInput;
