import React from 'react';

export default class NewServForm extends React.Component{
    render(){
        return(
            <div>
                <form>
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

            </div>
        )
    }
}