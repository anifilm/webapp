// 코드 3-22 상태값 변경 함수를 연속해서 호출하는 코드
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState({ value: 0 });

  function onClick() {
    // setCount의 상태값 변경 함수가 비동기로 동작하기 때문에
    // 의도와 다르게 1만큼만 증가한다.
    setCount({ value: count.value + 1 });
    setCount({ value: count.value + 1 });
  }
  console.log('render called');

  return (
    <div>
      <h2>{count.value}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default MyComponent;
