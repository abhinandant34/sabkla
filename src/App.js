import React,{ useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route }from "react-router-dom";
import { useStateValue } from "./Pages/StateProvider";
import {auth} from "./firebase"
import HomePage from './Pages/Homepage/Homepage'
import Loginpage from './Pages/Loginpage/Loginpage'
import Registerpage from './Pages/RegisterPage/RegisterPage'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import Cart from './Pages/Cart/Cart'
import Checkout from "./Checkout";

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
        
        <Loginpage/>

      </Route>
      

      <Route path="/register">
        
        <Registerpage/>

      </Route>
      <Route path="/products">
        
        <ProductsPage/>

      </Route>


  
    <Route path="/cart">
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
