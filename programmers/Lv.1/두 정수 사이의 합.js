/*
<두 정수 사이의 합>

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
제한 조건)
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.
*/

(function solution() {

	let a = 3;
	let b = 5;
	let answer = null;

	if(a<b){
		for(i = a; i <= b; i++){
			answer = answer + i
		}
		console.log(answer)
		return answer
	}else if(b<a){
		for(i = b; i <= a; i++){
			answer = answer + i
		}
		console.log(answer)
		return answer
	}else{
		return a
	}

})()

// 제출한 답안
// function solution(a, b) {
// 	let answer = null;

// 	if(a<b){
// 		for(i = a; i <= b; i++){
// 		answer = answer + i
// 		}
// 		return answer
// 	}else if(b<a){
// 		for(i = b; i <= a; i++){
// 		answer = answer + i
// 		}
// 		return answer
// 	}else{
// 		return a
// 	}
// }