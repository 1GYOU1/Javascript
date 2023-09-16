/*
<2의 영역>

문제 설명
정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

단, arr에 2가 없는 경우 [-1]을 return 합니다.

제한사항
1 ≤ arr의 길이 ≤ 100,000
1 ≤ arr의 원소 ≤ 10
입출력 예
arr	result
[1, 2, 1, 4, 5, 2, 9]	[2, 1, 4, 5, 2]
[1, 2, 1]	[2]
[1, 1, 1]	[-1]
[1, 2, 1, 2, 1, 10, 2, 1]	[2, 1, 2, 1, 10, 2]
입출력 예 설명
입출력 예 #1

2가 있는 인덱스는 1번, 5번 인덱스뿐이므로 1번부터 5번 인덱스까지의 부분 배열인 [2, 1, 4, 5, 2]를 return 합니다.
입출력 예 #2

2가 한 개뿐이므로 [2]를 return 합니다.
입출력 예 #3

2가 배열에 없으므로 [-1]을 return 합니다.
입출력 예 #4

2가 있는 인덱스는 1번, 3번, 6번 인덱스이므로 1번부터 6번 인덱스까지의 부분 배열인 [2, 1, 2, 1, 10, 2]를 return 합니다.
*/

//나의 풀이
const solution = arr => {
    let first = arr.indexOf(2);
    let last = arr.lastIndexOf(2);
    if(first !== -1){
        return arr.slice(first, last+1)
    }else{
        return [-1];
    }
}

/*
    indexOf() - 2가 처음에 나타나는 자리, 
    lastIndexOf() - 2가 마지막에 나타나는 자리를 이용해서 
    slice()로 잘라서 풀었다.

    배열에 없으면 indexOf를 써도 -1이 나오기 때문에 예외처리해서 [-1] 출력 !
*/

const solution = arr => {
    let first = arr.indexOf(2);
    let last = arr.lastIndexOf(2);
    if(first !== -1){
        return arr.splice(first, last - first+1)
    }else{
        return [-1];
    }
}

/*
    splice사용해서도 풀어봤다.

    slice(추출을 시작할 인덱스, 추출을 시작할 인덱스) - 원본 배열 수정 X
    splice(수정을 시작할 인덱스, 삭제할 요소의 개수) - 원본 배열까지 수정   

    두 번째 인자가 다르다 ~
*/