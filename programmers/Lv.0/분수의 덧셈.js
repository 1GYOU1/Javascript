/*
<분수의 덧셈>

문제 설명
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 <numer1, denom1, numer2, denom2 < 1,000
입출력 예
numer1	denom1	numer2	denom2	result
1	2	3	4	[5, 4]
9	2	1	3	[29, 6]
입출력 예 설명
입출력 예 #1

1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
입출력 예 #2

9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.
*/

//내 답안
function solution(numer1, denom1, numer2, denom2) {
    let top = (numer1 * denom2) + (numer2 * denom1)
    let btm = denom1 * denom2
    function gcd(btm, top) {//유클리드 호제법
        return top ? gcd(top, btm % top) : btm;
    }
    gcd(btm, top);
    return [top/gcd(btm, top), btm/gcd(btm, top)]
}

/*
1   3   4   6   10   5
- + - = - + - = -- = -
2   4   8   8   8    4

유클리드 호제법

A를 B로 나눈 몫을 Q라 하고, 나머지를 R이라 하자. 이 때, 
gcd(A,B)=gcd(B,R)이다.

예시) 
60를 24로 나눈 몫은 2이고 나머지는 12입니다. 즉, 
60=24×2+12입니다. 과연 gcd(60,24)=gcd(24,12)=12
임을 확인할 수 있다.

// 1. 반복문으로 구현
function gcd(a, b) {
    while (b != 0) {
        let r = a % b;
        [a, b] = [b, r];
    }
    return a;
}

// 2. 재귀함수로 구현
function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}
*/
