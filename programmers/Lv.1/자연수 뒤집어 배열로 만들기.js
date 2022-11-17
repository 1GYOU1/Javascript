/*
<자연수 뒤집어 배열로 만들기>

문제 설명

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

입출력 예

n	return
12345	[5,4,3,2,1]
*/
(function () {
    // function solution(n) {
    let num = Math.abs(n);
    let str = String(num);
    let newArr = Array.from(str)
    let answer = newArr.reverse().map(Number);
    console.log(answer);
    // }
})();
