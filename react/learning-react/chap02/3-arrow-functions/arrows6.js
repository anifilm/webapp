// 화살표 함수
var lordify = (firstName, land) => {
  if (!firstName) {
    throw new Error('lordify에 이름을 넘겨야 합니다.');
  }
  if (!land) {
    throw new Error('영주에게는 영지가 있어야 합니다.');
  }
  return `${land}의 ${firstName}`;
};

console.log(lordify('이계영', '멜버른')); // 멜버른의 이계영
console.log(lordify('오현석')); // 오류 발생!
