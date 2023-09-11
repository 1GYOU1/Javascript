## Promise

- 자바스크립트 비동기 처리에 사용되는 객체.
- 비동기처리 콜백지옥 해결법
- 데이터를 받아오기도 전에 화면에 데이터를 표시하려고 하면 오류가 발생하거나 빈 화면이 나타날 때 해결법

ajax 통신 코드 예시

**콜백 함수 버전**
```js
function getData(callbackFunc) {
  $.get('url 주소/products/1', function(response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}

getData(function(tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```
**promise 버전**
- new Promise(), resolve(), then()와 같은 프로미스 API를 사용한 구조
```js
function getData(callback) {
  // new Promise() 추가
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function(tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});
```

<br>

### Promise의 3가지 상태(states)

new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖는데, 처리 과정을 의미한다.

- Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
- Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

### Pending(대기)

new Promise() 메서드를 호출하면 대기(Pending) 상태가 되며, new Promise() 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 resolve, reject이다.

```js
new Promise(function(resolve, reject) {
  // ...
});
```

### Fulfilled(이행)

콜백 함수의 인자 resolve를 아래와 같이 실행하면 이행(Fulfilled) 상태가 됌.
```js
new Promise(function(resolve, reject) {
  resolve();
});
```

```js
function getData() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function(resolvedData) {
  console.log(resolvedData); // 100
});
```

### Rejected(실패)

new Promise()로 프로미스 객체를 생성하고 reject를 아래와 같이 호출하면 실패(Rejected) 상태가 됌.

```js
new Promise(function(resolve, reject) {
  reject();
});
```
```js
function getData() {
  return new Promise(function(resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData().then().catch(function(err) {
  console.log(err); // Error: Request is failed
});
```
실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 catch()로 받을 수 있음.

![1](https://github.com/1GYOU1/Javascript/assets/90018379/31f4b2dc-5876-45d0-a021-2a75d46c3fc7)

### 사용 예제
```js
function getData() {
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      if (response) {
        resolve(response);
      }
      reject(new Error("Request is failed"));
    });
  });
}

// 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
getData().then(function(data) {
  console.log(data); // response 값 출력
}).catch(function(err) {
  console.error(err); // Error 출력
});
```
서버에서 제대로 응답을 받아오면 resolve() 메서드를 호출하고, 응답이 없으면 reject() 메서드를 호출하는 예제. 호출된 메서드에 따라 then()이나 catch()로 분기하여 응답 결과 또는 오류를 출력

<br>

### 여러 개의 Promise 연결(Promise Chaining)

hen() 메서드를 호출하고 나면 새로운 프로미스 객체가 반환되어서, 아래와 같이 코딩 가능.
```js
function getData() {
  return new Promise({
    // ...
  });
}

// then() 으로 여러 개의 프로미스를 연결한 형식
getData()
  .then(function(data) {
    // ...
  })
  .then(function() {
    // ...
  })
  .then(function() {
    // ...
  });
```
위 코드 형식을 참고하여 프로미스 객체를 하나 생성하고 setTimeout()을 이용해 2초 후에 resolve()를 호출하는 예제 ↓
```js
new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 2000);
})
.then(function(result) {
  console.log(result); // 1
  return result + 10;
})
.then(function(result) {
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  console.log(result); // 31
});
```
- resolve()가 호출되면 promise가 대기 상태에서 이행 상태로 넘어가기 때문에 첫 번째 .then()의 로직으로 넘겨주기. 
- 첫 번째 .then()에서는 이행된 결과 값 1을 받아서 10을 더한 후 그다음 .then() 으로 넘겨주기.
- 두 번째 .then()에서도 마찬가지로 바로 이전 promise의 결과 값 11을 받아서 20을 더하고 다음 .then()으로 넘겨주기.
- 마지막 .then()에서 최종 결과 값 31을 출력.

<br>

### 사용자 로그인 인증 로직에 promise 여러 개 연결

```js
getData(userInfo)//사용자 정보가 담긴 객체
  .then(parseValue)//promise를 반환해주는 함수
  .then(auth)//promise를 반환해주는 함수
  .then(diaplay);//promise를 반환해주는 함수
```
여러 개의 promise를 .then()으로 연결하여 처리 ↓
```js
var userInfo = {
  id: 'test@abc.com',
  pw: '****'
};

function parseValue() {
  return new Promise({
    // ...
  });
}
function auth() {
  return new Promise({
    // ...
  });
}
function display() {
  return new Promise({
    // ...
  });
}
```

<br>

### promise의 에러 처리 방법

서비스를 구현하다 보면 네트워크 연결, 서버 문제 등으로 인해 오류가 발생할 수 있는데,
에러 처리 방법에는 2가지 방법이 있음.

1. then()의 두 번째 인자로 에러를 처리하는 방법

```js
getData().then(
  handleSuccess,
  handleError
);
```

2. catch()를 이용하는 방법

```js
getData().then().catch();
```

위 2가지 방법 모두 프로미스의 reject() 메서드가 호출되어 실패 상태가 된 경우에 실행되며, promise의 로직이 정상적으로 돌아가지 않는 경우 호출.

```js
function getData() {
  return new Promise(function(resolve, reject) {
    reject('failed');
  });
}

// 1. then()의 두 번째 인자로 에러를 처리하는 코드
getData().then(function() {
  // ...
}, function(err) {
  console.log(err);
});

// 2. catch()로 에러를 처리하는 코드
getData().then().catch(function(err) {
  console.log(err);
});
```

### Promise 에러 처리는 가급적 catch()를 사용

```js
// then()의 두 번째 인자로는 감지하지 못하는 오류
function getData() {
  return new Promise(function(resolve, reject) {
    resolve('hi');
  });
}

getData().then(function(result) {
  console.log(result);
  throw new Error("Error in then()"); // Uncaught (in promise) Error: Error in then()
}, function(err) {
  console.log('then error : ', err);
});
```

getData() 함수의 프로미스에서 resolve() 메서드를 호출하여 정상적으로 로직을 처리하지만, then()의 첫 번째 콜백 함수 내부에서 오류가 나는 경우 오류를 제대로 잡아내지 못한다.

하지만 똑같은 오류를 catch()로 처리하면 다른 결과가 나옴 !
```js
// catch()로 오류를 감지하는 코드
function getData() {
  return new Promise(function(resolve, reject) {
    resolve('hi');
  });
}

getData().then(function(result) {
  console.log(result); // hi
  throw new Error("Error in then()");
}).catch(function(err) {
  console.log('then error : ', err); // then error :  Error: Error in then()
});
```
<br>

[참고 사이트 - 캡틴판교](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)