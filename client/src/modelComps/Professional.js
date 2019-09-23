import React from 'react';


export default class Professional extends React.Component{
    render(){
        return(
            <div>
                <h4>Professional Info</h4><br />
                <b>Name:</b> {this.props.prof.first_name}<br />
                <b>Contact Number:</b> {this.props.prof.mobile_num} <br />
            </div>
        )
    }
}