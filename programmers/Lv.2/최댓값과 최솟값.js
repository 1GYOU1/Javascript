/*
    <최댓값과 최솟값>

    문제 설명
    문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
    예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

    제한 조건
    s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
    입출력 예
    s	return
    "1 2 3 4"	"1 4"
    "-1 -2 -3 -4"	"-4 -1"
    "-1 -1"	"-1 -1"
*/

//나의 풀이
const solution = s => {
    let arr = s.split(' ').sort((a,b) => a-b);
    let result = `${arr.slice(0, 1)} ${arr.slice(arr.length-1, arr.length)}`
    return result;
}
/*
    split(' ')으로 공백 기준으로 잘라서 배열로 만들고,
    sort로 오름차순 정렬해주었다. 
    맨 앞, 맨 뒤 slice로 잘라서 문자열로 return 
*/

//다른 사람의 풀이
function solution(s) {
    const arr = s.split(' ');
    return Math.min(...arr)+' '+Math.max(...arr);
}
/*
    공백 기준으로 잘라진 상태에서
    Math.min, Math.max 사용, return
*/

function solution(s) {
    var arr = s.split(' ');
    arr.sort((a, b) => a - b);

    var answer = arr[0] + " " + arr[arr.length-1];
    return answer;
}

/*
    slice로 잘라오지 않아도 배열인 상태에서 
    arr[0], arr[arr.length-1]만 가져와서 return 해주는 방법도 있다.
*/
