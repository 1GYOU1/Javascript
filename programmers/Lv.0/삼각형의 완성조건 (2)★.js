/*
<삼각형의 완성조건 (2)>

문제 설명
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
sides의 원소는 자연수입니다.
sides의 길이는 2입니다.
1 ≤ sides의 원소 ≤ 1,000
입출력 예
sides	result
[1, 2]	1
[3, 6]	5
[11, 7]	13
입출력 예 설명
입출력 예 #1

두 변이 1, 2 인 경우 삼각형을 완성시키려면 나머지 한 변이 2여야 합니다. 따라서 1을 return합니다.
입출력 예 #2

가장 긴 변이 6인 경우
될 수 있는 나머지 한 변은 4, 5, 6 로 3개입니다.
나머지 한 변이 가장 긴 변인 경우
될 수 있는 한 변은 7, 8 로 2개입니다.
따라서 3 + 2 = 5를 return합니다.
입출력 예 #3

가장 긴 변이 11인 경우
될 수 있는 나머지 한 변은 5, 6, 7, 8, 9, 10, 11 로 7개입니다.
나머지 한 변이 가장 긴 변인 경우
될 수 있는 한 변은 12, 13, 14, 15, 16, 17 로 6개입니다.
따라서 7 + 6 = 13을 return합니다.
*/

function solution(sides) {
    let count = 0
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    // 만약 기존 요소 중 가장 긴 변이 있다면
    for(let i = max-min+1 ; i <= max ; i ++) {
        count++
    }
    // 나머지 한 변이 가장 긴 변인 경우
    for(let i = max+1 ; i < max+min ; i ++) {
        count++
    }
    return count
}

/*
가장 긴 변은 두변의 합보다 작아야한다는 조건.
1. slides 둘 중에 큰 수 < 구해햐하는 변의 값 + slides의 둘 중에 작은 수
2. 구해야 하는 변의 값 < slides 두 변의 합
*/

//다른 사람의 풆이 - 대체 무슨 공식인지 ..? 댓글에 써진 공식 읽어봐도 이해..xX....
function solution(sides) {
    return Math.min(...sides)*2-1
}

//다른 사람의 풀이
function solution(sides) {
    let a = Math.min(...sides)
    let b = Math.max(...sides)
    let answer = 0
    for(let i = 1 ; i < a+b ; i++){
        let arr = [a,b,i].sort((a,b) => a-b)
        let [q,w,e] = arr
        if(q+w > e){
            answer++
        }
    }
    return answer;
}
/*
주어지는 배열 중 큰 수랑, 작은 수 구분해주고,
for문 i < 두 수를 더한 값으로 증감++
그 안에서 sort로 오름차순 정렬 후, 
가장 큰 수 + 두번째로 큰 수 > 가장 작은수 일때만 for문 돌리면서 증감시켜 갯수 구하는 방식. 
*/