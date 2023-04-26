/*
<원소들의 곱과 합>

문제 설명
정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9
입출력 예
num_list	result
[3, 4, 5, 2, 1]	1
[5, 7, 8, 3]	0
입출력 예 설명
입출력 예 #1

모든 원소의 곱은 120, 합의 제곱은 225이므로 1을 return합니다.
입출력 예 #2

모든 원소의 곱은 840, 합의 제곱은 529이므로 0을 return합니다.
*/

//나의 풀이
function solution(num_list) {
    let num1 = 1;//곱하기
    let num2 = 0;//더하기
    for(let i=0;i<num_list.length;i++){
        num1 *= num_list[i]
        num2 += num_list[i]
    }
    return num1 > Math.pow(num2, 2) ? 0 : 1 
}

/*
for문으로 돌려서 곱하기 할당, 더하기 할당해서 변수에 넣어주고,
Math.pow를 사용하여 제곱값 구해서 비교
*/