// DOM 셀렉팅을 통합하는 $() 함수
const $ = function(query){
    
    console.log(query[0]);//문자열은 읽기전용 배열

    //배열의 일부분을 추출하는 slice(시작인덱스, 끝인덱스);
    console.log(query.slice(1,5));
    console.log(query.slice(1));//인덱스 1부터 끝까지 가져옴

    if(query[0]==='#'){
        return document.getElementById(query.slice(1));
    }else{
        return document.querySelectorAll(query);
    }
};


//태그의 속성을 제어하는 attr() 함수
const attr = function(dom, attrName, attrVal){
    if(attrVal === undefined){
        return dom.getAttribute(attrName);
    }else{
        dom.setAttribute(attrName, attrVal);
    }
};