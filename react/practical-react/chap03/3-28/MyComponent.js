// 코드 3-28 useEffect 훅의 사용 예
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
  });

  return <button onClick={() => setCount(count + 1)}>increase</button>
}

export default MyComponent;
