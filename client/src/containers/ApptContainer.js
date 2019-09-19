import React from 'react';
import Appointment from '../modelComps/Appointment'

export default class ApptContainer extends React.Component{
    constructor() {
        super()
        this.state = {
          appts: [],
          dispAppts: [],  
        }
      }

    componentDidMount() {
        fetch('http://localhost:3000/appointments')
        .then(res => res.json())
        .then(appts => {
          this.setState({
            appts: appts,
            dispAppts: appts,
          })
        })
    }

    render(){
        return(
            <div>
                {
                this.props.appts.map(appt => <Appointment appt={appt}/>)
                }
            </div>
        )
    }
}