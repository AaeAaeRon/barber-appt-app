import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'





class NavBar extends React.Component{

    state = {
        redirect: false
    }

    logout = (props) => {
        localStorage.clear()
        // this.props.history.push('/')

    }

    render(){
        return(
            <div class="navbar navbar-expand navbar-fixed-top" >
                <div class="container">
                    <center>
                        <div class="navbar-header">
                            <a class="navbar-brand" href="/"><b>BookdBarbr</b></a>
                        </div>
                        <div class="navbar-collapse collapse" id="navbar-main">
                            <ul class="nav navbar-nav">
                                {localStorage.token 
                                ?<li ><a href= '/schedule' > Calendar </a>
                                </li>
                                :null
                                }
                                
                                {localStorage.userType === 'c' 
                                ?<li><a href= '/make-appt' >Make Appointment </a><br />
                                </li>
                                :null
                                }

                                {localStorage.userType === 'c' 
                                ?<li><a href= '/appts' >All Appointments </a><br />
                                </li>
                                :null
                                }

                                

                                {localStorage.token
                                ?null
                                :<li><a href= '/signup' > Sign Up </a><br />
                                </li>
                                }

                                {localStorage.userType === 'p'
                                ?<li><a href= '/new-service' > Create a new service </a><br /><br />
                                </li>
                                :null
                                }
                                
                                {localStorage.token
                                ?<li><Button onClick={this.logout} >Logout</Button>
                                </li>
                                :<li><a href= '/login' > Login </a><br />
                                </li>
                                }
                                
                            </ul>
                        </div>
                    </center>
                </div>
            </div>  
            // {/* <a href= '/clients' > clients </a><br /> */}
        )
    }
}
export default NavBar
