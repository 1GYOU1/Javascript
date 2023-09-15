/*
<문자열이 몇 번 등장하는지 세기>

문제 설명
문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ myString ≤ 1000
1 ≤ pat ≤ 10
입출력 예
myString	pat	result
"banana"	"ana"	2
"aaaa"	"aa"	3
입출력 예 설명
입출력 예 #1

"banana"에서 1 ~ 3번 인덱스에서 한 번, 3 ~ 5번 인덱스에서 또 한 번 "ana"가 등장해서 총 두 번 등장합니다. 따라서 2를 return 합니다.
입출력 예 #2

"aaaa"에서 0 ~ 2번 인덱스에서 한 번, 1 ~ 3번 인덱스에서 한 번, 2 ~ 4번 인덱스에서 한 번 "aa"가 등장해서 총 세 번 등장합니다. 따라서 3을 return 합니다.
*/

//나의 풀이
const solution = (myString, pat) => {
    let strIdx = myString.indexOf(pat)
    let count = 0;
    while(strIdx !== -1){
        strIdx = myString.indexOf(pat, strIdx + 1)
        count++;
    }
    return count;
}

/*
    myString.indexOf(pat) 이 값이 -1이 아닐 때(없을 때)까지,
    while 반복문 적용.

    indexOf(찾을 요소, 찾기 시작할 index)이기 때문에
    indexOf(pat, strIdx + 1)를 해주었다.
    맨처음 찾은 strIdx에 + 1을 해줘서 다음 index는 몇 번째인지 자동으로 추출.
    반복문이 돌 때마다 count++ !
*/

//다른사람 풀이
function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i <= myString.length - pat.length; i++) {
        if (myString.slice(i, i + pat.length) === pat) {
            count++;
        }
    }
    return count;
}

/*
    for문, slice 사용해서 pat과 매치하면 count++하는 방법.
*/