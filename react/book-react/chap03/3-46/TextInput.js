// 코드 3-46 돔 요소에 접근하기 위해 ref 속성값을 사용한 예
import React, {useRef, useEffect} from 'react';

function TextInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  );
}

export default TextInput;
