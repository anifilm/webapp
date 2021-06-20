// 코드 3-30 useEffect 훅을 이용해서 이벤트 처리 함수를 등록하고 해제하기
import React, { useEffect, useState } from 'react';

function WidthPrinter() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return <div>{`width is ${width}`}</div>;
}

export default WidthPrinter;
