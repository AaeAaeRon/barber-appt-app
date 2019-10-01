import React from 'react';
import Service from '../modelComps/Service'

export default class ServicesContainer extends React.Component{
    render(){
        // console.log(this.props)
        return(
            
            <div className='serviceCont'>
            
                {localStorage.token
                ? this.props.servs.map(serv => <Service {...this.props} service={serv}/>)
                : <h3>Please log in</h3> }                
            </div>
        )
    }
}