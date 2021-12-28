// 프로토타입을 이용한 객체 생성

function func() {}
console.log(func.prototype);

func.prototype.name = 'gildong';
console.log(func.prototype);