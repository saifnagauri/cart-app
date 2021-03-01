import axios from 'axios';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import UserList from '../../Components/UserList/UserList';
import UserDeatil from '../UserDetailPage/UserDeatil';


class AdminPage extends Component {

    


    state = {
        UserList : [],
        selectedUser : null,
        userSelect : false
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=2')
        .then(
            (result)=>{
                this.setState(
                    {
                        UserList : result.data.results
                    }
                )
            }
        )
        .catch(
            (error)=>{
                console.log(error);
                return error
            }
        )
    }

    userSelectHandler = (index) =>{
        this.props.history.push('/adminpage/detail')
        this.setState(
            {
                selectedUser : index,
                userSelect : true
            }
        )
    }

   detailBackClickHandler = () => {
        this.setState({ userSelect : false }) 
        this.props.history.goBack()
    }


    render() {

        // console.log(this.props);

        return (
            <React.Fragment>

                {
                    this.state.userSelect ? ''
                    : <UserList userSelect={ this.userSelectHandler } data={this.state.UserList }></UserList>
                }
                

                { this.state.selectedUser !== null ?  
                <Route path='/adminpage/detail' component={() => <UserDeatil backClick={ this.detailBackClickHandler } user={ this.state.UserList[this.state.selectedUser] }></UserDeatil>}/>
                : null
                }

                
                
                
            </React.Fragment>
        );
    }
}

export default AdminPage;
