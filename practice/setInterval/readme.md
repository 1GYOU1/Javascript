### __setInterval 기본문법__

```js
setInterval(function, delay);
```
- 3초 실행 예제
```js
setInterval(function() {
	alert("3초 간격으로 실행");
}, 3000); // 1000 = 1sec, 60000 = 1min
```

### __setInterval 종료__

```js
clearInterval(function);
```
### __setInterval 즉시 실행__
- setInterval 의 경우 delay > function > delay 순으로 실행됨.
- 별도의 함수로 빼서 최초에 해당 함수 실행 후 setInterval 걸어서 사용함으로서 즉시 실행하는 효과를 줄 수 있음.
```js
var repeat = null;
var delay = 10000;
poll(); // 최초(즉시)실행
repeat = setInterval(poll, delay); // delay 간격으로 실행.
function poll() {
	alert("setInterval");
	clearInterval(repeat);
}
```
즉시 실행 후 반복 예시
```js
classOn();
repeat = setInterval(classOn, 3000); // delay 간격으로 실행.
function classOn () {
    $('.badge').toggleClass('on')
}
```
[참고사이트 - ①](https://dlagusgh1.tistory.com/995)
----