// 코드 3-13 리액트 포털을 사용한 코드
import React from 'react';

function Modal({ title, desc }) {
  const domNode = document.getElementById('modal');

  return ReactDom.createPortal(
    <div>
      <p>{title}</p>
      <p>{desc}</p>
    </div>,
    domNode,
  );
}

export default Modal;
