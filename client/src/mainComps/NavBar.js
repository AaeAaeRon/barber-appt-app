import React from 'react';
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom'
import Calendar from './Calendar'


class NavBar extends React.Component{


    logout = () => {
        localStorage.clear()

    }


    render(){
        return(
            <BrowserRouter>
            <div>
                <a href= '/schedule' > calendar </a><br />
                <a href= '/signup' > sign up </a><br />
                <a href= '/login' > login </a><br />
                <a href= '/clients' > clients </a><br />
                {/* <a href= '/professionals' > pros </a><br /> */}
                {/* <a href= '/services' > services </a><br /> */}
                <a href= '/new-service' > add new service </a><br />
                <a href= '/appointments' > appts </a><br />
                {/* <a href= '/new-appt' > make appt </a><br /> */}
                <a href= '/professionals' > make appt </a><br />


                <button onClick={this.logout}> logout </button><br />
            </div>
            </BrowserRouter>
        )
    }
}
export default NavBar
