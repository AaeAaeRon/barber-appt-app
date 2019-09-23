import React from 'react';
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom'



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
              <Link to="/schedule">calendar</Link><br />
              <Link to="/signup">signup</Link><br />
              <Link to="/login">login</Link><br />
              <Link to="/clients">clients</Link><br />
              <Link to="/professionals">profs</Link><br />
              <Link to="/services">services</Link><br />
              <Link to="/services/new">add new service</Link><br />
              <Link to="/appointments">appts</Link><br />

              <button onClick={this.logout}> logout </button><br />


            </div>
            </BrowserRouter>
        )
    }
}
export default NavBar
