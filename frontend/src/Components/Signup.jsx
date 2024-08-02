import React, { useState } from 'react'
import axios from 'axios';
import './App.css'
import { Link, useNavigate } from 'react-router-dom';


function Signup() {
    const [name,setName ] = useState('');
    const [email,setEmail ] = useState('');
    const [password,setPassword ] = useState('');
    const navigate=useNavigate();

async function handleSubmit(e){
    e.preventDefault();

    try {
        const response=await axios.post('http://localhost:3333/signup',{
            name,
            email,
            password
        });
        navigate('/home');
        console.log(name,email,password);
    } 
    catch(e){
        console.log(e.message);
    }

}
  return (
    <>
<div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
    <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <h1 className="bg-no-repeat instagram-logo"></h1>
        <form className="mt-8 w-64 flex flex-col" onSubmit={handleSubmit}>
            <input autofocus
                   className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                   id="email" placeholder="Enter Username" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input autofocus
                   className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                   id="email" placeholder="Enter email" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input autofocus
                   className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                   id="password" placeholder="Password" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" className="text-sm text-center bg-blue-500 text-white py-1 rounded font-medium">
                Signup
            </button>
        </form>
        <div className="flex justify-evenly space-x-2 w-64 mt-4">
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            <span className="flex-none uppercase text-xs text-gray-400 font-semibold">or</span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
        </div>
        <button className="mt-4 flex">
            <div className="bg-no-repeat facebook-logo mr-1"></div>
            <span className="text-xs text-blue-900 font-semibold">Log in with Facebook</span>
        </button>
        <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">Forgot password?</a>
    </div>
    <div className="bg-white border border-gray-300 text-center w-80 py-4">
        <span className="text-sm">Don't have an account?</span>
        <Link to='/login' className="text-blue-500 text-sm font-semibold">Login</Link>
    </div>
    <div className="mt-3 text-center">
        <span className="text-xs">Get the app</span>
        <div className="flex mt-3 space-x-2">
            <div className="bg-no-repeat apple-store-logo"></div>
            <div className="bg-no-repeat google-store-logo"></div>
        </div>
    </div>
</div>
</>

  )
}

export default Signup;

