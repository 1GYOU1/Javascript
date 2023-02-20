/*
<7의 개수>

문제 설명
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 100,000
입출력 예
array	result
[7, 77, 17]	4
[10, 29]	0
입출력 예 설명
입출력 예 #1

[7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.
입출력 예 #2

[10, 29]에는 7이 없으므로 0을 return 합니다.
*/

//제출 답안1
function solution(array) {
    let resultArr = [];
    array.join('').split('').forEach(function(el){
        if(el == '7'){
            return resultArr.push(el)
        }
    })
    return resultArr.length
}

//제출 답안2
function solution(array) {
    return array.join('').split('7').length-1;
}
/*
문자열 7을 기준으로 잘라서 7이 있었던 자리를 빈배열로 만들어낸다. 
해당 배열의 갯수는 곧 7이 있었던 자리라는 뜻. 
한개의 배열을 '7' 기준으로 잘라서 결과값 배열의 길이가 1 더 많음. (하나의 사과를 한번의 칼질으로 2조각 내는 방식)
그러므로 모든 배열 갯수에 -1을 해주기.
*/