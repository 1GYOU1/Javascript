# __String__

## __.toUpperCase()__

문자열 대문자로 변환

소문자로 변환은 .toLowerCase()

```js
let a = 'abc';
console.log('abc'.toUpperCase());    //ABC
console.log(a.toUpperCase());    //ABC
```

[사용소스 - 2016년](https://github.com/1GYOU1/Javascript/blob/main/programmers/2016%EB%85%84.html)

++) 참고 사이트

- [특정 날짜 요일구하기](https://mizzo-dev.tistory.com/entry/JavaScript%EB%82%A0%EC%A7%9C-Date-%ED%99%9C%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%9A%94%EC%9D%BC-%EA%B5%AC%ED%95%98%EA%B8%B0)

<br>

----

## __.split()__

string.split(separator, limit)

문자열을 'separator'로 잘라서, 'limit' 크기 이하의 배열에 잘라진 문자열을 저장하여 리턴

separator
- 필수 아님
- 문자열을 잘라 줄 구분자 (문자열 또는 정규식)
- 값이 입력되지 않으면 문자열 전체를 배열에 담아서 리턴합니다.(length 1)

limit
- 필수 아님
- 최대 분할 갯수

```js
let str = '123456'
console.log(str.split())
//length 1
//['123456']
console.log(str.split(''))
//한 글자씩(공백 포함) 배열에 저장하여 리턴
//['1', '2', '3', '4', '5', '6']

let str2 = 'a/b/c'
console.log(str2.split('/'))
//[a,b,c]
```
[사용소스 - 정수 내림차순으로 배치하기](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EC%A0%95%EC%88%98%20%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%20%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0.html)

++) 참고 사이트

