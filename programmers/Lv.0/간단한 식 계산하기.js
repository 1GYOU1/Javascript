/*
<간단한 식 계산하기>

문제 설명
문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

제한사항
0 ≤ a, b ≤ 40,000
0을 제외하고 a, b는 0으로 시작하지 않습니다.
입출력 예
binomial	result
"43 + 12"	55
"0 - 7777"	-7777
"40000 * 40000"	1600000000
입출력 예 설명
입출력 예 #1

예제 1번의 binomial은 "43 + 12"로 이 식을 계산한 결과인 43 + 12 = 55를 return 합니다.
입출력 예 #2

예제 2번의 binomial은 "0 - 7777"로 이 식을 계산한 결과인 0 - 7777 = -7777을 return 합니다.
입출력 예 #3

예제 3번의 binomial은 "40000 * 40000"으로 이 식을 계산한 결과인 40000 × 40000 = 1600000000을 return 합니다.
*/

//나의 풀이
function solution(binomial) {
    let arr = binomial.split(' ')
    let result = 0;
    if(binomial.includes('+')){
        return Number(arr[0]) + Number(arr[2])
    }else if(binomial.includes('-')){
        return Number(arr[0]) - Number(arr[2])
    }else if(binomial.includes('*')){
        return Number(arr[0]) * Number(arr[2])
    }
}

//공백을 기준으로 잘라서 배열로 만들고, 맨 첫번째 배열 요소와 마지막 요소를 includes로 구분하고 이에 맞는 연산자로 계산하여 출력.