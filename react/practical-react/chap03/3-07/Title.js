// 코드 3-7 React.memo를 사용한 코드
import React from 'react';

function Title(props) {
  return <p>{props.title}</p>;
}

export default React.memo(Title);
