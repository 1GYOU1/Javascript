/**
 * 사용자는 썸네일을 누른다.
 *      해당 썸네일에 매칭되는 DOM 선택 - a
 *      click 이벤트 구문 작성 -> a태그의 기본기능 작동 방지
 *  
 * 큰 이미지가 변해야 한다.
 *      앵커의 href 속성값을 가져온다.
 *      큰 이미지의 src 속성값에 넣어준다.
 * 
 * 큰 이미지의 alt 속성값 변경
 *      앵커의 첫번째 자식(img)의 alt 속성값을 가져온다.
 *      큰 이미지의 alt 속성값에 넣어준다.
 *      
 */

    const $thmbs = document.querySelectorAll('.gallery>.nav>.thmbs>li>a>img')
    const $border = document.querySelectorAll('.gallery>.nav>.thmbs>li');
    console.log($border)

    // for문 사용
    // this의 의미 = Current HTMl Element
    for(i=0; i<$thmbs.length; i++){

        $thmbs[i].addEventListener('click', function() {
            // 큰 이미지 변경
            const bigImg = this.getAttribute('src');
            document.getElementById('screen').setAttribute('src', bigImg);
            // alt값 변경
            const thmbs_alt = this.getAttribute('alt');
            document.getElementById('screen').setAttribute('alt', thmbs_alt);
        });
    }

    // forEach문 사용
    $thmbs.forEach(function(item, index, arr){
        $thmbs[index].addEventListener('click', function(){
            // 큰 이미지 변경
            const bigImg = this.getAttribute('src');
            document.getElementById('screen').setAttribute('src', bigImg);
            // alt값 변경
            const thmbs_alt = this.getAttribute('alt');
            document.getElementById('screen').setAttribute('alt', thmbs_alt);
        })
    })





