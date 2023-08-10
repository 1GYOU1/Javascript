/*
<특별한 이차원 배열 1>

문제 설명
정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.

arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.
제한사항
1 ≤ n ≤ 100
입출력 예
n	result
3	[[1, 0, 0], [0, 1, 0], [0, 0, 1]]
6	[[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]
1	[[1]]
입출력 예 설명
입출력 예 #1

예제 1번의 n의 값은 3으로 다음과 같이 2차원 배열을 채울 수 있습니다.

i \ j	0	1	2
0	1	0	0
1	0	1	0
2	0	0	1
따라서 [[1, 0, 0], [0, 1, 0], [0, 0, 1]]을 return 합니다.

입출력 예 #2

예제 2번의 n의 값은 6으로 다음과 같이 2차원 배열을 채울 수 있습니다.

i \ j	0	1	2	3	4	5
0	1	0	0	0	0	0
1	0	1	0	0	0	0
2	0	0	1	0	0	0
3	0	0	0	1	0	0
4	0	0	0	0	1	0
5	0	0	0	0	0	1
따라서 [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]을 return 합니다.

입출력 예 #3

예제 1번의 n의 값은 1이고 다음과 같이 2차원 배열을 채울 수 있습니다.

i \ j	0
0	1
따라서 [[1]]을 return 합니다.
*/

//나의 풀이
const solution = n => {
    let result = [];
    for(let i=0;i<n;i++){
        let Arr = [];
        result.push(Arr);
        for(let i2=0;i2<n;i2++){
            result[i][i2] = 0;
            if(i == i2){
                result[i][i2] = 1;
            }
        }
    }
    return result;
}

//2중 for문 사용해서 배열 만들어서 0으로 채워주고, 2중 for문의 idx들이 같은 원소만 1로 바꿔주기.