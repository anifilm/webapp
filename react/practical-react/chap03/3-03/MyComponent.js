// 코드 3-3 컴포넌트의 상태값을 사용하지 않은 코드
import React from 'react';

let color = 'red';

function MyComponent() {
  function onClick() {
    color = 'blue';
  }

  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      좋아요
    </button>
  );
}

export default MyComponent;
