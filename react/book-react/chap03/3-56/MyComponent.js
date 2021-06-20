// 코드 3-56 useMemo 훅의 사용 예
import React, { useMemo } from 'react';
import { runExpensiveJob } from './util';

function MyComponent({ v1, v2 }) {
  const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);

  return <p>{`value is ${value}`}</p>;
}

export default MyComponent;
