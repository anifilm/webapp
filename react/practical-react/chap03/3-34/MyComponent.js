// 코드 3-34 훅 사용 시 규칙1을 위반한 경우
import React, { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState(0);
  if (value === 0) {
    const [v1, setV1] = useState(0);
  } else {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(0);
  }
  // ...
  for (let i = 0; i < value; i++) {
    const [num, setNum] = useState(0);
  }
  // ...
  function func1() {
    const [num, setNum] = useState(0);
  }
  // ...
  return <div></div>;
}

export default MyComponent;
