# __Lv.0__

# __Array__

<!--Array-->
<!-- <details> -->
<!-- <summary><b>Methods</b></summary> -->

 ## Array.prototype.map()

map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

```js
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```
매개변수<br>

callback<br>
새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.

currentValue<br>
처리할 현재 요소.

index Optional<br>
처리할 현재 요소의 인덱스.

array Optional<br>
map()을 호출한 배열.

thisArg Optional<br>
callback을 실행할 때 this로 사용되는 값.

반환 값<br>
배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.

```js
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);
// [2, 8, 18, 32]
console.log(arr1);
// 원본배열에 변화 X [1, 4, 9, 16]
```

사용소스 - 배열 원소의 길이.js

<br>

----

## .pop()

배열의 마지막 요소 제거

```js
var arr = [1, 2, 3];

//제거된 요소 리턴
arr.pop();  // 3
```

사용소스 - 배열 회전시키기.js

<br>

----

## .shift()

배열의 첫번째 요소 제거

```js
var arr = [1, 2, 3];

//제거된 요소 리턴
arr.pop();  // 1
```

사용소스 - 배열 회전시키기.js

<br>

----

## .unshift()

배열 앞에서부터 .push()

```js
let arr = ['a', 'b', 'c'];

arr.shift();
// 삭제한 'a'을 출력
```

[사용소스 - 핸드폰 번호 가리기](https://github.com/1GYOU1/Javascript/blob/main/programmers/핸드폰 번호 가리기.html)

<br>

----

## Array.prototype.some()

some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다. 만약 배열에서 주어진 함수가 true을 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다. 이 메서드는 배열을 변경하지 않습니다.

```js
추가하기 !@
```

[사용소스 - 외계어 사전]

<br>

----

## Array.prototype.every()

every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환.

```js
추가하기 !@
```

<br>

----

## .includes()

String, Array 사용가능

includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별.

```js
arr.includes(valueToFind[, fromIndex])
```
`valueToFind`
탐색할 요소.
> 참고: 문자나 문자열을 비교할 때, includes()는 대소문자를 구분합니다.

`fromIndex` Optional

이 배열에서 searchElement 검색을 시작할 위치입니다. 
음의 값은 array.length + fromIndex의 인덱스를 asc로 검색합니다. 기본값은 0입니다.

```js
const e = '24';
console.log(e.includes(2));//true

[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

//fromIndex 가 배열의 길이보다 같거나 크다면, false 를 반환합니다. 배열은 검색되지 않을 것입니다.
var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   // false
arr.includes('c', 100); // false
```

[사용소스 - 저주의 숫자 3]

<br>


## indexOf()

String, Array 사용가능

JavaScript에서 배열이나 문자열에서 특정 값이 존재하는지 확인하는 메서드

indexOf 메서드는 배열 또는 문자열에서 특정 값이 있는 인덱스를 반환합니다. 

만약 값이 존재하지 않으면 -1을 반환

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
```

[사용소스 - 부분 문자열인지 확인하기.js]

<br>

## indexOf()와 includes()의 차이 

indexOf와 includes 모두 JavaScript에서 배열이나 문자열에서 특정 값이 존재하는지 확인하는 메서드이다.

### indexOf() 
- 배열, 문자열에 사용 가능
- 값이 있는 위치 찾을 때 사용, 특정 값이 있는 인덱스 반환.
- 만약 값이 존재하지 않으면 -1을 반환.

### includes()
- 배열, 문자열에 사용 가능
- 값이 존재하는지 여부에 따라 true 또는 false를 반환

즉, indexOf는 값이 존재하는지 확인하는 것보다는 값이 있는 위치를 찾을 때 사용하고,

includes는 값의 존재 여부를 확인할 때 사용하는 것이 용이하다.

<br>

---

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


<br>

----

<!-- </details>  -->
<!--//Array End-->

<br>

# __String__

<!--String-->
<!-- <details>
<summary><b>Methods</b></summary> -->

## .repeat(num)

<br>

문자열을 주어진 횟수만큼 반복하여 새로운 문자열을 반환

```js
var str = 'ABC';

console.log(str.repeat(3));
// ABCABCABC
```

사용소스 - 문자 반복 출력하기.js

[참고사이트](https://developer-talk.tistory.com/177)

<br>

----

<!-- </details> -->
<!--//String End-->

<br>

# __Expressions & operators__

<!--Expressions & operators-->
<!-- <details>
<summary><b>Methods</b></summary> -->

## Exponentiation (**)

<br>

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

<br>

----

## Addition assignment (+=)

<br>

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

<br>

----

<!-- </details> -->
<!--//Expressions & operators-->

<br>

# __Objects__

<!--Objects-->
<!-- <details>
<summary><b>Working with objects</b></summary> -->

<br>

## 객체와 속성

속성에 접근할 땐 간단한 마침표 표기법을 사용

```js
objectName.propertyName
```

객체의 이름(아마도 그냥 변수)과 속성의 이름 모두 대소문자를 구별

```js
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
```

위의 코드는, 중괄호({}) 안에 쉼표로 구분한 속성 이름과 값의 목록으로 나타내는 객체 초기자로 나타낼 수 있음.

대괄호 표기법(속성 접근자)을 사용해 접근 가능

```js
const myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};

console.log(myCar['make'])//Ford
```

유효한 JavaScript 식별자가 아닌 이름(공백이나 붙임표, 숫자로 시작하는 이름)을 가진 속성은 대괄호 표기법으로만 접근할 수 있음.

```js
myObj.type              = '마침표 구문';
myObj['date created']   = '공백을 포함한 문자열';
myObj[str]              = '문자열 값';
myObj[rand]             = '무작위 수';
myObj[obj]              = '객체';
myObj['']               = '빈 문자열까지';
```

사용소스 - 모스부호 (1).js

<br>

## Object에서 key를 배열로 가져오기

```js
let myObj = { 1: 'a', 2: 'b', 3: 'c', 4: 'd'};

console.log(Object.keys(myObj));//[ '1', '2', '3', '4' ]
```

## Object에서 value를 배열로 가져오기

```js
let myObj = { 1: 'a', 2: 'b', 3: 'c', 4: 'd'};

console.log(Object.values(myObj));//[ 'a', 'b', 'c', 'd' ]
```


## Object에서 key, vaule 추출

```js
myObj={ '0': 1, '1': 2, '2': 1, '5': 1, '7': 3 }

console.log(Object.keys(myObj)[0])//5
console.log(Object.values(myObj)[4])//3
```

사용소스 - 최빈값 구하기.js

<br>

----

<!-- </details> -->
<!--//Objects End-->

<br>

# __Number__

<!--Number-->
<!-- <details>
<summary><b>Methods</b></summary> -->

추가하기 !@!@

isNaN() 

이 함수는 어떤 값이 NaN 값인지 판단하는데, 매개변수가 숫자가 아니면 true, 숫자이면 false를 반환하는 특징

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN

Number.isNaN()

isNaN() 함수의 더 엄격한 버전

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

사용소스 - 숨어있는 숫자의 덧셈 (2)
<!-- </details> -->
<!--//Number End-->

<br>

----
