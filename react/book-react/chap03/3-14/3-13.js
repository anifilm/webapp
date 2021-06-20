// 코드 3-13 JSX 코드에서 태그 사이에 표현식을 넣은 코드
const element = <h1>제 나이는 {20 + 5}세 입니다.</h1>;
console.log(element);

const consoleLogResult = {
  type: 'h1',
  props: { children: ['제 나이는 ', 25, '세 입니다.'] },
  // ...
};
