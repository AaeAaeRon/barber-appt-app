import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';





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
            <div className="navbar navbar-expand navbar-fixed-top" >
                <div className="container">
                    <center>
                        <div className="navbar-header">
                            <a id='brand' className="navbar-brand" href="/"><b>BookdBarbr</b></a>
                        </div>
                        <div className="navbar-collapse collapse" id="navbar-main">
                            <ul className="nav navbar-nav">
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
                                ?<li><a onClick={this.logout} href= '/' > Log out</a><br /><br />
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
export default withRouter(NavBar)
