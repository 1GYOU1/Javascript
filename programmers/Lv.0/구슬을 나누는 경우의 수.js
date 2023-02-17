/*
<구슬을 나누는 경우의 수>

문제 설명
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

제한사항
1 ≤ balls ≤ 30
1 ≤ share ≤ 30
구슬을 고르는 순서는 고려하지 않습니다.
share ≤ balls
입출력 예
balls	share	result
3	2	3
5	3	10

서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다. 

서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.
*/

/*
순서 상관없이 조합과 조합의 수 공식 참고해서 푼 문제.
ex) 
5개의 과일을 3개의 접시에 순서 상관없이 나열했을 때의 모든 경우의 수는
5x4x3=60가지
과일 3가지를 순서대로 나열하는 경우
3x2x1=6
순서에 상관없이 나열하기 때문에 6을 1로 보기 때문에 전체의 경우의 수에서 나눠주기.
답 : 60 / 6 = 10가지
*/

//풀이1
function solution(balls, share) {
    let num1 = 1;
    let num2 = 1;
    for(let a=balls;a>balls-share;a--){
        num1=num1*a;
    }
    for(let i=share;i>=1;i--){
        num2=num2*i;
    }
    return num1/num2;
}

//풀이2
function solution(balls, share) {
    let num1 = 1;
    let num2 = 1;
    for(let a=balls;a>balls-share;a--){
        num1=num1*a;
    }
    for(let i=1;i<=share;i++){
        num2=num2*i
    }
    return Math.round(num1/num2);
}

/*
참고사이트

경우의 수 구하는 법
https://blog.naver.com/PostView.nhn?blogId=noela70&logNo=221126034317

소수점 12번째 자리 js 오류와 해결
https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98
*/