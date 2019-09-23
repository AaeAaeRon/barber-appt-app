import React from 'react';

export default class Appointment extends React.Component{

    formatDateTime = () => {
        let newDT = this.props.appt.startDate.strftime("When: %m/%d/%Y")
        return newDT
        debugger 

    }
    render(){
        return(
            <div>
                <h4>Appointment Info</h4>

                <b>Service By:</b> <br />
                <b>Service:</b> {this.props.appt.title}<br />
                <b>When:</b> {this.props.appt.startDate}<br />
                <b>Where:</b><br />
                <b>Duration:</b> {this.props.appt.duration}<br />
                <br /><br />

            </div>
        )
    }
}