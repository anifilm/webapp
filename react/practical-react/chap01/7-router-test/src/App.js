// 코드 1-45 react-router-dom으로 작성한 단일 페이지 애플리케이션
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Rooms from './Rooms';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="/rooms">방 소개</Link>
        <br />
        <Route path="/" component={Home} exact />
        <Route path="/photo" component={Photo} />
        <Route path="/rooms" component={Rooms} />
      </div>
    </BrowserRouter>
  );
}

function Home({ match }) {
  return <h2>이 곳은 홈페이지입니다.</h2>;
}
function Photo({ match }) {
  return <h2>여기서 사진을 감상하세요.</h2>;
}

export default App;
