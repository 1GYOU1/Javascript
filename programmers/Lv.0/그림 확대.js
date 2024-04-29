/*
    문제 설명
    직사각형 형태의 그림 파일이 있고, 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다. 이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때, 이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

    제한사항
    1 ≤ picture의 길이 ≤ 20
    1 ≤ picture의 원소의 길이 ≤ 20
    모든 picture의 원소의 길이는 같습니다.
    picture의 원소는 '.'과 'x'로 이루어져 있습니다.
    1 ≤ k ≤ 10
    입출력 예
    picture	k	result
    [".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."]	2	["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]
    ["x.x", ".x.", "x.x"]	3	["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...", "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]
    입출력 예 설명
    입출력 예 #1

    예제 1번의 picture는 다음과 같습니다.

    .xx...xx.
    x..x.x..x
    x...x...x
    .x.....x.
    ..x...x..
    ...x.x...
    ....x....
    이를 가로 세로로 k배, 즉 2배 확대하면 그림 파일은 다음과 같습니다.

    ..xxxx......xxxx..
    ..xxxx......xxxx..
    xx....xx..xx....xx
    xx....xx..xx....xx
    xx......xx......xx
    xx......xx......xx
    ..xx..........xx..
    ..xx..........xx..
    ....xx......xx....
    ....xx......xx....
    ......xx..xx......
    ......xx..xx......
    ........xx........
    ........xx........
    따라서 ["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]를 return 합니다.

    입출력 예 #2

    예제 2번의 picture는 다음과 같습니다.

    x.x
    .x.
    x.x
    이를 가로 세로로 k배, 즉 3배 확대하면 그림 파일은 다음과 같습니다.

    xxx...xxx
    xxx...xxx
    xxx...xxx
    ...xxx...
    ...xxx...
    ...xxx...
    xxx...xxx
    xxx...xxx
    xxx...xxx
    따라서 ["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...", "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]를 return 합니다.
*/

// 나의 풀이
const solution = (picture, k) => {
    let resultArr = [];
    for(let i=0;i<picture.length;i++){
        let text = '';
        for(let j=0;j<picture[i].length;j++){ // picture[i]의 텍스트 하나씩 순회
            text += picture[i][j].repeat(k) // k번씩 text에 넣어주기
        }
        for(let l=0;l<k;l++){
            resultArr.push(text) // text 한 줄 완성되면 k번 resultArr에 넣어주기
        }
    }
    return resultArr;
}

/*
    이중 for문으로 배열을 순회하면서
    원소의 텍스트를 k번씩 repeat하여 text 변수에 더해주고,
    picture[i] 원소 하나씩 돌 때마다 resultArr에 k번씩 push해주면서 배열을 완성하는 방식
*/