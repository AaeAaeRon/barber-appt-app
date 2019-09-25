import React from 'react';


export default class Professional extends React.Component{

    

    toProServs = () => {

        console.log(this)
        console.log('show list of services to click on and make appt ')
    }

    render(){
        return(
            
            <div>
                <h4>Professional Info</h4><br />
                <b>Name:</b> {this.props.prof.first_name}<br />
                <b>Contact Number:</b> {this.props.prof.mobile_num} <br />
                <b>email address:</b> {this.props.prof.email} <br />
                <button onClick={this.toProServs}> Make Appointment </button><br />
            </div>
        )
    }
}