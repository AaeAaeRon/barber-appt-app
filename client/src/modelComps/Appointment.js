import React from 'react';

export default class Appointment extends React.Component{
    render(){
        return(
            <div>
            Duration: {this.props.appt.duration}
            </div>
        )
    }
}