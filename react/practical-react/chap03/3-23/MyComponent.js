// 코드 3-23 상태값 변경 함수의 인수로 함수를 사용한 코드
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  function onClick() {
    // setCount가 두번 실행 되므로 2씩 증가
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  console.log('render called');

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default MyComponent;
