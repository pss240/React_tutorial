import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CustomerDelete from './CustomerDelete';

class Customer extends React.Component{//컴포넌트라는 라이브러리 상속
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image } alt="profile" style={{width:"64",height:"64"}}/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell><CustomerDelete id={this.props.id} stateRefresh = {this.props.stateRefresh}/></TableCell>
            </TableRow>
        )
    }
}
/*
<div>
            <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
            <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
</div>

class CustomerProfile extends React.Component{
    render(){
        return(//react요소는 JSX문법에 맞춰서해야한다 내부데이터가 2개이상이 있을경우 div와 같은 걸로 감싸서 해줘야한다.
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
*/
export default Customer;