// 코드 3-4 컴포넌트의 상태값을 사용하는 코드
import React from 'react';

function MyComponent() {
  const [color, setColor] = useState('red');

  function onClick() {
    setColor('blue');
  }

  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      좋아요
    </button>
  );
}

export default MyComponent;
