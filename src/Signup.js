import React from 'react'
import "./Signup.css"
import {Link, useHistory} from "react-router-dom"
import { useState } from 'react'
import {db} from "./firebase"
import {auth} from "./firebase";

function Signup() {

     const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const register = e => {
        e.preventDefault();
          
        db.collection("USERS").doc(email).set({
            name: name,
            
        })
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{

                if(auth) {
                    history.push('/')
                }
                
            })
            .catch(error => alert(error.message))
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
     
        
    }

    return (
        <div className="signup">
         <Link to='/'>
            <img className="signup__logo" src="/images/hori_logo.png" />
       </Link>
       <div className="signup__container">
           <h1>SignUP</h1>

           <from>
               <h5>
                   Name
               </h5>
               <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
               <h5>
                   E-mail
               </h5>
               <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
               <h5>
                   Password
               </h5>
               <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
               <p>You agree with term and conditions</p>
               <button  onClick={register} className='signup__registerButton' >
               SIGNUP
           </button>
           </from>
     

       </div>
            
        </div>
    )
}

export default Signup
