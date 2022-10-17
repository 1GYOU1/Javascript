//step1 - Express 모듈을 이용하여 웹서버 세팅

import http, { get } from 'http';
import path from 'path';
import express from 'express';
import SocketIO from "socket.io";


const app = express();

const httpServer = http.createServer(app);

//웹소켓 서버 객체를 생성하는 순간 클라이언트에서 /socket.io/skcket.io.js 로드 가능
const io = SocketIO(httpServer, {});

//절대 경로
const publicPath = path.resolve(__dirname, 'public');
// console.log(publicPath);
const viewPath = path.resolve(__dirname, 'views');
console.log(viewPath)

app.use('/public', express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', viewPath);

app.get('/', (req, res)=>{res.render('index')});
app.get('/a', (req, res)=>{res.redirect('/')});

httpServer.listen(8001, ()=>{
    console.log(`8001포트에서 접속을 기다리는 중`)
});


//step2 = 웹소켓

io.on('connection', (socket)=>{
    socket.send('1. 클라이언트 연결 성공')
})