import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';

function EditPost() {
    const {id}=useParams();
    const [title,setTitle ] = useState('');
    const [image,setImage ] = useState('');
    const navigate=useNavigate();

    useEffect(()=>{
fetchPost();
    },[id])

    async function fetchPost(){
      try{
      const response=await axios.post(`http://localhost:3333/getEditedPost?id=${id}`);
    
        console.log(response);
        const post=response.data.post[0];
        setTitle(post.title);
        setImage(post.image);
        }
      catch(e){
          console.log(e.message);
        }
      }

      async function edit(e){
        e.preventDefault();
        const response=await axios.post(`http://localhost:3333/editPost?id=${id}`,{
          title,
          image
        });
       console.log(response);
       navigate('/home');
      }

  return (
<div className=" h-screen w-full flex justify-center items-center">
<form  onSubmit={edit} className="max-w-sm mx-auto text-red-700">
  <div className="mb-5 w-28">
    <input type='text' id='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='px-4 py-2 text-black rounded-md border border-solid '  />
  </div>
  <div className="mb-5">
    <img src={image}/>
    <input  name='image' value={image} onChange={(e)=>setImage(e.target.value)} type="text" id="image"  className='px-4 py-2 text-black rounded-md border border-solid'  />
  </div>
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
</form>
</div>
  )
}

export default EditPost