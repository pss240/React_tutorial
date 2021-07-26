const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
          'id':1,
          'image':'https://placeimg.com//64/64/1',
          'name':'홍길동',
          'birthday':'980209',
          'gender':'여자',
          'job':'학생'
      },
      {
        'id':2,
        'image':'https://placeimg.com//64/64/2',
        'name':'박성수',
        'birthday':'995204',
        'gender':'남자',
        'job':'프로그래머'
      },
      {
        'id':3,
        'image':'https://placeimg.com//64/64/3',
        'name':'장주찬',
        'birthday':'975223',
        'gender':'남자',
        'job':'선생님'
      }
    ]);
}); 

app.listen(port, () => console.log(`Listening on port ${port}`));
