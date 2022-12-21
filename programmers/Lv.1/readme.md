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
