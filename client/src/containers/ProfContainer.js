import React from 'react';
import Professional from '../modelComps/Professional'

export default class ProfContainer extends React.Component{
    render(){
        return(
            <div>
                {localStorage.token
                ? this.props.profs.map(prof => <Professional prof={prof}/>)
                : <h3>Please log in</h3> }
            </div>
        )
    }
}