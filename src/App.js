import React,{ useEffect } from "react";
import './App.css';
import Header from './Header'
import Signup from './Signup'
import {BrowserRouter as Router, Switch, Route }from "react-router-dom";
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase"
import HomePage from './Pages/Homepage/Homepage'
import Loginpage from './Pages/Loginpage/Loginpage'
import Registerpage from './Pages/RegisterPage/RegisterPage'

function App() {

  // const [{},dispathch]=useStateValue();

  // useEffect(()=>{

  //       auth.onAuthStateChanged(authUser=>{
  //         console.log('THE USER IS >>>',authUser);

  //         if(authUser)
  //         {

  //           dispatchEvent({
  //             type:'SET_USER',
  //             user: authUser

  //           })

  //         }
  //         else
  //         {

  //           dispatchEvent({
  //             type:'SET_USER',
  //             user: null
              
  //           })

  //         }
  //       })

  // },[])
  return (

    <Router>
    <div className="app">
   

    
    <Switch>
      <Route path="/login">
        
        <Loginpage/>

      </Route>
      

      <Route path="/register">
        
        <Registerpage/>

      </Route>


  
    <Route path="/checkout">
   
    <Header/>
    <Checkout/>
    
    </Route>
 
    <Route path="/">
      <HomePage/>
      </Route>
    </Switch>
  
    
    </div>
    </Router>
  );
}

export default App;
