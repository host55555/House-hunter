import './App.css';
import AddHouse from './components/admin/AddHouse';
import Navbar from './components/Navbar';
import axios from 'axios'
import { useEffect, useState } from 'react';
function App() {
 
  return (
    <div className="App">
      {/*<Navbar/>*/}
      <AddHouse/>
    </div>
  );
}

export default App;
