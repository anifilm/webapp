// peaks를 스프레드 연산자로 복사한 후 reverse 수행
var peaks = ['대청봉', '중청봉', '소청봉'];
var [last] = [...peaks].reverse();

console.log(last); // 소청봉
console.log(peaks.join(', ')); // 대청봉, 중청봉, 소청봉
