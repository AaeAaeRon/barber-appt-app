import React from 'react';
import Service from '../modelComps/Service'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class ServicesContainer extends React.Component{
    render(){
        // console.log(this.props)
        return(
            
            <Container fixed>
            <BrowserRouter>
            <div>
            
          
            
            {localStorage.token
                ? this.props.servs.map(serv => <Service service={serv}/>)
                : <h3>Please log in</h3> }
            
        
            
                
            </div>
            </BrowserRouter>
            </Container>
        )
    }
}