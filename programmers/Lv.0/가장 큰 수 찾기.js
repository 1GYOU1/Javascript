/*
<가장 큰 수 찾기>

문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다.
입출력 예
array	result
[1, 8, 3]	[8, 1]
[9, 10, 11, 8]	[11, 2]
입출력 예 설명
입출력 예 #1

1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.
입출력 예 #2

9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.
*/

//제출답안 1
function solution(array) {
    let array2 = [...array]
    let newArr = [];
    let sArr = array.sort(function(a,b){
        return b-a
    });
    newArr.unshift(sArr[0]);
    newArr.push(array2.indexOf(newArr[0]))
    
    return newArr
}

//제출답안 2
function solution(array) {
    let array2 = [...array]
    let newArr = [];
    let sArr = array.sort(function(a,b){
        return b-a
    });
    newArr.unshift(sArr[0]);
    
    array2.forEach(function(el, idx){
    if(newArr[0] == el){
        newArr.push(idx)
    }
    })
    
    return newArr
}