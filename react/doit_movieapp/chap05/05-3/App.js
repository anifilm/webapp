import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor!');
    this.state = {
      count: 0
    };
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }

  // 클래스 메서드 정의시 this를 사용하기 위해서는 생성자에서 메서드 bind 필요
  // 화살표 함수로 정의시 생성자 메서드 bind 정의 없이 this 사용 가능
  add() {
    console.log('add');
    //console.log(this);
    this.setState({count: this.state.count + 1});
  }
  minus() {
    console.log('minus');
    //console.log(this);
    this.setState({count: this.state.count - 1});
  }

  componentDidMount() {
    console.log('component rendered!');
  }
  componentDidUpdate() {
    console.log('component updated!');
  }
  componentWillUnmount() {
    console.log('component unmounted!');
  }

  render() {
    console.log('render!');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
