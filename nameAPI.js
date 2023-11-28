const express = require('express')
const app = express() //app 이 서버를 의미함
const port = 999
var cors = require('cors') //cors를 req로 불러오기
// 동물 API 서버 완성

// app.use(cors()) //이 서버에 대해서 cors를 사용하겠다. ()안에 조건 넣을 수 있음, 비워두면 모든 요청 허용node
 
app.get('/sound/:name', function (req, res) {
    const { name } = req.params //더 간략화 버전 name에 한번에 넣기
    console.log(name)

    if(name == 'dog') {
        res.json({'sound': '멍멍'})
    } else if(name == 'cat') {
        res.json({'sound': '야옹'})
    } else if(name == 'pig') {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': '알 수 없음'})
    }
    }


)

app.listen(port)
