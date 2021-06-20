// 코드 3-37 콘텍스트 API를 사용하지 않은 코드
import React from 'react';

function App() {
  return (
    <div>
      <div>상단 메뉴</div>
      <Profile username="mike" />
      <div>하단 메뉴</div>
    </div>
  );
}

function Profile({ username }) {
  return (
    <div>
      <Greeting username={username} />
      {/* ... */}
    </div>
  );
}

function Greeting({ username }) {
  return <p>{`${username}님 안녕하세요.`}</p>;
}

export default App;
