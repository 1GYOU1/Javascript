# __Lv.0__

## __Array__

<!-- <details> -->
<!-- <summary><b>Methods</b></summary> -->

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

배열의 마지막 요소 제거

사용소스 - 배열 회전시키기.js

----

<br>

배열의 첫번째 요소 제거

## .shift()

사용소스 - 배열 회전시키기.js

----

<br>

## Array 중복 제거

### 방법 ①

## Set

```js
const arr = [1, 2, 3, 1, 2];

//중복값이 있는 배열을 Set 객체로 만들어서 중복을 제거
const newSetArr = new Set(arr);
//Set 객체를 배열로 변환할 때, Array.from() 또는 forEach() 사용 가능
const resultArr = [...newSetArr];
console.log(resultArr);//[1, 2, 3]
```

<br>

### 방법 ②

## indexOf(), filter()

indexOf() 함수는, 배열에서 특정값이 처음으로 나타나는 index를 리턴.

filter() 함수는 특정 조건에 부합하는 배열의 모든 값을 배열 형태로 리턴.

```js
const arr = ['a', 'b', 'c', 'a', 'b'];

const newArr = arr.filter((el, idx) => {
    return arr.indexOf(el) === idx;
});
//가장 처음으로 나타나는 index와 검사하고 있는 원소의 index와 비교하여 같을 경우에만 true.

console.log(newArr);//['a', 'b', 'c']
```

<br>

### 방법 ③

## forEach(), includes()

forEach() 함수는 주어진 배열을 순회하면서, 배열의 원소들로 주어진 callback함수를 실행.

include() 함수는 주어진 배열에 특정 값이 포함되는지 여부를 검사.

```js
const arr = ['규1', '규2', '규3', '규1', '규2'];

let newArr = [];
arr.forEach((el) => {
    //(중복이 없는 배열)이 배열의 원소를 가지고 있지 않다면,
    if (!newArr.includes(el)) { //배열에 특정 값이 포함되는지 여부를 검사
        //newArr에 배열의 원소 넣기.
        newArr.push(el);
    }
});

console.log(newArr);//['규1', '규2', '규3']
```

사용소스 - 중복된 문자 제거.js

[참고사이트](https://hianna.tistory.com/422)

<!-- </details>  -->
<!--Array End-->

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