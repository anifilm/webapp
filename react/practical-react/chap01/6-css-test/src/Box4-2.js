// 코드 1-42 동적 스타일이 적용된 Box4-2.js
import React from 'react';
import styled from 'styled-components';

const BoxCommon = styled.div`
  width: ${props => (props.isBig ? 200 : 100)}px;
  height: 50px;
  background: red;
  color: white;
  margin: 10px;
`;

function Box({ size }) {
  /*
  if (size === 'big') {
    return <BoxCommon isBig={true}>큰 박스</BoxCommon>
  } else {
    return <BoxCommon isBig={false}>작은 박스</BoxCommon>
  }
  */
  const isBig = size === 'big';
  const label = isBig ? '큰 박스' : '작은 박스';

  return <BoxCommon isBig={isBig}>{label}</BoxCommon>;
}

export default Box;
