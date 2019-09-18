import React from 'react';
// import {BrowserRouter,Route} from 'react-router-dom'

export default class SignUp extends React.Component{
    render(){
        return(
            <div>
                <form action="/action_page.php">
                    First name:<br/>
                    <input type="text" name="first_name" />
                    <br/>
                    Last name:<br/>
                    <input type="text" name="last_name" />
                    <br/>
                    Mobile number:<br/>
                    <input type="tel" name="mobile_num" />
                    <br/>
                    email:<br/>
                    <input type="text" name="email" />
                    <br/>
                    password:<br/> 
                    <input type="password" name="password"/>
                    <br/>
                    
                    <p>Is this a Client or Professional Account?</p>
                    <input type="radio" name="client" /> Client<br/>
                    <input type="radio" name="prof" /> Professional<br/>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        )
    }
}