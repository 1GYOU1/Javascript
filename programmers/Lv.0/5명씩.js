/*
    <5명씩>

    문제 설명
    최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

    제한사항
    5 ≤ names의 길이 ≤ 30
    1 ≤ names의 원소의 길이 ≤ 10
    names의 원소는 영어 알파벳 소문자로만 이루어져 있습니다.
    입출력 예
    names	result
    ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]	["nami", "vex"]
    입출력 예 설명
    입출력 예 #1

    앞에서부터 5명씩 두 그룹으로 묶을 수 있습니다. ["nami", "ahri", "jayce", "garen", "ivern"], ["vex", "jinx"] 이 두 그룹에서 가장 앞에 서있는 사람들의 이름을 담은 리스트인 ["nami", "vex"]를 return합니다.
*/

//나의 풀이
const solution = names => {
    const arrLength = names.length;
    let resultArr = [];
    if(arrLength%5 == 0){
        for(let i=0;i<parseInt(arrLength/5);i++){
        resultArr.push(names[i*5])
    }
        return resultArr;
    }else{
        for(let i=0;i<parseInt(arrLength/5);i++){
            resultArr.push(names[i*5])
        }
        resultArr.push(names[arrLength - (arrLength%5)])
        return resultArr;   
    }
}

/*
    names의 원소를 5로 나눈 몫 만큼 for문으로 돌려서 새 배열에 넣어주고,
    나머지가 있는 경우는 따로 추가해서 넣어줌.
*/

//다른 사람의 풀이 참고
function solution(names) {
    let result = [];

    for(let i = 0; i < names.length; i++) {
        if(i%5 == 0) {
            result.push(names[i]);
        }
    }

    return result;
}

/*
    배열의 index를 5로 나눠서 나머지가 0이면 새 배열에 넣어주는 더 간단한 방식.
*/