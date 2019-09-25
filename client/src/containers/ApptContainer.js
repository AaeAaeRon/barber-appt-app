import React from 'react';
import Appointment from '../modelComps/Appointment'
import NewApptForm from '../forms/NewApptForm'
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom'



export default class ApptContainer extends React.Component{

    render(){
        return(
            <div>
                {localStorage.token
                ? this.props.appts.map(appt => <Appointment appt={appt}/>)
                : <h3>Please log in</h3> }
            </div>
        )
    }
}