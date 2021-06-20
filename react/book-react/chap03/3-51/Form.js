// 코드 3-51 ref 객체의 current 속성이 없는 경우
import React, { useRef, useState } from 'react';

function Form() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

export default Form;
