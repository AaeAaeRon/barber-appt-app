import React from 'react';

export default class Login extends React.Component{

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

    login = (e) => {
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
        })
    }

    render(){
    // console.log(this)

        return(
            <div>
                <form onSubmit={(e) => this.login(e)}>
                    <p>Are you logging into a Client or Professional Account?</p>
                    <input  type="radio" onChange={this.handleChange} defaultChecked='true' value='client' name="account_type" /> Client<br/>
                    <input  type="radio" onChange={this.handleChange} value='professsional' name="account_type" /> Professional<br/>
                    <br/>
                    email:<br/>
                    <input onChange={this.handleChange} type="text" name="email" />
                    <br/>
                    password:<br/> 
                    <input onChange={this.handleChange} type="password" name="password"/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        )
    }
}