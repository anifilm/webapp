// 코드 3-12 리액트 요소의 구조
const element = (
  <a key="key1" style={{ width: 100 }} href="http://google.com">
    click here
  </a>
);
console.log(element);

const consoleLogResult = {
  type: 'a',
  key: 'key1',
  ref: null,
  props: {
    href: 'http://google.com',
    style: {
      width: 100,
    },
    children: 'click here',
  },
  // ...
};
