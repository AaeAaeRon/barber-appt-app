import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter,Route} from 'react-router-dom'
import SignUp from './components/SignUp'


class App extends React.Component{ 
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path='/signup' render={(routerProps)=> <SignUp {...routerProps}/>}/>
      </div>
       </BrowserRouter>
    )
   
  }
}

export default App;
