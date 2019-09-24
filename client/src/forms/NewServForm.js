import React from 'react';

export default class NewServForm extends React.Component{


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    ///////////////NEW SERVICE FORM SUBMIT////////////////
    addServ = (e) => {
        e.preventDefault()
        // console.log('hi')
        fetch('http://localhost:3000/services', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            professional_id: localStorage.userId,
            service_name: this.state.service_name,
            price: this.state.price,
            description: this.state.description,
            duration: this.state.duration,
        })
        })
        .then(res => res.json())
        .then(console.log)
    }

    render(){
        return(
            <div>{localStorage.token
            ?<form onSubmit={(e) => this.addServ(e)}>
                    Service's name:<br/>
                    <input onChange={this.handleChange} type="text" name="service_name" />
                    <br/>
                    Price:<br/>
                    <input onChange={this.handleChange} type="text" name="price" />
                    <br/>
                    Description:<br/>
                    <input onChange={this.handleChange} type="tel" name="description" />
                    <br/>
                    Time Frame:<br/>
                    <input onChange={this.handleChange} type="text" name="duration" />
                    <br/>
                    <input type="submit" value="Submit"/>
                </form> 
            :   <h3>Please log in</h3>
            }
                
            </div>
        )
    }
}