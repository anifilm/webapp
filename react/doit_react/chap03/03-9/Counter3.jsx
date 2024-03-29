import React, { Component } from 'react';

class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increateCount = this.increateCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  increateCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <br />
        <button onClick={this.increateCount} onMouseOut={this.resetCount}>
          카운트 증가
        </button>
        <p>버튼 밖으로 커서가 움직이면 0으로 초기화 됩니다.</p>
      </div>
    );
  }
}

export default Counter3;
