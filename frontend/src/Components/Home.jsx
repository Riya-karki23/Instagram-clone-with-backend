import React from 'react'
import SideNav from './SideNav'
import Story from './Story'
import Posts from './Posts'

function Home() {
  return (
  <div className=' flex flex-col'>
  
  <SideNav/>
 <Posts/>
   </div>


  )
}

export default Home