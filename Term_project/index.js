const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/movie', function(req,res){
  var request = require('request');
  var url = 'https://openapi.naver.com/v1/search/movie.json?';
  var query = req.query.query;
  var genre = req.query.genre;
  url = url + "query=" + encodeURI(query) +" &genre=" + genre ;
  
  var options = {
    'method': 'GET',
    'url': url,
    'headers': {
        'X-Naver-Client-Id': 'eQQpbg4ZZbm41n6a3TG7','X-Naver-Client-Secret': 'ac88ib7eZE'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))