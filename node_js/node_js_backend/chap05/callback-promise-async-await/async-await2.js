async function myName() {
  return 'Andy';
}

async function showName() { // 이름을 출력하는 함수
  const name = await myName();
  console.log(name);
}

console.log(showName()); // 콘솔에 이름 출력
