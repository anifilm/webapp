// 코드 3-25 하나의 useState 훅으로 여러 상태값 관리하기
import React, { useState } from 'react';

function MyComponent() {
  const [state, setState] = useState({ name: '', age: 0 });

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type="text"
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <input
        type="number"
        value={state.age}
        onChange={(e) => setState({ ...state, age: e.target.value })}
      />
    </div>
  );
}

export default MyComponent;
