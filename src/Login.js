import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom"
import { useState } from 'react'

function Login() {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const signIn = e => {

            e.preventDefault();
        }

        const register = e => {
            e.preventDefault();
        }

    return (
        <div className="login">
       <Link to='/'>
            <img className="login__logo" src="/images/hori_logo.png" />
       </Link>
       <div className="login__container">
           <h1>Sign-in</h1>
           
           <form>
               <h5>
                   E-mail
               </h5>
               <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

               <h5>
                   Password
               </h5>
               <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>


                    <button className='login__signInButton' type='submit'> Sign In</button>
           </form>
           <p>YOu agree with term and conditions</p>

           <button  onClick={register} className='login__registerButton' >
               Create a new Account
           </button>

       </div>
            
        </div>
    )
}

export default Login


