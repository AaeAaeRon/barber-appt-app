import React from 'react';
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom'
import Calendar from './Calendar'


class NavBar extends React.Component{

    // showAppt = () => {
    //     fetch('http://localhost:3000/appointments', {
    //         method: 'GET',
    //         headers: {
    //             Authorization: `Bearer ${localStorage.token}`
    //         }
    //     })
    //     .then(res=> res.json())
    //     .then(console.log)
    // }

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
                <a href= '/professionals' > pros </a><br />
                <a href= '/services' > services </a><br />
                <a href= '/services/new' > add new service </a><br />
                <a href= '/appointments' > appts </a><br />

                <button onClick={this.logout}> logout </button><br />


            </div>
            </BrowserRouter>
        )
    }
}
export default NavBar
