var frederick = {
  name: 'Frederick Douglass',
  canRead: false,
  canWrite: false,
};

function selfEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;
}

/*
  순수하지 않은 함수이다. 인자도 없고, return 문도 없으며,
  원본 객체를 변화시킨다.
*/

selfEducate();

console.log(frederick);
