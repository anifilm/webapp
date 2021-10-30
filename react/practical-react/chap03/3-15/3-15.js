// 코드 3-15 리액트 요소는 불변 객체이다
const element = <a herf="http://google.com">click here</a>;
elements.type = 'b'; // 에러 발생
