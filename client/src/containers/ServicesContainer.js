import React from 'react';
import Service from '../modelComps/Service'
import NewServForm from '../forms/NewServForm'


export default class ServicesContainer extends React.Component{
    render(){
        // console.log(this.props)
        return(
            <div>
                <NewServForm />
                {localStorage.token
                ? this.props.servs.map(serv => <Service service={serv}/>)
                : <h3>Please log in</h3> }
            </div>
        )
    }
}