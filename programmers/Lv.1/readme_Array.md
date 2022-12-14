# __Array__

## __Array.prototype.reduce()__

함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 된다.

map()이나 fileter() 등도 모두 reduce()로 실행이 가능

callback : 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 가짐
- __accumulator__ : 누산기 (acc) - 콜백의 반환값을 누적. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값임

- __currentValue__ : 현재 값 (cur) -
 처리할 현재 요소

- __currentIndex__ (Optional) : 현재 인덱스 (idx) - initialValue를 제공한 경우 0, 아니면 1부터 시작

- __array__ (Optional) : 원본 배열 (src) - reduce()를 호출한 배열

<br>

```js
arr.reduce(callback[, initialValue])
```

모든 배열의 합을 구하기
```js
//화살표 함수 사용 방식
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => { return acc += cur; }, 0);//초기값 0
//0 + 1 + 2 + 3 + 4 + 5 = 15
console.log(result);  // 15
//화살표 함수 X
const arr1 = [1, 2, 3, 4, 5];
const result = arr.reduce(function(acc, cur, idx){
        return acc += cur; 
    }, 0);//초기값 0
//0 + 1 + 2 + 3 + 4 + 5 = 15
console.log(result);  // 15
const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => { return acc += cur; }, 10);//초기값 10
//10 + 1 + 2 + 3 + 4 + 5 = 25
console.log(result2);  // 25
```

