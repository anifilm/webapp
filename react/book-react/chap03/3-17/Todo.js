// 코드 3-17 실제 돔으로 만드는 과정을 보여 줄 예제 코드
import React, { useState } from 'react';

function Todo({ title, desc }) {
  const [priority, setPriority] = useState('high');

  function onClick() {
    setPriority(priority === 'high' ? 'low' : 'high');
  }

  return (
    <div>
      <Title title={title} />
      <p>{desc}</p>
      <p>{priority === 'high' ? '우선순위 높음' : '우선순위 낮음'}</p>
      <button onClick={onClick}>우선순위 변경</button>
    </div>
  );
}

const Title = React.memo(({ title }) => {
  return <p style={{ color: 'blue' }}>{title}</p>;
});

ReactDOM.render(
  <Todo
    title="리액트 공부하기"
    desc="실전 리액트 프로그래밍을 열심히 읽는다."
  />,
  document.getElementById('root'),
);

export default Todo;
