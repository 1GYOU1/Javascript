## eval(string)

인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수

eval()을 사용하면 해커가 위험한 코드를 사용할 수 있습니다.

toString()을 사용하는 일반적인 방식으로 제약을 피할 수 있습니다.

```js
console.log(eval('2 + 2'));
// expected output: 4
```

```js
var expression = new String("2 + 2");
eval(expression.toString());            // 4를 반환
```

<br>

## .join()

배열의 모든 요소를 연결해 하나의 문자열로 출력.

인수값이 없을 경우 기본적으로 컴마(,)로 추가

```js
let arr = new Array("1","2","3","4");
arr.join()
document.write(arr);//1,2,3,4
```

```js
let arr = new Array("1","2","3","4");
let prt = arr.join(' ');
document.write(prt);//1234
```

```js
let arr = ['1','2','3','4'];
let prt = arr.join("-");
document.write(prt);//0-1-2-3-4
```

<br>

## .concat()

문자열 합치기

```js
let str1 = 'Java';
let str2 = 'Script';
let str3 = ' ';
let str4 = 'Developer';
console.log(str1.concat(str2, str3, str4))
//'JavaScript Developer'
```

<br>

## .change()

해당 셀렉터의 값이 변할경우 변화를 캐치하는 이벤트

주로 input,textarea,select 태그에 동작

```js
input.addEventListener('change', updateValue);
function updateValue(e) {
  log.textContent = e.target.value;
}
```