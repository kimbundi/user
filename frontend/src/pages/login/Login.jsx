import React, { useState } from 'react'
import './Login.css'
import { signup } from '../../components/config/Firebase';
import { login } from '../../components/config/Firebase';


const Login = () => {

    const [currState,setCurrState] = useState("sign up");
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        if(currState==='sign up') {
            signup(userName,email,password);

        }
        else {
            login(email,password)
        }



    }

 



  return (
    <div className='login'>

        <form  onSubmit={onSubmitHandler}  className='login-form'>

            <h2>{currState}</h2>

            {currState=== "sign up"?         <input type="text"  onChange={(e)=>setUserName(e.target.value)}  value={userName} className="form-input" placeholder='username'   required/>:
            null}
           

    

            <input type="email"     onChange={(e)=>setEmail(e.target.value)}  value={email}  placeholder='email address' className="form-input"  required />
            <input type="password"    onChange={(e)=>setPassword(e.target.value)}  value={password}  placeholder='password'  className="form-input"  required/>

            <button type="submit">{currState==="sign up"?"create account":"Login"}</button>
            <div className="login-term">
                <input type="checkbox" name="" id=""  required/>
                <p>Agree to the terms of use & privacy policy.</p>

            </div>
            <div className="login-forgot">

                {currState === "sign up" ?
                 <p className="login-toggle">
                 Already have an account <span onClick={()=>setCurrState('Login')}>Login  here</span>
             </p> :
             <p className="login-toggle">
             Create an account <span onClick={()=>setCurrState('sign up')}>Click here</span>
             </p>

                }
               

                
            </div>
        </form>



    </div>
  )
}

export default Login