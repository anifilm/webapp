// 코드 3-48 forwardRef 함수를 사용하는 코드
import React, { useRef, useEffect } from 'react';

const TextInput = React.forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
    <button>저장</button>
  </div>
));

function Form() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <TextInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

export default Form;
