// 코드 4-23 의존성 배열을 잘못 관리한 경우
import React, { useEffect } from 'react';

function MyComponent() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const id = setInterval(() => console.log(value1, value2), 1000);
    return () => clearInterval(id);
  }, [value1]);

  return (
    <div>
      <button onClick={() => setValue1(value1 + 1)}>value1 증가</button>
      <button onClick={() => setValue2(value2 + 1)}>value2 증가</button>
    </div>
  );
}

export default MyComponent;
