import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { IoMdBookmark } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";

import { Link, useParams } from 'react-router-dom';

function Profile() {
const {id}=useParams(); 
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState(null);

useEffect(()=>{
getPosts();
},[id]);


    async function getPosts(){
    try{
        const response=await axios.post(`http://localhost:3333/getPost?id=${id}`);
        const postsData=response.data.post;
        console.log(id);
        console.log(response);
        setPosts(postsData);
      setUsername(response.data.user[0].name);
        }
        catch(e){
          console.log(e);
        }
      }
    

  return (
   <>


{/* // <!-- nav --> */}
<nav className="border-b px-4 py-2">
  <div className="flex flex-wrap items-center justify-between md:justify-around">
    {/* <!-- logo --> */}
    <img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="instagram"/>

    
    <div className="space-x-4">
    <Link to="/login"> <div className="inline-block bg-blue-500 px-3 py-1 text-white font-semibold 
                           text-sm rounded" >Log In</div></Link>
     <Link to="/signup"> <div className="inline-block text-blue-500 font-semibold text-sm " >Sign up</div></Link>
    </div>
  </div>
</nav>

<main >

  <div  className="lg:w-8/12 lg:mx-auto mb-8">

    <header className="flex flex-wrap items-center p-4 md:py-8">

      <div className="md:w-3/12 md:ml-16">
        {/* <!-- profile image --> */}
        <img className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="profile"/>
      </div>

      {/* <!-- profile meta --> */}
      <div className="w-8/12 md:w-7/12 ml-4">
        <div className="md:flex md:flex-wrap md:items-center mb-4">
          <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
            {username || 'Loading...'}
          </h2>

          {/* <!-- badge --> */}
          <span className="inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2" aria-hidden="true">
            <i className="fas fa-check text-white text-xs absolute inset-x-0
                               ml-1 mt-px"></i>
          </span>

          {/* <!-- follow button --> */}
          <div className="bg-blue-500 px-2 py-1 
                        text-white font-semibold text-sm rounded  text-center 
                        sm:inline-block block">Follow</div>
        </div>

        {/* <!-- post, following, followers list for medium screens --> */}
        <ul className="hidden md:flex space-x-8 mb-4">
          <li className='flex flex-col'>
            <span className="font-semibold">{posts.length}</span>
            posts
          </li>

          <li className='flex flex-col'>
            <span className="font-semibold">250</span>
            followers
          </li>
          <li className='flex flex-col'>
            <span className="font-semibold">159</span>
            following
          </li>
        </ul>

        {/* <!-- user meta form medium screens --> */}
        <div className="hidden md:block">
          <h1 className="font-semibold">@username</h1>
          <span>Travel, Nature and Music</span>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>

      </div>

      {/* <!-- user meta form small screens --> */}
      <div className="md:hidden text-sm my-2">
        <h1 className="font-semibold">Mr Travlerrr...</h1>
        <span>Travel, Nature and Music</span>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>

    </header>

    {/* <!-- posts --> */}
    <div className="px-px md:px-3 ">

      {/* <!-- user following for mobile only --> */}
      <ul className="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 leading-snug text-sm">
        <li>
          <span className="font-semibold text-gray-800 block">136</span>
          posts
        </li>

        <li>
          <span className="font-semibold text-gray-800 block">467</span>
          followers
        </li>
        <li>
          <span className="font-semibold text-gray-800 block">302</span>
          following
        </li>
      </ul>

      {/* <!-- insta freatures --> */}
      <ul className="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t">
        {/* <!-- posts tab is active --> */}
        <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
          <a className="inline-block p-3" href="#">
            <i className="fas fa-th-large text-xl md:text-xs"></i>
            <span className="hidden md:inline">post</span>
          </a>
        </li>
        <li>
          <a className="inline-block p-3" href="#">
            <i className="far fa-square text-xl md:text-xs"></i>
            <span className="hidden md:inline">igtv</span>
          </a>
        </li>
        <li className='flex gap-1 items-center'>
         
         < IoMdBookmark className='text-lg'/>
            <span className="hidden md:inline">tagged</span>
        
        </li>
      </ul>
      {/* <!-- flexbox grid --> */}
      <div className="flex flex-wrap  ">
        { posts.length>0 ?
        (
          posts.map((post,index)=>(
        <div key={index} className=" py-1 px-1 ">

        {/* ------------------------------------- -- posts---------------------------------------------------------- */}
          
            <article className='h-72 w-72  relative'>
              {/* <!-- post image--> */}
              <img className="w-full h-full absolute left-0 top-0 object-cover" src={post.image} alt="image"/>
             

            </article>
        </div>
           ))
          ):(
               <div className='mt-20 flex justify-center items-center flex-col text-2xl'>
            < p >No posts available</p>
            <FaRegBookmark className=' mt-4'/>

            </div>
          )}

      </div>
    </div>
  </div> 
</main>

</>
  )
}

export default Profile