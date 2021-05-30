import React from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import { useState } from 'react'
import {auth} from "./firebase";

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

        const register = e => {
            e.preventDefault();
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{

                if(auth) {
                    history.push('/')
                }
                
            })
            .catch(error => alert(error.message))
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


                    <button className='login__signInButton' type='submit' onClick={signIn}> Sign In</button>
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


