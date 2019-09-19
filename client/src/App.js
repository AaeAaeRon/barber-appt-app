import React from 'react';
import './App.css';
import NavBar from './mainComps/NavBar'
import {BrowserRouter,Route} from 'react-router-dom'
import SignUp from './mainComps/SignUp'
import Login from './mainComps/Login'
import ApptContainer from './containers/ApptContainer';
import ClientContainer from './containers/ClientContainer';



class App extends React.Component{ 

  // constructor() {
  //   super()
  //   this.state = {
  //     appts: [],
  //     dispAppts: [],
  //     clients: [],
  //     dispClients: [],
  //     services: [],
  //     profs: [],
      
  //   }
  // }

  componentDidMount() {
    fetch('http://localhost:3000/clients')
    .then(res => res.json())
    .then(clients => {
      this.setState({
        clients: clients,
        dispClients: clients,
      })
    })
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path='/signup' render={(routerProps)=> <SignUp {...routerProps}/>}/>
        <Route path='/login' render={(routerProps)=> <Login {...routerProps}/>}/>
        {/* <Route path='/appts' render={(routerProps)=> <ApptContainer appts={this.state.dispAppts} {...routerProps}/>}/>
        <Route path='/clients' render={(routerProps)=> <ClientContainer clients={this.state.dispClients} {...routerProps}/>}/> */}


      </div>
       </BrowserRouter>
    )
   
  }
}

export default App;
