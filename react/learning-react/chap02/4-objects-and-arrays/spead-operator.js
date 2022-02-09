// 스프레드 연산자
var peaks = ['대청봉', '중청봉', '소청봉'];
var canyons = ['천불동계곡', '가야동계곡'];
var seoraksan = [...peaks, ...canyons];

console.log(seoraksan.join(', '));
