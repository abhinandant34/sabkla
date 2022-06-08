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
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');


  const register = e => {
      e.preventDefault();
        
      db.collection("USERS").doc(email).set({
          firstname: firstname,
          lastname: lastname,
          address1: address1,
          address2: address2,
          city: city,
          zipcode: zipcode,
          phone: phone,          
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
            <input type="text" name="first_name" onChange={e=>setFirstName(e.target.value)} className='register-section-input' placeholder='First Name *' required/>
            <input type="text" name="last_name" onChange={e=>setLastName(e.target.value)} className='register-section-input' placeholder='Last Name *' required/>
            <input type="text" name="email" onChange={e=>setEmail(e.target.value)} className='register-section-input' placeholder='Email Address *' required/>
            <input type="password" name="password" onChange={e=>setPassword(e.target.value)} className='register-section-input' placeholder='Password' required/>
            <input type="text" name="address1" onChange={e=>setAddress1(e.target.value)} className='register-section-input' placeholder='Address Line 1 *' required/>
            <input type="text" name="address2" onChange={e=>setAddress2(e.target.value)}className='register-section-input' placeholder='Address Line 2 *' required/>
            <input type="text" name="city" onChange={e=>setCity(e.target.value)} className='register-section-input' placeholder='City *' required/>
            <input type="text" name="zipcode" onChange={e=>setZipCode(e.target.value)} className='register-section-input' placeholder='Zipcode *' required/>
            <input type="tel" name="pnum" onChange={e=>setPhone(e.target.value)} className='register-section-input' placeholder='Phone Number *' required/>
            <input type="submit" onClick={register} className='register-section-btn'/>
            <div>Forgot Password?</div>
        </div>

    </div>

</div>
  )
}

export default Register