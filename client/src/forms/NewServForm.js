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

        alert('Your service has been created')
        this.props.push.history('/services')

    }

    render(){
        return(
            <div id='form_service' class="col-xs-4">{localStorage.token && localStorage.userType === 'p'
            ?<form onSubmit={(e) => this.addServ(e)} >
                    <label>Service's Name</label>

                    <input onChange={this.handleChange} type="text" class="form-control" 
                        placeholder="Service Name" name='service_name'
                    />

                    <label>Price</label>

                    <input onChange={this.handleChange} type="text" class="form-control" 
                        placeholder="Price ex: 15, 20" name="price"
                    />

                    <label>Description</label>

                    <input onChange={this.handleChange} type="text" class="form-control" 
                        placeholder="description of service" name="description"
                    />

                    <label>Time Frame</label>

                    <input onChange={this.handleChange} type="text" class="form-control" 
                        placeholder="ex: 1 hour" name="duration"
                    />
                    <div class="col-xs-7"> 

                    <button href='/login' id='btn' className="btn  btn-block my-4 btn-dark"  type="submit">ADD SERVICE</button>
                
                    </div>
                </form> 
            :   <h3>You are either not logged in or you do not have access to this page</h3>
            }
                
            </div>
        )
    }
}