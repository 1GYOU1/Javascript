# Math

## __Math.abs()__

주어진 숫자의 절대값을 반환

```js
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
```

[사용소스 - 홀수와 짝수](https://github.com/1GYOU1/Javascript/blob/main/programmers/%ED%99%80%EC%88%98%EC%99%80%20%EC%A7%9D%EC%88%98.html)

<br>

----

## __Math.sqrt()__

특정숫자의 제곱근 값을 계산해주는 함수

사용 예시
```js
Math.sqrt([대상 숫자]);

Math.sqrt(9); // 3
Math.sqrt(121); // 11
Math.sqrt(144); // 12
```

[사용소스 - 정수 제곱근 판별](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EC%A0%95%EC%88%98%20%EC%A0%9C%EA%B3%B1%EA%B7%BC%20%ED%8C%90%EB%B3%84.html)

<br>

----

## __Math.pow()__

특정숫자의 거듭제곱 값을 계산해주는 함수

사용 예시
```js
Math.pow([대상 숫자], [거듭제곱 횟수]);

Math.pow(3, 2); // 9
Math.pow(11, 2); // 121
Math.pow(2, 10); // 1024

// 분수 지수
Math.pow(4, 0.5);  // 2 (4의 제곱근)
Math.pow(8, 1/3);  // 2 (8의 세제곱근)
Math.pow(2, 0.5);  // 1.4142135623730951 (2의 제곱근)
Math.pow(2, 1/3);  // 1.2599210498948732 (2의 세제곱근)
// 양의 지수
Math.pow(7, -2);   // 0.02040816326530612 (1/49)
Math.pow(8, -1/3); // 0.5
// 양의 밑
Math.pow(-7, 2);   // 49 (제곱의 결과값은 양수입니다.)
Math.pow(-7, 3);   // -343 (세제곱은 음수가 될 수 있습니다.)
// 밑이 음수이며 지수가 분수라면 언제나 NaN을 반환
Math.pow(-7, 1/3); // NaN
```

[사용소스 - 정수 제곱근 판별](https://github.com/1GYOU1/Javascript/blob/main/programmers/%EC%A0%95%EC%88%98%20%EC%A0%9C%EA%B3%B1%EA%B7%BC%20%ED%8C%90%EB%B3%84.html)
