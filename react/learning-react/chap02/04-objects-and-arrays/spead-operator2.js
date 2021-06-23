// .reverse()가 peaks 배열을 변경함
var peaks = ['대청봉', '중청봉', '소청봉'];
var [last] = peaks.reverse();

console.log(last); // 소청봉
console.log(peaks.join(', ')); // 소청봉, 중청봉, 대청봉
