/*
<대소문자 바꿔서 출력하기>

문제 설명
영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

제한사항
1 ≤ str의 길이 ≤ 20
str은 알파벳으로 이루어진 문자열입니다.
입출력 예
입력 #1

aBcDeFg
출력 #1

AbCdEfG
*/

//나의 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = '';//추가한 부분 ~
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    console.log(result)// ~ end
});

/*
    'a' < 'z' 이것도 true/false로 나타낼 수 있다니 !
    이 방식을 사용해서 for문으로 문자열을 돌면서 비교하여 바꿔줬다.
*/

//다른 사람의 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const result = str.replace(/[A-z]/gi, function(string){//추가한 부분 ~
        if(string === string.toUpperCase())
            return string.toLowerCase()
        else
            return string.toUpperCase()
    });
    console.log(result)// ~ end
});

/*
    정규식 사용해서 대소문자 구별해내고 if문으로 바꾸는 방식
*/