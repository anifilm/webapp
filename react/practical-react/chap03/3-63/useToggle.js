// 코드 3-63 useDebugValue 훅을 사용하는 코드
import { useDebugValue, useState } from 'react';

function useToggle() {
  const [value, setValue] = useState(initialValue);
  const onToggle = () => setValue(!value);
  useDebugValue(value ? 'on' : 'off');
  return [value, onToggle];
}

export default useToggle;
