## __어드밴스 for ~ of 반복문__

<br>
형태 : for(let item of 배열명){~}

```js
 let cList = ''; 
 //만들 최종 문자열 '규원 예진 태화';

//1. 전통적인 for문
for(let i=0; i<characters.length; i++) {
    cList += characters[i] + ' ';//한칸 공백 넣어주기
}
console.log(`cList = ${cList}`)//cList = 규원 예진 태화

//2. for of 반복문으로 출력
for(let item of characters){
    console.log(item)
    // 규원
    // 예진
    // 태화
}

//3. 한줄로 출력
let str = '';
for(let item of characters){
    str += item
}
console.log(str)//규원예진태화
```
<br>

----

<br>

## __배열의 요소를 추가 수정 삭제하는 splice()__

<br>
배열명.splice(시작index, 삭제할 개수, 추가 원소) 메소드

```js
const days = ['월','화','수','목','금','토','일'];

//원본 배열에서 '수'를 삭제해보기.

days.splice(2, 1);

console.log(days)
//['월', '화', '목', '금', '토', '일']
```
배열의 모든 원소를 삭제
```js
days.splice(0);
console.log(days)
//[]
```
<br>

----

<br>

## __배열을 순회하며 원소들에게 공통적인 작업을 할때 사용하는 배열전용 forEach__

<br>

배열명.forEach()

```js
const arrNum = [3,6,9,12,15];

//콘솔창에 출력
arrNum.forEach(function(item, idx){
    console.log(`원소 ${item}의 인덱스는 ${idx}`);
});

//원소 3의 인덱스는 0
//원소 6의 인덱스는 1
//원소 9의 인덱스는 2
//원소 12의 인덱스는 3
//원소 15의 인덱스는 4
```