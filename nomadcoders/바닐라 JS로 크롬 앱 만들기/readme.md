## isNaN()

isNaN() 함수는 어떤 값이 NaN이면 true, 아니면 false인지 판별

예시 ↓↓
```js
const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));
//Number를 입력하면 NaN 값이 아니라서 false 반환
//String을 입력하면 NaN 값이라서 true 반환
```

<br>

## true false

```js
true || true === true
false || true == true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false
```

<br>

## Math.pow()

x 값을 n의 거듭제곱(xⁿ)으로 반환

```js
let a = Math.pow(0, 1);//0
let b = Math.pow(1, 1);//1
let c = Math.pow(1, 10);//1
let d = Math.pow(3, 3);//27
let e = Math.pow(-3, 3);//-27
let f = Math.pow(2, 4);//16
```

<br>

## className

elem.className - 무언가를 대입하면 클래스 문자열 전체가 바뀜.

elem.classList - 클래스 하나만 조작. 메서드 add/remove/toggle 구현
```js
// 클래스 추가
document.body.classList.add('article');
```

<br>

## input

__required__

서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시

required 속성은 불리언(boolean) 속성

속성을 명시하지 않으면 속성값이 자동으로 false 값을 가지게 되며, 명시하면 자동으로 true 

<br>

HTML
```html
<form action="/examples/media/action_target.php" method="get">
    이름 : <input type="text" name="st_name" required><br>
    학과 : <input type="text" name="department"><br>
    <input type="submit">
</form>
```

<br>

__maxlength="15"__ 

입력할 수 있는 최대 문자 길이

HTML
```html
<input type="text" maxlength="15" />
```

<br>

__accept__ 

파일 확장자 제한

HTML
```html
<input type="file" accept="원하는 확장자" />
```

여러 개의 확장자를 원할 경우 , 로 연결

[input 파일 첨부시 확장자 제한하기](https://ssungkang.tistory.com/entry/html-input-%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF-%E1%84%8E%E1%85%A5%E1%86%B7%E1%84%87%E1%85%AE%E1%84%89%E1%85%B5-%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF-%E1%84%92%E1%85%AA%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A1-%E1%84%8C%E1%85%A6%E1%84%92%E1%85%A1%E1%86%AB%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5?category=315283)

<br>

## localstorage

Chrome -> 개발자 도구 -> Application -> Storage

동일한 컴퓨터에서 동일한 브라우저에서 item 저장소

오직 문자형(string) 데이터 타입만 지원

```js
// 키에 데이터 쓰기
localStorage.setItem("key", value);

// 키로 부터 데이터 읽기
localStorage.getItem("key");

// 키의 데이터 삭제
localStorage.removeItem("key");

// 모든 키의 데이터 삭제
localStorage.clear();

// 저장된 키/값 쌍의 개수
localStorage.length;
```

<br>

## .appendTo()

A.appendChild(B) -> A안에 B

js
```js
const li = document.createElement('li');
const span = document.createElement('span');
li.appendChild(span)
```
html ↓↓↓
```html
<li>
    <span></span>
</li>
```

<br>

## JSON.stringify()

JavaScript object나 array를 string으로 바꿔줌

```js
const a = [1, 2, 3];
JSON.stringify(a)
//"[1, 2, 3]" -> string
```

<br>

## JSON.parse()

string을 JavaScript object로 바꿔줌

```js
const a = "[1, 2, 3]";
JSON.parse(a)
//[1, 2, 3] -> Array
```

<br>

## 화살표 함수
```js
//화살표 함수 사용
(item) => console.log("this is the turn of", item)

//일반 함수 사용
function salHello(item){
    console.log("this is the turn of", item)
}
```

## .filter()

예제 1
```js
const arr = ['pizza','banana','tomato'];
function filterEvent(food){return food !== "banana"}
//banana를 제외한 배열 출력
console.log(arr.filter(filterEvent))
//['pizza','tomato']
```

예제 2
```js
const arr = [1234, 5454, 223, 122, 45, 6775, 334];
function filterEvent(num){return num <= "1000"}
//1000보다 작거나 같은 수 출력
console.log(arr.filter(filterEvent))
//[223, 122, 45, 334]
```

## .getCurrentPosition(success, error)
사용자의 위치 좌표(위도, 경도)를 얻을 수 있는 메소드

success함수,  error함수 필수 적용
```js
function onGeoOk(position){
    const lat = position.coords.latitude;//위도
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
};
function onGeoonGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```

https://openweathermap.org/ 

해당 사이트 회원가입, 로그인