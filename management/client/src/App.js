import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles'

const styles = theme =>({
  root:{
    width:'100&',
    marginTop: theme.spacing.unit *3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})

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
    const {classes} = this.props;
  return (//props를 사용하여 정보 구조화
    <Paper className = {classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
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
            job={c.job}/> )})
      }
      </TableBody>
        </Table>
    </Paper>
  );
}
}

export default withStyles(styles)(App);
