import React from 'react';
// import {BrowserRouter,Route} from 'react-router-dom'

export default class SignUp extends React.Component{

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    

    signup = (e) => {
        e.preventDefault()
        let button = document.querySelector('#client')
        button.checked?
        // POSTS TO CLIENT IF CLIENT 
        fetch('http://localhost:3000/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client: {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                mobile_num: this.state.mobile_num, 
                email: this.state.email,
                password: this.state.password,
                }
            })
        })

        // POSTS TO PROFESSIONAL 
        :  fetch('http://localhost:3000/professionals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                professional: {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                mobile_num: this.state.mobile_num, 
                email: this.state.email,
                password: this.state.password,
                }
            })
        })

        

    }

    render(){
        return(
            <div>
            
                <form onSubmit={(e) => this.signup(e)}>
                    First name:<br/>
                    <input onChange={this.handleChange} type="text" name="first_name" />
                    <br/>
                    Last name:<br/>
                    <input onChange={this.handleChange} type="text" name="last_name" />
                    <br/>
                    Mobile number:<br/>
                    <input onChange={this.handleChange} type="tel" name="mobile_num" />
                    <br/>
                    email:<br/>
                    <input onChange={this.handleChange} type="text" name="email" />
                    <br/>
                    password:<br/> 
                    <input onChange={this.handleChange} type="password" name="password"/>
                    <br/>
                    
                    <p>Is this a Client or Professional Account?</p>
                    <input  type="radio" defaultChecked='true' id ='client' name="account_type" /> Client<br/>
                    <input  type="radio" id = 'professsional' name="account_type" /> Professional<br/>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        )
    }
}