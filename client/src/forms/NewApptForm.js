import React from 'react';
import DateTimePicker from '../childComps/DateTimePicker'

export default class AppointForm extends React.Component{

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    ///////////////NEW SERVICE FORM SUBMIT////////////////
    addAppt = (e) => {
        e.preventDefault()
        console.log('hi')
        fetch('http://localhost:3000/services', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            // professional_id: localStorage.userId,
            // service_name: this.state.service_name,
            // price: this.state.price,
            // description: this.state.description,
            // duration: this.state.duration,
        })
        })
        .then(res => res.json())
        .then(console.log)
    }
    render(){
        return(
            <div>
                {/* <DateTimePicker /> */}
            {localStorage.token
            ?<form onSubmit={(e) => this.addAppt(e)}>
                    Appt time:<br/>
                    <input onChange={this.handleChange} type="text" name="startDate" />
                    <br/>
                    End Time:<br/>
                    <input onChange={this.handleChange} type="text" name="endDate" />
                    <br/>
                    <h4>Service</h4>
                    <select  id='firstList' name='firstList' onChange={this.handleChange} onClick={this.getServs}>
                    </select>
                    <br />
                    <input type="submit" value="Submit"/>
                </form> 
            :<h4>Please log in</h4>
            }
                

            </div>
        )
    }
}