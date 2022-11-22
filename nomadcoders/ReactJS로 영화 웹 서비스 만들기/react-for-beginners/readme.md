# React JS

React CDN
```html
<!--React Js-->
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<!--React DOM-->
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<!--bable-->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

## babel 

=> Pure React로 변환해주는 언어

babel 사용시 script type 선언 필수 ★
```html
<script type="text/babel"></script>
```

```js
// Pure React
const h3 = React.createElement('h3', 
	{
		id:'title',
		onMouseEnter: () => console.log('mouse enter'),
	},
	'Hello I am a span'
);

// babel 사용
const Title = (
	<h3 id="title" onMouseEnter={() => console.log('mouse enter')}>'Hello I am a Title'</h3>
)
```

## JSX

html과 유사하게 생긴 javascript 확장 문법

```js
const root = document.getElementById('root');

// 일반 함수식으로 변환
function Title(){
	return	(
	<h3 id="title" onMouseEnter={() => console.log('mouse enter')}>Hello I am a Title</h3>
	);
}

// 화살표 함수식으로 변환
const Button = () => (
	<button style={{
			backgroundColor: 'tomato',
		}}
		onClick={() => console.log('im clicked')}>
		Click me
	</button>
);

// 대문자로 불러오기 ★(html 언어와 혼동 주의)
const Container = () => (
	<div>
		<Title />
		<Button />	
	</div>
);
ReactDOM.render(<Container/>, root);
```