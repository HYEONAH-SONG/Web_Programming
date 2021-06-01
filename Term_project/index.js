const express = require('express')
const app = express()
const port = 3000

// 내 서버를 통해서 API를 받음
app.use(express.static('public'))
app.get('/',(req,res) => res.send('Hello World!'))
// API 정보
app.get('/webapi',function(req,res){
    var request = require('request');
    var options = {
    'method': 'GET',
    'url': 'http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst?serviceKey=iKSp77ot3NPLrOqVsxCT8rgGIjlav78vR1rjHrSnJ0WotpyDVmAFidrRoQ8DIciP9yRLV1YIApuSgAlWeWbEbg%3D%3D&base_date=20210601&base_time=0600&nx=99&ny=75&dataType=JSON',
    'headers': {
        'Cookie': 'JSESSIONID=s32dHxYqvNynwUz2fkwwEfIltg6qJWChBSy4irRcIuYQjjvyJZEH87zOgj0afRTe.amV1c19kb21haW4vbmV3c2t5Mw=='
    }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
    });
})
app.listen(port, () => console.log('Example app listening at http://localhost:${port}'))