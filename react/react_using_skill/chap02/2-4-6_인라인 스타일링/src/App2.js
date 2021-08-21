import React from 'react';

function App() {
  const name = '리액트';
  return (
    <div
      style={{
        // background-color는 backgroundColor와 같이 -(하이픈)이 사라지고 카멜 표기법으로 작성
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16, // 단위를 생략하면 px로 지정됨
      }}
    >
      {name}
    </div>
  );
}

export default App;
