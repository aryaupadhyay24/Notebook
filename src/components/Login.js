import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Login = (props) => {
    // now think for login paage 
    // lets take login page from bootstrap
    const {showAlert}=props
    const navigate=useNavigate();
    const [credentials,setcredentials]=useState({email:"",password:""});
    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        console.log("ruko dekhteh haiemail password sahi ai")
        // jaise hi submit pe click ho 
        // fetch se pata karo sahi hai login wale endpoint se
        const response = await fetch('http://localhost/api/login', {
            method: 'POST',
            headers: {


                'Content-Type': 'application/json',


            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})

        });
        const json=await response.json();
        
        
        if(json.success){
            localStorage.setItem('token',json.authToken);
            showAlert("Successfully Loged in","success")
            navigate("/");


        }
        else{
            alert("Invalid Credentials");
        }

        

    }


    const onChange=(e)=> {
        
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
        // the above syntax says that remaining value of notes object remiain same only those whose value is changing will get changed
    

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email"  onChange={onChange} value={credentials.email}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={onChange}   value={credentials.password}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Login
