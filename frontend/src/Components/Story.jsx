import React from 'react'

function Story() {
  return (
    <div className='flex gap-6 my-10 ml-[28rem]  w-[30rem]'>

<div className="relative flex flex-col items-center cursor-pointer">
    <div className="w-16 h-16 p-1 bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full">
    <img className="w-full h-full  bg-white rounded-full" src="https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="story image" />
    </div>
    <span className="mt-2 text-gray-200 text-md select-none">Add story</span>
    <button className="absolute right-1 bottom-9 flex items-center justify-center w-5 h-5 p-1 bg-blue-500 text-white rounded-full border-2 border-white">+</button>
  </div>


<div className="relative flex flex-col items-center cursor-pointer">
    <div className="w-16 h-16 p-1 bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full">
    <img className="w-full h-full  bg-white rounded-full" src="https://img.freepik.com/premium-photo/anime-girl-watching-sunset-3d-illustration_717906-1415.jpg" alt="story image" />
    </div>
  </div>

  </div>


  )
}

export default Story;