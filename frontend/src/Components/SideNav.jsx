import React, { useEffect, useState } from 'react';
import './App.css';
import { FaHome } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdBookmark } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { jwtDecode } from 'jwt-decode';
import { Link, useSearchParams } from 'react-router-dom';



function SideNav() {
   const [toggle, setToggle] = useState(false);
   const [tokenId, setTokenId] = useState('');

   function getMenuOptions(){
      setToggle(!toggle);
   }

// ----------------------------------------------------------------------get user from token


useEffect(()=>{
const token = localStorage.getItem('authToken');
if (token) {
  try {
    const decoded = jwtDecode(token);
    setTokenId(decoded.id);
  } catch (error) {
    console.error('Failed to decode token', error);
  }
}
},[])





// -------------------------------------------------------------------------------------------------



  return ( 
   
<>


<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full z-0 relative px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black border-r-[0.2px] border-gray-500">
     
     <div className="my-4 text-2xl italic mb-9 mt-5 text-center">
        Instagram
     </div>
      <ul className="space-y-2 font-medium">
         
         <li>
            <Link to={'/home'}>
            <div className="flex items-center p-2 my-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <FaHome className='text-2xl'/>
               <span className="ms-3">Home</span>
            </div>
            </Link>
         </li>
         <li>
            <Link to={'/searchUser'}>
            <div className="flex items-center p-2 my-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 group">
              < FaSearch className='text-2xl'/>
               <span className="ms-3">Search</span>
            </div>
            </Link>
         </li>
        
         <li>
            <a href="#" className="flex items-center p-2 my-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <MdOutlineExplore className='text-2xl'/>
               <span className="flex-1 ms-3 whitespace-nowrap">Explore</span>
              
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 my-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <RiMessengerLine className='text-2xl'/>
               <span className="flex-1 ms-3 whitespace-nowrap">Messages</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 my-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <IoIosNotifications className='text-2xl'/>
               <span className="flex-1 ms-3 whitespace-nowrap">Notifications</span>
            </a>
         </li>
         <li>
            <Link to={'/saved'}>
            <div className="flex items-center p-2 my-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <IoMdBookmark className='text-2xl'/>
               <span className="flex-1 ms-3 whitespace-nowrap">Saved</span>
            </div>
            </Link>
         </li>
         <li>
            <Link to={'/createPost'}>
            <div className="flex items-center p-2 my-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FaRegSquarePlus className='text-2xl'/>
               <span className="flex-1 ms-3 whitespace-nowrap">Create Post</span>
              
            </div></Link>
         </li>
         <li>
            <Link to={`/profile/${tokenId}`}><div className="flex items-center p-2 my-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img className="w-6 h-6 rounded-full" src="https://t3.ftcdn.net/jpg/01/13/46/78/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg" alt="Rounded avatar"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
            </div></Link>
         </li>

        
         <li>
              <MdMenu className='text-3xl absolute bottom-5 cursor-pointer' onClick={getMenuOptions}/>

              {toggle &&(
            <div className=" absolute bottom-20 ">
              <ul className='bg-white rounded-md  w-56 '>
               <li className='text-gray-500 hover:bg-slate-200 border-b-[1px] border-gray-400 flex justify-center items-center py-3'>Settings</li>
               <li className='text-gray-500 hover:bg-slate-200 border-b-[1px] border-gray-400 flex justify-center items-center py-3'>change password</li>
               <li className='text-gray-500 hover:bg-slate-200 border-b-[1px] border-gray-400 flex justify-center items-center py-3'>Accounts & privacy</li>
               <li className='text-gray-500 hover:bg-slate-200 border-b-[1px] border-gray-400 flex justify-center items-center py-3'>Active Status</li>
                <Link to={'/logout'}><li className='text-gray-500 hover:bg-slate-200 flex justify-center items-center py-3'>Logout</li></Link>

                    
              </ul>
            </div>
              )}
         </li>
        
      </ul>
   </div>
</aside>


         
</>
)
}

export default SideNav
