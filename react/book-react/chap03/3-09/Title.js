// 코드 3-9 속성값 변경을 시도하는 코드
import React from 'react';

function Title(props) {
  props.title = 'abc';
  return <p>{props.title}</p>;
}

export default Title;
