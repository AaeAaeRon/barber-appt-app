import React from 'react';
import Typography from '@material-ui/core/Typography';
import Professional from '../modelComps/Professional'

export default class ProfContainer extends React.Component{
    render(){
        return(
            <div className='container'>
                <br/>
                <Typography variant="h3" component="h1" gutterBottom>
                    <b>Pick a Barber</b>
                </Typography>
                <br/>

                <div className='proContainer'>
                    {localStorage.token && localStorage.userType === 'c'
                    ? this.props.profs.map(prof => <Professional  prof={prof}/>)
                    : <h3>Please log in</h3> } 
                </div>
            </div>
        )
    }
}