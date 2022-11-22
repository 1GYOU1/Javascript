# __Lv.0__

## __Array__

<details>
 <summary><b>Methods</b></summary>

<br>

 ## .map()

```js
function solution(strlist) {
    return strlist.map((el) => el.length)
}
```

사용소스 - 배열 원소의 길이.ks

----

<br>

## .pop()

사용소스 - 배열 회전시키기.js

----

<br>

## .shift()

사용소스 - 배열 회전시키기.js

</details> <!--Array End-->

<br>

## __String__

<details>
<summary><b>Methods</b></summary>

<br>

## .repeat(num)

문자열을 주어진 횟수만큼 반복하여 새로운 문자열을 반환

```js
var str = 'ABC';

console.log(str.repeat(3));
// ABCABCABC
```

사용소스 - 문자 반복 출력하기.js

[참고사이트](https://developer-talk.tistory.com/177)

----

<br>

</details><!--String End-->

<br>

## __Expressions & operators__

<details>
<summary><b>Methods</b></summary>

<br>

## Exponentiation (**)

거듭제곱 (**)

Math.pow()와 비슷.

```js
x ** y

console.log(3 ** 4);
// expected output: 81

console.log(10 ** -2);
// expected output: 0.01

console.log(2 ** 3 ** 2);
// expected output: 512

console.log((2 ** 3) ** 2);
// expected output: 64
```

사용소스 - 세균 증식.js

----

<br>

## Addition assignment (+=)

더하기 할당 (+=)

오른쪽 피연산자의 값을 변수에 더한 결과를 다시 변수에 할당

두 피연산자의 타입이 더하기 할당 연산자의 동작을 결정하며, 덧셈 또는 문자열 연결이 가능

```js
x += y // x = x + y

let a = 2;
let b = 'hello';

console.log(a += 3); // addition
// expected output: 5

console.log(b += ' world'); // concatenation
// expected output: "hello world"
```

사용소스 - k의 개수.js

----

<br>

</details><!--Expressions & operators End-->