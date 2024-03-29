import React from 'react';
import style from './Box3.module.scss';
import cn from 'classnames';

function Box({ size }) {
  /*
  if (size === 'big') {
    return <div className={cn(style.box, style.big)}>큰 박스</div>
  } else {
    return <div className={cn(style.box, style.small)}>작은 박스</div>
  }
  */

  const isBig = size === 'big';
  const label = isBig ? '큰 박스' : '작은 박스';

  return (
    <div className={cn(style.box, { [style.big]: isBig, [style.small]: !isBig })} >
      {label}
    </div>
  );
}

export default Box;
