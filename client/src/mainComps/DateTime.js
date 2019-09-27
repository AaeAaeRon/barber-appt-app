import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker"
import { compareAsc, format } from 'date-fns'
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css"
import 'bootstrap/dist/css/bootstrap.min.css';



export default class DateTime extends React.Component{
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  startDate = (startDate) => {

  }

  endDate = (str,index,chr) => {
    if(index > str.length-1) return str;
    let a = parseInt(str.substr(16,2)) + chr
    
    return str.substr(0,index-1) + a + str.substr(index+1);
  }

  ///////////////MAKE APPT////////////////
  addAppt = (e) => {
    e.preventDefault()
    console.log(this.state)
    fetch('http://localhost:3000/appointments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    },
    body: JSON.stringify({
      client_id: localStorage.userId,
      c_name: localStorage.name,
      professional_id: this.props.service.professional_id,
      p_name: this.props.prof.first_name,
      service_id: this.props.service.id,
      price: this.props.service.price,
      startDate: String(this.state.startDate),
      endDate: this.endDate(String(this.state.startDate), 17, 1),
      title: this.props.service.service_name,
      duration: this.props.service.duration,
    })
    })
    .then(res => res.json())
    .then(console.log)
  }

  
  // 2019-09-23 08:00:00 -0500 RUBY works

  // Fri Sep 27 2019 00:01:46 GMT-0500 (Central Daylight Time) nope
  // Fri Sep 27 2019 00:01:46 GMT-0500 nope
  // 27 2019 00:01:46 GMT-0500 nope
    

  render() {
    
    return (
      <div>
        <form onSubmit={ this.addAppt }>
          <div className="form-group">
            <DatePicker
              todayButton="Today"
              selected={this.state.startDate}
              onChange={this.handleChange}
              showTimeSelect={true}
              timeFormat="HH:mm"
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="MM/dd/yyyy h:mm aa"
              placeholderText="Pick date and time"
              minDate={this.state.startDate}
              onChange={ this.handleChange }
              // name="startDate"
              // dateFormat="MM/DD/YYYY"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-dark">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}


