// 코드 3-32 useWindowWidth 커스텀 훅
import React, { useEffect, useState } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return width;
}

function WidthPrinter() {
  const width = useWindowWidth();

  return <div>{`width is ${width}`}</div>;
}

export default WidthPrinter;
