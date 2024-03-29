/*
<리스트 자르기>

문제 설명
정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다. slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.

n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
n 은 1, 2, 3, 4 중 하나입니다.
slicer의 길이 = 3
slicer에 담긴 정수를 차례대로 a, b, c라고 할 때

0 ≤ a ≤ b ≤ num_list의 길이 - 1
1 ≤ c ≤ 3
5 ≤ num_list의 길이 ≤ 30

0 ≤ num_list의 원소 ≤ 100

입출력 예
n	slicer	num_list	result
3	[1, 5, 2]	[1, 2, 3, 4, 5, 6, 7, 8, 9]	[2, 3, 4, 5, 6]
4	[1, 5, 2]	[1, 2, 3, 4, 5, 6, 7, 8, 9]	[2, 4, 6]
입출력 예 설명
입출력 예 #1

[1, 2, 3, 4, 5, 6, 7, 8, 9]에서 1번 인덱스부터 5번 인덱스까지 자른 리스트는 [2, 3, 4, 5, 6]입니다.
입출력 예 #2

[1, 2, 3, 4, 5, 6, 7, 8, 9]에서 1번 인덱스부터 5번 인덱스까지 2개 간격으로 자른 리스트는 [2, 4, 6]입니다.
*/

//나의 풀이
const solution = (n, slicer, num_list) => {
    if(n == 1){
        return num_list.slice(0, slicer[1] + 1)
    }else if(n == 2){
        return num_list.slice(slicer[0], num_list.length + 1)
    }else if(n == 3){
        return num_list.slice(slicer[0], slicer[1] + 1)
    }else{
        let case4 = [];
        for(let i=slicer[0];i<=slicer[1];i+=slicer[2]){
            case4.push(num_list[i])
        }
        return case4;
    }
}

/*
    slice 사용해서 풀엇당.
    n이 4일 때 간격 설정을 위해서
    for문을 i+=slicer[2] 간격만큼 돌게 설정해주고 새 배열에 담아서 출력하게 했다.
*/