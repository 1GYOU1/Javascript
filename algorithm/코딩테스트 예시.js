// 프론트엔드 코딩테스트 예시 문제

//1. 주어진 배열에서 가장 큰 수를 찾는 함수를 작성하시오.
function findLargest(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
    max = arr[i];
    }
}
return max;
}

//2. 숫자로 이루어진 배열이 주어졌을 때, 중복된 숫자를 모두 제거한 배열을 반환하는 함수를 작성하시오.
function removeDuplicates(arr) {
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
    uniqueArr.push(arr[i]);
    }
}
return uniqueArr;
}

//3. 두 개의 문자열이 주어졌을 때, 두 문자열에 공통으로 포함된 문자를 출력하는 함수를 작성하시오.
function findCommonChars(str1, str2) {
let commonChars = [];
for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (str2.indexOf(char) !== -1 && commonChars.indexOf(char) === -1) {
    commonChars.push(char);
    }
}
return commonChars;
}

//4. 정수 배열과 정수 타겟이 주어졌을 때, 배열에서 합이 타겟과 같은 두 수의 인덱스를 반환하는 함수를 작성하시오.
function findTargetIndices(arr, target) {
let map = {};
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let diff = target - num;
    if (map[diff] !== undefined) {
    return [map[diff], i];
    } else {
    map[num] = i;
    }
}
return null;
}
  
// 5. 정렬되지 않은 정수 배열과 정수 타겟이 주어졌을 때, 배열에서 합이 타겟과 가장 가까운 두 수의 인덱스를 반환하는 함수를 작성하시오.
function findClosestTargetIndices(arr, target) {
let minDiff = Infinity;
let closestIndices = null;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
    let sum = arr[i] + arr[j];
    let diff = Math.abs(sum - target);
    if (diff < minDiff) {
        minDiff = diff;
        closestIndices = [i, j];
    }
    }
}
return closestIndices;
}