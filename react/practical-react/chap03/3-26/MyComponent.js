// 코드 3-26 상태값 변경이 배치로 처리되지 않는 경우
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onClick() {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);
  console.log('render called');

  return (
    <div>
      <h2>{count}</h2>
      <button>증가</button>
    </div>
  );
}

export default MyComponent;
