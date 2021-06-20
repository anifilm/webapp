// 코드 3-14 컴포넌트가 리액트 요소로 사용된 예
import React from 'react';

function Title({ title, color }) {
  return <p style={{ color }}>{title}</p>;
}

const element = <Title title="안녕하세요" color="blue" />;
console.log(element);

const consoleLogResult = {
  type: Title,
  props: { title: '안녕하세요', color: 'blue' },
  // ...
};

export default Title;
