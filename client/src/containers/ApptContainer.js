import React from 'react';
import Appointment from '../modelComps/Appointment'
import NewApptForm from '../forms/NewApptForm'
export default class ApptContainer extends React.Component{

    render(){
        return(
            <div>
                <NewApptForm />
                {localStorage.token
                ? this.props.appts.map(appt => <Appointment appt={appt}/>)
                : <h3>Please log in</h3> }
            </div>
        )
    }
}