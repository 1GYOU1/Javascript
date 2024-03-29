### 다시 풀어볼 문제 리스트
1. [프로그래머스 - 삼각형의 완성조건 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/120868)
```js
//다른 사람의 풆이
function solution(sides) {
    return Math.min(...sides)*2-1
}
```

<br>

---

# 공식

## 경우의 수

[참고 - 경우의 수 구하기](https://blog.naver.com/PostView.nhn?blogId=noela70&logNo=221126034317)

<br>

## 소수점 계산 오류
```js
console.log(0.1 + 0.2)
//0.30000000000000004
```
우리는 보통 계산을 할 때 '10진법'을 사용하지만, 우리와 다르게 컴퓨터는 계산을 할 때 0과 1만 사용하는 '2진법'을 사용한다. 그래서 10진법을 2진법으로 바꾸는 변환과정이 필요한데, 소수 중 일부는 이 과정에서 무한소수가 되어버린다. 하지만 컴퓨터 메모리에는 한계가 있어서 무한 소수를 다 담지 못하고 중간에 잘라서 유한 소수로 저장해버린다. 바로 이 과정에서 미세한 오차가 발생하는 것

해결방법

대부분 결과값을 소수점 12번째 자리에서 반올림하는 방법 사용

1. toFixed() 메서드
```js
let result = (0.1 + 0.2).toFixed(2); 
// '0.30' 
Number(result); 
// 0.3
```
2. Math.round() 메서드
```js
Math.round(20.49); 
// 20 
Math.round((0.1 + 0.2) * 10) / 10; 
// 0.3
```
3. 기타 라이브러리

<br>

[참고 - 소수점 오류와 해결](https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98)