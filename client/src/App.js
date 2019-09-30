import React from 'react';
import './App.css';
import NavBar from './mainComps/NavBar'
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom'
import SignUp from './mainComps/SignUp'
import Login from './mainComps/Login'
import Calendar from './mainComps/Calendar'
import ClientContainer from './containers/ClientContainer'
import ProfContainer from './containers/ProfContainer'
import NewServForm from './forms/NewServForm'
import Home from './mainComps/Home'
import StickyFooter from './mainComps/StickyFooter'


class App extends React.Component{ 
  // debugger

  constructor(props) {
    super(props)
    this.state = {
      // appts: [], //filtered
      // dispAppts: [], //filtered
      // allAppts: [],

      clients: [],
      dispClients: [],

      pros: [],
      dispPros: [],



    }
  }
  
  
  //////// FETCHES DATA BASED ON LOGGED IN USER /////////
  componentDidMount(){
    // ///////////////////////APPTS/////////////////////////////
    // fetch('http://localhost:3000/appointments', {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${localStorage.token}`
    //   }
    // })
    // .then(res => res.json())    
    // .then(appts => {
    //   let a = appts.filter(appt => {
    //   if(localStorage && localStorage.userType === "c"){
    //     return appt.client_id === localStorage.userId
    //   }
    //   else{
    //     return appt.professional_id === localStorage.userId
    //   }
    //   })
    //   this.setState({
    //     appts: a,
    //     dispAppts: a,
    //     allAppts: appts,
    //   })
    // })

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
  }


  render(){
    return (
      <BrowserRouter>
      <div className="App">
      

        <NavBar />
        <Route exact path='/' component={Home}/>
        <Route path='/signup' render={(routerProps)=> <SignUp {...routerProps}/>}/>
        <Route path='/login' render={(routerProps)=> <Login {...routerProps} />}/>
        <Route path='/schedule' render={(routerProps)=> <Calendar {...routerProps}/>}/>
        <Route path='/clients' render={(routerProps)=> <ClientContainer clients={this.state.dispClients} {...routerProps}/>}/>
        <Route path='/professionals' render={(routerProps)=> <ProfContainer profs={this.state.dispPros} {...routerProps}/>}/>
        <Route path='/new-service' render={(routerProps)=> <NewServForm  {...routerProps}/>}/>

        {/* <Footer /> */}
        <StickyFooter/>
      </div>
      </BrowserRouter>
    )
   
  }
}

export default App;
