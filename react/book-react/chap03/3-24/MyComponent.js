// 코드 3-24 호출 순서가 보장하는 상태값 변경 함수
import React, { useState } from 'react';

function MyComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function onClick() {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  }
  const result = count1 >= count2;
  console.log(result);

  return (
    <div>
      <h2>{count1}</h2>
      <h2>{count2}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default MyComponent;
