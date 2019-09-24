import React from 'react';


export default class Professional extends React.Component{

    

    toProServs = () => {
        console.log('show appt form with drop down of pro services ')
    }

    render(){
        return(
            
            <div>
                <h4>Professional Info</h4><br />
                <b>Name:</b> {this.props.prof.first_name}<br />
                <b>Contact Number:</b> {this.props.prof.mobile_num} <br />
                <b>email address:</b> {this.props.prof.email} <br />
                <button onClick={this.toProServs}> Make Appointment</button>

            </div>
        )
    }
}