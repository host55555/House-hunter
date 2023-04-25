import './App.css';
import Dashboard from './components/admin/Dashboard'
import Adduser from './components/admin/Adduser'
import Account from './components/admin/Account';
import Navbar from './components/admin/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login'
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer/>
            <Navbar/>
            <Routes>
              <Route path="/" exact element={<Dashboard/>}/>
              <Route path="/adduser" element={<Adduser/>}/>
             
              <Route path="/account" element={<Account/>}/>
              <Route path="/signup" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>

        <Footer/>
      </div>

    </Router>

  );
}

export default App;
