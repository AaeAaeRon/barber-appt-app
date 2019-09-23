import React from 'react';

export default class Client extends React.Component{
    render(){
        return(
            <div>
                <h4>Client Info</h4><br />
                <b>Name:</b> {this.props.client.first_name}<br />
                <b>Contact Number:</b> {this.props.client.mobile_num} <br />
            </div>
        )
    }
}