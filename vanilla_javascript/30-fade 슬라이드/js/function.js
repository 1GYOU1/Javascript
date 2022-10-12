/**
 * 사용자가 a를 클릭! -> a태그에 대한 click 이벤트 구문
 *  a태그의 기본기능 작동 방지
 * 
 * 이번에 클릭한 인디케이터의 index를 구함 
 *  nowIdx와 oldIdx 값을 저장
 *  이전슬라이드 사라짐
 *  이번에 나타날 슬라이드 보임

 * 활성화표시
 * 
 */

//수업
if(true){
    const $indicators = document.querySelectorAll('.slides>.pagination>li>a');
    const $slides = document.querySelectorAll('.slides>.container>p');

    const $btnPrev = document.querySelector('.slides>a.prev');
    const $btnNext = document.querySelector('.slides>a.next');

    const $btnPlay = document.querySelector('.slides>span.play');
    const $btnStop = document.querySelector('.slides>span.stop');

    let nowIdx = 0;//현재 보여지고 있는 슬라이드의 인덱스번호
    let oldIdx = nowIdx;

    let intervalKey = null;

    $indicators.forEach(function($indicator, idx){
        $indicator.addEventListener('click', function(evt){
            evt.preventDefault();

            oldIdx = nowIdx;
            nowIdx = idx;

            //이전 슬라이드 사라짐
            $slides[oldIdx].classList.remove('on');

            //이번에 나타날 슬라이드 보임
            $slides[nowIdx].classList.add('on');

            //이전 인디케이터 비활성화
            $indicators[oldIdx].parentElement.classList.remove('on');

            //이번 인디케이터 활성화
            $indicators[nowIdx].parentElement.classList.add('on');
        });
    });
}
