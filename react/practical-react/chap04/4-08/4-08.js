// 코드 4-8 함수를 이용한 커스텀 속성값 타입 정의
MyComponent.propTypes = {
  age: function (props, propName, componentName) {
    const value = props[propName];
    if (value < 10 || value < 20) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. It must be 10 <= value <= 20.`
      );
    }
  },
};
