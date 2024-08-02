import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';


function SearchUser() {
    const [name, setName] = useState(null);
    const [users, setUsers] = useState([]);


async function search(e){
    e.preventDefault();
const response=await axios.post('http://localhost:3333/search',
    {
        name:name
    }
)
setUsers(response.data.users);
console.log(response);


}

  return (
    <div className='border-[1px] w-80 h-80  shadow-slate-400'>
    <form  className='flex justify-center'>
   <input className='w-80 px-2 py-1 rounded-md' type="text" placeholder='search' value={name} onChange={(e)=>setName(e.target.value)} />
  <button onClick={search}><FaSearch /></button>
   </form>

    {users.map((user,index)=>(
<Link to={`/profile/${user.id}`} > <div key={index} className='flex  justify-center gap-3 my-4 300 w-44'> 
      <img className="w-6 h-6 rounded-full" src="https://t3.ftcdn.net/jpg/01/13/46/78/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg" alt="profile pic"/>
<p>{user.name}</p>

   </div>
   </Link> 
   ) )}
   </div>
  )
}

export default SearchUser