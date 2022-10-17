function weather(){
  console.log(`${this.when}의 날씨는 ${this.state}`);  
};

const today = {
    when : '오늘',
    state : '맑음'
};

//today 객체를 바인딩한 새로운 함수생성
const weatherToday = weather.bind(today);
console.log('weather = ',weatherToday);

weatherToday();