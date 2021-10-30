// 코드 3-12 컴포넌트 함수에서 조건부 렌더링을 하는 코드
import React from 'react';

function MyComponent({ title }) {
  return title.length > 0 && <p>{title}</p>;
}

export default MyComponent;
