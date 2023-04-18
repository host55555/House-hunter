import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddHouse from './components/agents/AddHouse';
import Navbar from './components/agents/Navbar';
import Agentspage from './components/agents/Agentspage';
import Myproperty from './components/agents/Myproperty';
import Account from './components/agents/Account';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' exact element={<Agentspage/>}/>
          <Route path='/houses' element={<Myproperty/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/addhouse' element={<AddHouse/>}/>


        </Routes>

      
      </Router>
     
     
    </div>
  );
}

export default App;
