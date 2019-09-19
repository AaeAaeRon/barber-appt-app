import React from 'react';
import Client from '../modelComps/Client'

export default class ClientContainer extends React.Component{
    render(){
        return(
            <div>
                {
                this.props.clients.map(client => <Client client={client}/>)
                }
            </div>
        )
    }
}