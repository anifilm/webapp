import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
  return (
    <div>
    안녕하세요, 제 이름은 {name}입니다. <br />
    children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름'
}

// props의 타입 검증
MyComponent.propTypes = {
  name: PropTypes.string
};

export default MyComponent;
