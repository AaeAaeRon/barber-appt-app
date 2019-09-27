import React from 'react';
import DateTimePicker from '../mainComps/DateTime'
import { formatMs } from '@material-ui/core/styles';

export default class AppointForm extends React.Component{

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    ///////////////NEW APPT FORM POST REQUEST////////////////
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
            // client_id: localStorage.userId,
            // c_name: something,
            // professional_id: something,
            // p_name: something,
            // service_id: something,
            // s_name: something,
            // price: something,
            // startDate: formatedDate,
            // endDate: something,
            // title: something,
            // duration: something,
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