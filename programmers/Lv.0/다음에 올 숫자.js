/*
<다음에 올 숫자>

문제 설명
등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

제한사항
2 < common의 길이 < 1,000
-1,000 < common의 원소 < 2,000
common의 원소는 모두 정수입니다.
등차수열 혹은 등비수열이 아닌 경우는 없습니다.
등비수열인 경우 공비는 0이 아닌 정수입니다.
입출력 예
common	result
[1, 2, 3, 4]	5
[2, 4, 8]	16
입출력 예 설명
입출력 예 #1

[1, 2, 3, 4]는 공차가 1인 등차수열이므로 다음에 올 수는 5이다.
입출력 예 #2

[2, 4, 8]은 공비가 2인 등비수열이므로 다음에 올 수는 16이다.
*/

//내 답안
function solution(common) {
    if(common[1] - common[0] == common[2] - common[1]){//등차수열
        return (common[1] - common[0]) + common[common.length-1];
    }else if(common[0] == 1){//등비수열
        return Math.pow(common[1], common.length)
    }else{//등비수열
        return Math.pow(common[0], common.length+1)
    }
}
/*
배열[1] - 배열[0] == 배열[2] - 배열[1] 일때 등차수열로 구분.
등비수열은 [1, 2, 4] 0번째가 1일 경우와 아닐 경우로 구분해서 계산해줬다.
Math.pow(?,?)를 사용해서 제곱근 구해서 return 해주기. 
*/