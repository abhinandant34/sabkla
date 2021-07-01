import React,{ useEffect } from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Signup from './Signup'
import {BrowserRouter as Router, Switch, Route }from "react-router-dom";
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase"
import UploadProducts from './UploadProducts'

function App() {

  const [{},dispathch]=useStateValue();

  useEffect(()=>{

        auth.onAuthStateChanged(authUser=>{
          console.log('THE USER IS >>>',authUser);

          if(authUser)
          {

            dispatchEvent({
              type:'SET_USER',
              user: authUser

            })

          }
          else
          {

            dispatchEvent({
              type:'SET_USER',
              user: null
              
            })

          }
        })

  },[])
  return (

    <Router>
    <div className="app">
   

    
    <Switch>
      <Route path="/login">
        
        <Login />

      </Route>
      

      <Route path="/signup">
        
        <Signup />

      </Route>


      <Route path="/upload">
        
        <UploadProducts />

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
