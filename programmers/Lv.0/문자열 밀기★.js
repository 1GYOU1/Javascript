/*
<문자열 밀기>

문제 설명
문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < A의 길이 = B의 길이 < 100
A, B는 알파벳 소문자로 이루어져 있습니다.
입출력 예
A	B	result
"hello"	"ohell"	1
"apple"	"elppa"	-1
"atat"	"tata"	1
"abc"	"abc"	0
입출력 예 설명
입출력 예 #1

"hello"를 오른쪽으로 한 칸 밀면 "ohell"가 됩니다.
입출력 예 #2

"apple"은 몇 번을 밀어도 "elppa"가 될 수 없습니다.
입출력 예 #3

"atat"는 오른쪽으로 한 칸, 세 칸을 밀면 "tata"가 되므로 최소 횟수인 1을 반환합니다.
입출력 예 #4

"abc"는 밀지 않아도 "abc"이므로 0을 반환합니다.
*/

function solution(A, B) {
    let arrA = A.split('');
    let result = -1;
    if(A == B){
        result = 0;
    }else{
        for(let i=0;i<A.length;i++){
            arrA.unshift(arrA[arrA.length-1]);
            arrA.pop(arrA[arrA.length-1]);
            if(arrA.join('') == B){
                result = i+1;
                break;
            }
        }   
    }
    return result;
}

/*
for문 돌면서 else로 마지막에 result -1 해주면 덮어씌워지기때문에 선언할때 -1로 해놓았다.
테스트케이스 "atat"	"tata"	같은 경우, A의 length만큼 돌리면 2번이나 같은 결과를 얻을 수 있어서,
처음 나오는 결과를 출력해주려고 더이상 for문이 돌지 않게 break를 사용해 멈춰주었다. 
*/

//다른 사람의 풀이
let solution=(a,b)=>(b+b).indexOf(a)
/*
다음번에 제대로 적용해 해석하기...!!!!
*/

