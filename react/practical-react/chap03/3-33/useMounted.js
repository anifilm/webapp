// 코드 3-33 useMounted 커스텀 훅
import React, { useEffect, useState } from 'react';

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export default useMounted;
