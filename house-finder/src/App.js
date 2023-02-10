import './App.css';
import AddHouse from './components/agents/AddHouse';
import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer';
import Houses from './components/Houses/Houses';
import Home from './components/home/Home';
import About from './components/about/About';
import Feedback from './components/newsletter/Feedback';
import Adduser from './components/admin/Adduser';
import Agentspage from './components/agents/Agentspage';

function App() {

  return (
    <div className="App">
      <Agentspage/>
     {/**
       <Navbar />
      <Home />
      <Houses />
      <About />
      <Feedback />
      <Adduser/>
      <AddHouse/>
      <Footer />
      
      */} 
    </div>
  );
}

export default App;
