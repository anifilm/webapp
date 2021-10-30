// 코드 3-61 부모 컴포넌트에서 접근 가능한 함수를 구현하기
import React, { forwardRef, useState, useImperativeHandle } from 'react';

function Profile(props, ref) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: value => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      {/* ... */}
    </div>
  );
}

export default forwardRef(Profile);
