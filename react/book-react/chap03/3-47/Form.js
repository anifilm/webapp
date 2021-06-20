// 코드 3-47 함수형 컴포넌트에서 ref 속성값을 사용한 예
import React, { useRef, useEffect } from 'react';

function TextInput({ inputRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  );
}

function Form() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <TextInput inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

export default Form;
