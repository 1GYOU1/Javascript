//생성자함수
function Character(name, age, hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}


//방법1 - 생성자함수.apply(this에 바인딩시킬 객체명, 배열데이터);
const duly = {};//빈객체
Character.apply(duly,['둘리',7,'호이호이~!']);
console.log('duly =', duly);


//방법2 - 생성자함수.call(this에 바인딩시킬 객체명, 데이터를 나열);
const micol = {};//빈객체
Character.call(micol, '마이콜', 24, '구공탄 노래부르기');
console.log('micol =', micol);