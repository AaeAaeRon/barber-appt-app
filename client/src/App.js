import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter,Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'



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
