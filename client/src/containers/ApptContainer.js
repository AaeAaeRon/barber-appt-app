import React from 'react';
import Appointment from '../modelComps/Appointment'

export default class ApptContainer extends React.Component{
    render(){
        return(
            <div>
                {
                this.props.appts.map(appt => <Appointment appt={appt}/>)
                }
            </div>
        )
    }
}