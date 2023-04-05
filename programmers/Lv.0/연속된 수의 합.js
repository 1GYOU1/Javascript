/*
<연속된 수의 합>

문제 설명
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

제한사항
1 ≤ num ≤ 100
0 ≤ total ≤ 1000
num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
입출력 예
num	total	result
3	12	[3, 4, 5]
5	15	[1, 2, 3, 4, 5]
4	14	[2, 3, 4, 5]
5	5	[-1, 0, 1, 2, 3]
입출력 예 설명
입출력 예 #1

num = 3, total = 12인 경우 [3, 4, 5]를 return합니다.
입출력 예 #2

num = 5, total = 15인 경우 [1, 2, 3, 4, 5]를 return합니다.
입출력 예 #3

4개의 연속된 수를 더해 14가 되는 경우는 2, 3, 4, 5입니다.
*/

//나의 풀이
function solution(num, total) {
    let arr = [];
    for(let i=total/num - (num-1)/2;i<(total/num - (num-1)/2)+num;i++){
        arr.push(i)
    }
    return arr;
}

/*
보완 필요할듯...!
① total/num - (num-1)를 하면 결과값 배열의 중간값을 구할 수 있고,
② total/num - (num-1)/2를 하면 결과값 배열의 가장 작은 값을 구할 수 있다.
③ (total/num - (num-1)/2)+num를 하면 결과값 배열의 가장 큰 값이기 때문에
for문으로 ②부터 ③까지 돌려서 배열에 push해주는 방법이다.
*/
