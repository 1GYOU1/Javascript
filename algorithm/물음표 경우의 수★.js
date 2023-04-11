/*
물음표(?)가 포함된 문자열이 주어졌을 때, 물음표를 하나씩 문자로 변경하여 모든 경우의 수를 출력하는 함수를 작성해보세요.

예시:

입력: "?"
출력: ["0", "1"]

입력: "1?0"
출력: ["100", "110"]

입력: "1??0"
출력: ["1000", "1001", "1100", "1101"]

입력: "??"
출력: ["00", "01", "10", "11"]

주의사항:

입력 문자열의 길이는 최대 10입니다.
출력은 배열 형태로 반환합니다.
*/

function replaceQuestionMark(str) {
const result = [];

for (let i = 0; i < 10; i++) {
    const num = i.toString();
    const newStr = str.replace("?", num);

    if (newStr.indexOf("?") === -1) {
    result.push(newStr);
    } else {
    const subResult = replaceQuestionMark(newStr);
    result.push(...subResult);
    }
}

return result;
}

/*
이 코드는 물음표가 있는 문자열에서 물음표를 하나씩 문자로 변경하여 모든 경우의 수를 출력하는 함수입니다.
물음표를 하나씩 숫자로 바꾸기 위해서 0부터 9까지의 수를 for문으로 순회하며 문자열로 변환합니다. 
그리고 replace 메서드를 사용해서 물음표를 현재 숫자로 대체한 새로운 문자열을 만듭니다.
이렇게 만들어진 문자열에서 물음표가 더 이상 존재하지 않는다면, 이 문자열을 결과 배열에 push합니다.
하지만 만약에 물음표가 더 남아 있다면, 이 문자열을 다시 replaceQuestionMark 함수에 넣어서 재귀적으로 처리하게 됩니다.
결과적으로 모든 경우의 수가 배열에 모여서 리턴되고, 이 배열이 출력됩니다.
*/

function getPermutations(str) {
const arr = str.split('');
const result = [''];

for (let i = 0; i < arr.length; i++) {
    const len = result.length;
    for (let j = 0; j < len; j++) {
    const temp = result.shift();
    if (arr[i] === '?') {
        result.push(temp + '0');
        result.push(temp + '1');
    } else {
        result.push(temp + arr[i]);
    }
    }
}

return result;
}

/*
입력 문자열을 배열로 변환하지 않고, 문자열로부터 직접 문자를 가져와서 처리합니다. 
그리고 물음표 문자일 경우와 아닐 경우를 각각 다르게 처리하는 대신에, 삼항 연산자를 사용하여 한 줄의 코드로 처리합니다. 
또한, 불필요한 배열을 생성하지 않고, 결과값을 담을 배열을 초기값으로 빈 문자열 하나만 가지고 시작합니다. 
이렇게 코드를 간단하게 작성하면, 가독성도 좋아지고, 실행 속도도 더 빨라질 수 있습니다.
*/