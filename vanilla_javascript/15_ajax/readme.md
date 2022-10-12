## __JSON_이해하기__

<br>

JavaScript Object Notation - 자바스크립트 객체 표기법

JSON은 단순 문자열이다.

```js
const person_1 = {'name' : '규원', 'age' : 27};
const person_2 = {'name' : '태화', 'age' : 28};
const person_3 = {'name' : '예진', 'age' : 27};

console.log(`person_1의 타입은: ${typeof person_1}`);//object
console.log(`person_1의 타입은: ${typeof person_2}`);//object
console.log(`person_1의 타입은: ${typeof person_3}`);//object

//JSON 방식으로 데이터 저장
const jsonData = {
    'member' : [
    {'name' : '규원', 'age' : 27},
    {'name' : '태화', 'age' : 28},
    {'name' : '예진', 'age' : 27}
    ]
}

console.log(`jsonData의 타입은 ${typeof jsonData}`);
//object
```

클라이언트가 서버로 객체를 전송하려면 문자열 형식으로 만들어야하는데, 이것을 직렬화라고 한다.
            
Serializing(직렬화) -> JSON.stringify()를 이용해서 자바스크립트의 객체나 배열을 JSON 형식의 문자열로 변환할 수 있다.

```js
const strJsonData = JSON.stringify(jsonData);
console.log(`strJsonData의 타입은: ${typeof strJsonData}`);//string
console.log(`strJsonData: ${strJsonData}`);
//strJsonData: {"member":[{"name":"규원","age":27},{"name":"태화","age":28},{"name":"예진","age":27}]}

// console.log(strJsonData.member[2], name);//문자열이기 때문에 불가능 - 에러발생
```
객체를 JSON형식의 문자열로 변환하면서 들여쓰기 지정
```js
const prettyData = JSON.stringify(jsonData,null,2);//들여쓰기 2칸
console.log('prettyData: %s', prettyData);
//%s = string을 나타냄
/*
    prettyData: {
    "member": [
        {
        "name": "규원",
        "age": 27
        },
        {
        "name": "태화",
        "age": 28
        },
        {
        "name": "예진",
        "age": 27
        }
    ]
    }
*/
```

서버로부터 클라이언트에 전송된 JSON 데이터를 사용하려면 객체형식으로 만들어야 하는데, 이것을 역직렬화라고한다.

Deserializing(역직렬화) -> JSON.parse()를 이용해서 JSON 형식의 문자열을 객체로 변환할 수 있다.

```js
const objData = JSON.parse(strJsonData);
console.log(`objData 타입은:${typeof objData}`);//object
console.log('objData = %j', objData);
/*  
    objData = %j {member: Array(3)}
                    member: Array(3)
                    0: {name: '규원', age: 27}
                    1: {name: '태화', age: 28}
                    2: {name: '예진', age: 27}
                    length: 3
                    [[Prototype]]: Array(0)
                    [[Prototype]]: Object   
*/
console.log(objData.member[2].name);//예진
```

<br>

문제1)

```js
const response = {
    "products" : [{"category":"수상스포츠","description":"It's important for Node.js to provide ","name":"천리안수경","price":19.5,"id":"ab353c2d2f1928c3"},{"category":"수상스포츠","description":"documentation to its users","name":"수상얼럿","price":48.95,"id":"cc2a8341d4d7e958"},{"category":"축구","description":"documentation means different things ","name":"Soccer  Ball","price":19.5,"id":"c076689f70dab814"},{"category":"축구","description":"to different people. Here on nodejs.org","name":"Corner Flags","price":34.95,"id":"080a0a093a51b820"},{"category":"수상스포츠","description":"you will find three types of ","name":"쇼보트 크로스바","price":79500,"id":"c16f34a24e6c1995"},{"name":"Thinking Cap","description":"documentation: API reference ","category":"체스","price":29.95,"id":"910d207c24b6b936"},{"name":"Unsteady Chair","description":"frequently asked questions","category":"체스","price":16,"id":"5ac604837811b9cd"},{"name":"Human 체스 Board","description":"Our API reference documentation is ","category":"체스","price":75,"id":"07c45c3e631c585c"},{"name":"크레씨비치","description":"meant to provide detailed version ","category":"수상스포츠","price":1200,"id":"5ff803beb540da95"}]      
};
```
위 response 객체를 직렬화하고 콘솔창에 보기 좋게 출력하시오.
```js
const strResponse = JSON.stringify(response,null,2);
console.log(`strResponse 타입은: ${typeof strResponse}`);
//strResponse 타입은: string
console.log('strResponse: %s', strResponse);
/*
strResponse: {
    "products": [
        {
        "category": "수상스포츠",
        "description": "It's important for Node.js to provide ",
        "name": "천리안수경",
        "price": 19.5,
        "id": "ab353c2d2f1928c3"
        },
        {
        "category": "수상스포츠",
        "description": "documentation to its users",
        "name": "수상얼럿",
        "price": 48.95,
        "id": "cc2a8341d4d7e958"
        },
        {
        "category": "축구",
        "description": "documentation means different things ",
        "name": "Soccer  Ball",
        "price": 19.5,
        "id": "c076689f70dab814"
        },
        {
        "category": "축구",
        "description": "to different people. Here on nodejs.org",
        "name": "Corner Flags",
        "price": 34.95,
        "id": "080a0a093a51b820"
        },
        {
        "category": "수상스포츠",
        "description": "you will find three types of ",
        "name": "쇼보트 크로스바",
        "price": 79500,
        "id": "c16f34a24e6c1995"
        },
        {
        "name": "Thinking Cap",
        "description": "documentation: API reference ",
        "category": "체스",
        "price": 29.95,
        "id": "910d207c24b6b936"
        },
        {
        "name": "Unsteady Chair",
        "description": "frequently asked questions",
        "category": "체스",
        "price": 16,
        "id": "5ac604837811b9cd"
        },
        {
        "name": "Human 체스 Board",
        "description": "Our API reference documentation is ",
        "category": "체스",
        "price": 75,
        "id": "07c45c3e631c585c"
        },
        {
        "name": "크레씨비치",
        "description": "meant to provide detailed version ",
        "category": "수상스포츠",
        "price": 1200,
        "id": "5ff803beb540da95"
        }
    ]
    }
*/
```
문제2)

