// 객체 인자 구조분해
var lordify = ({ firstname }) => console.log(`캔터베리의 ${firstname}`);

var regularPerson = {
  firstname: '현석',
  lastname: '오',
};

lordify(regularPerson); // 캔터베리의 현석
