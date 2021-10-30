// 코드 3-11 JSX 코드가 createElement 함수를 사용하는 코드로 변경된 예
const element = <a href="http://google.com">click here</a>;
const element = React.createElement(
  'a',
  { href: 'http://google.com' },
  'click here',
);
