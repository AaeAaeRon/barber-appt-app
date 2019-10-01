import React from 'react';
import Appointment from '../modelComps/Appointment'
import Typography from '@material-ui/core/Typography';





export default class ApptContainer extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
          appts: [], //filtered
          dispAppts: [], //filtered
          allAppts: [],
        }
    }

    ///////////////////////APPTS/////////////////////////////
    componentWillMount(){

        fetch('http://localhost:3000/appointments', {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${localStorage.token}`
            }})
            .then(res => res.json())    
            .then(appts => {
            // let a = appts.filter(appt => {

            // if(!!localStorage.token === true && localStorage.userType === "c"){
            //   return appt.client_id === localStorage.userId
            // }
            // else if(!!localStorage.token === true && localStorage.userType === "p"){
            //   return appt.professional_id === localStorage.userId
            // }
            // else{
            //   return null
            // }

            // })
            this.setState({
            // appts: a,
            // dispAppts: a,
            allAppts: appts,
            })
        })
    }

    delete = (apptId) => {
        console.log(this)
        fetch(`http://localhost:3000/appointments/${apptId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
        })
        let a = this.state.allAppts.filter(appt => appt.id!== apptId)

        this.setState({
            allAppts: a
        })
        
    }


    render(){
        return(
            <div className='apptCont'>
                <br/>
                <Typography variant="h3" component="h1" gutterBottom>
                    <b>Your Appointments</b>
                </Typography>
                <br/>

                {localStorage.token 
                ? this.state.allAppts.map(appt => <Appointment edit={this.edit} delete={this.delete} appt={appt}/>)
                : <h3>Please log in</h3> }
            </div>
        )
    }
}