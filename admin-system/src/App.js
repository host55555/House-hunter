import './App.css';
import Dashboard from './components/admin/Dashboard'
import Adduser from './components/admin/Adduser'
import MyAgents from './components/admin/MyAgents';
import Account from './components/admin/Account';
import Navbar from './components/admin/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="App">
            <Navbar/>
            <Routes>
              <Route path="/" exact element={<Dashboard/>}/>
              <Route path="/adduser" element={<Adduser/>}/>
              <Route path="/agents"element={<MyAgents/>}/>
              <Route path="/account" element={<Account/>}/>
            </Routes>

        <Footer/>
      </div>

    </Router>

  );
}

export default App;
