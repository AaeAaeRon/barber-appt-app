import React from 'react';

export default class Service extends React.Component{
    render(){
        return(
            <div>
                {this.props.service.service_name}
            </div>
        )
    }
}