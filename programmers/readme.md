## __.reduce__

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

++) 참고 사이트
- [Site](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

<br>

----

## __.filter__

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

<br>

----

## __.sort__

배열을 정렬하기 위해서 사용

원본 배열값이 변경되니 사용시 주의.

Optional : `compareFunction`
정렬 순서를 정의하는 함수.

<br>

이 값이 생략되면, 배열의 element들은 문자열로 취급되어, 유니코드 값 순서대로 정렬.

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

sort() 함수로 문자열(대소문자 구분없이) 정렬
```js
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

++) 참고 사이트
- [Site 1](https://hianna.tistory.com/409)
- [Site 2](https://pinokio0702.tistory.com/268)