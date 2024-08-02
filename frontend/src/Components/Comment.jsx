import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegComment } from "react-icons/fa";
import { FcLike } from 'react-icons/fc';
import { HiDotsVertical } from "react-icons/hi";

import {formatTimeAgo} from '../utils/formatTime';

function Comment({postId,token}) {
    const [comment, setComment] = useState('');
    const [status, setStatus] = useState(true);
    const [flag, setFlag] = useState(false);
    const [AllData, setAllData] = useState([]);
  const [dropdown, setDropdown] = useState(false);

    // --------------------------------------------------------------------------------create comment


    useEffect(()=>{
       viewComments();
    },[postId])

// --------------------------------------------------------------------------------------dropdown
function toggle(){
    setDropdown(!dropdown);
  }
  
// -------------------------------------------------------------------------------------------  

   async function handleSubmit(e){
        e.preventDefault();
        try{
            if(comment  ){
        const response=await axios.post('http://localhost:3333/create',{
          comment,
          user_id:token.id,
          post_id:postId,
        }); 
     setComment('');

     console.log(response);
     viewComments();
   
    }
}
    catch(e){
        console.log('Error while creating comment',e.message);
    }
    }

    // ---------------------------------------------------------------------------------------read comments

    async function viewComments(){
        try
        {
        const response=await axios.post('http://localhost:3333/read',{
            post_id:postId
        });
            
        console.log(response);
        setAllData(response.data.comments);
        setStatus(!status);
        }
        catch(e){
            console.log(e.message);
        }
    }

async function editComment(){
    console.log('edit');
}
async function deleteComment(){
    console.log('delete');
}


  return (
    <>
  
  {/* ---------------------------------------------------------------------------------------view all comments */}
    <button onClick={viewComments}>
       <FaRegComment/>
        
        </button><br/>

   {status && (
    <>
{AllData.map((data,index)=>(
    <div key={index} className='flex items-center justify-center px-3 gap-2 my-1 relative w-80 text-sm'>
        <img className="w-4 h-4 rounded-full" src="https://t3.ftcdn.net/jpg/01/13/46/78/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg" alt="Rounded avatar"/>
              
        <p className='text-sm font-bold '>@{token.name}</p>
     <p className='text-sm '>{data.comment}</p>
    <p>{formatTimeAgo(data.createdAt)}</p>
    <p><FcLike/></p>

</div>



))}
<form onSubmit={handleSubmit} className='flex my-3'>
    <input type='text' placeholder='write your comment...' value={comment} onChange={(e)=>setComment(e.target.value)} className='  px-2 w-80 outline-none bg-black text-sm border-gray-400 border-b-[1px] text-white'/>
    <button className='text-blue-500 rounded-r-sm px-2 mt-3 text-sm '>Post</button>
  </form>
   </>
 )}
</>
);
}


export default Comment;