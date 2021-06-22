import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
  };

  componentDidMount() {
    // 영화 데이터 로딩
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'loading...' : 'We are ready!'}</div>;
  }
}

export default App;
