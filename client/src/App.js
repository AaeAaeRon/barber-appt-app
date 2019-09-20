import React from 'react';
import './App.css';
import NavBar from './mainComps/NavBar'
import {BrowserRouter,Route} from 'react-router-dom'
import SignUp from './mainComps/SignUp'
import Login from './mainComps/Login'
import CalendarContainer from './containers/CalendarContainer.js'
import ClientContainer from './containers/ClientContainer'
import ProfContainer from './containers/ProfContainer'
import ServicesContainer from './containers/ServicesContainer'
import AppointForm from './mainComps/AppointForm';

class App extends React.Component{ 

  constructor(props) {
    super(props)
    this.state = {
      appts: [],
      dispAppts: [],
      data: [],

      clients: [],
      dispClients: [],

      profs: [],
      dispProfs: [],

      services: [],
      dispServs: [],

    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/appointments')
    .then(res => res.json())
    .then(appts => {
      this.setState({
        appts: appts,
        dispAppts: appts,
        data: appts,
      })
    })

    fetch('http://localhost:3000/clients')
        .then(res => res.json())
        .then(clients => {
          this.setState({
            clients: clients,
            dispClients: clients,
          })
    })

    fetch('http://localhost:3000/professionals')
        .then(res => res.json())
        .then(profs => {
          this.setState({
            profs: profs,
            dispProfs: profs,
          })
    })

    fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(servs => {
          this.setState({
            services: servs,
            dispServs: servs,
          })
    })
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path='/schedule/new' render={(routerProps)=> <AppointForm {...routerProps}/>}/>
        <Route path='/signup' render={(routerProps)=> <SignUp {...routerProps}/>}/>
        <Route path='/login' render={(routerProps)=> <Login {...routerProps}/>}/>
        <Route path='/schedule' render={(routerProps)=> <CalendarContainer data={this.state.data} {...routerProps}/>}/>
        <Route path='/clients' render={(routerProps)=> <ClientContainer clients={this.state.dispClients} {...routerProps}/>}/>
        <Route path='/professionals' render={(routerProps)=> <ProfContainer profs={this.state.dispProfs} {...routerProps}/>}/>
        <Route path='/services' render={(routerProps)=> <ServicesContainer servs={this.state.dispServs} {...routerProps}/>}/>

      </div>
       </BrowserRouter>
    )
   
  }
}

export default App;
