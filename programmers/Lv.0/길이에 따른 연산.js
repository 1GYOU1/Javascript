/*
<길이에 따른 연산>

문제 설명
정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 20
1 ≤ num_list의 원소 ≤ 9
입출력 예
num_list	result
[3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]	51
[2, 3, 4, 5]	120
입출력 예 설명
입출력 예 #1

리스트의 길이가 13이므로 모든 원소의 합인 51을 return합니다.
입출력 예 #2

리스트의 길이가 4이므로 모든 원소의 곱인 120을 return합니다.
*/

//나의 풀이
function solution(num_list) {
    let result_1 = 1;//곱셈
    let result_2 = 0;//덧셈
    if(num_list.length <= 10){
        for(let i=0;i<num_list.length;i++){
            result_1 *= num_list[i]
        }
    }else{
        for(let a=0;a<num_list.length;a++){
            result_2 += num_list[a]
        }
    }
    return result_2 == 0 ? result_1 : result_2
}