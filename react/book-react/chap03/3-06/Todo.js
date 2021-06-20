// 코드 3-6 부모 컴포넌트에서 속성값을 내려 주는 코드
import React from 'react';

function Todo() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Title title={`현재 카운트: ${count}`} />
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default Todo;
