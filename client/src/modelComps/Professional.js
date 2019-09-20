import React from 'react';


export default class Professional extends React.Component{
    render(){
        return(
            <div>
                {this.props.prof.first_name}
            </div>
        )
    }
}