[사용소스 - 평균 구하기](https://github.com/1GYOU1/Javascript/blob/main/programmers/%ED%8F%89%EA%B7%A0%20%EA%B5%AC%ED%95%98%EA%B8%B0.html)

++) 참고 사이트
- [Site](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

<br>

----

## __Array.prototype.filter()__

테스트를 통과한 요소로 이루어진 새로운 배열. 

어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환.

```js
(function test(){
const testArray = [1,2,3,4,5];
const newArray = testArray.filter(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    });
})(); 
```
![캡처](https://user-images.githubusercontent.com/90018379/193171033-06fdeaed-d240-4fd5-92d1-89b68cbb22c2.PNG)

<br>

사용 예시)
```js
(function test(){
    const testArray = [1,2,3,4,5];
    const newArray = testArray.filter(function(element){
        return element <= 3;
    });
    console.log(newArray);
    //[1,2,3]
})(); 
```

[사용소스 - 나누어 떨어지는 숫자 배열](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EB%82%98%EB%88%84%EC%96%B4%20%EB%96%A8%EC%96%B4%EC%A7%80%EB%8A%94%20%EC%88%AB%EC%9E%90%20%EB%B0%B0%EC%97%B4.html)

<br>

----

## __Array.prototype.sort()__

배열을 정렬하기 위해서 사용

원본 배열값이 변경되니 사용시 주의.

Optional : `compareFunction`
정렬 순서를 정의하는 함수.

<br>

이 값이 생략되면, 배열의 element들은 문자열로 취급되어, 유니코드 값 순서대로 정렬.

[유니코드 - 숫자 < 대문자 < 소문자](https://danac.tistory.com/92)

이 함수는 두 개의 배열 element를 파라미터로 입력 받습니다.

이 함수가 a, b 두개의 element를 파라미터로 입력받을 경우,

이 함수가 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬하고,

이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬합니다.

만약 0을 리턴하면, a와 b의 순서를 변경하지 않습니다.
```js
arr.sort([compareFunction])
```
```js
const arr1 = [2, 1, 3];
const arr2 = [2, 1, 3, 10];
const arr3 = ['banana', 'apple', 'orange']
console.log(arr1.sort())//1,2,3
console.log(arr2.sort())//1,10,2,3
console.log(arr3.sort())//apple,banana,orange
```

sort() 함수로 숫자 오름차순 정렬
```js
arr.sort(function(a, b){
    return a - b;
});
//화살표 함수 사용
arr.sort((a, b) => a - b);
```

sort() 함수로 숫자 내림차순 정렬
```js
arr.sort(function(a, b){
    return b - a;
});
//화살표 함수 사용
arr.sort((a, b) => b - a);
```

sort() 함수로 문자열 정렬
```js
var arr1 = ['규원', '예진', '태화', '재희']
console.log(arr1.sort()) // 오름차순 정렬
//['규원', '예진', '재희', '태화']
console.log(arr1.reverse()) // 내림차순 정렬
//['태화', '재희', '예진', '규원']
var arr2 = ['gyou', 'ye', 'tae', 'jae']
console.log(arr2.sort()) 
// 오름차순 정렬
//['gyou', 'jae', 'tae', 'ye']
console.log(arr2.reverse()) 
// 내림차순 정렬
//['ye', 'tae', 'jae', 'gyou']
```

sort()로 오름차순으로 정렬한 뒤에, reverse()를 호출하여 배열의 순서를 변경하여 내림차순과 동일한 결과 추출

```js
const arr = ['kiwi', 'apple', 'melon', 'grape', 'banana'];

arr.sort();
arr.reverse();
console.log(arr);//[ 'melon', 'kiwi', 'grape', 'banana', 'apple' ]
```

sort() 함수로 문자열(대소문자 구분없이) 정렬

대문자 혹은 소문자로 변환한 후 조건식을 적용

```js
const arr = ['apples', 'Apples', 'apple', 'Apple', 'Astronaut', 'astronaut'];

arr.sort((prev, cur) => {  // 오름차순, ['apple', 'Apple', 'apples', 'Apples', 'Astronaut', 'astronaut']
const [upperPrev, upperCur] = [prev.toUpperCase(), cur.toUpperCase()]
if (upperPrev > upperCur) return 1;
if (upperPrev < upperCur) return -1;
if (upperPrev === upperCur) return 0;  // 생략 가능
});

arr.sort((prev, cur) => {  // 내림차순, ['Astronaut', 'astronaut', 'apples', 'Apples', 'apple', 'Apple']
const [upperPrev, upperCur] = [prev.toUpperCase(), cur.toUpperCase()]
if (upperPrev < upperCur) return 1;
if (upperPrev > upperCur) return -1;
if (upperPrev === upperCur) return 0;  // 생략 가능
});
```

sort() 함수로 객체 정렬
```js
const arr = [
{name: 'banana', price: 3000}, 
{name: 'apple', price: 1000},
{name: 'orange', price: 500}
];
arr.sort(function(a, b) {
return a.price - b.price;
});
console.log(arr)
//price값을 기준으로 오름차순 정렬
/*
{name: 'orange', price: 500}
{name: 'apple', price: 1000}
{name: 'banana', price: 3000}
*/
```

[사용소스 - 정수 내림차순으로 배치하기](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EC%A0%95%EC%88%98%20%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%20%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0.html)

[사용소스 - 나누어 떨어지는 숫자 배열](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EB%82%98%EB%88%84%EC%96%B4%20%EB%96%A8%EC%96%B4%EC%A7%80%EB%8A%94%20%EC%88%AB%EC%9E%90%20%EB%B0%B0%EC%97%B4.html)

++) 참고 사이트
- [Site 1](https://hianna.tistory.com/409)
- [Site 2](https://pinokio0702.tistory.com/268)
- [Site 3](https://guiyomi.tistory.com/121)

<br>

----

## __Array.prototype.slice()__

slice() 메서드는 어떤 배열의 start부터 end 전까지의 복사본을 새로운 배열 객체로 반환합니다. 

즉, **원본 배열은 수정되지 않습니다.**

<br>

```js
slice(start[, end])
```

start : 추출 시작점에 대한 인덱스.
- undefined인 경우: 0부터 slice
- 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(-2)를 하면 배열의 마지막 2개의 요소를 추출한다.
- 배열의 길이와 같거나 큰 수를 지정한 경우: 빈 배열을 반환한다.

end : 추출 종료할 기준 인덱스. (end를 제외하고 그 전까지의 요소만 추출한다.)
- 지정하지 않을 경우: 배열의 끝까지 slice
- 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(2, -1)를 하면  세번째부터 끝에서 두번째 요소까지 추출
- 배열의 길이와 같거나 큰 수를 지정한 경우: 배열의 끝까지 추출.

반환값: 추출한 요소를 포함한 새로운 배열.

![캡처](https://user-images.githubusercontent.com/90018379/200245267-4c93af27-a7e4-4ac9-9a5a-2d1a97822d72.PNG)


```js
const animals = ["lion", "tiger", "elephant", "zebra"];
console.log(animals.slice( 1,  3));  // ["tiger", "elephant"]
console.log(animals.slice(-3, -1));  // ["tiger", "elephant"]
console.log(animals.slice(1, 1));  // []
console.log(animals.slice(1));     // ["tiger", "elephant", "zebra"]
console.log(animals.slice(0, -1)); // ["lion", "tiger", "elephant"]
```

참고 메서드

array<b>.shift()</b> - 첫번째 원소 빼내 반환(원본 배열에 영향)

array<b>.pop()</b> - 가장 뒷 원소 빼내 반환(원본 배열에 영향)

<br>

[사용소스 - 2016년](https://github.com/1GYOU1/Javascript/blob/main/programmers/2016%EB%85%84.html)
[사용소스 - 가운데 글자 가져오기](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EA%B0%80%EC%9A%B4%EB%8D%B0%20%EA%B8%80%EC%9E%90%20%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0.html)

++) 참고 사이트

- [.slice() 참고사이트](https://m.blog.naver.com/wideeyed/221876916945)

<br>

----

## __Array.prototype.splice()__

splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다. 

즉 이 메서드는 **원본 배열 자체를 수정**합니다. 

```js
slice(start, deleteCount, item1, item 2,...)
```

start: 배열의 변경을 시작할 인덱스.

- 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. 
- 배열의 길이보다 큰 수를 지정한 경우: 실제 시작 인덱스는 배열의 길이로 설정
- 절댓값이 배열의 길이보다 큰 경우 : 0으로 세팅

deleteCount: 배열에서 제거할 요소의 수.

- 생략 또는 값이 array.length - start보다 큰 경우 : start로부터의 모든 요소를 제거
- 0 이하의 수를 지정 : 어떤 요소도 제거되지 않음
 
item1, item 2,... : 배열에 추가할 요소

- 지정하지 않은 경우 : splice()는 요소 제거만 수행한다.
 
반환 값: 제거한 요소를 담은 배열 : 아무 값도 제거하지 않았으면 빈 배열을 반환

```js
const animals = ["a", "b", "c", "d", "e"];

const animals1 = animals.splice(3, 2, 'pink', 'coral', 'lavender');

console.log(animals);
// ["a", "b", "c", "pink", "coral", "lavender"]

console.log(animals1);
// ["d", "e"]
```

++) 참고 사이트

- [.splice() 참고사이트](https://overcome-the-limits.tistory.com/29)

<br>

----

## __Array.prototype.findIndex()__

주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환

```js
function solution(seoul) {
    let newSeoul = seoul.findIndex(function(e){
        return e == "Kim";
    });
    return("김서방은 " + newSeoul + "에 있다");
}

solution(["Jane", "Kim"]);
```

[사용소스 - 서울에서 김서방 찾기](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EC%84%9C%EC%9A%B8%EC%97%90%EC%84%9C%20%EA%B9%80%EC%84%9C%EB%B0%A9%20%EC%B0%BE%EA%B8%B0.html)

++) 참고 사이트

- [.__findIndex() 참고사이트](https://codechacha.com/ko/javascript-find-element-in-array/)
- [.__findIndex() 참고사이트](https://bbaktaeho-95.tistory.com/40)
- [.__findIndex() 참고사이트](https://paperblock.tistory.com/74)
- [.__findIndex() 참고사이트](https://doingsomething.tistory.com/77?category=984194)
- [.__findIndex() 참고사이트](https://velog.io/@gue1030/filter-find-findIndex)

<br>

----

## __Array.prototype.indexOf()__

indexOf(검색할 값 , 시작위치) - 앞에서부터 검색할 값을 찾기 시작

```js
let array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

[사용소스 - 정수 제곱근 판별](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EC%84%9C%EC%9A%B8%EC%97%90%EC%84%9C%20%EA%B9%80%EC%84%9C%EB%B0%A9%20%EC%B0%BE%EA%B8%B0.html)

참고 - string.prototype.indexOf() 도 있음 !!

----

## __Array.prototype.lastIndexOf()__

lastIndexOf(검색할 값 , 시작위치) - 끝에서부터 검색할 값을 찾기 시작

```js
var array = [2, 5, 9, 2];
array.lastIndexOf(2);     // 3
array.lastIndexOf(7);     // -1
array.lastIndexOf(2, 3);  // 3
array.lastIndexOf(2, 2);  // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3
```

[사용소스 - level 0 - 한 번만 등장한 문자](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EC%84%9C%EC%9A%B8%EC%97%90%EC%84%9C%20%EA%B9%80%EC%84%9C%EB%B0%A9%20%EC%B0%BE%EA%B8%B0.html)

참고 - string.prototype.lastIndexOf() 도 있음 !!

----

## __Array.prototype.join()__

배열 내에 모든 값들을 순서대로 연결

배열의 길이가 0이면 빈 문자열을 반환

구분값이 존재하지 않으면 쉼표로 표기되어 연결

빈 문자열일 경우 구분없이 연결

```js
let test1 = ['a', 'b', 'c'];
let result1 = test.join();
 // result : a,b,c
let result2 = test.join('');
 // result : abc
let test2 = ['2020', '01', '01'];
let result3 = test.join('-');
 // result : 2020-01-01
let result4 = test.join('/');
 // result : 2020/01/01
```

[사용소스 - 정수 내림차순으로 배치하기](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EC%A0%95%EC%88%98%20%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%20%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0.html)

++) 참고 사이트

- [.join() 참고사이트](https://sesok808.tistory.com/662)

<br>

----

## __Array.prototype.fill()__

Array.fill은 특정 value로 해당 Array를 채워주는 매서드.

++추가 하기 !@!@

[사용소스 - x만큼 간격이 있는 n개의 숫자](https://github.com/1GYOU1/Javascript/blob/main/programmers/x%EB%A7%8C%ED%81%BC%20%EA%B0%84%EA%B2%A9%EC%9D%B4%20%EC%9E%88%EB%8A%94%20n%EA%B0%9C%EC%9D%98%20%EC%88%AB%EC%9E%90.html)

<br>

----

## __Array.prototype.map()__

배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환.

++추가 하기 !@!@

[사용소스 - x만큼 간격이 있는 n개의 숫자](https://github.com/1GYOU1/Javascript/blob/main/programmers/x%EB%A7%8C%ED%81%BC%20%EA%B0%84%EA%B2%A9%EC%9D%B4%20%EC%9E%88%EB%8A%94%20n%EA%B0%9C%EC%9D%98%20%EC%88%AB%EC%9E%90.html)

