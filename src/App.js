import React from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from './Checkout'
import Login from './Login'

function App() {
  return (

    <Router>
    <div className="app">
   

    
    <Switch>
      <Route path="/login">
        
        <Login />

      </Route>

    
    <Route path="/checkout">
   
    <Header/>
    <Checkout/>
    
    </Route>
 
    <Route path="/">
    <Header/>
    <Home/>
    <br/><br/>
    <Footer/>
    </Route>

    </Switch>
  
    
    </div>
    </Router>
  );
}

export default App;
