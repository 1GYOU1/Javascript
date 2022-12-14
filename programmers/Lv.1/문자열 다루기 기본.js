/*
     <문자열 다루기 기본>

     문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

     제한 사항
     s는 길이 1 이상, 길이 8 이하인 문자열입니다.
     s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

     입출력 예
     s	     return
     "a234"	false
     "1234"	true

     *hint
     - 길이는 4 혹은 6
     - 소수인지 정수인지 구별
*/

//제출 답안
function solution(s) {
     if(!isNaN(Number(s)) && (s) == parseInt(s) && !(s.length === 0) && (s.length === 4 || s.length === 6)){
          return true;
     }else{
          return false;
     }
}

console.log(solution('a1234'))
console.log(solution('1234'))
console.log(solution('abcd'))
console.log(solution('abcdaasda'))
console.log(solution(''))
console.log(solution('123456'))
console.log(solution('0.1111'))