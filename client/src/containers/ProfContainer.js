import React from 'react';
import Professional from '../modelComps/Professional'

export default class ProfContainer extends React.Component{
    render(){
        return(
            <div>
                {this.props.profs.map(prof => <Professional prof={prof}/>)}
            </div>
        )
    }
}