- [.split() 참고사이트](https://hianna.tistory.com/377)
 
<br>

---

## __.substring()__

substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환

```js
str.substring(indexStart[, indexEnd])
```
`indexStart` - 반환문자열의 시작 인덱스

`indexEnd` - 옵션. 반환문자열의 마지막 인덱스 (포함하지 않음.)

```js
var name = 'gyouwon';

console.log(name.substring(0, 1));//g
console.log(name.substring(1, 0));//g

console.log(name.substring(1, 3));//yo
console.log(name.substring(0, 7));//gyouwon

console.log(name.substring(0));//gyouwon
console.log(name.substring(2));//ouwon
```

<br>

---

## 문자열이 대문자인지 소문자인지 체크하는 방법

<br>

**방법 1** - match() 메서드와 정규 표현식

<br>

## String.prototype.match()

match() 메서드는 문자열이 정규식과 매치되는 부분을 검색

문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array를 반환한 다음 괄호 안에 캡처된 결과가 옵니다. 일치하는 것이 없으면 null이 반환됩니다.

```js
str.match(regexp)
```
`regexp`

정규식 개체. RegExp가 아닌 객체 obj가 전달되면, new RegExp(obj)를 사용하여 암묵적으로 RegExp로 변환. 매개변수를 전달하지 않고 match()를 사용하면, 빈 문자열:[""]이 있는 Array가 반환.

## 예시 코드 추가하기 !!!!

<br>

---

## RegExp

정규 표현식

문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용

반복문과 조건문을 사용해야 할것같은 복잡한 코드도 정규표현식을 이용하면 매우 간단하게 표현할 수 있으며 주로 다음과 같은 상황에서 굉장히 유용하게 사용된다.
그러나 정규표현식은 주석이나 공백을 허용하지 않고 여러가지 기호를 혼합하여 사용하기 때문에 가독성이 좋지 않다는 문제가 있다는 단점이 있다.

1. 각각 다른 포맷으로 저장된 엄청나게 많은 전화번호 데이터를 추출해야 할 때
2. 사용자가 입력한 이메일, 휴대폰 번호, IP 주소 등이 올바른지 검증하고 싶을 때
3. 코드에서 특정 변수의 이름을 치환하고 싶지만, 해당 변수의 이름을 포함하고 있는 함수는 제외하고 싶을 때
4. 특정 조건과 위치에 따라서 문자열에 포함된 공백이나 특수문자를 제거하고 싶을 때

```js
//슬래시(/)는 시작, 종료 기호
//i는 정규식 플래그 - 대소문자 구별하지 않고 검색.
/regex/i
```
### __정규식 메서드__

("문자열")`.match`(/정규표현식/플래그)	
- "문자열"에서 "정규표현식"에 매칭되는 항목들을 배열로 반환

("문자열")`.replace`(/정규표현식/, "대체문자열")	
- "정규표현식"에 매칭되는 항목을 "대체문자열"로 변환

("문자열")`.split`(정규표현식)	
- "문자열"을 "정규표현식"에 매칭되는 항목으로 쪼개어 배열로 반환

(정규표현식)`.test`("문자열")	
- "문자열"이 "정규표현식"과 매칭되면 true, 아니면 false반환

(정규표현식)`.exec`("문자열")	
- match메서드와 유사(단, 무조건 첫번째 매칭 결과만 반환)

### __정규식 플래그__

`i`	- 대소문자를 구별하지 않고 검색한다.
정규식은 기본적으로 대소문자를 구분 (Case sensitive)

`g`	- Global(전역) 전역 검색 플래그가 없는 경우에는 최초 검색 결과 한번만 반환하는 반면, 전역 검색 플래그가 있는 경우에는 모든 검색 결과를 배열로 반환

`m`	- Multi Line 문자열의 행이 바뀌더라도 검색을 계속한다.
여러 줄의 문자열에서 필터링 해야 될때 사용된다.
뒤에서 배울 입력 시작(^) 앵커나 입력 종료($) 앵커는 전체 문자열이 아닌 각 줄 별로 대응되게 만들어졌기 때문에, 만일 여러줄을 검색해야 한다면 m 플래그를 사용한다고 보면 된다

`s`- .​(모든 문자 정규식)이 개행 문자 \n도 포함하도록

`u`- unicode 유니코드 전체를 지원

`y`- sticky	문자 내 특정 위치에서 검색을 진행하는 ‘sticky’ 모드를 활성화

<br>

[정규식 정리 참고 블로그](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC)

[사용소스 - 숫자 문자열과 영단어](https://github.com/1GYOU1/Javascript/blob/main/programmers/Lv.1/%EC%88%AB%EC%9E%90%20%EB%AC%B8%EC%9E%90%EC%97%B4%EA%B3%BC%20%EC%98%81%EB%8B%A8%EC%96%B4.js)

<br>

## 설명 추가하기

<br>

.match(), RegExp() 동시 사용

```js
let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
let ABC = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
let arr = ['a', 'B', 'z']
arr.forEach(function(el, idx){
    if(el.match(new RegExp(/^[A-Z]/))){
        console.log(el)//B
    }else if(el.match(new RegExp(/^[a-z]/))){
        console.log(el)//a, z
    }
})
```
[사용소스 - 시저 암호](https://github.com/1GYOU1/Javascript/blob/main/programmers/시저 암호.js)

[참고 사이트 - 문자열 대문자 소문자 체크](https://developer-talk.tistory.com/789)

[참고 사이트 - mdn .match()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match)

[참고 사이트 - mdn RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)


<br>

----

# __NaN 판별__

NaN 비교

```js
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
```

<br>

----

# __Number__

## __Number.isInteger(value)__

특정 값이 정수인지 판별해주는 메서드

IE에서는 사용할 수 없다.
```js
Number.isInteger(2) //true
Number.isInteger(-2) //true
Number.isInteger(2.2) //false
Number.isInteger(NaN) //false
Number.isInteger(Infinity) //false
```

루트를 씌우고, 소수인지 판별할 때 유용

false면 소수, true면 정수
```js
Number.isInteger(Math.sqrt(i))
```

**참고

- <span style="background:#fff5b1">제곱근</span>의 약수의 갯수는 <span style="background:#fff5b1">홀수</span>이다.

[사용소스 - 약수의 개수와 덧셈](https://github.com/1GYOU1/Javascript/blob/main/programmers/약수의 개수와 덧셈.html)

----

## __Number.prototype.toString()__

숫자를 문자열로 변환하여 반환한다. 

해당 method의 인자 값으로 radix를 전달하면 숫자를 해당 radix의 값으로 변환한 값을 문자열로 반환한다.

radix값 이 지정되지 않으면, 임의로 10진수로 가정

<br>

**radix** (Optional)
- 수의 값을 나타내기 위해 사용되기 위한 기준을 정하는 2와 36사이의 정수. (진수를 나타내는 기수의 값.)

```js
numObj.toString([radix])
```

```js
console.log(x.toString(2));       // displays '110'
console.log((254).toString(16));  // displays 'fe'

console.log((-10).toString(2));   // displays '-1010'
console.log((-0xff).toString(2)); // displays '-11111111'
```

[사용소스 - 3진법 뒤집기.js](https://github.com/1GYOU1/Javascript/blob/main/programmers/3진법 뒤집기.js)

<br>

----

## __parseInt()__

입력받은 문자열 매개변수를 정해진 진수에 맞는 정수로 변환시켜주는게 parseInt() 메서드의 역할

전달 받은 문자열을 전달 받은 radix로 분석한 정수를 반환한다.

문자열이 3진법을 나타내고 있으면, 3진법으로 분석한 정수를 반환.


<br>


```js
parseInt(string)
parseInt(string, radix)
```
**radix** (Optional)

string : 파싱할 문자열이며, 만약 매개변수가 문자열이 아닐경우 toString 추상 연산을 사용해 문자열로 변환하여 사용된다.(공백이 아닌 첫 문자를 숫자로 변환할 수 없는 경우 NaN을 반환)

radix : string의 진수를 나타내는 2와 36사이의 정수 (2와 36 사이의 범위를 벗어날 경우 NaN을 반환)

```js
// 1. 2진법을 정수로 변환
parseInt('101', 2); // 5

// 2. '0x' 로 시작할 경우 나머지 값을 16진법으로 처리
parseInt('0x101'); // 257

console.log(parseInt(21, 3))//7
console.log(parseInt(22111, 3))//229
```

parseInt() 와 toString()

```js
parseInt('101', 2).toString(2); // 101
parseInt('0x101').toString(16); // 101
```
parseInt() 와 toString() 메서드는 어떻게 보면 반대 성향을 지녔기 때문에 서로 반대로 변환시켜준다.

101을 2진법에 맞게 정수로 변환하면 5가 반환되며 이를 다시 2진법으로 변환하여 101을 반환시킨것이다.

이와 마찬가지로 101을 16진법에 맞게 정수로 변환하면 257이 반환되며 이를 다시 16진법으로 변환하여 101을 반환

<br>

[사용소스 - 3진법 뒤집기.js](https://github.com/1GYOU1/Javascript/blob/main/programmers/3진법 뒤집기.js)

<br>

----
