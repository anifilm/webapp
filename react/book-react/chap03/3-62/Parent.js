// 코드 3-62 부모 컴포넌트에서 자식 컴포넌트 함수 호출하기
import React from 'react';

function Parent() {
  const profileRef = useRef();
  const onClick = () => {
    if (profileRef.current) {
      console.log('current name length: ', profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  };

  return (
    <div>
      <Profile ref={profileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  );
}

export default Parent;
