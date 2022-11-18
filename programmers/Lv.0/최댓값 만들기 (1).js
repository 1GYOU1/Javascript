/*
<최댓값 만들기 (1)>

문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers의 길이 ≤ 100
입출력 예
numbers	result
[1, 2, 3, 4, 5]	20
[0, 31, 24, 10, 1, 9]	744
입출력 예 설명
입출력 예 #1

두 수의 곱중 최댓값은 4 * 5 = 20 입니다.
입출력 예 #1

두 수의 곱중 최댓값은 31 * 24 = 744 입니다.
*/

//제출답안 1
/*
function solution(numbers) {
    newArr = [];
    numbers.sort(function(a, b){
        return b-a
    })
    numbers.forEach(function(el,idx){
        if(idx == 0 || idx == 1){
            return newArr.push(el)
        }
    })
    return newArr[0]*newArr[1]
}
*/

//제출답안 2
function solution(numbers) {
    numbers.sort(function(a, b){
        return b-a
    })
    return numbers[0]*numbers[1]
}

console.log(solution([1, 2, 3, 4, 5]))
console.log(solution([0, 31, 24, 10, 1, 9]))