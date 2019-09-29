import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'





class NavBar extends React.Component{

    state = {
        redirect: false
    }

    logout = (props) => {
        localStorage.clear()
        // this.props.history.replace('/login')

    }

    render(){
       

      
       
        return(
            <div>

                <div class="navbar navbar-expand navbar-fixed-top" >
                    <div class="container">
                        <center>
                            <div class="navbar-header">
                                <a class="navbar-brand" href="/"><b>WebSchedge</b></a>
                            </div>
                            <div class="navbar-collapse collapse" id="navbar-main">
                                <ul class="nav navbar-nav">
                                    {localStorage.token 
                                    ?<li class="active"><a href= '/schedule' > Calendar </a>
                                    </li>
                                    :null
                                    }
                                    
                                    {localStorage.userType === 'c' 
                                    ?<li><a href= '/professionals' >Make Appointment </a><br />
                                    </li>
                                    :null
                                    }

                                    {localStorage.token
                                    ?<li><Button onClick={this.logout} >Logout</Button>
                                    </li>
                                    :<li><a href= '/login' > Login </a><br />
                                    </li>
                                    }

                                    {localStorage.token
                                    ?null
                                    :<li><a href= '/signup' > Sign Up </a><br />
                                    </li>
                                    }
                                    
                                    
                                   
                                    
                                    {localStorage.token
                                    
                                    ?<li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Menu </a>
                                        <ul class="dropdown-menu">
                                            {localStorage.userType === 'p'
                                            ?<li><a href= '/new-service' > Create a new service </a><br />
                                            </li>
                                            :null
                                            }
                                            
                                            <li><a href="#">Another action</a>
                                            </li>
                                        </ul>
                                    </li>
                                    :null
                                    }
                                    
                                </ul>
                            </div>
                        </center>
                    </div>
                </div>
                                
                <br />
                
                {/* <a href= '/clients' > clients </a><br /> */}
                
                


            </div>
        )
    }
}
export default NavBar
