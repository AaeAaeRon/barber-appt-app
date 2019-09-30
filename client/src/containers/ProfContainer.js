import React from 'react';
import Typography from '@material-ui/core/Typography';
import Professional from '../modelComps/Professional'

export default class ProfContainer extends React.Component{
    render(){
        return(
            <div >
                <br/>
                <Typography variant="h3" component="h1" gutterBottom>
                    <b>Professional Info</b>
                </Typography>
                <br/>

                <div className='proContainer'>
                    {localStorage.token
                    ? this.props.profs.map(prof => <Professional  prof={prof}/>)
                    : <h3>Please log in</h3> } 
                </div>
            </div>
        )
    }
}