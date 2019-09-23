import React from 'react';

export default class AppointForm extends React.Component{
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