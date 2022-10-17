function Person(name, age){
    //아래의 this는 객체변수의 이름에 바인딩된다.
    this.name = name;
    this.age = age;
}

const gyou1 = new Person('규원', 27);

console.log(gyou1);