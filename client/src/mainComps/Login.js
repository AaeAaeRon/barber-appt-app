import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component{

   

    constructor(){
        super()
        this.state = {
            account_type: "client",
            currentUser: '',
            userType: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    

    login = (e, props) => {
        e.preventDefault()
        // debugger
        let url = ""

        if(this.state.account_type === "client"){
            url = 'http://localhost:3000/login/client'
        }
        else{
            url = 'http://localhost:3000/login/prof'
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        .then(res => res.json())
        .then(data => {
            // debugger
            // localStorage.token = data.token SAME THING AS BELOW
            localStorage.setItem('token', data.token)
            localStorage.setItem('userId', data.id)
            localStorage.setItem('userType', data.type)
            localStorage.setItem('name', data.name)

        })

        
        this.props.history.push('/professionals')
    
    }

    
    

    render(){
        console.log(this)


        return(
            <div>
                <br>
                
                </br>
                <form onSubmit={(e) => this.login(e)} id="login-form" className="border border-light p-5">
                    <p className="h4 mb-4 text-center">Login</p>
                    <input type="text" onChange={this.handleChange} name="email" id="defaultLoginForm" className="form-control mb-4" placeholder="Email"/>
                    <input type="password" onChange={this.handleChange} name="password" id="defaultLoginForm" className="form-control mb-4" placeholder="Password"/>
                    <button href='/login' className="btn btn-info btn-block my-4 btn-dark"  type="submit">Sign in</button>
                    <div className="text-center">
                        <p>Not a member?
                            <a href="/signup"> Register</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(Login)