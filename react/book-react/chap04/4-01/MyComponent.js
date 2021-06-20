// 코드 4-1 추천하는 컴포넌트 파일 작성 예
import React from 'react';

MyComponent.propTypes = {
  // ...
};

export default function MyComponent({ prop1, prop2 }) {
  // ...
}

const COLUMNES = [
  { id: 1, name: 'phoneNumber', width: 200, color: 'white' },
  { id: 2, name: 'city', width: 100, color: 'gray' },
  // ...
];

const URL_PRODUCT_LIST = '/api/products';

function getTotalPrice({ price, total }) {
  // ...
}
