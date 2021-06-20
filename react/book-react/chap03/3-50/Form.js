// 코드 3-50 ref 속성값으로 고정된 함수 입력하기
import React, { useCallback, useState } from 'react';

function Form() {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);

  const setInitialText = useCallback((ref) => ref && setText(INITIAL_TEXT), []);

  return (
    <div>
      {showText && (
        <input
          type="text"
          ref={setInitialText}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  );
}

const INITIAL_TEXT = '안녕하세요';

export default Form;
