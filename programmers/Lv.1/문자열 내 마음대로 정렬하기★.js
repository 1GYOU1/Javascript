/*
<문자열 내 마음대로 정렬하기>

문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
입출력 예
strings	n	return
["sun", "bed", "car"]	1	["car", "bed", "sun"]
["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
입출력 예 설명
입출력 예 1
"sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

입출력 예 2
"abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.
*/

//나의 풀이
function solution(strings, n) {
    let arr = [];
    let result = [];
    strings.map((el, idx)=>{
        arr.push(el[n] + el);
        arr.sort();
    })
    arr.forEach((el, idx) => {
        result.push(el.substring(1));
    });
    return result;
}
/*
arr 배열에 각 문자열의 n번째 글자와 해당 문자열을 합친 문자열을 담습니다. 이렇게 함으로써 arr 배열의 원소는 [n번째 글자 + 문자열] 형태가 됩니다.

이어서 arr 배열을 sort() 메소드를 사용하여 오름차순으로 정렬합니다. 
이때, sort() 메소드는 문자열의 경우 문자열의 유니코드 순서를 따르므로, n번째 글자가 동일한 경우 문자열의 사전순으로 정렬됩니다.

마지막으로, result 배열에 정렬된 arr 배열의 원소를 substring() 메소드를 사용하여 n번째 글자를 제외한 문자열만 추가합니다. 
이렇게 함으로써 result 배열은 strings 배열에서 n번째 글자를 기준으로 오름차순 정렬된 문자열 배열이 됩니다.

예를 들어, strings 배열이 ["sun", "bed", "car"]이고, n이 1일 때, 이 함수는 다음과 같이 동작합니다

1. arr 배열에 각 문자열의 n번째 글자와 해당 문자열을 합친 문자열을 담습니다.
arr = ["u" + "sun", "e" + "bed", "a" + "car"]
2. arr 배열을 오름차순으로 정렬합니다.
arr = ["a" + "car", "e" + "bed", "u" + "sun"]
3. result 배열에 정렬된 arr 배열의 원소를 substring() 메소드를 사용하여 n번째 글자를 제외한 문자열만 추가합니다.
result = ["car", "bed", "sun"]

따라서, 이 함수의 반환 값은 ["car", "bed", "sun"]이 됩니다.
*/

//다른 참고 풀이
function solution(strings, n) {
    strings.sort((a, b) => {
      if (a[n] === b[n]) {
        return a.localeCompare(b);
      }
      return a[n].localeCompare(b[n]);
    });
    return strings;
}

/*
먼저 a와 b의 n번째 문자가 같은지 확인합니다.
같다면 localeCompare() 메서드를 이용하여 a와 b를 비교합니다. 
(localeCompare() 메서드는 사전순으로 문자열을 비교할 수 있도록 해주는 메서드입니다.)
다르다면 a의 n번째 문자와 b의 n번째 문자를 비교하여 정렬합니다.
*/

//다른 참고 풀이
function solution(strings, n) {
    return strings.sort((a, b) => {
      if (a[n] > b[n]) {
        return 1;
      } else if (a[n] < b[n]) {
        return -1;
      } else {
        return a.localeCompare(b);
      }
    });
}
/*
sort() 함수에 비교 함수를 전달하여 각 문자열을 비교하고 정렬 순서를 결정합니다. 이때 a[n]과 b[n]으로 각 문자열의 n번째 인덱스 값을 비교하고 있습니다.

만약 n번째 인덱스의 값이 같은 경우에는 localeCompare() 함수를 사용하여 사전 순서를 비교하고 있습니다.

따라서, 위 코드를 실행하면 주어진 조건에 따라 문자열이 n번째 인덱스를 기준으로 오름차순으로 정렬된 결과를 반환
*/