위 strResponse문자열을 역직렬화하시오.
```js
const objResponse = JSON.parse(strResponse);
console.log(`objData 타입은:${typeof objResponse}`);
//objData 타입은:object
console.log('objData = %j', objResponse);
/*
0: {category: '수상스포츠', description: "It's important for Node.js to provide ", name: '천리안수경', price: 19.5, id: 'ab353c2d2f1928c3'}
1: {category: '수상스포츠', description: 'documentation to its users', name: '수상얼럿', price: 48.95, id: 'cc2a8341d4d7e958'}
2: {category: '축구', description: 'documentation means different things ', name: 'Soccer  Ball', price: 19.5, id: 'c076689f70dab814'}
3: {category: '축구', description: 'to different people. Here on nodejs.org', name: 'Corner Flags', price: 34.95, id: '080a0a093a51b820'}
4: {category: '수상스포츠', description: 'you will find three types of ', name: '쇼보트 크로스바', price: 79500, id: 'c16f34a24e6c1995'}
5: {name: 'Thinking Cap', description: 'documentation: API reference ', category: '체스', price: 29.95, id: '910d207c24b6b936'}
6: {name: 'Unsteady Chair', description: 'frequently asked questions', category: '체스', price: 16, id: '5ac604837811b9cd'}
7: {name: 'Human 체스 Board', description: 'Our API reference documentation is ', category: '체스', price: 75, id: '07c45c3e631c585c'}
8: {name: '크레씨비치', description: 'meant to provide detailed version ', category: '수상스포츠', price: 1200, id: '5ff803beb540da95'}
*/
```
특정 카테고리에서 필요한 개수만큼 데이터 추출
```js
const products = response.products;//배열

const getProdFn = function(cate, ea){
    const newData = new Array();

    for(let i=0;i<products.length;i++){
        let category = products[i].category;
        if(category == cate && newData.length < ea){
            newData.push(products[i]);
        }
    }
    console.log('cate = ',cate);
    console.log('newData = ',newData);
};

// getProdFn('수상스포츠', 2);
/*
cate =  수상스포츠
(2) [{…}, {…}]
    0: {category: '수상스포츠', description: "It's important for Node.js to provide ", name: '천리안수경', price: 19.5, id: 'ab353c2d2f1928c3'}
    1: {category: '수상스포츠', description: 'documentation to its users', name: '수상얼럿', price: 48.95, id: 'cc2a8341d4d7e958'}
*/

getProdFn('축구', 1);
/*
cate =  축구
[{…}]
    0: {category: '축구', description: 'documentation means different things ', name: 'Soccer  Ball', price: 19.5, id: 'c076689f70dab814'}
*/
```
특정카테고리에서 제품리스트를 추출하는 함수
```js
const products = response.products;//배열
const newData = new Array();

const prodList = {};//제품명

const getListFn = function(cate, ea){

    //기존 데이터를 삭제
    for(let key in prodList){
        delete prodList[key];
    }

    for(let i=0;i<products.length;i++){

        let category = products[i]['category'];
    
        if(category == cate && Object.keys(prodList).length < ea){
            prodList[products[i].name] = true;
        }
    }

    let result = '';
    //객체를 순환하면서 key값을 뽑아내는 어드밴스 for문
    for(let key in prodList){
        result += '<br>' + key;
    }
    document.write(result);
}


getListFn('체스', 2);
/*
Thinking Cap
Unsteady Chair
*/
getListFn('수상스포츠', 3);
/*
천리안수경
수상얼럿
쇼보트 크로스바
*/
```
