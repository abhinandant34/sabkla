import React,{useState} from 'react'
import './Login.css'
import {auth} from "../../../firebase";
import {Link, useHistory} from "react-router-dom"

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {

      e.preventDefault();

      auth
              .signInWithEmailAndPassword(email, password)
              .then((auth) =>{
                  history.push('/')
              })
              .catch(error=>alert(error.message))
  }
  return (
    <div className='login'>
        <p>Login to access your account and e-learning modules</p>        
        <div className='login-section'>
            <div className='login-section-inputs'>
                <input type="email" name="email" onChange={e=>setEmail(e.target.value)} className='login-section-input' placeholder='Email address'/>
                <input type="password" name="password" onChange={e=>setPassword(e.target.value)} className='login-section-input' placeholder='Password'/>
                <input type="submit" onClick={signIn} className='login-section-btn'/>
                <div>Forgot Password?</div>
            </div>

        </div>

    </div>
  )
}

export default Login