# __DOM 응용__

script 최상단에 위치할 때 __defer__ 추가해주면 html > script 순으로 load 정상작동.
```html
<script defer src="./js/js.js"></script>
```

----

<br>

### __최상단 이미지 클릭시 하단 이미지 변경__

<br>

this의 의미 = Current HTMl Element
<br>

__.for()__ 사용
```js
const $thmbs = document.querySelectorAll('.gallery>.nav>.thmbs>li>a>img')

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
```
__.forEach()__ 사용
```js
const $thmbs = document.querySelectorAll('.gallery>.nav>.thmbs>li>a>img')

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
```

a태그의 기본기능 작동 방지
```js
function(evt){
    evt.preventDefault();//a태그의 기본기능 작동 방지
}
```