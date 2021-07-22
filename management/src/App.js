import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'

const customers=[
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
]

class App extends Component {

  render(){
  return (//props를 사용하여 정보 구조화
    <div>
      {
        customers.map(c =>{//map함수를 사용가능
          return(
            <Customer
            key={c.id}//map은 key를 사용해줘야 한다
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}/>
          )
        })
      }
    </div>
  );
}
}

export default App;
