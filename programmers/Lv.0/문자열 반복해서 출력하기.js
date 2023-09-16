/*
<문자열 반복해서 출력하기>

문제 설명
문자열 str과 정수 n이 주어집니다.
str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

제한사항
1 ≤ str의 길이 ≤ 10
1 ≤ n ≤ 5
입출력 예
입력 #1

string 5
출력 #1

stringstringstringstringstring
*/

//나의 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = '';//내가 추가한 부분
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    for(let i=0;i<n;i++){//내가 추가한 부분
        result += str;
    }
    console.log(result)//내가 추가한 부분
});

/*
    유지보수...? 식으로 갑자기
    가운데에 껴넣어야하는 프로그래머스 코데 조오금 당황스럽,,지만
    str, n의 변수가 들어오는 곳 밑에서 
    for문으로 n번 만큼 새 문자열에 더해줘서 풀었당 !
*/

//다른 사람의 풀이
console.log(str.repeat(n));
/*
    repeat() 사용해서 푼,,, ㅗㅜㅏ

    str.repeat(count);
    문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환

    기억하쟈 ..
*/