import React from 'react';
import ServicesContainer from '../containers/ServicesContainer'

export default class Professional extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            display: false,
            services: [], 
            dispServs: [], 
        }
    }

    componentDidMount(){
        //////////////////////SERVICES////////////////////////////
        fetch('http://localhost:3000/services', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
        })
        .then(res => res.json())
        .then(servs => {
            this.setState({
            services: servs,
            dispServs: servs,
            })
        })
    }
    
///////////////WHEN CLICKED, FILTERS SERVICES SHOWN TO JUST THE PRO THAT IS CLICKED //////////
    handleClick = (proId) => {
        // console.log(this)
        let a = this.state.services.filter(serv => {
            return  serv.professional_id === proId 
        })
        this.setState({
            display: !this.state.display,
            dispServs: a
        })
    }
        

    render(){
        return(
            
            <div className='pro'>
                <b>Name:</b> <br />{this.props.prof.first_name } {this.props.prof.last_name}<br />
                <b>Contact Number:</b><br /> {this.props.prof.mobile_num} <br />
                <b>email address:</b><br /> {this.props.prof.email} <br />
                <button onClick={ () => this.handleClick(this.props.prof.id)}> See Services </button><br />
                <br/>
            
                
                {this.state.display
                ?<ServicesContainer {...this.props} servs={this.state.dispServs} />
                : null
                }
            </div>
        )
    }
}