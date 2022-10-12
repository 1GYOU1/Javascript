/**
 * 사용자가 a를 클릭! -> a태그에 대한 click 이벤트 구문
 *  a태그의 기본기능 작동 방지
 * 
 * 이번에 클릭한 인디케이터의 index를 구함 
 * 컨테이너 이동 -> left 좌표 변환
 * css transition 설정
 * 
 * 활성화표시
 * 
 * 이전,다음
 *  전역변수 nowIdx를 선언
 *  click 했을때 nowIdx의 값을 변경
 *  컨테이너 이동, 활성화 표시
 */

//수업
if(true){

    const $indicators = document.querySelectorAll('.slides>.pagination>li>a');
    const $container = document.querySelector('.slides>.container');
    
    const $btnPrev = document.querySelector('.slides>a.prev');
    const $btnNext = document.querySelector('.slides>a.next');

    const $btnPlay = document.querySelector('.slides>span.play');
    const $btnStop = document.querySelector('.slides>span.stop');

    let nowIdx = 0;//현재 보여지고 있는 슬라이드의 인덱스번호

    let intetvalKey = null;

    $indicators.forEach(function($indicator, idx){
        $indicator.addEventListener('click', function(evt){
            evt.preventDefault();

            nowIdx = idx;

            //컨테이너 이동
            $container.style.left = -1120 * nowIdx + 'px';

            //활성화표시
            $indicators.forEach(function(el, actIdx){
                el.parentElement.classList.toggle('on', actIdx===nowIdx);
            });
        });
    });

    //이전버튼
    $btnPrev.addEventListener('click', function(evt){
        evt.preventDefault();

        /*
            nowIdx : 0~4
            현재  -->  변화된 값
             4    -->   3
             3    -->   2
             2    -->   1
             1    -->   0
             0    -->   4    
        */

        if(nowIdx > 0){
            nowIdx--;
        }else{
            nowIdx = 4;
        }

        //삼항연산자 코드로 수정
        //(nowIdx>0) ? nowIdx-- : nowIdx = 4;

        //컨테이너 이동
        $container.style.left = -1120 * nowIdx + 'px';

        //활성화표시
        $indicators.forEach(function(el, actIdx){
            el.parentElement.classList.toggle('on', actIdx===nowIdx);
        });
    });

    //다음버튼
    $btnNext.addEventListener('click', function(evt){
        //a태그의 기본기능 작동 방지
        evt.preventDefault();

        if(nowIdx < $indicators.length-1){
            nowIdx++;
        }else{
            nowIdx = 0;
        }

        //컨테이너 이동
        $container.style.left = -1120 * nowIdx + 'px';

        //활성화표시
        $indicators.forEach((el, actIdx)=>{
            el.parentElement.classList.toggle('on', actIdx===nowIdx);
        });   
    });

    //자동실행
    $btnPlay.addEventListener('click',function(){
        //새로운 인터벌이 시작되기 전에 기존 인터벌 제거
        clearInterval(intetvalKey)

        intetvalKey = setInterval(function() {
            if(nowIdx < $indicators.length-1){
                nowIdx++;
            }else{
                nowIdx = 0;
            }
    
            //컨테이너 이동
            $container.style.left = -1120 * nowIdx + 'px';
    
            //활성화표시
            $indicators.forEach((el, actIdx)=>{
                el.parentElement.classList.toggle('on', actIdx===nowIdx);
            });  

        }, 2000);
    });

    //자동실행 멈춤
    $btnStop.addEventListener('click',function(){
        clearInterval(intetvalKey);
    });

}



//내가 작성중이었던 코드
if(false){

let pager = document.querySelectorAll('.slides .pagination li a');
let container = document.querySelector('.slides .container');

pager.forEach(function(el,idx,arr) {
    // console.log(idx)
    pager[idx].addEventListener('click', function(e) {
        e.preventDefault();
        container.style.left = -1120 * (idx)+'px'
    });
});

}