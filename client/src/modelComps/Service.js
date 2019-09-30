import React from 'react';
import DateTime from '../mainComps/DateTime'

export default class Service extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            display: false,
             
        }
    }

    handleClick = () => {
        // console.log(this) 
        this.setState({
            display: !this.state.display,
        })
    }

    render(){
        return(
            <div className='service'>
                <br/><br/>
                <b>Please pick a service</b>
                <br/><br/>
                <b>{this.props.service.service_name}</b><br/>
                <b>Price:</b> ${this.props.service.price}<br/>
                <b>Description:</b><br/> {this.props.service.description}<br/>
                <b>Duration:</b> {this.props.service.duration}<br/>
                <button onClick={this.handleClick}>Pick a Time</button><br/>

                {this.state.display
                ?<DateTime  {...this.props} {...this.props} />
                : null
                }
                <br/><br/>
            </div>
        )
    }
}