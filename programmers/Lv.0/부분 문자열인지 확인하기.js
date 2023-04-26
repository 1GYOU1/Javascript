/*
<부분 문자열인지 확인하기>

문제 설명
부분 문자열이란 문자열에서 연속된 일부분에 해당하는 문자열을 의미합니다. 예를 들어, 문자열 "ana", "ban", "anana", "banana", "n"는 모두 문자열 "banana"의 부분 문자열이지만, "aaa", "bnana", "wxyz"는 모두 "banana"의 부분 문자열이 아닙니다.

문자열 my_string과 target이 매개변수로 주어질 때, target이 문자열 my_string의 부분 문자열이라면 1을, 아니라면 0을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
my_string은 영소문자로만 이루어져 있습니다.
1 ≤ target의 길이 ≤ 100
target은 영소문자로만 이루어져 있습니다.
입출력 예
my_string	target	result
"banana"	"ana"	1
"banana"	"wxyz"	0
입출력 예 설명
입출력 예 #1

문제 설명과 같습니다.
입출력 예 #2

문제 설명과 같습니다.
*/

//나의 풀이
function solution(my_string, target) {
    return my_string.indexOf(target) >= 0 ? 1 : 0
}

/*
    나는 indexOf를 사용해서 풀었으나, 
    다른 풀이 참고시 includes()도 사용할 수 있는 점을 참고하자 !

    indexOf와 includes 모두 JavaScript에서 배열이나 문자열에서 특정 값이 존재하는지 확인하는 메서드

    indexOf 메서드는 배열 또는 문자열에서 특정 값이 있는 인덱스를 반환합니다. 만약 값이 존재하지 않으면 -1을 반환

    includes 메서드는 값이 존재하는지 여부에 따라 true 또는 false를 반환합니다. 
    예를 들어, 위와 동일한 배열에서 arr.includes(3)을 호출하면 true를 반환합니다. 만약 arr.includes(6)을 호출하면 false를 반환

    즉, indexOf는 값이 존재하는지 확인하는 것보다는 값이 있는 위치를 찾을 때 사용하고, includes는 값의 존재 여부를 확인할 때 사용합니다.
*/

//다른 사람의 풀이 참고
function solution(my_string, target) {
    return my_string.includes(target) ? 1 : 0;
}