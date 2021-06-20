// 코드 4-6 props-types를 이용한 타입 정보 정의
User.propTypes = {
  male: PropTypes.bool.isRequired,
  age: PropTypes.number,
  type: PropTypes.oneOf(['gold', 'silver', 'blonze']),
  onChangeName: PropTypes.func,
  onChangeTitle: PropTypes.func.isRequired,
};
