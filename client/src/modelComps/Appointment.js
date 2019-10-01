import React from 'react';

export default class Appointment extends React.Component{

    formatDate = (date) => {
        
        return date.slice(0,21)
    }

   
    
    
    render(){
        // debugger
        return(
            <div>
            
            
                <b>Barber:</b><br />{this.props.appt.p_name} <br />
                <b>Service:</b><br /> {this.props.appt.title}<br />
                <b>When:</b><br /> {this.formatDate(this.props.appt.startDate)}<br />
                <b>Duration:</b><br /> {this.props.appt.duration}<br />
                
                <button onClick={() => this.props.delete(this.props.appt.id)} type="button" class="btn btn-dark">Delete</button>
                
                <br /><br />
                

            </div>
        )
    }
}