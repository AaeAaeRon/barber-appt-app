import React from 'react';
import { withRouter } from 'react-router-dom';


class SignUp extends React.Component{

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
        this.props.history.push('/login')
    }

    render(){
        return(
            <div>
                <br>     
                </br>
                <form onSubmit={(e) => this.signup(e)} id='sign-up' className="border border-light p-5" >
                    <p className="h4 mb-4 text-center">Sign Up!</p>

                    <input type="text" onChange={this.handleChange} 
                        name="first_name" id="defaultSignUpForm" 
                        className="form-control mb-4" placeholder="First Name" 
                    />

                    <input type="text" onChange={this.handleChange} 
                        name="last_name" id="defaultSignUpForm" 
                        className="form-control mb-4" placeholder="Last Name" 
                    />

                    <input type="tel" onChange={this.handleChange} 
                        name="mobile_num" id="defaultSignUpForm" 
                        className="form-control mb-4" placeholder="Mobile Number" 
                    />
                    <input type="text" onChange={this.handleChange} 
                        name="email" id="defaultSignUpForm" 
                        className="form-control mb-4" placeholder="Email" 
                    />
                    <input type="password" onChange={this.handleChange} 
                        name="password" type="password" id="defaultSignUpForm" 
                        className="form-control mb-4" placeholder="Password" 
                    />

                    <h5>Will this be a Client or Professional Account?</h5>
                    <input  type="radio" defaultChecked='true' id ='client' name="account_type" /> Client<br/>
                    <input  type="radio" id = 'professsional' name="account_type" /> Professional<br/>

                    <button className="btn btn-info btn-block my-4 btn-dark" type="submit">Register</button>
                    <div className="text-center">
                        <p>Already a member?
                            <a href="/login"> Login</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(SignUp)