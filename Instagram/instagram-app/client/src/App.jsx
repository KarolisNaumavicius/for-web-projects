import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MainContext from './context/Main.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import User from './pages/User.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import NewPost from './components/new-post/NewPost.jsx';
import './App.css'
import UserProfile from './components/user-profile/UserProfile.jsx';


const App = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get('http://localhost:3000/users/check-auth')
    .then(resp => setUser(resp.data))
    .catch(err => console.log(err));
  }, []);

  const contextValues = {
    showNewPost,
    setShowNewPost,
    user,
    setUser
  }
  
  return (
    <>
    <MainContext.Provider value={contextValues}>
      <BrowserRouter>
        {/* Tikriname ar showNewPost reikšmė teigiama, jei taip atvaizduojame NewPost komponento modalinį langą */}
        {user &&
        <>
        {showNewPost && 
          <NewPost />
        }
          <Sidebar />
        </>
        }
        <Routes>
          {user &&
          <>
          <Route 
            path="/" 
            element={<Home />} 
          />
                  <Route 
            path="/user/:id" 
            element={<User />} 
            />
            </>
          }
          <Route 
            path="/login" 
            element={<Login />} 
          />

          <Route 
            path="/posts/:id" 
            element={<Home />} 
          />
    
        </Routes>
      </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App;