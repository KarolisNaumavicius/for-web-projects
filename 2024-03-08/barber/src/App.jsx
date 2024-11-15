import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import NewBarber from './pages/admin/NewBarber';
import EditBarber from './pages/admin/EditBarber';
import Admin from './pages/admin/Admin';
import './App.css';
import BarberDetails from './pages/user/BarberDetails';

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
          <Route path="/admin/new-barber" element={<NewBarber />} />
          <Route path="/admin/edit-barber/:barberId" element={<EditBarber />} />
          <Route path="/barbers/:barberId" element={<BarberDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;




