import React from 'react';

export default class Service extends React.Component{

    makeAppt = () => {
        console.log(this)

    }
    render(){
        return(
            <div>
                <br/><br/>
                <b>Please pick a service</b>
                <br/><br/>
                <button onClick={this.makeAppt}>{this.props.service.service_name}</button><br/>
                Description:<br/> {this.props.service.description}<br/>
                Duration: {this.props.service.duration}<br/>
                <br/><br/>
            </div>
        )
    }
}