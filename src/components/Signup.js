import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const [credentials,setcredentials]=useState({name:"",email:"",password:""});
    const navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        console.log("ruko dekhteh haiemail password sahi ai")
        // jaise hi submit pe click ho 
        // fetch se pata karo sahi hai login wale endpoint se
        const response = await fetch('http://localhost/api/auth', {
            method: 'POST',
            headers: {


                'Content-Type': 'application/json',


            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})

        });
        const json=await response.json();
        
        if(response.json){
            const token=json.authToken;
            localStorage.setItem('token',token);
            console.log(localStorage.getItem('token'));
            navigate("/");
        }
        else{
            alert(json.msg);
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
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" placeholder="Enter Name"   onChange={onChange} value={credentials.name} minLength={5} />
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email"  onChange={onChange} value={credentials.email}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={onChange}   value={credentials.password} minLength={5}/>
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword"placeholder="Confirm Password" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

      
    </div>
  )
}

export default Signup
