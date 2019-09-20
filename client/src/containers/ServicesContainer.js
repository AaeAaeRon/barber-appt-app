import React from 'react';
import Service from '../modelComps/Service'

export default class ServicesContainer extends React.Component{
    render(){
        return(
            <div>
                {this.props.servs.map(serv => <Service service={serv}/>)}
            </div>
        )
    }
}