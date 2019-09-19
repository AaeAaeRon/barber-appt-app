import React from 'react';
import './App.css';
import NavBar from './mainComps/NavBar'
import {BrowserRouter,Route} from 'react-router-dom'
import SignUp from './mainComps/SignUp'
import Login from './mainComps/Login'
import ApptContainer from './containers/ApptContainer';



class App extends React.Component{ 

  constructor() {
    super()
    this.state = {
      appts: [],
      dispAppts: [],
      services: [],
      clients: [],
      profs: [],
      
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/appointments')
    .then(res => res.json())
    .then(appts => {
      this.setState({
        appts: appts,
        dispAppts: appts,
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
        <Route path='/appts' render={(routerProps)=> <ApptContainer appts={this.state.dispAppts} {...routerProps}/>}/>


      </div>
       </BrowserRouter>
    )
   
  }
}

export default App;
