import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AddProperty from './components/agents/AddProperty';
import Navbar from './components/agents/Navbar';
import Dashboard from './components/agents/Dashboard';
import Account from './components/agents/Account';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer/>
        <Navbar/>

        <Routes>
          <Route path='/' exact element={<Dashboard/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/addhouse' element={<AddProperty/>}/>
          <Route path='/signup'  element={<Register/>}/>
          <Route path='/signin'  element={<Login/>}/>


        </Routes>

      
      </Router>
     
     
    </div>
  );
}

export default App;
