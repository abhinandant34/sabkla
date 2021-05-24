import React from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'



function App() {
  return (
    <div className="app">
   
     <Header/>
     {/*header*/}  

     <Home/>

        <br/>
        <br/>
        <Footer/>
    
    </div>
  );
}

export default App;
