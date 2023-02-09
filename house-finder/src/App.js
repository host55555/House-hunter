import './App.css';
import AddHouse from './components/admin/AddHouse';
import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer';
import Houses from './components/Houses/Houses';
import Home from './components/home/Home';
import About from './components/about/About';
import Feedback from './components/newsletter/Feedback';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Houses />
      <About />
      <Feedback />
      <Footer />
      {/**<AddHouse/> */}
    </div>
  );
}

export default App;
