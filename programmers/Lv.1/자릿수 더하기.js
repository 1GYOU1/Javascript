/*
<자릿수 더하기>

문제 설명

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

입출력 예

N	answer
123	6
987	24

입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
*/

(function () {
    let n=123;

    let arrChange = (n + '').split('');
    // console.log(arrChange)//['1', '2', '3']

    const toNumbers = arr => arr.map(Number);
    let numberArr = toNumbers(arrChange);

    // console.log(numberArr)//[1, 2, 3]

    let sum = 0;

    for(let i = 0; i < numberArr.length; i++){
        sum += numberArr[i];
    }
    console.log(sum)//6

})();

//--------------------------------

//정답 제출 ↓↓

//풀이1)
// function solution(n){
//     let arrChange = (n + '').split('');//['1', '2', '3']
//     let toNumbers = arr => arr.map(Number);
//     let numberArr = toNumbers(arrChange);//[1, 2, 3]
//     let sum = 0;

//     for(let i = 0; i < numberArr.length; i++){
//         sum += numberArr[i];
//     }

//     return sum;
// }


//풀이2)
// function solution(n) {
//     return String(n).split('').map(Number).reverse();
// }