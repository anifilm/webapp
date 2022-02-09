// 객체를 인자로 받는 함수
var lordify = (regularPerson) => {
  console.log(`캔터베리의 ${regularPerson.firstname}`);
};

var regularPerson = {
  firstname: '현석',
  lastname: '오',
};

lordify(regularPerson); // 캔터베리의 현석
