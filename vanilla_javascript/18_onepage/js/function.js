const $mnus = document.querySelectorAll('.gnb>li>a');

const arrTopVal = [];
document.querySelectorAll('article').forEach(function($article, idx){
    //dom.offsetTop은 요소의 body 시작점으로부터의 거리
    arrTopVal.push($article.offsetTop);
})

console.log(arrTopVal)

//메뉴에 대한 click 이벤트 구문
$mnus.forEach(function($mnu, idx){
    $mnu.addEventListener('click', function(evt) {
        evt.preventDefault();

        window.scrollTo({top:arrTopVal[idx]-66,behavior:'smooth'});
    })
});

//로고
const $logo = document.querySelector('h1.logo > a');
$logo.addEventListener('click', function(evt) {
    evt.preventDefault();

    window.scrollTo({top:0,behavior:'smooth'});
});