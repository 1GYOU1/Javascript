/*
평균 구하기

문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

입출력 예
arr	return
[1,2,3,4]	2.5
[5,5]	5
*/
(function () {
    let arr = [1,2,3,4,5]
    let sum = arr.reduce((p, c) => p + c)/arr.length
    console.log(sum)
})();

//프로그래머스 제출 답안
// function solution(arr) {
//     let answer = arr.reduce((p, c) => p + c)/arr.length
//     return answer;
// }