// 코드 4-5 속성값에 타입 정보가 없는 경우
import React from 'react';

function User({ type, age, male, onChangeName, onChangeTitle }) {
  function onClick1() {
    const msg = `type: ${type}, age: ${age ? age : '알수없음'}`;
    log(msg, { color: type === 'gold' ? 'red' : 'black' });
    // ...
  }
  function onClick2() {
    if (onChangeName) {
      onChangeName(name);
    }
    onChangeTitle(title);
    male ? goMalePage() : goFemalePage();
    // ...
  }
  // ...
  return <div></div>;
}

export default User;
