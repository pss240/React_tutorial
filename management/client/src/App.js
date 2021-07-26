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
});

class App extends Component {
  state = {
    customers:""
  }

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }

  callApi = async() =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

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
          this.state.customers ? this.state.customers.map(c =>{//map함수를 사용가능
          return(
            <Customer
            key={c.id}//map은 key를 사용해줘야 한다
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}/> )}) : ""
      }
      </TableBody>
        </Table>
    </Paper>
  );
}
}

export default withStyles(styles)(App);
