import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <h1>오류 페이지</h1>
      <Link to="/">돌아가기</Link>
    </div>
  );
}
