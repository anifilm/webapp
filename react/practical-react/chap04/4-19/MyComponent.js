// 코드 4-19 속성값으로부터 새로운 상태값을 만드는 예
import React, { useState } from 'react';

function MyComponent({ todos }) {
  const [doneList, setDoneList] = useState(todos.filter((item) => item.done));

  function onChangeName(key, name) {
    setDoneList(
      doneList.map((item) => (item.key === key ? { ...item, name } : item)),
    );
  }
  // ...

  return <div></div>;
}

export default MyComponent;
