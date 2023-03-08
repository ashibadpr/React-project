import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify';

const Login=()=>{
    let [username,setUsername]=useState("")
  let [password,setPassword]=useState("")
  let navigate=useNavigate();

  let handleLogin=(e)=>{
    e.preventDefault()
    let localUsername=localStorage.getItem("username")
    let localPassword=localStorage.getItem("password")
    if(localUsername==username && localPassword==password)
    {
        toast.success(`${username} logged in successfully`)
        navigate('/home')
    }
    else{
        toast.error("Please check Username & Password")
        navigate('/login')
    }
  }
    return(
    <div class="logBlock" style={{height:"350px", width:"350px" }}>
        <div>
            <h1 class="log">Login Page</h1>
        <form>
  <div class="form-outline mb-4">
    <input type="email" id="form1Example1" class="form-control" onChange={(e)=>{
        setUsername(e.target.value)
    }} />
    <label class="form-label" for="form1Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form1Example2" class="form-control" onChange={(e)=>{
        setPassword(e.target.value)
    }} />
    <label class="form-label" for="form1Example2">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
        <label class="form-check-label" for="form1Example3"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" class="btn btn-primary btn-block" onClick={handleLogin}>Log in</button>
</form>
</div>
    </div>
    )
}
export default Login