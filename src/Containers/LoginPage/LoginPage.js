import React, { Component } from 'react';
import './LoginPage.scss';

class LoginPage extends Component {

    state ={
        users : [
            { email :'user@gmail.com',password:'User@0516',type:'user' },
            { email :'admin@xyz.com',password:'Admin_007',type:'admin' },
        ],
        email : '',
        password : '',
    }

    inputHandler = (e,type) =>{
        if(type === 'email'){
            this.setState(
                {
                    ...this.state,
                    email : e.target.value
                }
            )
        }
        else{
            this.setState(
                {
                    ...this.state,
                    password : e.target.value
                }
            ) 
        }
    }

    onLoginHandler = () =>{
        // console.log(this.state.email);
        // console.log(this.state.password);

        this.state.users.filter(
            (user) =>{
                if(this.state.email === user.email && this.state.password === user.password){
                    if(user.email === 'admin@xyz.com'){
                        console.log('this is admin login');
                        this.props.history.push('/adminpage')
                    }
                    else{
                        console.log('this is user login');
                        this.props.history.push('/userpage')
                    }
                }
                else if(this.state.email !== user.email){
                    console.log('no user present');
                }
                return null
            }


        )



    }

    render() {

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // return re.test(email);

        let emailErrorMsg = ''
        if(this.state.email){
            emailErrorMsg = re.test(this.state.email) ? '' : <small class="form-text text-danger">Please enter a valid email id</small>
        }

        let pe = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/

        let passwordErrorMsg = '';
        if(this.state.password){
            passwordErrorMsg = pe.test(this.state.password) ? '' : <small class="form-text text-danger">Please enter a valid email id
            <br/>
            password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters
            </small>
        }

        let btnAction = true
        if(this.state.email.length && this.state.password.length){
            btnAction = false
        }

        return (
            <React.Fragment>
                <div className="login-block text-center p-3 mt-2 mb-2 m-auto">
                    <h4>Login</h4>
                    <div class="form-group text-left">
                        <label>Email</label>
                        <input 
                        type="email" 
                        class="form-control" 
                        placeholder="Enter email" 
                        value={this.state.email}
                        onChange={ (e)=>{ this.inputHandler(e,'email') } }
                        />
                        {
                            emailErrorMsg
                        }
                        
                    </div>
                    <div class="form-group text-left">
                        <label>Password</label>
                        <input 
                        type="password" 
                        class="form-control" 
                        placeholder="Enter Password" 
                        onChange={ (e)=>{ this.inputHandler(e,'password') } }
                        />

                        {
                            passwordErrorMsg
                        }
                    </div>
                    <div class="form-group">
                    <a href="#" class="txt3">Forgot Password?</a>
                        <button
                        onClick={ this.onLoginHandler } 
                        className="btn btn-outline-success" disabled={btnAction}
                        >Login</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginPage;
