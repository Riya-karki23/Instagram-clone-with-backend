import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

    function CreatePost() {
        const [title, setTitle] = useState('');
        const [image, setImage] = useState('');
        const [userId, setUserId] = useState(null);
        const [updateFlag, setUpdateFlag] = useState(false);
      const navigate=useNavigate();
    
  // -------------------------------------------------------------------------------------------------------------

   useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
          try {
            const decoded = jwtDecode(token);
            setUserId(decoded.id);
          } catch (error) {
            console.error('Failed to decode token', error);
          }
        }
       
      }, [updateFlag]);

   //------------------------------------------------------------------------------create post and save to database
   async function createNewPost(e){
    e.preventDefault();
try{
    if(!image && !title){
      alert('title or image missing');
      return;
    }

    
    const response=await axios.post('http://localhost:3333/createPost',{
    title,
    image,
    user_id:userId,
  });
  setTitle('');
  setImage('');
  setUpdateFlag(!updateFlag);
  console.log(response.data.message);
  navigate('/home');
  }

catch(e){
  console.log(e.message);
}
 }


  return (
    <>
    <form onSubmit={createNewPost}>
            <input type='text' placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)} className='text-black'/>
            <br/>
            <input type='text' placeholder='image url' value={image} onChange={(e)=>setImage(e.target.value)} className='text-black'/>
            <br/>
            <button type='submit' >Create</button>
        </form>
    
    </>
  )
}

export default CreatePost;





