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

//a태그(DOM)을 셀렉팅
const $thmbs =  $('.gallery>.nav>.thmbs>li>a');
const $screen = $('#screen');


//8개의 이벤트 구문을 한번에 작성
$thmbs.forEach(function($thmb){

    $thmb.addEventListener('click', function(evt){
        evt.preventDefault();//a태그의 기본기능 작동 방지
    
        //큰 이미지가 변하는 코드
        const bigImg = attr(this, 'href');
        attr($screen, 'src', bigImg);
    
        //alt 속성값을 변경하는 코드
        const imgAlt = attr(this.firstElementChild, 'alt');
        attr($screen, 'alt', imgAlt);

        
        //클래스삭제 - DOM선택.classList.remove('클래스명');
        //클래스추가 - DOM선택.classList.add('클래스명');
        
        //클래스토글 - DOM선택.classList.toggle('클래스명');
        //무조건추가 - DOM선택.classList.toggle('클래스명',true); 
        //무조건삭제 - DOM선택.classList.toggle('클래스명',false);
        
        //활성화표시
        $thmbs.forEach(anchor=>{
            //화살표함수는 자신의 this를 갖지 않기 때문에 상위의 this 사용가능
            anchor.parentElement.classList.toggle('on', anchor===this);
        });
        
    });

});



