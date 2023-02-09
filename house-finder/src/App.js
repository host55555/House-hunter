import './App.css';
import AddHouse from './components/admin/AddHouse';
import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer';
import Houses from './components/Houses/Houses';
function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Houses/>
     <Footer/> 
     {/**<AddHouse/> */} 
    </div>
  );
}

export default App;
