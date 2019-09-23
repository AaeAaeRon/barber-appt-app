import React from 'react';
import Client from '../modelComps/Client'

export default class ClientContainer extends React.Component{


    render(){
        return(
            <div>
                {localStorage.token
                ? this.props.clients.map(client => <Client client={client}/>)
                : <h3>Please log in</h3> }
            </div>
        )
    }
}