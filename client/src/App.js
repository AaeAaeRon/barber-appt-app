import React from 'react';
import './App.css';
import NavBar from './mainComps/NavBar'
import {BrowserRouter,Route} from 'react-router-dom'
import SignUp from './mainComps/SignUp'
import Login from './mainComps/Login'



class App extends React.Component{ 
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path='/signup' render={(routerProps)=> <SignUp {...routerProps}/>}/>
        <Route path='/login' render={(routerProps)=> <Login {...routerProps}/>}/>


      </div>
       </BrowserRouter>
    )
   
  }
}

export default App;
