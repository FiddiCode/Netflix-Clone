import React, { useState,useRef,useHistory } from 'react'
import './register.scss'
import axios from 'axios';

const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username, setUsername] = useState("");
    const history = useHistory();
  

    const emailRef=useRef();
    const passwordRef=useRef();
    const usernameRef = useRef();

    const handleStart=()=>{
        setEmail(emailRef.current.value)
    };
    const handleFinish= async (e)=>{
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);

        try {
            await axios.post("auth/register", { email,username, password });
            history.push("/login");
          } catch (err) {}

    };
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo missing'/>
            <button className='loginButton'>Sign In</button>
        </div>
            </div>
           
        <div className="container">
            <h1>Unlimited movies, Tv Shows and more.</h1>
            <h2>Watch anywhere, Cancel anytime</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ?(   
            <div className="input">
                <input type='email' placeholder='Enter Your Email Address' ref={emailRef} />
                <button className='registerButton' onClick={handleStart}>Get Started</button>
            </div>  ):(
            <form className="input">
                <input type='password' placeholder='Enter Password' ref={passwordRef} />
                <button className='registerButton' onClick={handleFinish}>Start</button>
            </form>)}

        </div>
    </div>
  )
}

export default Register;