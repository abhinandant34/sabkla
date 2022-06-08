import React from 'react'
import './Register.css'
import {useHistory} from "react-router-dom"
import { useState } from 'react'
import {db} from "../../../firebase"
import {auth} from "../../../firebase";

function Register() {
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
    <div className='register'>
    <p>Register Your Account</p>        
    <div className='register-section'>
        <div className='register-section-inputs'>
            <input type="text" name="name" onChange={e=>setName(e.target.value)} className='register-section-input' placeholder='First Name *' required/>
            <input type="text" name="last_name"  className='register-section-input' placeholder='Last Name *' required/>
            <input type="text" name="email" onChange={e=>setEmail(e.target.value)} className='register-section-input' placeholder='Email Address *' required/>
            <input type="password" name="password" onChange={e=>setPassword(e.target.value)} className='register-section-input' placeholder='Password' required/>
            <input type="text" name="address1" className='register-section-input' placeholder='Address Line 1 *' required/>
            <input type="text" name="address2" className='register-section-input' placeholder='Address Line 2 *' required/>
            <input type="text" name="city" className='register-section-input' placeholder='City *' required/>
            <input type="text" name="zipcode" className='register-section-input' placeholder='Zipcode *' required/>
            <input type="number" name="pnum" className='register-section-input' placeholder='Phone Number *' required/>
            <input type="submit" onClick={register} className='register-section-btn'/>
            <div>Forgot Password?</div>
        </div>

    </div>

</div>
  )
}

export default Register