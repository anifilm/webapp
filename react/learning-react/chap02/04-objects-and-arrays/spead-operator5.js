// 스프레드 연산자로 인자를 배열로 바꾸기
// 스프레드 연산자로 인자 중 일부를 배열로 받기
function directions(...args) {
  var [start, ...remaining] = args;
  var [finish, ...stops] = remaining.reverse();

  console.log(`${args.length} 도시를 운행합니다.`);
  console.log(`${start}에서 출발합니다.`);
  console.log(`목적지는 ${finish}입니다.`);
  console.log(`중간에 ${stops.length}군데 들립니다.`);
}

directions('서울', '수원', '천안', '대전', '대구', '부산');
