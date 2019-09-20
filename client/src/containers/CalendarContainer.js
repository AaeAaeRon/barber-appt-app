import React from 'react';
import Calendar from '../mainComps/Calendar'
import Paper from '@material-ui/core/Paper';


export default class ClientContainer extends React.Component{
    render(){
        return(
            <div>
            <Paper >   
            {
                this.props.data.map(appt => <Calendar appt={appt} data={this.props.data}/>)
            }
            </Paper>
            </div>
        )
    }
}