// 코드 3-19 Todo 컴포넌트 함수 호출 결과
const elementTree = {
  type: 'div',
  props: {
    children: [
      {
        type: Title,
        props: { title: '리액트 공부하기' },
        // ...
      },
      {
        type: 'p',
        props: { children: '실전 리액트 프로그램을 열심히 읽는다.' },
        // ...
      },
      {
        type: 'p',
        props: { children: '우선순위 높음' },
        // ...
      },
      {
        type: 'button',
        props: {
          onClick: function () {
            /* Todo 컴포넌트의 onClick 함수 */
          },
          children: '우선순위 변경',
        },
        // ...
      },
    ],
  },
  // ...
};
