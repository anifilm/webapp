// 코드 3-8 사용된 컴포넌트 별로 관리되는 상태값
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent />
      <MyComponent />
    </div>
  );
}

export default App;
