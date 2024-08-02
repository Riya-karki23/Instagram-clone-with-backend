import React, { useState } from 'react'
import './App.css'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';


  function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userData, setuserData] = useState(null);
  const navigate=useNavigate();


  
async function handleSubmit(e){
e.preventDefault();
try {

  const response=await axios.post('http://localhost:3333/login',{
    email,
    password
  });
  console.log(response);
if (response.data.message==='Login successful')
{
  setuserData(response.data);
  setEmail('');
    setPassword('');
    setError('');
    console.log(response.data.token)
  //--------------------------------------------------setting token in localstorage
           localStorage.setItem('authToken',response.data.token);
// -------------------------------------------------------------------

    navigate('/home');

}
else{
  setError(response.data.message);
  setSuccess('')
}
  
} catch (e) {
  setError('Failed to login. Check your credentials and try again')
  console.log(e.message);
  setSuccess('')
}
}


  return (
    <>
<div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
    <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <h1 className="bg-no-repeat instagram-logo"></h1>
        <form className="mt-8 w-64 flex flex-col" onSubmit={handleSubmit}>
            <input 
                   className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-black"
                   id="email" placeholder="Phone number, username, or email" name="email" type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input 
                   className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-black"
                   id="password" placeholder="Password" type="password"  name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                   <div> 
                     {error && <p style={{ color: 'red' }}>{error}</p>}</div>


            <button className=" text-sm text-center bg-blue-500 text-white py-1 rounded font-medium">
                Log In
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
        <Link to='/signup' className="text-blue-500 text-sm font-semibold">Sign up</Link>
    </div>
    <div className="mt-3 text-center">
        <span className="text-xs">Get the app</span>
        <div className="flex mt-3 space-x-2">
            <div className="bg-no-repeat apple-store-logo"></div>
            <div className="bg-no-repeat google-store-logo"></div>
        </div>
    </div>
</div>
        {userData && <CreatePost userData={userData} />}
</>
  );
}

export default Login;

