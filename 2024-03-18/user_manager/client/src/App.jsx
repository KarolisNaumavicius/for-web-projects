import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import NewUser from './pages/admin/NewUser';
import EditUser from './pages/admin/EditUser';
import Admin from './pages/admin/Admin';
import './App.css';
import UserDetails from './pages/user/UserDetails';

const App = () => {
  // CRUD:
  // CREATE
  // READ
  // UPDATE
  // DELETE

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route'ų (kelių) registravimas */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/new-user" element={<NewUser />} />
          <Route path="/admin/edit-user/:id" element={<EditUser />} />
          <Route path="/users/:userId" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;




