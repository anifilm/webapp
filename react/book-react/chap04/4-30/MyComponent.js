// 코드 4-30 이전 상태값을 기반으로 다음 상태값을 계산하는 경우
import React, { useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function onClick() {
      setCount(count + 1);
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [count]);
  // ...

  return <div></div>;
}

export default MyComponent;
