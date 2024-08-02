import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import { Link,useNavigate} from 'react-router-dom';
import Comment from './Comment';
import { jwtDecode } from "jwt-decode";
import { formatTimeAgo } from '../utils/formatTime';


//--------------------------------------------------------------Icons
import { FcLike } from "react-icons/fc";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdBookmark } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import Story from './Story';

function Posts() {
  const [posts,setPosts]=useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [changeColour, setchangeColour] = useState(false);
  const [username, setusername] = useState(null);
  const [token, setToken] = useState(null);
  const [dropdown, setDropdown] = useState(false)
  const navigate=useNavigate();


  useEffect(()=>{
    fetchPosts();
},[updateFlag])


  // ----------------------------------------------------extracting token from localstorage
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setToken(decoded);
        setusername(decoded.name);
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    }
    fetchPosts();
  }, [updateFlag]);





    //---------------------------------------------------------------------------------------Delete Post from database
    async function deletePost(id){
      const confirmDelete=window.confirm('are you sure you want to delete post?')
      if(!confirmDelete)
        return;
else{
      let response=await axios.post(`http://localhost:3333/deletePost?id=${id}`);
      setUpdateFlag(!updateFlag);
}
    }


        // -------------------------------------------------------------------BOOKMARK function to change icon on clcik

        function changeBookmark(){
            setchangeColour(!changeColour);
        }

       

// -------------------------------------------toggle function for dropdown
function toggle(){
  setDropdown(!dropdown);
}

 
  async function fetchPosts() {
    try {
      const response = await axios.post('http://localhost:3333/viewPost');
      console.log(response.data.posts); // Log to check the structure
      setPosts(response.data.posts);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
<Story/>
      {posts.map((post, index) => (
        <div key={index}  className="flex justify-center ">
    {/* ----------------------------------------------------------cards------------- */}
    <div className="my-4">
<div className="max-w-lg shadow  flex flex-col bg-black text-white py-3 px-3 border-b-2 border-y-gray-700">
    <div className=" flex justify-between items-center ">


        {/* ----------------------------------------------------------post */}
        <div className="flex gap-3 items-center mb-4">

          {/* ------------------------------get user profile based on specific id */}
       <Link to={`/profile/${post.user?.id}`} >
       <button >
        <img src='https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg' alt='profile picture' className='h-7 w-7 rounded-full '/>
        </button>
        </Link>

    <p>@{post.user?.name}</p>
    <p className='text-sm text-gray-500'>{formatTimeAgo(post.createdAt)}</p>
    </div>


    {/* ---------------------------------------------------------------------------------edit & delete toggle */}
    <div className="flex gap-2 relative">
     <HiDotsVertical className='font-bold text-xl cursor-pointer' onClick={toggle}/>
     {/*----------------------------------------------------------------------------------------------- dropdown */}
     {dropdown &&(
<div className="bg-white border-gray-400 rounded-md py-0 absolute top-7 right-0">
    <ul  className='w-44 '>
    <Link to ={`/editPost/${post.id}`}>
      <li className='text-black py-3 text-center hover:bg-gray-300 '>Edit post</li>
    </Link> 
      <li className='text-black py-3 text-center border-t-[1px] hover:bg-gray-300 border-gray-500 cursor-pointer'  onClick={()=>deletePost(post.id)}>Delete post

      </li>
    </ul>
    </div> )}
    </div>
    </div>
    <div className="my-2 px-0 ">
   
        <img className="max-h-md max-w-lg w-[100rem] h-[30rem] min-w-sm min-h-sm " src={post.image} alt="post image" />
   </div>
    <div className="flex justify-between">
<div className="flex gap-7 text-xl">
   
                                <div className="like ">
                                    <FcLike/>
                                    
                                </div>
                                <div className="comment">
                                  <Comment postId={post.id} token={token}/>
                                </div>
                                <div className="share">
                                <IoPaperPlaneOutline/>
                                </div>
                          </div>

<div onClick={changeBookmark} className=' relative right-0'>
    {changeColour ?
(<IoMdBookmark className='text-2xl'/>):
(<FaRegBookmark className='text-2xl'/>  )

    }
</div>
</div>

    <div className="p-1">
        <p className="mb-3 font-normal text-white"><span className='font-bold pr-3'>@{post.user?.name}</span>{post.title}</p>
       
    </div>
</div>
</div>
</div>
      ))}
     
    </>
  );
}

export default Posts;





