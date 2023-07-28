/*
l로 만들기
문제 설명
알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ myString ≤ 100,000
myString은 알파벳 소문자로 이루어진 문자열입니다.
입출력 예
myString	result
"abcdevwxyz"	"lllllvwxyz"
"jjnnllkkmm"	"llnnllllmm"
입출력 예 설명
입출력 예 #1

0 ~ 4번 인덱스의 문자 "a","b","c","d","e"는 각각 "l"보다 앞서는 문자입니다. 따라서 "l"로 고쳐줍니다.
그 외의 문자는 모두 "l"보다 앞서지 않는 문자입니다. 따라서 바꾸지 않습니다.
따라서 "lllllvwxyz"을 return 합니다.
입출력 예 #2

0번, 1번, 6번, 7번 인덱스의 문자 "j","j","k","k"는 각각 "l"보다 앞서는 문자입니다. 따라서 "l"로 고쳐줍니다.
그 외의 문자는 모두 "l"보다 앞서지 않는 문자입니다. 따라서 바꾸지 않습니다.
따라서 "llnnllllmm"을 return 합니다.
*/

const solution = myString => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k'];
    for(let i=0;i<myString.length;i++){
        if(alphabet.includes(myString[i])){
            myString = myString.replace(myString[i],'l')
        }
    }    
    return myString;
}

/*
alphabet.includes(myString[i]) 해당 조건문을 사용하여
alphabet 배열에 myString[i] 값이 들어있다면,
해당 문자열을 myString.replace(myString[i],'l') 'l'로 바꿔주는 방식으로 풀었다.

es6 문법)

1. 화살표 함수 사용
const solution = myString => {}
매개변수가 1개 일 경우 상단처럼 ()를 없애고 사용 할 수 있다.

사용법 예시)
const abc = (a, b) => {
  return a + b;
};

const abc = (a, b) => a + b;

2. const 사용
변경되지 않는 값(상수)에 주로 사용.

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k'];
해당 배열은 변경될 일 없는 값이라 const를 사용해줬다.
*/