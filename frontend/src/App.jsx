import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CreatePost from './Components/CreatePost';
import Login from './Components/Login';
import Signup from './Components/Signup';
import EditPost from './Components/EditPost';
import Profile from './Components/Profile';
import SideNav from './Components/SideNav';
import Comment from './Components/Comment';
import Story from './Components/Story';
import Home from './Components/Home';
import Settings from './Components/Settings';
import Saved from './Components/Saved';
import Logout from './Components/Logout';
import SearchUser from './Components/SearchUser';


function App() {
  return (
  <Router>
    <Routes>
   <Route path='/login'  element={<Login/>}/>
   <Route path='/searchUser'  element={<SearchUser/>}/>
   <Route path='/signup'  element={<Signup/>}/>
   <Route path='/createPost'  element={<CreatePost/>}/>
   <Route path='/profile/:id'  element={<Profile/>}/>
   <Route path='/sideNav'  element={<SideNav/>}/>
   <Route path='/Comment'  element={<Comment/>}/>
   <Route path='/EditPost/:id'  element={<EditPost/>}/>
   <Route path='/story' element={<Story/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/saved' element={<Saved/>}/>
   <Route path='/settings' element={<Settings/>}/>
   <Route path='/logout' element={<Logout/>}/>


    </Routes>
  </Router>
  )
}

export default App;