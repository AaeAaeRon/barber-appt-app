import React from 'react';
import './App.css';
import NavBar from './mainComps/NavBar'
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom'
import SignUp from './mainComps/SignUp'
import Login from './mainComps/Login'
import Calendar from './mainComps/Calendar'
import ClientContainer from './containers/ClientContainer'
import ProfContainer from './containers/ProfContainer'
import ServicesContainer from './containers/ServicesContainer'
import ApptContainer from './containers/ApptContainer'
import NewServForm from './forms/NewServForm'
import NewApptForm from './forms/NewApptForm'

class App extends React.Component{ 
  // debugger

  constructor(props) {
    super(props)
    this.state = {
      appts: [], //filtered
      dispAppts: [], //filtered

      clients: [],
      dispClients: [],

      pros: [],
      dispPros: [],

      servs: [], 
      dispServs: [], 

    }
  }

  
  //////// FETCHES DATA BASED ON LOGGED IN USER /////////
  componentDidMount(){
    ///////////////////////APPTS/////////////////////////////
    fetch('http://localhost:3000/appointments', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())    
    .then(appts => {
      let a = appts.filter(appt => {
      if(localStorage.userType === "c"){
        return appt.client_id === localStorage.userId
      }
      else{
        return appt.professional_id === localStorage.userId
      }
      })
      this.setState({
        appts: a,
        dispAppts: a,
      })
    })

    ////////////////////////CLIENTS////////////////////////////
    fetch('http://localhost:3000/clients', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
    })
    .then(res => res.json())
    .then(clients => {
      
      this.setState({
        clients: clients,
        dispClients: clients,
      })
    })

    /////////////////////PRO'S/////////////////////////////
    fetch('http://localhost:3000/professionals', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(profs => {
      this.setState({
        pros: profs,
        dispPros: profs,
      })
    })

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
    // .then(servs =>{
    //   let s = servs.filter(serv => {
    //     if (localStorage.userType === 'p'){
    //       return serv.professional_id === localStorage.userId
    //     }
    //     else {
    //       return null
    //     }
    //   })

    //   this.setState({
    //     services: s,
    //     dispServs: s,
    //   })
    // })
      
    
  }


  render(){
    return (
      <BrowserRouter>
      <div className="App">
        {/* <Switch> */}

        <NavBar />
        <Route exact path='/appointments' render={(routerProps)=> <ApptContainer appts={this.state.dispAppts} {...routerProps}/>}/>
        <Route path='/signup' render={(routerProps)=> <SignUp {...routerProps}/>}/>
        <Route path='/login' render={(routerProps)=> <Login {...routerProps} />}/>
        <Route path='/schedule' render={(routerProps)=> <Calendar data={this.state.data} {...routerProps}/>}/>
        <Route path='/clients' render={(routerProps)=> <ClientContainer clients={this.state.dispClients} {...routerProps}/>}/>
        <Route path='/professionals' render={(routerProps)=> <ProfContainer profs={this.state.dispPros} {...routerProps}/>}/>
        <Route exact path='/services' render={(routerProps)=> <ServicesContainer servs={this.state.dispServs} {...routerProps}/>}/>
        <Route path='/new-service' render={(routerProps)=> <NewServForm  {...routerProps}/>}/>
        <Route path='/new-appt' render={(routerProps)=> <NewApptForm  {...routerProps}/>}/>
    
        {/* </Switch> */}
      </div>
      </BrowserRouter>
    )
   
  }
}

export default App;
