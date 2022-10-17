## __10-Form유효성검사(방법1)__

<br>

```html
<form name="frmLogin" action="login_ok.html" method="post">
```
form __action__ ="데이터 넘겨줄 파일 경로"

<br>

```html
<input type="text" name="userid" id="userid" autocomplete="off" autofocus>
```
input __autofocus__-> 자동 포커스 잡기. input 하나만 가능

input __autocomplete__ ="on / off" -> 자동 완성 기능 

<br>

```js
$userid.focus();
$pwd.focus();
```
__.focus()__ -> input __autofocus__ 기능 js

<br>

```js
document.forms['frmLogin'].submit();
```
__button = "submit"__ 데이터 넘겨주기

<br>

```js
const userid = $userid.value.trim();
```
__.trim()__ 입력 내용의 <span style="background-color:#fff5b1">공백 제거</span>

<br>

```js
if(userid === null || userid === ''){
    alert('아이디를 입력해주세요.')
    $userid.focus();
    return false;
}

const pwd = $pwd.value.trim();//
if(pwd === null || pwd === ''){
    alert('비밀번호를 입력해주세요.')
    $pwd.focus();
    return false;
}
```

<br>

----

## __20-Form유효성검사(방법2)__

<br>

```html
<form name="frmLogin" onsubmit="return validateFn();" action="login_ok.html" method="post">
```
validateFn() 실행

<br>

```html
<button type="submit">submit</button>
```
button type="submit" -> 데이터 넘겨주기

<br>

----

## __30-Form유효성검사(방법3)__

<br>

```js
const $btnSmit = document.querySelector('button[type=button]');
const $userid = document.getElementById('userid');
const $pwd = document.getElementById('pwd');
```

1. 사용자가 입력한 값을 가져오기.
```js
$btnSmit.addEventListener('click', function(){

    const userid = $userid.value.trim();
    const pwd = $pwd.value.trim();

    const ValidationLogin = new Login.Validation(userid, pwd);
    ValidationLogin.check();//유효성 검사를 하는 check 메소드를 호출
});
```

2. 패키지안에 유효성 검사를 위한 생성자함수 선언

```js
//생성자함수를 이용한 객체지향 방식의 보안유효성 검사
    const Login = new Object(); //다른 개발자가 만든 코드와의 중복방지(패키지)
Login.Validation = function(userid, pwd){
    this.userid = userid;
    this.pwd = pwd;
}
```

3. 유효성 검사를 하는 check 메소드 등록
```js
Login.Validation.prototype.check = function(){
    if(this.userid === null || this.userid === ''){
        alert('아이디를 입력해 주세요');
        $userid.focus();
        return false;
    }

    if(this.pwd === null || this.pwd === ''){
        alert('패스워드를 입력해 주세요');
        $pwd.focus();
        return false;
    }

    document.forms['frmLogin'].action = 'login_ok.html';
    document.forms['frmLogin'].method = 'post';
    document.forms['frmLogin'].submit();
};
```

<br>

----

## __40-Form유효성검사(방법4)__

<br>

class를 이용한 유효성검사

```js
class Login{
    #userid;
    #pwd;
    #area;
                //매개변수 역할
    constructor(userid, pwd, area){
        this.#userid = userid;
        this.#pwd = pwd;
        this.#area = area;
    }
    //class 안에서 function check(){} -> function은 생략
    check(){
        if(this.#userid===null || this.#userid===''){
            alert('아이디를 입력해 주세요');
            $userid.focus();
            return false;
        }

        if(this.#pwd===null || this.#pwd===''){
            alert('패스워드를 입력해 주세요');
            $pwd.focus();
            return false;
        }

        if(this.#area===null || this.#area===''){
            alert('거주지역을 선택해 주세요');
            $area.focus();
            return false;
        }

        // alert(`userid = ${this.#userid}`);
        // alert(`pwd = ${this.#pwd}`);
        // alert(`area = ${this.#area}`);

        return true;
    }
}

const $btnSmit = document.querySelector('button:nth-of-type(1)');
const $userid = document.getElementById('userid');
const $pwd = document.getElementById('pwd');
const $area = document.getElementById('area');

$btnSmit.addEventListener('click',  function(){

    //1. 사용자가 입력한 값을 가져온다.
    const userid = $userid.value.trim();
    const pwd = $pwd.value.trim();
    const area = $area.value.trim();

    const login = new Login(userid, pwd, area);
    
    //유효성검사를 하는 check 메소드 호출            
    if(login.check()){
        document.forms['frmLogin'].action = 'login_ok.html';
        document.forms['frmLogin'].method = 'post';
        document.forms['frmLogin'].submit();
    }

});
```