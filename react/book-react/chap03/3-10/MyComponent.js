// 코드 3-10 상태값을 직접 수정하는 코드
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState({ value: 0 });

  function onClick() {
    count.value = 2;
    // ...
    setCount(count);
    // ...
  }
  return (
    <div>
      {/* ... */}
    </div>
  );
}

export default MyComponent;
