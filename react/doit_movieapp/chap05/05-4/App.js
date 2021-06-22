import React, { Component } from 'react';

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    // 영화 데이터 로딩
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'loading...' : 'We are ready!'}</div>;
  }
}

export default App;
